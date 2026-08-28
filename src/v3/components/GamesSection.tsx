import SubSection from "./SubSection";
import { gameCover, gameHref, games } from "@/data/shelf";
import { v3Content } from "../content";
import PosterRow from "./PosterRow";

const GamesSection = () => (
  <SubSection title="Games">
    <p className="bio mb-4">{v3Content.games}</p>
    <PosterRow
      items={games.map((g) => ({
        id: g.title,
        title: g.title,
        subtitle: g.studio,
        image: gameCover(g),
        href: gameHref(g),
      }))}
    />
  </SubSection>
);

export default GamesSection;
