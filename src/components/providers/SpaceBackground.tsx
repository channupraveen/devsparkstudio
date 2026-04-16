import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

/**
 * Canvas-based particle starfield. Light, gpu-friendly,
 * fades out in light mode.
 */
const SpaceBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
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

    // Parallax from mouse
    const mouse = { x: width / 2, y: height / 2, tx: width / 2, ty: height / 2 };
    const onMove = (e: MouseEvent) => {
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    type Star = { x: number; y: number; z: number; r: number; tw: number; tp: number };
    const stars: Star[] = [];
    const count = Math.min(180, Math.floor((width * height) / 12000));
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 0.8 + 0.2, // depth (0.2 - 1)
        r: Math.random() * 1.2 + 0.3,
        tw: Math.random() * Math.PI * 2,
        tp: 0.004 + Math.random() * 0.012,
      });
    }

    // Shooting stars
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
      // Parallax easing
      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;
      const px = (mouse.x - width / 2) / width;
      const py = (mouse.y - height / 2) / height;

      ctx.clearRect(0, 0, width, height);

      const isLight = theme === "light";
      if (isLight) {
        // soft dotted pattern in light mode (very subtle)
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
        // Dark mode starfield
        for (const s of stars) {
          s.tw += s.tp;
          const twinkle = 0.5 + Math.sin(s.tw) * 0.5;
          const ox = px * 40 * s.z;
          const oy = py * 40 * s.z;
          const x = s.x + ox;
          const y = s.y + oy;
          // Glow
          const radius = s.r * (1 + twinkle * 0.5);
          const g = ctx.createRadialGradient(x, y, 0, x, y, radius * 4);
          g.addColorStop(0, `rgba(255,255,255,${0.7 * twinkle * s.z})`);
          g.addColorStop(0.5, `rgba(168,139,250,${0.2 * twinkle * s.z})`);
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

        // Meteors
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
          // Head glow
          ctx.fillStyle = `rgba(255,255,255,${alpha})`;
          ctx.beginPath();
          ctx.arc(m.x, m.y, 1.6, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      clearInterval(meteorInterval);
    };
  }, [theme]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    >
      {/* Radial gradient tint */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(ellipse at top, rgba(99,102,241,0.12), transparent 50%), radial-gradient(ellipse at bottom, rgba(168,85,247,0.1), transparent 50%)"
              : "radial-gradient(ellipse at top, rgba(99,102,241,0.06), transparent 50%), radial-gradient(ellipse at bottom, rgba(168,85,247,0.05), transparent 50%)",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
};

export default SpaceBackground;
