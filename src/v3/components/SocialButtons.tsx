import { v3Content } from "../content";

const SocialButtons = ({ className = "" }: { className?: string }) => (
  <div className={`social !pt-0 ${className}`}>
    {v3Content.socials.map((s) => (
      <a
        key={s.label}
        href={s.href}
        className="btn"
        aria-label={s.label}
        title={s.label}
        {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <i className={s.icon}></i>
      </a>
    ))}
  </div>
);

export default SocialButtons;
