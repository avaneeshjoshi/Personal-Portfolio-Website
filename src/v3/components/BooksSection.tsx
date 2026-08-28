import SubSection from "./SubSection";
import { bookCover, bookHref, books } from "@/data/shelf";
import { v3Content } from "../content";
import PosterRow from "./PosterRow";

const BooksSection = () => (
  <SubSection title="Books">
    <p className="bio mb-4">{v3Content.books}</p>
    <PosterRow
      items={books.map((b) => ({
        id: b.title,
        title: b.title,
        subtitle: b.author,
        image: bookCover(b),
        href: bookHref(b),
      }))}
    />
  </SubSection>
);

export default BooksSection;
