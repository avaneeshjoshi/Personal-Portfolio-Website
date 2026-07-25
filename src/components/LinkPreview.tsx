import { CSSProperties, useEffect, useState } from "react";

type PreviewKind = "web" | "email";
type PreviewStatus = "loading" | "loaded" | "error";

interface PreviewState {
  href: string;
  label: string;
  displayUrl: string;
  imageUrl: string | null;
  kind: PreviewKind;
  status: PreviewStatus;
  x: number;
  y: number;
  originX: number;
  placement: "top" | "bottom";
  open: boolean;
}

const PREVIEW_WIDTH = 420;
const PREVIEW_HEIGHT = 280;
const EDGE_PADDING = 20;
const CURSOR_GAP = 20;
const warmedScreenshots = new Set<string>();
const screenshotCache = new Map<string, { status: PreviewStatus; image?: HTMLImageElement }>();

const isPreviewableLink = (anchor: HTMLAnchorElement) => {
  if (!anchor.classList.contains("link")) return false;
  if (anchor.classList.contains("btn") || anchor.classList.contains("content-card")) return false;
  if (anchor.closest("[data-link-preview='false']")) return false;

  const href = anchor.getAttribute("href")?.trim();
  return Boolean(href && !href.startsWith("#") && !href.startsWith("javascript:"));
};

const getDisplayUrl = (href: string) => {
  if (href.startsWith("mailto:")) {
    return href.replace(/^mailto:/, "");
  }

  try {
    const url = new URL(href, window.location.href);
    return url.hostname.replace(/^www\./, "") || url.href;
  } catch {
    return href;
  }
};

const getScreenshotUrl = (href: string) => {
  const url = new URL(href, window.location.href).href;
  return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;
};

const warmScreenshot = (href: string) => {
  if (href.startsWith("mailto:")) return;

  try {
    const imageUrl = getScreenshotUrl(href);
    const cached = screenshotCache.get(imageUrl);
    if (cached?.status === "loaded" || cached?.status === "loading" || warmedScreenshots.has(imageUrl)) return;

    warmedScreenshots.add(imageUrl);
    const image = new Image();
    image.decoding = "async";
    image.referrerPolicy = "no-referrer";
    screenshotCache.set(imageUrl, { status: "loading", image });
    image.onload = () => {
      screenshotCache.set(imageUrl, { status: "loaded", image });
    };
    image.onerror = () => {
      screenshotCache.set(imageUrl, { status: "error" });
    };
    image.src = imageUrl;
  } catch {
    // Ignore malformed URLs. The actual link still works.
  }
};

const getCachedScreenshotStatus = (imageUrl: string | null): PreviewStatus => {
  if (!imageUrl) return "loading";

  const cached = screenshotCache.get(imageUrl);
  if (!cached) return "loading";

  if (cached.status === "loading" && cached.image?.complete) {
    const status = cached.image.naturalWidth > 0 ? "loaded" : "error";
    screenshotCache.set(imageUrl, { status, image: cached.image });
    return status;
  }

  return cached.status;
};

const setCachedScreenshotStatus = (imageUrl: string | null, status: PreviewStatus) => {
  if (!imageUrl) return;

  const cached = screenshotCache.get(imageUrl);
  screenshotCache.set(imageUrl, { status, image: cached?.image });
};

const ensureResourceHints = () => {
  const hints = [
    { rel: "preconnect", href: "https://api.microlink.io" },
    { rel: "dns-prefetch", href: "https://api.microlink.io" },
  ];

  hints.forEach(({ rel, href }) => {
    if (document.head.querySelector(`link[rel="${rel}"][href="${href}"]`)) return;

    const link = document.createElement("link");
    link.rel = rel;
    link.href = href;
    document.head.appendChild(link);
  });
};

