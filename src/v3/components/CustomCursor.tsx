import { useEffect, useRef, useState } from "react";

const INTERACTIVE = 'a, button, [role="button"], input, select, textarea, summary, label, .v3-poster, .v3-pin, canvas';

/**
 * Hollow ring that trails the pointer; over interactive elements it collapses
 * into a solid dot with a short lock-on pulse. Only mounts for fine pointers.
 */
const CustomCursor = () => {
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const ring = ringRef.current;
    if (!ring) return;
    document.documentElement.classList.add("v3-has-cursor");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = { x: -100, y: -100 };
    const pos = { x: -100, y: -100 };
    let raf = 0;
    let visible = false;
    let locked = false;

    const frame = () => {
      const k = reduceMotion ? 1 : 0.35;
      pos.x += (target.x - pos.x) * k;
      pos.y += (target.y - pos.y) * k;
      ring.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(frame);
    };

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!visible) {
        visible = true;
        ring.classList.add("is-visible");
      }
      const hit = (e.target as Element | null)?.closest?.(INTERACTIVE);
      const nowLocked = Boolean(hit);
      if (nowLocked !== locked) {
        locked = nowLocked;
        ring.classList.toggle("is-locked", locked);
        if (locked && !reduceMotion) {
          ring.classList.remove("is-pulse");
          void ring.offsetWidth; // restart the pulse animation
          ring.classList.add("is-pulse");
        }
      }
    };
    const onLeave = () => {
      visible = false;
      ring.classList.remove("is-visible");
    };
    const onDown = () => ring.classList.add("is-down");
    const onUp = () => ring.classList.remove("is-down");

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("v3-has-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;
  return <div ref={ringRef} className="v3-cursor" aria-hidden="true" />;
};

export default CustomCursor;
