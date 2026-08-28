import { useTheme } from "@/theme/ThemeProvider";

const V2ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const next = resolvedTheme === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      className="mono v2-link text-v2-muted hover:text-v2-fg"
      aria-label={`Switch to ${next} mode`}
      onClick={() => setTheme(next)}
    >
      {next}
    </button>
  );
};

export default V2ThemeToggle;