const getPreviewState = (anchor: HTMLAnchorElement, point?: { x: number; y: number }): PreviewState | null => {
  const href = anchor.getAttribute("href")?.trim();
  if (!href) return null;

  const rect = anchor.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const width = Math.min(PREVIEW_WIDTH, viewportWidth - EDGE_PADDING * 2);
  const height = Math.min(PREVIEW_HEIGHT, viewportHeight - EDGE_PADDING * 2);

  const cursorX = point?.x ?? rect.left + rect.width / 2;
  const cursorY = point?.y ?? rect.top + rect.height / 2;
  const placement = cursorY >= height + CURSOR_GAP + EDGE_PADDING ? "top" : "bottom";

  const preferredX = cursorX + CURSOR_GAP;
  const x = Math.min(Math.max(EDGE_PADDING, preferredX), viewportWidth - width - EDGE_PADDING);
  const y =
    placement === "top"
      ? Math.max(EDGE_PADDING, cursorY - height - CURSOR_GAP / 2)
      : Math.min(viewportHeight - height - EDGE_PADDING, cursorY + CURSOR_GAP);

  const kind: PreviewKind = href.startsWith("mailto:") ? "email" : "web";
  const imageUrl = kind === "web" ? getScreenshotUrl(href) : null;
  const status = kind === "web" ? getCachedScreenshotStatus(imageUrl) : "loaded";

  return {
    href,
    label: anchor.getAttribute("aria-label") || anchor.textContent?.trim().replace(/\s+/g, " ") || href,
    displayUrl: getDisplayUrl(href),
    imageUrl,
    kind,
    status,
    x,
    y,
    originX: Math.min(Math.max(24, cursorX - x), width - 24),
    placement,
    open: true,
  };
};

const getAnchorFromEvent = (event: Event) => {
  if (!(event.target instanceof Element)) return null;

  const anchor = event.target.closest<HTMLAnchorElement>("a[href]");
  if (!anchor || !isPreviewableLink(anchor)) return null;

  return anchor;
};

const getAnchorAtPoint = (point?: { x: number; y: number }) => {
  if (!point) return null;

  const element = document.elementFromPoint(point.x, point.y);
  if (!(element instanceof Element)) return null;

  const anchor = element.closest<HTMLAnchorElement>("a[href]");
  return anchor && isPreviewableLink(anchor) ? anchor : null;
};

const isPointerOverAnchor = (anchor: HTMLAnchorElement, point?: { x: number; y: number }) => {
  return getAnchorAtPoint(point) === anchor;
};

const getPointFromEvent = (event: Event) =>
  "clientX" in event && typeof event.clientX === "number"
    ? { x: event.clientX, y: event.clientY }
    : undefined;

