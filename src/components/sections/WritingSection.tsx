import { FileText } from "lucide-react";
import SectionHeader from "../SectionHeader";
import ContentCard from "../ContentCard";

const writingPosts = [
  {
    image: "https://debarghyadas.com/img/landing/posts/maze-guide.webp",
    title: "Ultimate Guide to get an EB-1A",
    description: "A free lawyer-backed guide to the fastest way to get a US green card. One of the few pragmatic ways for Indians.",
    href: "https://debarghyadas.com/writes/eb1-ultimate-guide/",
  },
  {
    image: "https://debarghyadas.com/img/landing/posts/twitter.webp",
    title: "Best Tweets",
    description: "I write daily on X as @deedydas where I've had 750M+ views and occasionally chat with Elon.",
    href: "https://debarghyadas.com/writes/twitter/",
  },
  {
    image: "https://debarghyadas.com/img/landing/posts/four.webp",
    title: "How I lost 66lbs in 8 months",
    description: "I write about the data-driven approach I used to go from 209lbs to 143lbs and 8% body fat. Featured on GQ.",
    href: "https://debarghyadas.com/writes/transformation/",
  },
  {
    image: "https://debarghyadas.com/img/landing/posts/hack-top6.webp",
    title: "Hacking Indian education system",
    description: "Revealing statistical inconsistencies in the national high school examinations in India — the ISC and the CBSE.",
    href: "https://debarghyadas.com/writes/hacking-into-the-indian-education-system/",
  },
];

const WritingSection = () => {
  return (
    <section className="mb-12">
      <SectionHeader
        icon={<FileText className="w-4 h-4" />}
        title="Writing"
        linkText="View all"
        linkHref="https://debarghyadas.com/writes"
      />
      <p className="text-sm text-muted-foreground mb-4">
        I write regularly about startups, career, tech, immigration and investing.{" "}
        <a href="https://debarghyadas.com/writes/twitter/">Tweets</a> and{" "}
        <a href="https://debarghyadas.com/writes/">blog</a> have been viewed{" "}
        <strong className="text-foreground">750M+</strong> times with{" "}
        <strong className="text-foreground">200k+</strong> followers and been featured 100+ times in the news.
      </p>
      <div className="card-grid">
        {writingPosts.map((post) => (
          <ContentCard key={post.title} {...post} />
        ))}
      </div>
    </section>
  );
};

export default WritingSection;
