// ─── LibrarySection — Final elegant ending with all four books ─────────────
import { seasons } from "../data/seasons";
import FadeIn from "./FadeIn";
import AmbientParticles from "./AmbientParticles";

function LibraryBookCard({ season, index }) {
  const { book, accentColor, decorColor, textColor, title } = season;

  return (
    <FadeIn delay={0.15 * index} y={24}>
      <div
        className="relative h-full group"
        style={{ perspective: "600px" }}
      >
        {/* 3D Book container */}
        <div
          className="relative p-4 h-full transition-transform duration-500 ease-out"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Season label */}
          <p
            className="font-bengali text-xs tracking-widest mb-3"
            style={{ color: accentColor, opacity: 0.7 }}
          >
            {book.season}
          </p>

          {/* Book cover with 3D depth */}
          <div
            className="relative w-full mb-4 transition-all duration-500 ease-out group-hover:-translate-y-1"
            style={{
              paddingBottom: "140%",
              borderRadius: "2px 6px 6px 2px",
              background: `linear-gradient(155deg, ${accentColor}18 0%, ${decorColor}50 30%, ${decorColor}30 60%, ${accentColor}12 100%)`,
              boxShadow:
                `4px 4px 12px rgba(0,0,0,0.2), ` +
                `1px 1px 4px rgba(0,0,0,0.15), ` +
                `inset -1px 0 3px rgba(255,255,255,0.1), ` +
                `8px 8px 20px ${accentColor}15`,
              transformOrigin: "left center",
              transform: "rotateY(-4deg)",
            }}
          >
            {/* Book spine edge */}
            <div
              className="absolute top-0 bottom-0 left-0"
              style={{
                width: "8px",
                background: `linear-gradient(to right, ${accentColor}50, ${accentColor}25, ${decorColor}30)`,
                borderRadius: "2px 0 0 2px",
                boxShadow: `inset -1px 0 3px rgba(0,0,0,0.15), inset 1px 0 2px rgba(255,255,255,0.1)`,
              }}
            />

            {/* Decorative cover design */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              {/* Top decorative border */}
              <div
                className="absolute top-3 left-4 right-3"
                style={{ borderTop: `1px solid ${accentColor}30`, borderLeft: `1px solid ${accentColor}15`, borderRight: `1px solid ${accentColor}15`, height: "20px", borderRadius: "1px" }}
              />

              {/* Center ornament */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ opacity: 0.35 }}>
                <circle cx="16" cy="16" r="10" stroke={accentColor} strokeWidth="0.6" />
                <circle cx="16" cy="16" r="6" stroke={accentColor} strokeWidth="0.5" />
                <circle cx="16" cy="16" r="2.5" fill={accentColor} opacity="0.4" />
                <line x1="16" y1="6" x2="16" y2="10" stroke={accentColor} strokeWidth="0.4" />
                <line x1="16" y1="22" x2="16" y2="26" stroke={accentColor} strokeWidth="0.4" />
                <line x1="6" y1="16" x2="10" y2="16" stroke={accentColor} strokeWidth="0.4" />
                <line x1="22" y1="16" x2="26" y2="16" stroke={accentColor} strokeWidth="0.4" />
              </svg>

              {/* Book title on cover */}
              <p
                className="font-bengali text-sm mt-3 text-center leading-snug"
                style={{ color: accentColor, opacity: 0.5 }}
              >
                {book.title}
              </p>

              {/* Bottom decorative border */}
              <div
                className="absolute bottom-3 left-4 right-3"
                style={{ borderBottom: `1px solid ${accentColor}30`, borderLeft: `1px solid ${accentColor}15`, borderRight: `1px solid ${accentColor}15`, height: "20px", borderRadius: "1px" }}
              />
            </div>

            {/* Page edges — visible on right side */}
            <div
              className="absolute top-1 bottom-1"
              style={{
                right: "-3px",
                width: "3px",
                background: `repeating-linear-gradient(to bottom, #f0e8d8 0px, #f0e8d8 1px, #e0d4c0 1px, #e0d4c0 2px)`,
                borderRadius: "0 1px 1px 0",
                boxShadow: "1px 0 2px rgba(0,0,0,0.1)",
              }}
            />

            {/* Bottom shadow to simulate book sitting on surface */}
            <div
              className="absolute -bottom-2 left-1 right-0"
              style={{
                height: "8px",
                background: `radial-gradient(ellipse at center, rgba(0,0,0,0.15) 0%, transparent 70%)`,
                filter: "blur(2px)",
              }}
            />
          </div>

          {/* Title below */}
          <h4
            className="font-bengali text-base leading-tight mb-1"
            style={{ color: "#2a1f10" }}
          >
            {book.title}
          </h4>
          <p
            className="font-english italic text-xs mb-3 opacity-40"
            style={{ color: "#4a3a28", fontFamily: "'Cormorant Garamond', serif" }}
          >
            {book.titleEnglish}
          </p>

          {/* Read link */}
          <a
            href={book.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bengali text-xs tracking-wide inline-flex items-center gap-1 transition-all duration-300 group-hover:gap-2"
            style={{ color: accentColor, opacity: 0.8 }}
            aria-label={`${book.title} পড়ো`}
          >
            পড়ো <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </div>
    </FadeIn>
  );
}

