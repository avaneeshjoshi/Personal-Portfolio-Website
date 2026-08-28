import { Link } from "react-router-dom";
import { v2Content } from "../content";
import V2ThemeToggle from "./V2ThemeToggle";

const V2Nav = () => (
  <nav className="flex items-center justify-between py-8" aria-label="Primary">
    <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {v2Content.nav.map((item) => (
        <li key={item.label}>
          {"external" in item && item.external ? (
            <a href={item.href} className="mono v2-link text-v2-muted hover:text-v2-fg" target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          ) : (
            <Link to={item.href} className="mono v2-link text-v2-muted hover:text-v2-fg">
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
    <V2ThemeToggle />
  </nav>
);

export default V2Nav;
