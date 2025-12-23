import Header from "@/components/Header";
import InvestingSection from "@/components/sections/InvestingSection";
import CareerSection from "@/components/sections/CareerSection";
import EducationSection from "@/components/sections/EducationSection";
import SpeakingSection from "@/components/sections/SpeakingSection";
import NewsSection from "@/components/sections/NewsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import GithubSection from "@/components/sections/GithubSection";

const Index = () => {
  return (
    <>
      <head>
        <title>Avaneesh Joshi - Student at University of California, Berkeley</title>
        <meta name="description" content="Partner at Menlo Ventures investing in AI, SaaS and Infra. Previous: Founding team Glean, Google Search, Facebook." />
      </head>
      <main className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <Header />
          <InvestingSection />
          <EducationSection />
          <CareerSection />
          <ProjectsSection />
          <GithubSection />
          <SpeakingSection />
          <NewsSection />
          <footer className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
            You can view the older version of this website{" "}
            <a href="https://debarghyadas.com/old.html">here</a>.
          </footer>
        </div>
      </main>
    </>
  );
};

export default Index;
