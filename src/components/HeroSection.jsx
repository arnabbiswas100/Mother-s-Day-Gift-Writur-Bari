// ─── HeroSection — Cinematic landing page ──────────────────────────────────
import { motion } from "framer-motion";
import AmbientParticles from "./AmbientParticles";
import OrnateFrame from "./OrnateFrame";

export default function HeroSection() {
  const scrollToFirst = () => {
    document.getElementById("summer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #f5ede0 0%, #e8ddd0 40%, #d5c8b8 100%)",
      }}
    >
      {/* Ambient dust particles */}
      <AmbientParticles color="#b09070" count={16} type="dust" />

      {/* Top decorative line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #a07840, transparent)" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
      />

      {/* Ornate Wooden Frame + Content */}
      <motion.div
        className="relative z-10 mx-4 sm:mx-6"
        style={{ maxWidth: "400px", width: "100%" }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <OrnateFrame>
          <div className="px-5 py-10 sm:px-8 sm:py-14">
            {/* Ornament */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="h-px w-8" style={{ background: "#a07840", opacity: 0.5 }} />
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#a07840", opacity: 0.6 }}
              />
              <div className="h-px w-8" style={{ background: "#a07840", opacity: 0.5 }} />
            </motion.div>

            {/* Bengali title */}
            <motion.h1
              className="font-bengali text-3xl sm:text-4xl leading-tight mb-2"
              style={{ color: "#2a1f10" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              ঋতুর বাড়ি
            </motion.h1>

            {/* English title */}
            <motion.p
              className="font-english italic text-base sm:text-lg mb-6 opacity-50"
              style={{
                color: "#4a3a28",
                fontFamily: "'Cormorant Garamond', serif",
              }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 0.5, y: 0 }}
              transition={{ duration: 1.2, delay: 1.0 }}
            >
              The House of Seasons
            </motion.p>

            {/* Divider */}
            <motion.div
              className="w-px h-8 mx-auto mb-6 opacity-30"
              style={{ background: "#a07840" }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            />

            {/* Subtitle */}
            <motion.p
              className="font-bengali text-xs sm:text-sm leading-loose opacity-55"
              style={{ color: "#4a3a28" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.55 }}
              transition={{ duration: 1.5, delay: 1.4 }}
            >
              ছয় ঋতুর মধ্যে দিয়ে একটি জীবনের যাত্রা —
              <br />
              শৈশব থেকে স্থিরতা পর্যন্ত।
            </motion.p>
          </div>
        </OrnateFrame>
      </motion.div>

      {/* Scroll cue — outside the frame */}
      <motion.button
        onClick={scrollToFirst}
        className="relative z-10 mt-8 flex flex-col items-center gap-2 mx-auto group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        aria-label="নিচে স্ক্রোল করুন"
      >
        <span
          className="font-bengali text-xs tracking-widest opacity-30"
          style={{ color: "#4a3a28" }}
        >
          এগিয়ে চলো
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 2v12M3 10l5 5 5-5"
              stroke="#a07840"
              strokeWidth="0.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.5"
            />
          </svg>
        </motion.div>
      </motion.button>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #e8ddd0)",
        }}
      />
    </section>
  );
}