const LinkPreview = () => {
  const [preview, setPreview] = useState<PreviewState | null>(null);

  useEffect(() => {
    ensureResourceHints();

    let activeAnchor: HTMLAnchorElement | null = null;
    let lastPoint: { x: number; y: number } | undefined;
    let showTimer = 0;
    let hideTimer = 0;
    const warmTimers: number[] = [];

    const clearTimers = () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };

    const showPreview = (anchor: HTMLAnchorElement, point?: { x: number; y: number }) => {
      clearTimers();
      activeAnchor = anchor;
      lastPoint = point;
      warmScreenshot(anchor.href);

      showTimer = window.setTimeout(() => {
        const nextPreview = getPreviewState(anchor, lastPoint);
        if (nextPreview) setPreview(nextPreview);
      }, 45);
    };

    const hidePreview = (force = false) => {
      window.clearTimeout(showTimer);
      hideTimer = window.setTimeout(() => {
        if (!force && activeAnchor && isPointerOverAnchor(activeAnchor, lastPoint)) return;

        activeAnchor = null;
        setPreview((current) => (current ? { ...current, open: false } : null));
      }, 80);
    };

    const handlePreviewStart = (event: Event) => {
      const anchor = getAnchorFromEvent(event);
      if (!anchor || anchor === activeAnchor) return;

      showPreview(anchor, getPointFromEvent(event));
    };

    const handlePreviewEnd = (event: MouseEvent | PointerEvent | FocusEvent) => {
      const anchor = getAnchorFromEvent(event);
      if (!anchor || anchor !== activeAnchor) return;

      if ("relatedTarget" in event && event.relatedTarget instanceof Node && anchor.contains(event.relatedTarget)) return;

      const point = getPointFromEvent(event);
      if (point) lastPoint = point;

      hidePreview(event.type.startsWith("focus"));
    };

    const handlePreviewMove = (event: MouseEvent | PointerEvent) => {
      if (!activeAnchor) return;

      lastPoint = { x: event.clientX, y: event.clientY };
      const nextPreview = getPreviewState(activeAnchor, lastPoint);
      if (!nextPreview) return;

      setPreview((current) =>
        current
          ? { ...nextPreview, status: current.href === nextPreview.href ? current.status : nextPreview.status, open: current.open }
          : nextPreview,
      );
    };

    const updatePosition = () => {
      if (!activeAnchor) return;

      const nextPreview = getPreviewState(activeAnchor, lastPoint);
      if (!nextPreview) return;

      setPreview((current) => (current ? { ...nextPreview, status: current.status, open: current.open } : nextPreview));
    };

    document.addEventListener("pointerover", handlePreviewStart, true);
    document.addEventListener("pointerout", handlePreviewEnd, true);
    document.addEventListener("pointermove", handlePreviewMove, true);
    document.addEventListener("mouseover", handlePreviewStart, true);
    document.addEventListener("mouseout", handlePreviewEnd, true);
    document.addEventListener("mousemove", handlePreviewMove, true);
    document.addEventListener("focusin", handlePreviewStart, true);
    document.addEventListener("focusout", handlePreviewEnd, true);
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);

    const warmTimer = window.setTimeout(() => {
      const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>("a.link[href]"))
        .filter(isPreviewableLink)
        .filter((anchor) => !anchor.href.startsWith("mailto:"))
        .slice(0, 18);

      anchors.forEach((anchor, index) => {
        warmTimers.push(window.setTimeout(() => warmScreenshot(anchor.href), index * 140));
      });
    }, 700);

    return () => {
      clearTimers();
      window.clearTimeout(warmTimer);
      warmTimers.forEach((timer) => window.clearTimeout(timer));
      document.removeEventListener("pointerover", handlePreviewStart, true);
      document.removeEventListener("pointerout", handlePreviewEnd, true);
      document.removeEventListener("pointermove", handlePreviewMove, true);
      document.removeEventListener("mouseover", handlePreviewStart, true);
      document.removeEventListener("mouseout", handlePreviewEnd, true);
      document.removeEventListener("mousemove", handlePreviewMove, true);
      document.removeEventListener("focusin", handlePreviewStart, true);
      document.removeEventListener("focusout", handlePreviewEnd, true);
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  useEffect(() => {
    if (!preview || preview.open) return;

    const removeTimer = window.setTimeout(() => setPreview(null), 180);
    return () => window.clearTimeout(removeTimer);
  }, [preview]);

  if (!preview) return null;

  const previewStyle = {
    "--link-preview-x": `${preview.x}px`,
    "--link-preview-y": `${preview.y}px`,
    "--link-preview-origin-x": `${preview.originX}px`,
    "--link-preview-origin-y": preview.placement === "top" ? "100%" : "0%",
  } as CSSProperties;

  return (
    <div className="link-preview-layer" aria-hidden="true">
      <div
        className="link-preview-window"
        data-open={preview.open}
        data-placement={preview.placement}
        style={previewStyle}
      >
        <div className="link-preview-shell">
          <div className="link-preview-toolbar">
            <div className="link-preview-controls">
              <span />
              <span />
              <span />
            </div>
            <div className="link-preview-address" title={preview.href}>
              {preview.displayUrl}
            </div>
          </div>
          <div className="link-preview-viewport">
            {preview.kind === "email" ? (
              <div className="link-preview-email">
                <span className="link-preview-email-title">New Message</span>
                <span>To: {preview.displayUrl}</span>
                <span>Subject: Echo, ML engineering, or research</span>
              </div>
            ) : (
              <>
                {preview.status === "loading" && <div className="link-preview-skeleton" />}
                {preview.status === "error" && (
                  <div className="link-preview-unavailable">
                    <span>{preview.displayUrl}</span>
                    <span>Screenshot preview unavailable</span>
                  </div>
                )}
                <img
                  key={preview.imageUrl}
                  src={preview.imageUrl ?? undefined}
                  alt={`Preview of ${preview.label}`}
                  className="link-preview-image"
                  draggable={false}
                  referrerPolicy="no-referrer"
                  onLoad={() => {
                    setCachedScreenshotStatus(preview.imageUrl, "loaded");
                    setPreview((current) =>
                      current?.href === preview.href ? { ...current, status: "loaded" } : current,
                    );
                  }}
                  onError={() => {
                    setCachedScreenshotStatus(preview.imageUrl, "error");
                    setPreview((current) =>
                      current?.href === preview.href ? { ...current, status: "error" } : current,
                    );
                  }}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkPreview;
