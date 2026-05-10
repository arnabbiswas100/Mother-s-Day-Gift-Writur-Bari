// ─── SeasonSection — Reusable section for each of the four seasons ──────────
import AmbientParticles from "./AmbientParticles";
import FadeIn from "./FadeIn";
import ImageFrame from "./ImageFrame";
import TagoreQuote from "./TagoreQuote";
import BookCard from "./BookCard";

// Particle type per season
const PARTICLE_TYPE = {
  basonto: "flower",
  summer: "leaf",
  monsoon: "rain",
  autumn: "leaf",
  hemonto: "wind",
  winter: "snow",
};

// Particle count per season — bold and prominent
const PARTICLE_COUNT = {
  basonto: 40,
  summer: 45,
  monsoon: 80,
  autumn: 50,
  hemonto: 35,
  winter: 55,
};

export default function SeasonSection({ season }) {
  const {
    id,
    title,
    subtitle,
    tagoreQuote,
    tagoreAttribution,
    reflectionBengali,
    book,
    image,
    bgGradient,
    particleColor,
    textColor,
    accentColor,
    decorColor,
  } = season;

  const isDark = id === "monsoon";

  return (
    <section
      id={id}
      className={`relative min-h-screen overflow-hidden bg-gradient-to-b ${bgGradient}`}
    >
      {/* Ambient particles */}
      <AmbientParticles
        color={particleColor}
        count={PARTICLE_COUNT[id]}
        type={PARTICLE_TYPE[id]}
      />

      {/* Monsoon — dark atmospheric overlay */}
      {id === "monsoon" && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(74,111,160,0.15) 0%, transparent 70%)",
            zIndex: 0,
          }}
        />
      )}

      {/* Winter — soft warm lamp glow */}
      {id === "winter" && (
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,220,150,0.12) 0%, transparent 70%)",
            zIndex: 0,
          }}
        />
      )}

      {/* Main content */}
      <div className="relative z-10 max-w-sm mx-auto px-5 py-16 sm:py-20">

        {/* Section header */}
        <FadeIn delay={0} y={20}>
          <div className="mb-10">
            {/* Decorative top ornament */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="h-px flex-1"
                style={{ background: `linear-gradient(to right, transparent, ${accentColor}40)` }}
              />
              <div
                className="w-1 h-1 rounded-full"
                style={{ background: accentColor, opacity: 0.5 }}
              />
            </div>

            {/* Season subtitle (theme) */}
            <p
              className="font-bengali text-xs tracking-widest mb-2"
              style={{ color: textColor, opacity: 0.4 }}
            >
              {subtitle}
            </p>

            {/* Large Bengali season title */}
            <h2
              className="font-bengali text-6xl sm:text-7xl leading-none mb-0"
              style={{ color: textColor }}
            >
              {title}
            </h2>
          </div>
        </FadeIn>

        {/* Mother's image */}
        <FadeIn delay={0.15} y={16}>
          <div className="mb-10">
            <ImageFrame
              src={image}
              alt={`${title} — মায়ের স্মৃতি`}
              accentColor={accentColor}
              decorColor={decorColor}
              season={id}
            />
          </div>
        </FadeIn>

        {/* Tagore quote */}
        <div className="mb-8">
          <TagoreQuote
            quote={tagoreQuote}
            attribution={tagoreAttribution}
            textColor={textColor}
            accentColor={accentColor}
          />
        </div>

        {/* Reflective paragraph in Bengali */}
        <FadeIn delay={0.4} y={12}>
          <p
            className="font-bengali text-sm sm:text-base leading-loose mb-10"
            style={{ color: textColor, opacity: 0.65 }}
          >
            {reflectionBengali}
          </p>
        </FadeIn>

        {/* Book card */}
        <BookCard
          book={book}
          textColor={textColor}
          accentColor={accentColor}
          decorColor={decorColor}
        />
      </div>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: `linear-gradient(to bottom, transparent, rgba(0,0,0,0.04))` }}
      />
    </section>
  );
}
