import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { pingSupabase } from "./lib/supabase-keepalive";

pingSupabase();

createRoot(document.getElementById("root")!).render(<App />);
