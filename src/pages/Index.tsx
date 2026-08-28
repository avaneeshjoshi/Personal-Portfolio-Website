import { useEffect } from "react";
import Header from "@/components/Header";
import AboutSection from "@/components/sections/AboutSection";
import CareerSection from "@/components/sections/CareerSection";
import EducationSection from "@/components/sections/EducationSection";
import SpeakingSection from "@/components/sections/SpeakingSection";
// import NewsSection from "@/components/sections/NewsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import GithubSection from "@/components/sections/GithubSection";
import { scrollToTop } from "@/lib/scroll";


const Index = () => {
  useEffect(() => {
    document.title = "Avaneesh Joshi";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Portfolio of Avaneesh Joshi, a UC Berkeley student building applied ML systems and autonomous incident-response agents.",
      );
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Header />
        <AboutSection />
        <EducationSection />
        <CareerSection />
        <ProjectsSection />
        <GithubSection />
        <SpeakingSection />
        {/* <NewsSection /> */}
        <div className="flex justify-center pt-4">
          <button
            type="button"
            onClick={scrollToTop}
            className="btn w-auto px-3 text-sm font-medium"
            aria-label="Back to top"
          >
            <i className="fa-solid fa-arrow-up"></i>
            Back to top
          </button>
        </div>
      </div>
    </main>
  );
};

export default Index;
