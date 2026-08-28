import { v3Content } from "../content";
import SocialButtons from "./SocialButtons";
import { useLocalTime } from "@/v2/hooks/use-local-time";

const V3Header = () => {
  const h = v3Content.header;
  const time = useLocalTime(v3Content.timeZone);

  return (
    <header className="mb-12">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-6 sm:mb-8">
        <h1 className="v3-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[0.95] tracking-tight text-ink">
          {h.name}
        </h1>
        <p className="font-mono text-[12px] text-ink-muted sm:pb-2 whitespace-nowrap">
          {h.location} · <span suppressHydrationWarning>{time}</span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 sm:gap-10">
        <div className="sm:col-span-8">
          <p className="v3-serif text-xl sm:text-2xl leading-tight text-ink mb-4">
            {h.taglinePrefix}
            <em>{h.taglineEmphasis[0]}</em> and <em>{h.taglineEmphasis[1]}</em>.
          </p>
          <div className="bio space-y-1">
            <p>
              ASIC Design, AI &amp; Automation Engineer Intern @{" "}
              <a href="https://www.intel.com/" target="_blank" rel="noopener noreferrer" className="link">Intel</a>. Prev @{" "}
              <a href="https://www.webai.com/" target="_blank" rel="noopener noreferrer" className="link">WebAI</a>,{" "}
              <a href="https://data-to-decision.com/" target="_blank" rel="noopener noreferrer" className="link">Dasion</a>,{" "}
              <a href="https://www.nyris.io/" target="_blank" rel="noopener noreferrer" className="link">Nyris GmbH</a>,{" "}
              <a href="https://www.revola.ai/" target="_blank" rel="noopener noreferrer" className="link">Revola AI</a>.
            </p>
            <p className="whitespace-nowrap">
              I occasionally write on{" "}
              <a href="https://x.com/avxneeshjoshi" target="_blank" rel="noopener noreferrer" className="link">X</a>. Reach me at{" "}
              <a href="mailto:avaneeshjoshi@berkeley.edu" className="link">avaneeshjoshi [at] berkeley.edu</a>.
            </p>
          </div>
          <SocialButtons className="mt-4" />
        </div>

        <figure className="sm:col-span-4 sm:pl-2">
          <img
            src="/profile.jpg"
            alt={h.name}
            className="v3-photo card-image !w-full !h-auto aspect-[4/5] object-cover rounded-xl"
            loading="eager"
          />
          <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted flex justify-between gap-4">
            {h.captions.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </figcaption>
        </figure>
      </div>
    </header>
  );
};

export default V3Header;
