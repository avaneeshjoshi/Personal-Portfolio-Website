import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { v2Content, type SocialIcon } from "../content";

const XIcon = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const ICONS: Record<SocialIcon, (p: { className?: string }) => JSX.Element> = {
  github: (p) => <Github {...p} />,
  linkedin: (p) => <Linkedin {...p} />,
  x: XIcon,
  mail: (p) => <Mail {...p} />,
  file: (p) => <FileText {...p} />,
};

const V2FindMe = () => (
  <section id="contact" className="mt-14 md:mt-16 scroll-mt-24">
    <h2 className="mono uppercase tracking-[0.18em] text-[10px] text-v2-muted mb-4">Where to find me</h2>
    <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
      {v2Content.socials.map((s) => {
        const Icon = ICONS[s.icon];
        return (
          <li key={s.label}>
            <a
              href={s.href}
              className="mono v2-link inline-flex items-center gap-2 hover:text-v2-accent"
              {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <Icon className="w-3.5 h-3.5" />
              {s.label}
            </a>
          </li>
        );
      })}
    </ul>
    <p className="mono text-v2-muted mt-4">{v2Content.socialsNote}</p>
  </section>
);

export default V2FindMe;
