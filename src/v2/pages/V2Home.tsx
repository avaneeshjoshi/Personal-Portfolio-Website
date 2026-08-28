import { useProjects } from "@/hooks/use-github";
import V2Hero from "../components/V2Hero";
import V2Stats from "../components/V2Stats";
import V2FindMe from "../components/V2FindMe";
import V2Projects from "../components/V2Projects";
import V2Footer from "../components/V2Footer";

const V2Home = () => {
  const { projects, user, isLoading, error } = useProjects({ workPath: "/v2/work" });
  return (
    <>
      <V2Hero />
      <V2Stats user={user} projectCount={projects.length} isLoading={isLoading} />
      <V2FindMe />
      <V2Projects projects={projects} error={error} />
      <V2Footer projects={projects} />
    </>
  );
};

export default V2Home;
