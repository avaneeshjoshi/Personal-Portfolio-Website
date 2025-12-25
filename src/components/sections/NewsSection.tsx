import SectionHeader from "../SectionHeader";
import ContentCard from "../ContentCard";

const newsItems = [
  {
    image: "https://debarghyadas.com/img/landing/news/starhealth.webp",
    title: "StarHealth Insurance data breach",
    description: "Wrote about the StarHealth 31M customer data leak. In TimesNow, Business Standard and Fortune.",
    href: "https://www.business-standard.com/companies/news/forensic-probe-by-experts-on-cyberattack-suffered-by-co-star-health-124100901258_1.html",
  },
  {
    image: "https://debarghyadas.com/img/landing/news/dotpe.webp",
    title: "Dotpe API expose",
    description: "Wrote about the Dotpe API breach. Featured in Times of India, India Today and Inc 42.",
    href: "https://timesofindia.indiatimes.com/city/bengaluru/google-backed-dotpes-apis-expose-sensitive-data/articleshow/113653787.cms",
  },
  {
    image: "https://debarghyadas.com/img/landing/news/claude.webp",
    title: "Apps with AI using Claude",
    description: "Built Splitwise, AI image detection and more. Featured in Analytics India and Mark Tech.",
    href: "https://analyticsindiamag.com/ai-origins-evolution/anthropic-claude-artifacts-to-kill-app-store-soon/",
  },
  {
    image: "https://debarghyadas.com/img/landing/posts/maze-guide.webp",
    title: 'EB-1A "Genius" visa',
    description: "Featured in Economist with the ensuing controversy covered on Times of India and AsiaNet.",
    href: "https://archive.is/2024.08.15-164622/https://www.economist.com/briefing/2024/08/15/talent-is-scarce-yet-many-countries-spurn-it",
  },
  {
    image: "https://debarghyadas.com/img/landing/news/chinese.webp",
    title: "OpenAI tokenizer in Chinese",
    description: "Featured in Futurism and MIT Technology Review.",
    href: "https://www.technologyreview.com/2024/05/17/1092649/gpt-4o-chinese-token-polluted/",
  },
  {
    image: "https://debarghyadas.com/img/landing/news/gemini.webp",
    title: 'Google Gemini\'s "woke" AI images',
    description: "Started the conversation which caused Gemini to lock down. In NPR, BBC, AlJazeera and DailyMail.",
    href: "https://www.bbc.com/news/business-68364690",
  },
];

const NewsSection = () => {
  return (
    <section className="mb-12">
      <SectionHeader
        icon={<i className="fa-solid fa-bookmark"></i>}
        title="Publications"
        linkText="View all"
        linkHref="https://www.google.com/search?q=(debarghya+das)+OR+(deedy+das)&tbm=nws"
      />
      <div className="card-grid">
        {newsItems.map((item) => (
          <ContentCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
