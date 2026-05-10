// ─── OrnateFrame — Detailed artistic wooden picture frame ──────────────────
// Uses layered SVGs for wood grain, corner carvings, edge molding, and gilt accents.
// Mobile-first: frame thickness scales down gracefully on small viewports.

export default function OrnateFrame({ children }) {
  return (
    <div className="relative" style={{ padding: "0" }}>
      {/* ── SVG Definitions (filters + patterns) ── */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          {/* Wood grain texture */}
          <filter id="woodGrain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.04 0.3"
              numOctaves="8"
              seed="2"
              result="noise"
            />
            <feColorMatrix
              in="noise"
              type="saturate"
              values="0"
              result="mono"
            />
            <feComponentTransfer in="mono" result="grain">
              <feFuncA type="linear" slope="0.18" intercept="0" />
            </feComponentTransfer>
            <feBlend in="SourceGraphic" in2="grain" mode="multiply" />
          </filter>

          {/* Subtle inner glow for depth */}
          <filter id="innerGlow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
            <feOffset dx="0" dy="0" result="offsetBlur" />
            <feFlood floodColor="#3a2008" floodOpacity="0.25" result="color" />
            <feComposite in="color" in2="offsetBlur" operator="in" result="shadow" />
            <feComposite in="SourceGraphic" in2="shadow" operator="over" />
          </filter>

          {/* Carved corner flourish pattern */}
          <symbol id="cornerFlourish" viewBox="0 0 80 80">
            {/* Main spiral scroll */}
            <path
              d="M8,8 C8,8 12,4 20,6 C28,8 30,16 28,22 C26,28 18,30 14,26 C10,22 12,16 16,14 C20,12 24,14 24,18"
              fill="none"
              stroke="#c9a84c"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.7"
            />
            {/* Leaf / acanthus detail */}
            <path
              d="M20,6 C24,2 34,4 38,10 C42,16 38,24 32,24"
              fill="none"
              stroke="#c9a84c"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.5"
            />
            <path
              d="M38,10 C44,8 52,12 54,20 C56,28 50,34 44,32"
              fill="none"
              stroke="#c9a84c"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.4"
            />
            {/* Small inner curl */}
            <path
              d="M14,26 C10,32 14,38 20,38 C26,38 28,32 26,28"
              fill="none"
              stroke="#c9a84c"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.45"
            />
            {/* Dot accents */}
            <circle cx="16" cy="14" r="1.5" fill="#c9a84c" opacity="0.5" />
            <circle cx="28" cy="22" r="1" fill="#c9a84c" opacity="0.4" />
            {/* Extended vine */}
            <path
              d="M6,20 C2,28 4,40 10,46 C16,52 26,50 30,44"
              fill="none"
              stroke="#c9a84c"
              strokeWidth="0.8"
              strokeLinecap="round"
              opacity="0.3"
            />
            <path
              d="M40,6 C48,2 58,8 60,16"
              fill="none"
              stroke="#c9a84c"
              strokeWidth="0.8"
              strokeLinecap="round"
              opacity="0.3"
            />
          </symbol>

          {/* Center top/bottom ornament */}
          <symbol id="edgeOrnament" viewBox="0 0 100 24">
            {/* Central medallion */}
            <ellipse cx="50" cy="12" rx="8" ry="6" fill="none" stroke="#c9a84c" strokeWidth="1" opacity="0.5" />
            <ellipse cx="50" cy="12" rx="4" ry="3" fill="#c9a84c" opacity="0.15" />
            {/* Scrolls left */}
            <path
              d="M42,12 C38,6 28,6 24,10 C20,14 22,18 26,18 C30,18 32,14 30,12"
              fill="none" stroke="#c9a84c" strokeWidth="0.9" strokeLinecap="round" opacity="0.4"
            />
            <path
              d="M24,10 C20,6 12,8 10,12"
              fill="none" stroke="#c9a84c" strokeWidth="0.7" strokeLinecap="round" opacity="0.3"
            />
            {/* Scrolls right */}
            <path
              d="M58,12 C62,6 72,6 76,10 C80,14 78,18 74,18 C70,18 68,14 70,12"
              fill="none" stroke="#c9a84c" strokeWidth="0.9" strokeLinecap="round" opacity="0.4"
            />
            <path
              d="M76,10 C80,6 88,8 90,12"
              fill="none" stroke="#c9a84c" strokeWidth="0.7" strokeLinecap="round" opacity="0.3"
            />
            {/* Small leaves */}
            <path d="M34,8 C36,4 40,4 42,8" fill="none" stroke="#c9a84c" strokeWidth="0.6" opacity="0.35" />
            <path d="M58,8 C60,4 64,4 66,8" fill="none" stroke="#c9a84c" strokeWidth="0.6" opacity="0.35" />
          </symbol>

          {/* Side rail repeating pattern */}
          <pattern id="railPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="none" />
            <path
              d="M10,2 C14,6 14,14 10,18 C6,14 6,6 10,2Z"
              fill="none"
              stroke="#c9a84c"
              strokeWidth="0.5"
              opacity="0.2"
            />
            <circle cx="10" cy="10" r="1.2" fill="#c9a84c" opacity="0.15" />
          </pattern>

          {/* Corner rosette */}
          <symbol id="rosette" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="8" fill="none" stroke="#c9a84c" strokeWidth="0.8" opacity="0.4" />
            <circle cx="12" cy="12" r="4" fill="none" stroke="#c9a84c" strokeWidth="0.6" opacity="0.3" />
            <circle cx="12" cy="12" r="2" fill="#c9a84c" opacity="0.2" />
            {/* Petals */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <line
                key={angle}
                x1="12"
                y1="4"
                x2="12"
                y2="8"
                stroke="#c9a84c"
                strokeWidth="0.6"
                opacity="0.25"
                transform={`rotate(${angle} 12 12)`}
              />
            ))}
          </symbol>
        </defs>
      </svg>

      {/* ── Outermost frame layer — thick carved wood ── */}
      <div
        style={{
          position: "relative",
          padding: "22px",
          borderRadius: "6px",
          background:
            "linear-gradient(145deg, #7A5C18 0%, #9C7528 8%, #6B4F10 20%, #A0792A 35%, #8B6914 50%, #A88430 65%, #705215 80%, #9C7528 92%, #7A5C18 100%)",
          boxShadow:
            "0 0 0 1px rgba(50,30,5,0.6), " +
            "0 0 0 3px rgba(140,105,50,0.25), " +
            "0 0 0 4px rgba(50,30,5,0.3), " +
            "inset 0 3px 6px rgba(200,160,80,0.35), " +
            "inset 0 -3px 6px rgba(30,18,3,0.5), " +
            "inset 3px 0 6px rgba(200,160,80,0.15), " +
            "inset -3px 0 6px rgba(30,18,3,0.25), " +
            "0 12px 40px rgba(30,18,3,0.4), " +
            "0 4px 12px rgba(30,18,3,0.25)",
        }}
      >
        {/* Wood grain overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "6px",
            opacity: 0.5,
            mixBlendMode: "multiply",
            backgroundImage:
              "repeating-linear-gradient(92deg, transparent, transparent 3px, rgba(60,35,5,0.08) 3px, rgba(60,35,5,0.08) 4px, transparent 4px, transparent 8px)",
            pointerEvents: "none",
          }}
        />
        {/* Second grain layer — cross-hatch for depth */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "6px",
            opacity: 0.3,
            mixBlendMode: "overlay",
            backgroundImage:
              "repeating-linear-gradient(178deg, transparent, transparent 6px, rgba(180,140,60,0.1) 6px, rgba(180,140,60,0.1) 7px, transparent 7px, transparent 14px)",
            pointerEvents: "none",
          }}
        />

        {/* ── Corner flourishes ── */}
        {/* Top-left */}
        <svg
          className="absolute"
          style={{ top: "3px", left: "3px", width: "40px", height: "40px", opacity: 0.85 }}
          viewBox="0 0 80 80"
        >
          <use href="#cornerFlourish" />
        </svg>
        {/* Top-right */}
        <svg
          className="absolute"
          style={{ top: "3px", right: "3px", width: "40px", height: "40px", opacity: 0.85, transform: "scaleX(-1)" }}
          viewBox="0 0 80 80"
        >
          <use href="#cornerFlourish" />
        </svg>
        {/* Bottom-left */}
        <svg
          className="absolute"
          style={{ bottom: "3px", left: "3px", width: "40px", height: "40px", opacity: 0.85, transform: "scaleY(-1)" }}
          viewBox="0 0 80 80"
        >
          <use href="#cornerFlourish" />
        </svg>
        {/* Bottom-right */}
        <svg
          className="absolute"
          style={{ bottom: "3px", right: "3px", width: "40px", height: "40px", opacity: 0.85, transform: "scale(-1,-1)" }}
          viewBox="0 0 80 80"
        >
          <use href="#cornerFlourish" />
        </svg>

        {/* ── Edge ornaments — top and bottom center ── */}
        <svg
          className="absolute left-1/2"
          style={{ top: "2px", width: "100px", height: "22px", transform: "translateX(-50%)", opacity: 0.8 }}
          viewBox="0 0 100 24"
        >
          <use href="#edgeOrnament" />
        </svg>
        <svg
          className="absolute left-1/2"
          style={{ bottom: "2px", width: "100px", height: "22px", transform: "translateX(-50%) scaleY(-1)", opacity: 0.8 }}
          viewBox="0 0 100 24"
        >
          <use href="#edgeOrnament" />
        </svg>

        {/* ── Side rail patterns — left and right ── */}
        <svg
          className="absolute"
          style={{ left: "4px", top: "44px", bottom: "44px", width: "14px" }}
          preserveAspectRatio="none"
        >
          <rect width="14" height="100%" fill="url(#railPattern)" />
        </svg>
        <svg
          className="absolute"
          style={{ right: "4px", top: "44px", bottom: "44px", width: "14px" }}
          preserveAspectRatio="none"
        >
          <rect width="14" height="100%" fill="url(#railPattern)" />
        </svg>

        {/* ── Second molding layer ── */}
        <div
          style={{
            position: "relative",
            padding: "4px",
            borderRadius: "3px",
            background:
              "linear-gradient(145deg, #5C3D0A 0%, #7A5C18 30%, #4A2E08 60%, #6B4F10 100%)",
            boxShadow:
              "inset 0 2px 4px rgba(0,0,0,0.45), " +
              "inset 0 -1px 3px rgba(180,140,60,0.3), " +
              "0 1px 2px rgba(180,140,60,0.2)",
          }}
        >
          {/* ── Gilt / gold inner border ── */}
          <div
            style={{
              padding: "2px",
              borderRadius: "2px",
              background:
                "linear-gradient(145deg, #d4a84a, #c49838, #e0bc60, #b8882c, #d4a84a)",
              boxShadow:
                "inset 0 1px 2px rgba(255,220,120,0.4), " +
                "inset 0 -1px 1px rgba(80,50,10,0.5)",
            }}
          >
            {/* ── Innermost dark lip ── */}
            <div
              style={{
                padding: "2px",
                borderRadius: "1px",
                background: "linear-gradient(145deg, #3a2508, #4a3010, #3a2508)",
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.5)",
              }}
            >
              {/* ── Content canvas ── */}
              <div
                className="text-center relative"
                style={{
                  background:
                    "linear-gradient(160deg, #f8f0e2 0%, #f2e8d6 30%, #ede0cc 60%, #e8dcc8 100%)",
                  borderRadius: "1px",
                  boxShadow:
                    "inset 0 0 30px rgba(100,70,30,0.06), " +
                    "inset 0 0 8px rgba(100,70,30,0.04)",
                }}
              >
                {children}
              </div>
            </div>
          </div>
        </div>

        {/* ── Corner rosettes — sit on the molding ── */}
        {[
          { top: "14px", left: "14px" },
          { top: "14px", right: "14px" },
          { bottom: "14px", left: "14px" },
          { bottom: "14px", right: "14px" },
        ].map((pos, i) => (
          <svg
            key={i}
            className="absolute"
            style={{ ...pos, width: "16px", height: "16px" }}
            viewBox="0 0 24 24"
          >
            <use href="#rosette" />
          </svg>
        ))}

        {/* ── Corner nail studs ── */}
        {[
          { top: "6px", left: "6px" },
          { top: "6px", right: "6px" },
          { bottom: "6px", left: "6px" },
          { bottom: "6px", right: "6px" },
        ].map((pos, i) => (
          <div
            key={`nail-${i}`}
            className="absolute"
            style={{
              ...pos,
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "radial-gradient(circle at 35% 35%, #ddb85a, #7a5c18)",
              boxShadow:
                "0 1px 2px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,230,140,0.4)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
