// ─── ImageFrame — Rabindrik / Shantiniketan-inspired ornamental frame ──────
import { useState } from "react";

// ── Corner Ornament SVG — আলপনা-inspired floral/paisley corner ──────────────
function CornerOrnament({ color, position }) {
  // Rotation for each corner
  const rotations = {
    topLeft: "rotate(0)",
    topRight: "rotate(90 20 20)",
    bottomRight: "rotate(180 20 20)",
    bottomLeft: "rotate(270 20 20)",
  };

  const positionStyles = {
    topLeft: { top: -1, left: -1 },
    topRight: { top: -1, right: -1 },
    bottomRight: { bottom: -1, right: -1 },
    bottomLeft: { bottom: -1, left: -1 },
  };

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className="absolute"
      style={{ ...positionStyles[position], zIndex: 4 }}
    >
      <g transform={rotations[position]} opacity="0.7">
        {/* Main curved flourish */}
        <path
          d="M2 2 C2 2, 2 14, 8 20 C14 26, 20 20, 20 14 C20 10, 16 8, 14 10 C12 12, 14 16, 18 14"
          stroke={color}
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
        {/* Outer arc */}
        <path
          d="M0 8 C4 6, 6 4, 8 0"
          stroke={color}
          strokeWidth="0.6"
          fill="none"
          strokeLinecap="round"
        />
        {/* Inner dot cluster — like alpona petals */}
        <circle cx="6" cy="6" r="1.5" fill={color} opacity="0.5" />
        <circle cx="10" cy="3" r="1" fill={color} opacity="0.35" />
        <circle cx="3" cy="10" r="1" fill={color} opacity="0.35" />
        {/* Tiny leaf/petal accent */}
        <path
          d="M12 5 Q14 2 16 4 Q14 6 12 5Z"
          fill={color}
          opacity="0.3"
        />
        <path
          d="M5 12 Q2 14 4 16 Q6 14 5 12Z"
          fill={color}
          opacity="0.3"
        />
      </g>
    </svg>
  );
}

// ── Side Ornament — small repeating motif along frame edges ──────────────────
function SideOrnament({ color, side }) {
  const isHorizontal = side === "top" || side === "bottom";

  const positionStyles = {
    top: { top: -3, left: "50%", transform: "translateX(-50%)" },
    bottom: { bottom: -3, left: "50%", transform: "translateX(-50%)" },
    left: { left: -3, top: "50%", transform: "translateY(-50%)" },
    right: { right: -3, top: "50%", transform: "translateY(-50%)" },
  };

  if (isHorizontal) {
    return (
      <svg
        width="60"
        height="8"
        viewBox="0 0 60 8"
        fill="none"
        className="absolute"
        style={{ ...positionStyles[side], zIndex: 4 }}
      >
        {/* Central diamond */}
        <path d="M30 0 L34 4 L30 8 L26 4Z" fill={color} opacity="0.3" />
        {/* Side dots */}
        <circle cx="20" cy="4" r="1.2" fill={color} opacity="0.25" />
        <circle cx="40" cy="4" r="1.2" fill={color} opacity="0.25" />
        {/* Tiny flanking dots */}
        <circle cx="14" cy="4" r="0.6" fill={color} opacity="0.2" />
        <circle cx="46" cy="4" r="0.6" fill={color} opacity="0.2" />
        {/* Connecting whiskers */}
        <line x1="22" y1="4" x2="25" y2="4" stroke={color} strokeWidth="0.4" opacity="0.2" />
        <line x1="35" y1="4" x2="38" y2="4" stroke={color} strokeWidth="0.4" opacity="0.2" />
      </svg>
    );
  }

  return (
    <svg
      width="8"
      height="60"
      viewBox="0 0 8 60"
      fill="none"
      className="absolute"
      style={{ ...positionStyles[side], zIndex: 4 }}
    >
      {/* Central diamond */}
      <path d="M0 30 L4 26 L8 30 L4 34Z" fill={color} opacity="0.3" />
      {/* Side dots */}
      <circle cx="4" cy="20" r="1.2" fill={color} opacity="0.25" />
      <circle cx="4" cy="40" r="1.2" fill={color} opacity="0.25" />
      {/* Tiny flanking dots */}
      <circle cx="4" cy="14" r="0.6" fill={color} opacity="0.2" />
      <circle cx="4" cy="46" r="0.6" fill={color} opacity="0.2" />
      {/* Connecting whiskers */}
      <line x1="4" y1="22" x2="4" y2="25" stroke={color} strokeWidth="0.4" opacity="0.2" />
      <line x1="4" y1="35" x2="4" y2="38" stroke={color} strokeWidth="0.4" opacity="0.2" />
    </svg>
  );
}

