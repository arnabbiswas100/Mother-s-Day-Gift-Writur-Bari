// ─── LibrarySection — Final elegant ending with all four books ─────────────
import { seasons } from "../data/seasons";
import FadeIn from "./FadeIn";
import AmbientParticles from "./AmbientParticles";

function LibraryBookCard({ season, index }) {
  const { book, accentColor, decorColor, textColor, title } = season;

  return (
    <FadeIn delay={0.1 * index} y={16}>
      <div
        className="relative p-4 h-full"
        style={{
          borderTop: `1px solid ${accentColor}25`,
        }}
      >
        {/* Season name */}
        <p
          className="font-bengali text-xs tracking-widest mb-2"
          style={{ color: accentColor, opacity: 0.6 }}
        >
          {book.season}
        </p>

        {/* Book cover placeholder */}
        <div
          className="w-full mb-3 rounded-sm overflow-hidden"
          style={{
            paddingBottom: "130%",
            position: "relative",
            background: `linear-gradient(135deg, ${decorColor}60, ${decorColor}20)`,
            border: `1px solid ${accentColor}20`,
          }}
        >
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ color: accentColor, opacity: 0.3 }}
          >
            <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
              <rect x="1" y="1" width="22" height="30" rx="1" stroke="currentColor" strokeWidth="0.8"/>
              <line x1="4" y1="8" x2="20" y2="8" stroke="currentColor" strokeWidth="0.5"/>
              <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="0.5"/>
              <line x1="4" y1="16" x2="14" y2="16" stroke="currentColor" strokeWidth="0.5"/>
              <line x1="3" y1="1" x2="3" y2="31" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
        </div>

        {/* Title */}
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
          className="font-bengali text-xs tracking-wide group transition-all duration-300"
          style={{ color: accentColor, opacity: 0.7 }}
          aria-label={`${book.title} পড়ো`}
        >
          পড়ো →
        </a>
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
