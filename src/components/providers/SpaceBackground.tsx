import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

/**
 * Canvas-based particle starfield with scroll-driven parallax,
 * warp-speed streaks on fast scroll, and hue-shifting nebula tint.
 */
const SpaceBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tintRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Mouse parallax
    const mouse = { x: width / 2, y: height / 2, tx: width / 2, ty: height / 2 };
    const onMove = (e: MouseEvent) => {
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    // Scroll-driven state — the heart of the "in space" feel
    const scrollState = {
      last: window.scrollY,
      current: window.scrollY,
      velocity: 0,      // smoothed scroll velocity (px/frame)
      warp: 0,          // 0..1 warp intensity
      progress: 0,      // 0..1 page scroll progress
    };

    const updateScroll = () => {
      scrollState.current = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollState.progress = max > 0 ? Math.min(1, scrollState.current / max) : 0;
    };
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    // Stars with depth layers — closer stars move much more than far ones
    type Star = {
      x: number;
      y: number;
      z: number;         // depth 0.15 (far) .. 1 (near)
      r: number;
      tw: number;
      tp: number;
      hue: number;       // slight color variety
    };
    const stars: Star[] = [];
    const count = Math.min(220, Math.floor((width * height) / 9000));
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 0.85 + 0.15,
        r: Math.random() * 1.3 + 0.3,
        tw: Math.random() * Math.PI * 2,
        tp: 0.004 + Math.random() * 0.012,
        hue: Math.random(),
      });
    }

    // Shooting stars (ambient)
    type Meteor = { x: number; y: number; vx: number; vy: number; life: number; max: number };
    const meteors: Meteor[] = [];
    const spawnMeteor = () => {
      meteors.push({
        x: Math.random() * width,
        y: Math.random() * height * 0.5,
        vx: -6 - Math.random() * 3,
        vy: 3 + Math.random() * 2,
        life: 0,
        max: 60 + Math.random() * 40,
      });
    };
    const meteorInterval = window.setInterval(() => {
      if (meteors.length < 2 && Math.random() > 0.4) spawnMeteor();
    }, 5000);

    let raf = 0;
    const loop = () => {
      // --- Scroll velocity + warp intensity ---
      const rawDelta = scrollState.current - scrollState.last;
      scrollState.last = scrollState.current;
      // Smooth velocity with exponential decay
      scrollState.velocity += (rawDelta - scrollState.velocity) * 0.25;
      // Warp ramps up when scrolling fast (~30+ px/frame → near 1)
      const targetWarp = Math.min(1, Math.abs(scrollState.velocity) / 30);
      scrollState.warp += (targetWarp - scrollState.warp) * 0.15;

      // --- Mouse parallax easing ---
      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;
      const px = (mouse.x - width / 2) / width;
      const py = (mouse.y - height / 2) / height;

      // --- Nebula tint hue shift based on scroll progress ---
      if (tintRef.current && theme === "dark") {
        const t = scrollState.progress;
        // Indigo → purple → cyan as you scroll down
        const topR = Math.round(99 + (168 - 99) * t);
        const topG = Math.round(102 + (85 - 102) * t);
        const topB = Math.round(241 + (247 - 241) * t);
        const botR = Math.round(168 + (56 - 168) * t);
        const botG = Math.round(85 + (189 - 85) * t);
        const botB = Math.round(247 + (248 - 247) * t);
        tintRef.current.style.background = `
          radial-gradient(ellipse at top, rgba(${topR},${topG},${topB},0.14), transparent 50%),
          radial-gradient(ellipse at bottom, rgba(${botR},${botG},${botB},0.12), transparent 50%)
        `;
      }

      ctx.clearRect(0, 0, width, height);

      const isLight = theme === "light";

      if (isLight) {
        // Very subtle dotted pattern, no warp
        ctx.globalAlpha = 0.25;
        for (const s of stars) {
          ctx.fillStyle = `rgba(99,102,241,0.3)`;
          const ox = px * 20 * s.z;
          const oy = py * 20 * s.z;
          ctx.beginPath();
          ctx.arc(s.x + ox, s.y + oy, s.r * 0.6, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;
      } else {
        // --- Apply scroll-driven drift to star positions (parallax by depth) ---
        // Near stars move ~1.2x scroll delta, far stars ~0.15x — feels like flying through.
        for (const s of stars) {
          s.y -= scrollState.velocity * s.z * 0.9;
          // wrap around viewport so starfield is infinite
          if (s.y < -20) s.y = height + 20;
          else if (s.y > height + 20) s.y = -20;
        }

        // --- Render stars ---
        for (const s of stars) {
          s.tw += s.tp;
          const twinkle = 0.5 + Math.sin(s.tw) * 0.5;
          const ox = px * 40 * s.z;
          const oy = py * 40 * s.z;
          const x = s.x + ox;
          const y = s.y + oy;

          // WARP STREAKS — when scrolling fast, stars stretch into lines
          const streakLen = scrollState.warp * scrollState.velocity * s.z * 1.8;
          if (Math.abs(streakLen) > 2) {
            const grad = ctx.createLinearGradient(x, y, x, y - streakLen);
            const warpAlpha = 0.85 * twinkle * s.z;
            // hue-tint the streak slightly
            const streakColor =
              s.hue < 0.5
                ? `rgba(180,180,255,${warpAlpha})`
                : `rgba(220,180,255,${warpAlpha})`;
            grad.addColorStop(0, streakColor);
            grad.addColorStop(1, "rgba(255,255,255,0)");
            ctx.strokeStyle = grad;
            ctx.lineWidth = Math.max(0.6, s.r * (1 + scrollState.warp * 0.8));
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, y - streakLen);
            ctx.stroke();
          }

          // Glow halo
          const radius = s.r * (1 + twinkle * 0.5);
          const g = ctx.createRadialGradient(x, y, 0, x, y, radius * 4);
          g.addColorStop(0, `rgba(255,255,255,${0.7 * twinkle * s.z})`);
          g.addColorStop(
            0.5,
            s.hue < 0.5
              ? `rgba(168,139,250,${0.22 * twinkle * s.z})`
              : `rgba(100,180,255,${0.22 * twinkle * s.z})`
          );
          g.addColorStop(1, "rgba(0,0,0,0)");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(x, y, radius * 4, 0, Math.PI * 2);
          ctx.fill();

          // Core
          ctx.fillStyle = `rgba(255,255,255,${0.85 * twinkle * s.z})`;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }

        // --- Ambient meteors ---
        for (let i = meteors.length - 1; i >= 0; i--) {
          const m = meteors[i];
          m.x += m.vx;
          m.y += m.vy;
          m.life++;
          if (m.life > m.max || m.x < -80 || m.y > height + 80) {
            meteors.splice(i, 1);
            continue;
          }
          const alpha = 1 - m.life / m.max;
          const grad = ctx.createLinearGradient(m.x, m.y, m.x - m.vx * 10, m.y - m.vy * 10);
          grad.addColorStop(0, `rgba(255,255,255,${0.9 * alpha})`);
          grad.addColorStop(1, "rgba(255,255,255,0)");
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          ctx.moveTo(m.x, m.y);
          ctx.lineTo(m.x - m.vx * 10, m.y - m.vy * 10);
          ctx.stroke();
          ctx.fillStyle = `rgba(255,255,255,${alpha})`;
          ctx.beginPath();
          ctx.arc(m.x, m.y, 1.6, 0, Math.PI * 2);
          ctx.fill();
        }

        // --- Vignette that deepens slightly during warp ---
        if (scrollState.warp > 0.05) {
          const vig = ctx.createRadialGradient(
            width / 2,
            height / 2,
            Math.min(width, height) * 0.3,
            width / 2,
            height / 2,
            Math.max(width, height) * 0.75
          );
          vig.addColorStop(0, "rgba(0,0,0,0)");
          vig.addColorStop(1, `rgba(0,0,0,${0.35 * scrollState.warp})`);
          ctx.fillStyle = vig;
          ctx.fillRect(0, 0, width, height);
        }
      }

      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", updateScroll);
      clearInterval(meteorInterval);
    };
  }, [theme]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      {/* Nebula tint — hue shifts with scroll progress */}
      <div
        ref={tintRef}
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(ellipse at top, rgba(99,102,241,0.14), transparent 50%), radial-gradient(ellipse at bottom, rgba(168,85,247,0.12), transparent 50%)"
              : "radial-gradient(ellipse at top, rgba(99,102,241,0.06), transparent 50%), radial-gradient(ellipse at bottom, rgba(168,85,247,0.05), transparent 50%)",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
};

export default SpaceBackground;