export default function ImageFrame({ src, alt, accentColor, decorColor, season }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const showPlaceholder = error || !src;
  const isDark = season === "monsoon";
  const frameColor = isDark ? "#8aacc8" : accentColor;
  const bgFrame = isDark ? "rgba(200,216,232,0.08)" : `${decorColor}18`;

  return (
    <div className="relative w-full" style={{ paddingBottom: "115%" }}>
      {/* ── Outer shadow frame — aged parchment feel ─────────────── */}
      <div
        className="absolute rounded-sm"
        style={{
          inset: "-6px",
          border: `1px solid ${frameColor}18`,
          background: bgFrame,
          zIndex: 0,
        }}
      />

      {/* ── Main ornamental border ──────────────────────────────── */}
      <div
        className="absolute rounded-sm"
        style={{
          inset: "-2px",
          border: `2px solid ${frameColor}40`,
          zIndex: 2,
        }}
      />

      {/* ── Inner thin border — double-line classic effect ──────── */}
      <div
        className="absolute rounded-sm"
        style={{
          inset: "4px",
          border: `1px solid ${frameColor}25`,
          zIndex: 3,
        }}
      />

      {/* ── Corner ornaments — আলপনা inspired ──────────────────── */}
      <div className="absolute" style={{ inset: "-2px", zIndex: 4, pointerEvents: "none" }}>
        <CornerOrnament color={frameColor} position="topLeft" />
        <CornerOrnament color={frameColor} position="topRight" />
        <CornerOrnament color={frameColor} position="bottomRight" />
        <CornerOrnament color={frameColor} position="bottomLeft" />
      </div>

      {/* ── Side ornaments — midpoint decorations ─────────────── */}
      <div className="absolute" style={{ inset: "-2px", zIndex: 4, pointerEvents: "none" }}>
        <SideOrnament color={frameColor} side="top" />
        <SideOrnament color={frameColor} side="bottom" />
        <SideOrnament color={frameColor} side="left" />
        <SideOrnament color={frameColor} side="right" />
      </div>

      {/* ── Image container ────────────────────────────────────── */}
      <div
        className="absolute inset-0 overflow-hidden rounded-sm"
        style={{
          zIndex: 1,
          background: showPlaceholder
            ? `linear-gradient(135deg, ${decorColor}50, ${decorColor}20)`
            : "transparent",
        }}
      >
        {showPlaceholder ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div style={{ color: accentColor, opacity: 0.4 }}>
              <svg width="32" height="40" viewBox="0 0 32 40" fill="none">
                <line x1="16" y1="0" x2="16" y2="40" stroke="currentColor" strokeWidth="0.5" />
                <line x1="0" y1="20" x2="32" y2="20" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="16" cy="20" r="5" stroke="currentColor" strokeWidth="0.5" fill="none" />
                <circle cx="16" cy="20" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <p
              className="text-xs tracking-widest font-bengali"
              style={{ color: accentColor, opacity: 0.5 }}
            >
              ছবি
            </p>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{ opacity: loaded ? 1 : 0 }}
          />
        )}
      </div>

      {/* ── Bottom caption strip — classic framed photo feel ──── */}
      <div
        className="absolute left-0 right-0 flex justify-center"
        style={{ bottom: "-28px", zIndex: 5 }}
      >
        <div className="flex items-center gap-2">
          <div
            className="h-px w-6"
            style={{ background: `linear-gradient(to right, transparent, ${frameColor}40)` }}
          />
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path d="M4 0 L6 4 L4 8 L2 4Z" fill={frameColor} opacity="0.3" />
          </svg>
          <div
            className="h-px w-6"
            style={{ background: `linear-gradient(to left, transparent, ${frameColor}40)` }}
          />
        </div>
      </div>
    </div>
  );
}
