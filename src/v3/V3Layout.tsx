import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import V3Nav from "./components/V3Nav";
import BackToTop from "./components/BackToTop";
import CustomCursor from "./components/CustomCursor";
import SocialButtons from "./components/SocialButtons";
import "./v3.css";

const V3Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Write-up pages set their own title.
    if (!pathname.includes("/work/")) document.title = "Avaneesh Joshi";
  }, [pathname]);

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <V3Nav />
        <Outlet />
        <footer className="mt-16 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs text-ink-muted">© {new Date().getFullYear()} Avaneesh Joshi · Berkeley, CA</span>
          <SocialButtons />
        </footer>
      </div>
      <BackToTop />
      <CustomCursor />
    </main>
  );
};

export default V3Layout;
