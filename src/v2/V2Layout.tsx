import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import V2Nav from "./components/V2Nav";
import "./v2.css";

const V2Layout = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  useEffect(() => {
    const prev = document.title;
    document.title = "Avaneesh Joshi";
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div className="v2">
      <div className="max-w-[1152px] mx-auto px-6 md:px-10 pb-8">
        <V2Nav />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default V2Layout;
