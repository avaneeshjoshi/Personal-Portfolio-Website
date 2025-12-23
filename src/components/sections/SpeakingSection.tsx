import { Mic } from "lucide-react";
import SectionHeader from "../SectionHeader";

const SpeakingSection = () => {
  return (
    <section className="mb-12">
      <SectionHeader
        icon={<Mic className="w-4 h-4" />}
        title="Speaking"
        linkText="Book"
        linkHref="mailto:dd367@cornell.edu"
      />
      <div className="text-sm text-muted-foreground space-y-3">
        <p>
          I've spoken on podcasts on career, technology, AI and machine learning, Glean, India, immigration, investing and my side projects. Here's{" "}
          <a href="https://twitter.com/deedydas/status/1741485749566931446" className="link">why I care about doing this</a>.
        </p>
        <p>
          <strong className="text-foreground">Speaking</strong>: Universities — Stanford University,{" "}
          <a href="https://www.linkedin.com/posts/debarghyadas_was-a-privilege-to-speak-to-the-students-activity-7184520667814342656-rhr2" className="link">
            Harvard Business School
          </a>
          ,{" "}
          <a href="https://www.linkedin.com/posts/debarghyadas_was-a-privilege-to-speak-to-the-mba-students-activity-7262497764729659394-_y5i" className="link">
            Wharton at UPenn
          </a>
          ,{" "}
          <a href="https://www.youtube.com/watch?v=cOhYUhsfeKc&pp=ygUJZGVlZHkgZGFz" className="link">Kellogg at Northwestern</a>, UC Berkeley, IIT Bombay, BITS Pilani and more.
        </p>
        <p>
          Conferences —{" "}
          <a href="https://www.digitaltransformation-week.com/northamerica/speaker/deedy-das/" className="link">Digital Transformation Week</a>, Palo Alto Networks AI Day, Google Cloud Next,{" "}
          <a href="https://swisscognitive.ch/ai-events/redefining_business_performance_with_generative_ai/" className="link">SwissCognitive AI Conference</a> and{" "}
          <a href="https://www.youtube.com/watch?v=JY7pYSCX6Dc&t=1s" className="link">TEDx Bangalore</a>.
        </p>
        <p>
          <strong className="text-foreground">Podcasts</strong>:{" "}
          <a href="https://www.youtube.com/watch?v=g0CjWbgsdTQ" className="link">WTF with Nikhil Kamath</a>,{" "}
          <a href="https://www.youtube.com/watch?v=3yVIV4Cy2w4" className="link">This Week in Startups with JCal</a>,{" "}
          <a href="https://youtu.be/8UDj3-JDfYY" className="link">Latent Space</a>,{" "}
          <a href="https://www.youtube.com/watch?v=abY7oCYhHG8" className="link">CNBC with Shereen Bhan</a>,{" "}
          <a href="https://stackoverflow.blog/2024/09/27/deedy-das-meta-google-menlo-ventures-ai-anthropic/" className="link">StackOverflow</a> and many more.
        </p>
      </div>
    </section>
  );
};

export default SpeakingSection;
