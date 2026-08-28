import Timeline from "../components/Timeline";
import GithubSection from "@/components/sections/GithubSection";
import WorkingOnNow from "../components/WorkingOnNow";
import ThisYear from "../components/ThisYear";
import { v3Content } from "../content";

const V3Activity = () => (
  <>
    <header className="mb-10">
      <div className="flex items-baseline justify-between gap-4">
        <h1 className="text-2xl font-bold text-ink">Activity</h1>
        <span className="text-[10px] uppercase tracking-widest font-semibold text-ink-muted">{v3Content.activityLocation}</span>
      </div>
      <p className="bio mt-2">{v3Content.activityIntro}</p>
    </header>
    <WorkingOnNow />
    <Timeline />
    <ThisYear />
    <GithubSection showFeed={false} compact />
  </>
);

export default V3Activity;
