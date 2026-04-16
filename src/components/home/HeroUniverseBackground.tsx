import { useEffect, useRef } from "react";
import { useTheme } from "../providers/ThemeProvider";

/**
 * HeroUniverseBackground
 * A dedicated canvas universe for the hero — layered star depth with
 * parallax, nebula glow, drifting dust particles, and occasional sparkle.
 *
 * Fully theme-aware: rich cosmic in dark mode, whisper-soft in light mode.
 */
const HeroUniverseBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = parent.clientWidth;
    let height = parent.clientHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const setSize = () => {
      width = parent.clientWidth;
      height = parent.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    setSize();

    const ro = new ResizeObserver(setSize);
    ro.observe(parent);

    // Mouse parallax (relative to hero section)
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      mouse.tx = (e.clientX - rect.left) / rect.width - 0.5;
      mouse.ty = (e.clientY - rect.top) / rect.height - 0.5;
    };
    parent.addEventListener("mousemove", onMove);
    const onLeave = () => {
      mouse.tx = 0;
      mouse.ty = 0;
    };
    parent.addEventListener("mouseleave", onLeave);

    // Theme color palette
    const palette = () =>
      theme === "dark"
        ? {
            base: ["#c4b5fd", "#a5b4fc", "#93c5fd", "#e0e7ff", "#ffffff"],
            sparkle: "#ffffff",
            dust: "rgba(168, 139, 250, ",
            core: "rgba(255,255,255,",
          }
        : {
            base: ["#6366f1", "#a855f7", "#38bdf8", "#818cf8", "#c084fc"],
            sparkle: "#6366f1",
            dust: "rgba(99, 102, 241, ",
            core: "rgba(99,102,241,",
          };

    // Star layers for parallax depth
    type Star = {
      x: number;
      y: number;
      z: number; // 0.2 (far) — 1 (near)
      r: number;
      color: string;
      baseAlpha: number;
      twinkle: number;
      twinkleSpeed: number;
    };

    const density = theme === "dark" ? 0.00022 : 0.00009;
    const starCount = Math.floor(width * height * density);
    const stars: Star[] = [];
    const p = palette();
    for (let i = 0; i < starCount; i++) {
      const z = Math.random() * 0.8 + 0.2;
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        r: Math.random() * 1.2 + 0.25,
        color: p.base[Math.floor(Math.random() * p.base.length)],
        baseAlpha: theme === "dark" ? 0.4 + Math.random() * 0.5 : 0.25 + Math.random() * 0.35,
        twinkle: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.004 + Math.random() * 0.014,
      });
    }

    // Drifting dust particles (slow floating)
    type Dust = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      alpha: number;
    };
    const dustCount = theme === "dark" ? 24 : 10;
    const dust: Dust[] = [];
    for (let i = 0; i < dustCount; i++) {
      dust.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.08,
        r: Math.random() * 1.4 + 0.6,
        alpha: 0.15 + Math.random() * 0.3,
      });
    }

    // Sparkle bursts — occasional crosses that flare on random stars
    type Sparkle = {
      x: number;
      y: number;
      life: number;
      max: number;
      size: number;
    };
    const sparkles: Sparkle[] = [];
    let sparkleTimer = 0;

    // Shooting stars
    type Meteor = { x: number; y: number; vx: number; vy: number; life: number; max: number };
    const meteors: Meteor[] = [];
    const spawnMeteor = () => {
      meteors.push({
        x: width + 50,
        y: Math.random() * height * 0.6,
        vx: -5 - Math.random() * 3,
        vy: 2 + Math.random() * 2,
        life: 0,
        max: 70 + Math.random() * 40,
      });
    };
    const meteorInterval = window.setInterval(() => {
      if (theme === "dark" && meteors.length < 1 && Math.random() > 0.5) spawnMeteor();
    }, 6500);

    let raf = 0;
    let frame = 0;

    const loop = () => {
      frame++;
      // Ease mouse
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      const px = mouse.x;
      const py = mouse.y;

      ctx.clearRect(0, 0, width, height);

      // ---- Nebula glow layer ----
      const pal = palette();
      if (theme === "dark") {
        // Layered radial nebulae
        const g1 = ctx.createRadialGradient(
          width * 0.25 + px * 30,
          height * 0.35 + py * 30,
          0,
          width * 0.25 + px * 30,
          height * 0.35 + py * 30,
          Math.max(width, height) * 0.45
        );
        g1.addColorStop(0, "rgba(99, 102, 241, 0.22)");
        g1.addColorStop(0.5, "rgba(99, 102, 241, 0.06)");
        g1.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g1;
        ctx.fillRect(0, 0, width, height);

        const g2 = ctx.createRadialGradient(
          width * 0.8 + px * 40,
          height * 0.7 + py * 40,
          0,
          width * 0.8 + px * 40,
          height * 0.7 + py * 40,
          Math.max(width, height) * 0.5
        );
        g2.addColorStop(0, "rgba(168, 85, 247, 0.22)");
        g2.addColorStop(0.5, "rgba(168, 85, 247, 0.05)");
        g2.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g2;
        ctx.fillRect(0, 0, width, height);

        const g3 = ctx.createRadialGradient(
          width * 0.6 + px * 20,
          height * 0.15 + py * 20,
          0,
          width * 0.6 + px * 20,
          height * 0.15 + py * 20,
          Math.max(width, height) * 0.35
        );
        g3.addColorStop(0, "rgba(56, 189, 248, 0.15)");
        g3.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g3;
        ctx.fillRect(0, 0, width, height);
      } else {
        // Very gentle pastel haze
        const g = ctx.createRadialGradient(
          width * 0.3 + px * 20,
          height * 0.4 + py * 20,
          0,
          width * 0.3 + px * 20,
          height * 0.4 + py * 20,
          Math.max(width, height) * 0.5
        );
        g.addColorStop(0, "rgba(99, 102, 241, 0.07)");
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, width, height);

        const g2 = ctx.createRadialGradient(
          width * 0.75 + px * 30,
          height * 0.65 + py * 30,
          0,
          width * 0.75 + px * 30,
          height * 0.65 + py * 30,
          Math.max(width, height) * 0.45
        );
        g2.addColorStop(0, "rgba(168, 85, 247, 0.06)");
        g2.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g2;
        ctx.fillRect(0, 0, width, height);
      }

      // ---- Stars (with parallax per depth) ----
      for (const s of stars) {
        s.twinkle += s.twinkleSpeed;
        const tw = 0.55 + Math.sin(s.twinkle) * 0.45;

        const parX = px * 60 * s.z;
        const parY = py * 60 * s.z;
        const x = s.x + parX;
        const y = s.y + parY;

        const alpha = s.baseAlpha * tw * (0.5 + s.z * 0.5);
        const radius = s.r * (0.8 + tw * 0.4);

        // Soft halo for brighter stars
        if (s.z > 0.7 && theme === "dark") {
          const halo = ctx.createRadialGradient(x, y, 0, x, y, radius * 8);
          halo.addColorStop(0, `rgba(199, 210, 254, ${alpha * 0.35})`);
          halo.addColorStop(1, "rgba(0,0,0,0)");
          ctx.fillStyle = halo;
          ctx.beginPath();
          ctx.arc(x, y, radius * 8, 0, Math.PI * 2);
          ctx.fill();
        }

        // Star core
        ctx.fillStyle = hexToRgba(s.color, alpha);
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // ---- Sparkle bursts ----
      sparkleTimer++;
      if (sparkleTimer > (theme === "dark" ? 55 : 140) && sparkles.length < 4) {
        sparkleTimer = 0;
        // pick a near star
        const near = stars.filter((s) => s.z > 0.75);
        const target = near[Math.floor(Math.random() * near.length)] || stars[0];
        sparkles.push({
          x: target.x,
          y: target.y,
          life: 0,
          max: 60,
          size: 2 + Math.random() * 2.5,
        });
      }

      for (let i = sparkles.length - 1; i >= 0; i--) {
        const sp = sparkles[i];
        sp.life++;
        if (sp.life > sp.max) {
          sparkles.splice(i, 1);
          continue;
        }
        const t = sp.life / sp.max;
        // Ease in-out
        const alpha = Math.sin(t * Math.PI);
        const size = sp.size * (0.6 + alpha * 1.2);
        const parX = px * 60 * 0.9;
        const parY = py * 60 * 0.9;
        const x = sp.x + parX;
        const y = sp.y + parY;

        ctx.save();
        ctx.translate(x, y);
        ctx.globalAlpha = alpha;

        // Cross sparkle
        const grad = ctx.createLinearGradient(-size * 4, 0, size * 4, 0);
        grad.addColorStop(0, "rgba(255,255,255,0)");
        grad.addColorStop(0.5, pal.sparkle);
        grad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-size * 4, 0);
        ctx.lineTo(size * 4, 0);
        ctx.stroke();

        const grad2 = ctx.createLinearGradient(0, -size * 4, 0, size * 4);
        grad2.addColorStop(0, "rgba(255,255,255,0)");
        grad2.addColorStop(0.5, pal.sparkle);
        grad2.addColorStop(1, "rgba(255,255,255,0)");
        ctx.strokeStyle = grad2;
        ctx.beginPath();
        ctx.moveTo(0, -size * 4);
        ctx.lineTo(0, size * 4);
        ctx.stroke();

        // Core dot
        ctx.fillStyle = pal.sparkle;
        ctx.beginPath();
        ctx.arc(0, 0, size * 0.6, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      // ---- Drifting dust ----
      for (const d of dust) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < -20) d.x = width + 20;
        if (d.x > width + 20) d.x = -20;
        if (d.y < -20) d.y = height + 20;
        if (d.y > height + 20) d.y = -20;

        const parX = px * 35;
        const parY = py * 35;
        const x = d.x + parX;
        const y = d.y + parY;

        const g = ctx.createRadialGradient(x, y, 0, x, y, d.r * 6);
        g.addColorStop(0, `${pal.dust}${d.alpha})`);
        g.addColorStop(1, `${pal.dust}0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, d.r * 6, 0, Math.PI * 2);
        ctx.fill();
      }

      // ---- Meteors (dark only) ----
      if (theme === "dark") {
        for (let i = meteors.length - 1; i >= 0; i--) {
          const m = meteors[i];
          m.x += m.vx;
          m.y += m.vy;
          m.life++;
          if (m.life > m.max || m.x < -100 || m.y > height + 50) {
            meteors.splice(i, 1);
            continue;
          }
          const alpha = 1 - m.life / m.max;
          const grad = ctx.createLinearGradient(m.x, m.y, m.x - m.vx * 14, m.y - m.vy * 14);
          grad.addColorStop(0, `rgba(255,255,255,${0.9 * alpha})`);
          grad.addColorStop(0.4, `rgba(199, 210, 254,${0.4 * alpha})`);
          grad.addColorStop(1, "rgba(0,0,0,0)");
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(m.x, m.y);
          ctx.lineTo(m.x - m.vx * 14, m.y - m.vy * 14);
          ctx.stroke();
          // Head glow
          ctx.fillStyle = `rgba(255,255,255,${alpha})`;
          ctx.beginPath();
          ctx.arc(m.x, m.y, 1.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
      clearInterval(meteorInterval);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

/** Convert a hex color to rgba(...) with the given alpha. */
function hexToRgba(hex: string, alpha: number): string {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export default HeroUniverseBackground;
