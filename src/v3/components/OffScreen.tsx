import SectionHeader from "@/components/SectionHeader";
import { v3Content } from "../content";
import MoviesSection from "./MoviesSection";
import GamesSection from "./GamesSection";
import BooksSection from "./BooksSection";
import BadmintonSection from "./BadmintonSection";
import GalleryReel from "./GalleryReel";
import TravelGlobe from "./TravelGlobe";

const OffScreen = () => (
  <section className="mb-12">
    <SectionHeader icon={<i className="fa-solid fa-mug-hot" style={{ fontSize: "10px" }}></i>} title="Off the Screen" />
    <p className="bio">{v3Content.offScreenIntro}</p>
    <MoviesSection />
    <GamesSection />
    <BooksSection />
    <BadmintonSection />
    <GalleryReel />
    <TravelGlobe />
  </section>
);

export default OffScreen;
