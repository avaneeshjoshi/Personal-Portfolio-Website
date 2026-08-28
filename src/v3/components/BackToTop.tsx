import { useEffect, useState } from "react";
import { scrollToTop } from "@/lib/scroll";

const THRESHOLD = 400;

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`btn v3-back-to-top w-auto px-3 font-mono text-[11px] lowercase tracking-wide ${visible ? "is-visible" : ""}`}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <i className="fa-solid fa-arrow-up"></i>
      top
    </button>
  );
};

export default BackToTop;
