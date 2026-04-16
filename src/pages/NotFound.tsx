import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import Layout from "../components/layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-50 pointer-events-none" />
        <div className="aurora-bg" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[9rem] md:text-[12rem] leading-none font-semibold mb-6 select-none"
          >
            <span className="text-gradient">404</span>
          </motion.div>

          <h1 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Lost in the void.
          </h1>
          <p className="text-muted-foreground mb-10">
            The page you're looking for has drifted beyond our event horizon.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm btn-shimmer shadow-[0_0_30px_-10px_rgba(99,102,241,0.5)]"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full glass border border-border/60 hover:border-primary/60 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default NotFound;