export default function LibrarySection() {
  return (
    <section
      id="library"
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #f0e8d8 0%, #e4d8c4 50%, #d8ccb8 100%)",
      }}
    >
      {/* Floating dust particles for library atmosphere */}
      <AmbientParticles color="#b09870" count={12} type="dust" />

      <div className="relative z-10 max-w-sm mx-auto px-5 py-16">

        {/* Section header */}
        <FadeIn delay={0} y={20}>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="h-px flex-1"
                style={{
                  background: "linear-gradient(to right, transparent, rgba(120,90,50,0.4))",
                }}
              />
              <div
                className="w-1 h-1 rounded-full"
                style={{ background: "#a07840", opacity: 0.5 }}
              />
            </div>

            <p
              className="font-bengali text-xs tracking-widest mb-2 opacity-40"
              style={{ color: "#2a1f10" }}
            >
              সমাপ্তি
            </p>

            <h2
              className="font-bengali text-5xl sm:text-6xl leading-none mb-0"
              style={{ color: "#2a1f10" }}
            >
              গ্রন্থাগার
            </h2>
          </div>
        </FadeIn>

        {/* Books grid — 2 columns on mobile */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          {seasons.map((season, i) => (
            <LibraryBookCard key={season.id} season={season} index={i} />
          ))}
        </div>

        {/* Ending ornament */}
        <FadeIn delay={0.5} y={8}>
          <div className="text-center">
            {/* Ornamental divider */}
            <div className="flex items-center gap-4 mb-8">
              <div
                className="h-px flex-1"
                style={{ background: "linear-gradient(to right, transparent, rgba(120,90,50,0.3))" }}
              />
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="rounded-full"
                    style={{
                      width: i === 1 ? "5px" : "3px",
                      height: i === 1 ? "5px" : "3px",
                      background: "#a07840",
                      opacity: 0.4,
                    }}
                  />
                ))}
              </div>
              <div
                className="h-px flex-1"
                style={{ background: "linear-gradient(to left, transparent, rgba(120,90,50,0.3))" }}
              />
            </div>

            {/* Ending text */}
            <p
              className="font-bengali text-sm leading-loose opacity-55 mb-2"
              style={{ color: "#2a1f10" }}
            >
              কিছু ঘর থেকে যায় —
            </p>
            <p
              className="font-bengali text-sm leading-loose opacity-40"
              style={{ color: "#2a1f10" }}
            >
              ঋতুর মধ্যে, বইয়ের পাতায়, স্মৃতির ভেতরে।
            </p>

            {/* Final ornament */}
            <div className="mt-10 flex justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="2" fill="#a07840" opacity="0.3"/>
                <circle cx="12" cy="12" r="6" stroke="#a07840" strokeWidth="0.5" opacity="0.2"/>
                <circle cx="12" cy="12" r="10" stroke="#a07840" strokeWidth="0.3" opacity="0.1"/>
              </svg>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
