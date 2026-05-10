// ─── AmbientParticles — Bold, cinematic season particles ───────────────────
import { useEffect, useRef } from "react";

export default function AmbientParticles({ color = "#888", count = 18, type = "dust" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animId;
    let particles = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
      init();
    };

    const init = () => {
      particles = Array.from({ length: count }, () => createParticle());
    };

    // ── Parse the hex color into RGB for use in rgba() ──────────
    const hexToRgb = (hex) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return { r, g, b };
    };
    const rgb = hexToRgb(color);

    const createParticle = (fromTop = false) => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      if (type === "rain") {
        return {
          x: Math.random() * w,
          y: fromTop ? Math.random() * -100 : Math.random() * h,
          opacity: Math.random() * 0.5 + 0.2,
          length: Math.random() * 25 + 12,
          thickness: Math.random() * 1.5 + 0.5,
          speedX: -1.5 + Math.random() * 0.5,
          speedY: Math.random() * 8 + 6,
          // Splash properties
          splashTimer: 0,
          splashing: false,
          splashX: 0,
          splashY: 0,
        };
      }

      if (type === "leaf") {
        return {
          x: Math.random() * w,
          y: fromTop ? Math.random() * -60 : Math.random() * h,
          opacity: Math.random() * 0.6 + 0.2,
          size: Math.random() * 6 + 3,
          speedX: (Math.random() - 0.3) * 1.2,
          speedY: Math.random() * 1.0 + 0.3,
          wobble: Math.random() * Math.PI * 2,
          wobbleSpeed: (Math.random() - 0.5) * 0.04,
          wobbleAmp: Math.random() * 2.5 + 1,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.04,
          // Leaf shape variation
          leafType: Math.floor(Math.random() * 3),
          // Color variation
          hueShift: (Math.random() - 0.5) * 30,
        };
      }

      if (type === "snow") {
        return {
          x: Math.random() * w,
          y: fromTop ? Math.random() * -40 : Math.random() * h,
          opacity: Math.random() * 0.7 + 0.2,
          size: Math.random() * 4 + 1.5,
          speedX: (Math.random() - 0.5) * 0.6,
          speedY: Math.random() * 1.0 + 0.3,
          wobble: Math.random() * Math.PI * 2,
          wobbleSpeed: (Math.random() - 0.5) * 0.02,
          wobbleAmp: Math.random() * 1.5 + 0.5,
          // Sparkle
          sparkle: Math.random() * Math.PI * 2,
          sparkleSpeed: Math.random() * 0.05 + 0.02,
        };
      }

      // Dust (default)
      return {
        x: Math.random() * w,
        y: fromTop ? -10 : Math.random() * h,
        opacity: Math.random() * 0.3 + 0.05,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: Math.random() * 0.15 + 0.03,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: (Math.random() - 0.5) * 0.01,
      };
    };

    // ── Drawing functions per type ──────────────────────────────

    const drawRain = (p) => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      // Draw splash if active
      if (p.splashing) {
        const progress = p.splashTimer / 12;
        const splashAlpha = (1 - progress) * 0.4;
        ctx.save();
        ctx.globalAlpha = splashAlpha;
        ctx.strokeStyle = color;
        ctx.lineWidth = 0.5;
        // Small splash arcs
        const spread = progress * 8;
        ctx.beginPath();
        ctx.arc(p.splashX, p.splashY, spread, Math.PI * 1.1, Math.PI * 1.9);
        ctx.stroke();
        // Tiny splash droplets
        for (let i = 0; i < 3; i++) {
          const angle = Math.PI + (i - 1) * 0.4;
          const dist = spread * 0.8;
          const dx = p.splashX + Math.cos(angle) * dist;
          const dy = p.splashY + Math.sin(angle) * dist * 0.5;
          ctx.beginPath();
          ctx.arc(dx, dy, 0.8, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();
        }
        ctx.restore();
        p.splashTimer++;
        if (p.splashTimer > 12) {
          p.splashing = false;
        }
      }

      // Draw rain streak
      ctx.save();
      ctx.globalAlpha = p.opacity;
      // Rain gradient — fades along the streak
      const grad = ctx.createLinearGradient(
        p.x, p.y,
        p.x + p.speedX * 2, p.y + p.length
      );
      grad.addColorStop(0, `rgba(${rgb.r},${rgb.g},${rgb.b},0)`);
      grad.addColorStop(0.3, `rgba(${rgb.r},${rgb.g},${rgb.b},0.8)`);
      grad.addColorStop(1, `rgba(${rgb.r},${rgb.g},${rgb.b},1)`);
      ctx.strokeStyle = grad;
      ctx.lineWidth = p.thickness;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x + p.speedX * 2, p.y + p.length);
      ctx.stroke();
      ctx.restore();

      // Update
      p.x += p.speedX;
      p.y += p.speedY;

      // Reset when off screen — trigger splash
      if (p.y > h + 10) {
        p.splashing = true;
        p.splashTimer = 0;
        p.splashX = p.x;
        p.splashY = h - 5;
        Object.assign(p, createParticle(true));
        p.x = Math.random() * w;
        p.splashing = true; // keep the splash from reset
      }
      if (p.x < -30 || p.x > w + 30) {
        Object.assign(p, createParticle(true));
        p.x = Math.random() * w;
      }
    };

    const drawLeaf = (p) => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);

      // Color with hue variation
      const r = Math.min(255, Math.max(0, rgb.r + p.hueShift));
      const g = Math.min(255, Math.max(0, rgb.g + p.hueShift * 0.5));
      const b = Math.min(255, Math.max(0, rgb.b - p.hueShift * 0.3));
      const leafColor = `rgb(${r},${g},${b})`;

      if (p.leafType === 0) {
        // Classic oval leaf with center vein
        ctx.fillStyle = leafColor;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size * 2.5, p.size, 0, 0, Math.PI * 2);
        ctx.fill();
        // Center vein
        ctx.strokeStyle = `rgba(${r * 0.7},${g * 0.7},${b * 0.7},0.5)`;
        ctx.lineWidth = 0.4;
        ctx.beginPath();
        ctx.moveTo(-p.size * 2, 0);
        ctx.lineTo(p.size * 2, 0);
        ctx.stroke();
      } else if (p.leafType === 1) {
        // Pointed leaf shape
        ctx.fillStyle = leafColor;
        ctx.beginPath();
        ctx.moveTo(-p.size * 2.5, 0);
        ctx.quadraticCurveTo(0, -p.size * 1.2, p.size * 2.5, 0);
        ctx.quadraticCurveTo(0, p.size * 1.2, -p.size * 2.5, 0);
        ctx.fill();
        // Vein
        ctx.strokeStyle = `rgba(${r * 0.6},${g * 0.6},${b * 0.6},0.4)`;
        ctx.lineWidth = 0.3;
        ctx.beginPath();
        ctx.moveTo(-p.size * 2, 0);
        ctx.lineTo(p.size * 2, 0);
        ctx.stroke();
      } else {
        // Round/fat leaf
        ctx.fillStyle = leafColor;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size * 1.8, p.size * 1.4, 0, 0, Math.PI * 2);
        ctx.fill();
        // Small stem
        ctx.strokeStyle = `rgba(${r * 0.5},${g * 0.5},${b * 0.5},0.3)`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(p.size * 1.8, 0);
        ctx.lineTo(p.size * 2.5, -p.size * 0.3);
        ctx.stroke();
      }

      ctx.restore();

      // Update — gentle swaying fall
      p.wobble += p.wobbleSpeed;
      p.x += p.speedX + Math.sin(p.wobble) * p.wobbleAmp;
      p.y += p.speedY;
      p.rotation += p.rotSpeed;

      if (p.y > h + 30 || p.x < -40 || p.x > w + 40) {
        Object.assign(p, createParticle(true));
        p.x = Math.random() * w;
      }
    };

    const drawSnow = (p) => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      ctx.save();
      // Sparkle effect — gentle pulsing opacity
      p.sparkle += p.sparkleSpeed;
      const sparkleAlpha = p.opacity * (0.7 + 0.3 * Math.sin(p.sparkle));
      ctx.globalAlpha = sparkleAlpha;

      // Soft glowing snowflake
      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2.5);
      grad.addColorStop(0, `rgba(${rgb.r},${rgb.g},${rgb.b},1)`);
      grad.addColorStop(0.4, `rgba(${rgb.r},${rgb.g},${rgb.b},0.6)`);
      grad.addColorStop(1, `rgba(${rgb.r},${rgb.g},${rgb.b},0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Inner bright core
      ctx.globalAlpha = sparkleAlpha * 0.9;
      ctx.fillStyle = `rgba(255,255,255,0.9)`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * 0.6, 0, Math.PI * 2);
      ctx.fill();

      // Tiny cross for larger flakes — subtle crystalline hint
      if (p.size > 3) {
        ctx.globalAlpha = sparkleAlpha * 0.3;
        ctx.strokeStyle = `rgba(255,255,255,0.8)`;
        ctx.lineWidth = 0.3;
        const s = p.size * 1.5;
        ctx.beginPath();
        ctx.moveTo(p.x - s, p.y);
        ctx.lineTo(p.x + s, p.y);
        ctx.moveTo(p.x, p.y - s);
        ctx.lineTo(p.x, p.y + s);
        ctx.moveTo(p.x - s * 0.7, p.y - s * 0.7);
        ctx.lineTo(p.x + s * 0.7, p.y + s * 0.7);
        ctx.moveTo(p.x + s * 0.7, p.y - s * 0.7);
        ctx.lineTo(p.x - s * 0.7, p.y + s * 0.7);
        ctx.stroke();
      }

      ctx.restore();

      // Update — gentle drifting descent
      p.wobble += p.wobbleSpeed;
      p.x += p.speedX + Math.sin(p.wobble) * p.wobbleAmp;
      p.y += p.speedY;

      if (p.y > h + 20 || p.x < -20 || p.x > w + 20) {
        Object.assign(p, createParticle(true));
        p.x = Math.random() * w;
      }
    };

    const drawDust = (p) => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      ctx.save();
      ctx.globalAlpha = p.opacity;
      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
      grad.addColorStop(0, color);
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      p.wobble += p.wobbleSpeed;
      p.x += p.speedX + Math.sin(p.wobble) * 0.3;
      p.y += p.speedY;

      if (p.y > h + 20 || p.x < -20 || p.x > w + 20) {
        Object.assign(p, createParticle(true));
        p.x = Math.random() * w;
      }
    };

    // ── Main animation loop ────────────────────────────────────
    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      particles.forEach((p) => {
        if (type === "rain") drawRain(p);
        else if (type === "leaf") drawLeaf(p);
        else if (type === "snow") drawSnow(p);
        else drawDust(p);
      });

      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, [color, count, type]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
