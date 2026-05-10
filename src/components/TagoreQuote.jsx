// ─── TagoreQuote — Bengali verse with ornamental styling ───────────────────
import FadeIn from "./FadeIn";

export default function TagoreQuote({ quote, attribution, textColor, accentColor }) {
  const lines = quote.split("\n");

  return (
    <FadeIn delay={0.3} y={12}>
      <div className="relative py-6 px-2">
        {/* Left ornament line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-px"
          style={{ background: `linear-gradient(to bottom, transparent, ${accentColor}50, transparent)` }}
        />

        <div className="pl-5">
          {lines.map((line, i) => (
            <p
              key={i}
              className="font-bengali text-base sm:text-lg leading-loose"
              style={{
                color: textColor,
                opacity: 0.7,
                fontStyle: "italic",
              }}
            >
              {line}
            </p>
          ))}

          <p
            className="font-bengali text-xs mt-3 tracking-widest"
            style={{ color: textColor, opacity: 0.35 }}
          >
            {attribution}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}
