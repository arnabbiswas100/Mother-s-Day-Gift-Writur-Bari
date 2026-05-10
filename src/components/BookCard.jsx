// ─── BookCard — Featured book with PDF link ────────────────────────────────
import FadeIn from "./FadeIn";

export default function BookCard({ book, textColor, accentColor, decorColor }) {
  return (
    <FadeIn delay={0.5} y={16}>
      <div
        className="relative p-5 sm:p-6"
        style={{
          borderTop: `1px solid ${accentColor}30`,
          borderBottom: `1px solid ${accentColor}30`,
        }}
      >
        {/* Season tag */}
        <p
          className="font-bengali text-xs tracking-widest mb-3 opacity-50"
          style={{ color: textColor }}
        >
          {book.season}
        </p>

        {/* Book title */}
        <h3
          className="font-bengali text-2xl sm:text-3xl mb-1 leading-tight"
          style={{ color: textColor }}
        >
          {book.title}
        </h3>
        <p
          className="font-english italic text-sm mb-3 opacity-40"
          style={{ color: textColor, fontFamily: "'Cormorant Garamond', serif" }}
        >
          {book.titleEnglish}
        </p>

        {/* Description */}
        <p
          className="font-bengali text-sm leading-relaxed mb-5 opacity-60"
          style={{ color: textColor }}
        >
          {book.description}
        </p>

        {/* Read button */}
        <a
          href={book.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-bengali text-sm tracking-wide group transition-all duration-300"
          style={{ color: accentColor }}
          aria-label={`${book.title} পড়ো`}
        >
          <span className="relative">
            বইটি পড়ো
            <span
              className="absolute -bottom-px left-0 w-0 group-hover:w-full transition-all duration-500 h-px"
              style={{ background: accentColor }}
            />
          </span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </FadeIn>
  );
}
