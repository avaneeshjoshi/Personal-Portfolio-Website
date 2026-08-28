import { v2Content } from "../content";
import { useLocalTime } from "../hooks/use-local-time";

const V2Hero = () => {
  const time = useLocalTime(v2Content.timeZone);
  const [a, b] = v2Content.taglineEmphasis;

  return (
    <section id="about" className="pt-10 md:pt-16 scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-10 md:mb-14">
        <h1 className="text-6xl md:text-8xl leading-[0.95] tracking-tight">{v2Content.name}</h1>
        <p className="mono text-v2-muted md:pb-3">
          {v2Content.location} · <span suppressHydrationWarning>{time}</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
        <div className="md:col-span-7">
          <p className="text-3xl md:text-4xl leading-tight mb-8">
            {v2Content.taglinePrefix}
            <em className="italic">{a}</em> and <em className="italic">{b}</em>.
          </p>
          <div className="space-y-5 text-lg leading-relaxed max-w-prose">
            {v2Content.bio.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
        </div>

        <figure className="md:col-span-5 md:pl-6">
          <div className="border border-v2-hairline overflow-hidden aspect-[4/5]">
            <img
              src={v2Content.photo}
              alt={v2Content.name}
              className="w-full h-full object-cover grayscale-[0.15]"
              loading="eager"
            />
          </div>
          <figcaption className="mono uppercase tracking-[0.18em] text-[10px] text-v2-muted flex justify-between gap-4 mt-3">
            {v2Content.photoCaptions.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default V2Hero;
