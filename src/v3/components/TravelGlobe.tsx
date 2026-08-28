import { useCallback, useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { places, type Place } from "@/data/places";
import { useTheme } from "@/theme/ThemeProvider";
import { v3Content } from "../content";
import SubSection from "./SubSection";

const THETA = 0.25;
const TAG_ICON = { home: "fa-solid fa-house", school: "fa-solid fa-graduation-cap" } as const;
const TAG_LABEL = { home: "Home", school: "School" } as const;
const AUTO_SPEED = 0.003;
/** Globe radius as a fraction of the canvas' CSS width (cobe's default framing). */
const RADIUS = 0.4;

/**
 * Projects a lat/lng to canvas pixels using cobe's own camera math
 * (see its fragment shader: marker p = (cos(lat)cos(lng), sin(lat), -cos(lat)sin(lng)),
 * view = R(theta, phi) · p, sphere radius = 0.8 in NDC → 0.4 · canvas size).
 */
function project(place: Place, phi: number, theta: number, size: number) {
  const lat = (place.lat * Math.PI) / 180;
  const lng = (place.lng * Math.PI) / 180;
  const px = Math.cos(lat) * Math.cos(lng);
  const py = Math.sin(lat);
  const pz = -Math.cos(lat) * Math.sin(lng);
  const c = Math.cos(theta);
  const e = Math.sin(theta);
  const d = Math.cos(phi);
  const f = Math.sin(phi);
  const x = d * px + f * pz;
  const y = f * e * px + c * py - d * e * pz;
  const z = -f * c * px + e * py + d * c * pz;
  const r = size * RADIUS;
  return { left: size / 2 + x * r, top: size / 2 - y * r, z };
}

const TravelGlobe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const pinRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const { resolvedTheme } = useTheme();
  const phiRef = useRef(0.6);
  const targetRef = useRef<number | null>(null);
  const dragRef = useRef<{ startX: number; startPhi: number; moved: boolean } | null>(null);
  const momentumRef = useRef(0);
  const [selected, setSelected] = useState<number | null>(null);
  const selectedRef = useRef<number | null>(null);
  selectedRef.current = selected;

  const focusPlace = useCallback((i: number | null) => {
    setSelected(i);
    if (i === null) {
      targetRef.current = null;
      return;
    }
    // Bring the pin to the front (view z is maximal when phi = -lng - π/2).
    const want = -(places[i].lng * Math.PI) / 180 - Math.PI / 2;
    const cur = phiRef.current;
    const twoPi = Math.PI * 2;
    let delta = ((want - cur) % twoPi + twoPi) % twoPi;
    if (delta > Math.PI) delta -= twoPi;
    targetRef.current = cur + delta;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dark = resolvedTheme === "dark";
    let size = wrap.offsetWidth;
    const onResize = () => {
      size = wrap.offsetWidth;
    };
    window.addEventListener("resize", onResize);

    const globe = createGlobe(canvas, {
      devicePixelRatio: Math.min(window.devicePixelRatio, 2),
      width: size * 2,
      height: size * 2,
      phi: phiRef.current,
      theta: THETA,
      dark: dark ? 1 : 0,
      diffuse: dark ? 1.4 : 1.1,
      mapSamples: 16000,
      mapBrightness: dark ? 4 : 2.2,
      baseColor: dark ? [0.22, 0.22, 0.24] : [0.93, 0.93, 0.94],
      markerColor: [0.93, 0.36, 0.11],
      glowColor: dark ? [0.12, 0.12, 0.13] : [0.85, 0.85, 0.87],
      markers: [],
    });

    let raf = 0;
    const frame = () => {
      if (!dragRef.current) {
        if (targetRef.current !== null) {
          const d = targetRef.current - phiRef.current;
          phiRef.current += d * 0.08;
          if (Math.abs(d) < 0.002) targetRef.current = null;
        } else if (selectedRef.current === null && !reduceMotion) {
          phiRef.current += AUTO_SPEED + momentumRef.current;
        }
        momentumRef.current *= 0.95;
      }
      globe.update({ phi: phiRef.current, width: size * 2, height: size * 2 });

      // Position the HTML pins.
      places.forEach((p, i) => {
        const el = pinRefs.current[i];
        if (!el) return;
        const { left, top, z } = project(p, phiRef.current, THETA, size);
        const visible = z > 0.08;
        el.style.transform = `translate(${left}px, ${top}px) translate(-50%, -50%)`;
        el.style.opacity = visible ? String(Math.min(1, (z - 0.08) * 4)) : "0";
        el.style.pointerEvents = visible ? "auto" : "none";
        el.tabIndex = visible ? 0 : -1;
      });
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    const onDown = (e: PointerEvent) => {
      dragRef.current = { startX: e.clientX, startPhi: phiRef.current, moved: false };
      targetRef.current = null;
      canvas.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!dragRef.current) return;
      const delta = (e.clientX - dragRef.current.startX) / 200;
      if (Math.abs(e.clientX - dragRef.current.startX) > 3) dragRef.current.moved = true;
      const next = dragRef.current.startPhi + delta;
      momentumRef.current = (next - phiRef.current) * 0.3;
      phiRef.current = next;
    };
    const onUp = () => {
      const wasClick = dragRef.current && !dragRef.current.moved;
      dragRef.current = null;
      if (wasClick) setSelected(null); // click on empty globe deselects
    };
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onUp);

    return () => {
      cancelAnimationFrame(raf);
      globe.destroy();
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointercancel", onUp);
    };
  }, [resolvedTheme]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") focusPlace(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [focusPlace]);

  return (
    <SubSection title="Travel">
      <p className="bio mb-4">{v3Content.travel}</p>
      <div ref={wrapRef} className="v3-globe relative mx-auto w-full max-w-[420px] aspect-square">
        <canvas ref={canvasRef} aria-label="Globe with pins for places I've visited" />
        {places.map((p, i) => {
          const active = selected === i;
          return (
            <button
              key={p.name}
              ref={(el) => (pinRefs.current[i] = el)}
              type="button"
              className={`v3-pin ${active ? "is-active" : ""} ${p.tag ? "is-tagged" : ""}`}
              style={{ opacity: 0 }}
              aria-label={`${p.tag ? `${TAG_LABEL[p.tag]}: ` : ""}${p.name}${p.region ? `, ${p.region}` : ""}`}
              aria-pressed={active}
              onClick={(e) => {
                e.stopPropagation();
                focusPlace(active ? null : i);
              }}
            >
              {p.tag && (
                <span className="v3-pin-icon" aria-hidden="true">
                  <i className={TAG_ICON[p.tag]}></i>
                </span>
              )}
              <span className="v3-pin-tip" role="tooltip">
                {p.tag ? `${TAG_LABEL[p.tag]} · ` : ""}
                {p.name}
                {p.region && <span className="v3-pin-tip-region"> · {p.region}</span>}
              </span>
            </button>
          );
        })}
      </div>
      <ul className="mt-4 flex flex-wrap gap-2 justify-center">
        {places.map((p, i) => (
          <li key={p.name}>
            <button
              type="button"
              onClick={() => focusPlace(selected === i ? null : i)}
              className={`text-xs rounded-md px-2 py-1 transition-colors ${
                selected === i ? "bg-primary text-primary-foreground" : "bg-muted text-ink-secondary hover:text-ink"
              }`}
              title={p.region}
            >
              {p.tag && <i className={`${TAG_ICON[p.tag]} text-[9px] mr-1.5 opacity-80`} aria-hidden="true"></i>}
              {p.name}
              {p.year ? <span className="opacity-60"> · {p.year}</span> : null}
            </button>
          </li>
        ))}
      </ul>
    </SubSection>
  );
};

export default TravelGlobe;
