import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { v3Content } from "../content";

const NAV_BTN = "btn v3-nav-btn w-auto px-3 font-mono text-[12px] lowercase tracking-wide";

const V3Nav = () => (
  <nav className="flex items-center justify-between gap-4 mb-10" aria-label="Primary">
    <ul className="flex flex-wrap items-center gap-2">
      {v3Content.nav.map((item) => (
        <li key={item.to}>
          <NavLink
            to={item.to}
            end={"end" in item && item.end}
            className={({ isActive }) => `${NAV_BTN} ${isActive ? "is-active" : ""}`}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
      <li>
        <a href={v3Content.resumeHref} target="_blank" rel="noopener noreferrer" className={`${NAV_BTN} gap-1`}>
          resume <ArrowUpRight className="w-3 h-3" />
        </a>
      </li>
    </ul>
    <ThemeToggle />
  </nav>
);

export default V3Nav;
