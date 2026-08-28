import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/theme/ThemeProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LinkPreview from "./components/LinkPreview";

// Lazy so the v2 CSS + fonts stay out of the "/" bundle.
const V2Layout = lazy(() => import("./v2/V2Layout"));
const V2Home = lazy(() => import("./v2/pages/V2Home"));
const V2Work = lazy(() => import("./v2/pages/V2Work"));
const V3Layout = lazy(() => import("./v3/V3Layout"));
const V3About = lazy(() => import("./v3/pages/V3About"));
const V3Activity = lazy(() => import("./v3/pages/V3Activity"));
const V3Projects = lazy(() => import("./v3/pages/V3Projects"));
const V3Work = lazy(() => import("./v3/pages/V3Work"));

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 5 * 60 * 1000, retry: 1 } },
});

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/classic" element={<Index />} />
            <Route
              element={
                <Suspense fallback={null}>
                  <V2Layout />
                </Suspense>
              }
            >
              <Route path="/v2" element={<V2Home />} />
              <Route path="/v2/work/:slug" element={<V2Work />} />
            </Route>
            <Route
              path="/"
              element={
                <Suspense fallback={null}>
                  <V3Layout />
                </Suspense>
              }
            >
              <Route index element={<V3About />} />
              <Route path="activity" element={<V3Activity />} />
              <Route path="projects" element={<V3Projects />} />
              <Route path="work/:slug" element={<V3Work />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <LinkPreview />
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
