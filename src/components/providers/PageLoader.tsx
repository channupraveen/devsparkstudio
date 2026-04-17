import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LOADER_SHOWN_KEY = "devspark-loader-shown";

const PageLoader = () => {
  const [show, setShow] = useState(() => {
    if (typeof window === "undefined") return false;
    return !sessionStorage.getItem(LOADER_SHOWN_KEY);
  });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!show) return;

    let raf: number;
    const start = performance.now();
    const duration = 1600;

    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(1, elapsed / duration);
      // Ease-out
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          sessionStorage.setItem(LOADER_SHOWN_KEY, "1");
          setShow(false);
        }, 350);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-nebula-500/20 via-cosmic-500/20 to-electric-500/20 blur-3xl" />
          </div>

          {/* Logo mark */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 mb-10"
          >
            <img
              src="/headerlogo.png"
              alt="DevSpark Studio"
              className="w-18 h-18 rounded-lg object-cover drop-shadow-[0_0_30px_rgba(99,102,241,0.6)]"
            />
          </motion.div>

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 font-display text-2xl font-semibold tracking-tight mb-8"
          >
            <span className="text-gradient">DevSpark</span>
            <span className="text-foreground/80 ml-1.5">Studio</span>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative z-10 w-64 h-[2px] bg-foreground/10 rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-nebula-500 via-cosmic-500 to-electric-500"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </motion.div>

          {/* Progress number */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative z-10 mt-4 font-mono text-xs tabular-nums text-muted-foreground"
          >
            {String(progress).padStart(3, "0")}%
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
