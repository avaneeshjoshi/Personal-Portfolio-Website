import { useTheme } from "@/theme/ThemeProvider";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const next = resolvedTheme === "dark" ? "light" : "dark";
  const label = `Switch to ${next} mode`;
  return (
    <button type="button" className="btn" aria-label={label} title={label} onClick={() => setTheme(next)}>
      <i className={resolvedTheme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
    </button>
  );
};

export default ThemeToggle;
