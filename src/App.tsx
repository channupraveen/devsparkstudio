import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import SmoothScrollProvider from "./components/providers/SmoothScrollProvider";
import CustomCursor from "./components/providers/CustomCursor";
import PageLoader from "./components/providers/PageLoader";
import SpaceBackground from "./components/providers/SpaceBackground";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SmoothScrollProvider>
          <BrowserRouter>
            <PageLoader />
            <SpaceBackground />
            <CustomCursor />
            <Toaster position="top-right" richColors theme="dark" />
            <AnimatedRoutes />
          </BrowserRouter>
        </SmoothScrollProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
