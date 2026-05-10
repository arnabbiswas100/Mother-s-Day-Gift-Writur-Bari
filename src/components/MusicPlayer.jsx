// ─── MusicPlayer — Ambient background music with toggle ────────────────────
import { useState, useRef, useEffect } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Attempt autoplay on first user interaction anywhere on the page
  useEffect(() => {
    const startMusic = () => {
      if (!hasInteracted && audioRef.current) {
        audioRef.current.volume = 0.35;
        audioRef.current.play().then(() => {
          setPlaying(true);
          setHasInteracted(true);
        }).catch(() => {
          // Autoplay blocked — user must click the button
        });
      }
    };

    // Listen for any user gesture
    const events = ["click", "touchstart", "scroll", "keydown"];
    events.forEach((e) => window.addEventListener(e, startMusic, { once: true }));

    return () => {
      events.forEach((e) => window.removeEventListener(e, startMusic));
    };
  }, [hasInteracted]);

  const toggle = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.volume = 0.35;
      audioRef.current.play().then(() => {
        setPlaying(true);
        setHasInteracted(true);
      }).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music.m4a" loop preload="auto" />

      <button
        onClick={toggle}
        className="fixed bottom-5 left-5 z-50 flex items-center justify-center transition-all duration-500 group"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: playing
            ? "rgba(160,120,64,0.15)"
            : "rgba(160,120,64,0.08)",
          border: `1px solid rgba(160,120,64,${playing ? 0.3 : 0.15})`,
          backdropFilter: "blur(8px)",
        }}
        aria-label={playing ? "সঙ্গীত বন্ধ করো" : "সঙ্গীত চালাও"}
        title={playing ? "Pause music" : "Play music"}
      >
        {playing ? (
          /* Animated sound bars when playing */
          <div className="flex items-end gap-[2px]" style={{ height: "14px" }}>
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-full"
                style={{
                  width: "2px",
                  background: "rgba(160,120,64,0.7)",
                  animation: `musicBar 1.2s ease-in-out ${i * 0.15}s infinite alternate`,
                }}
              />
            ))}
          </div>
        ) : (
          /* Muted icon when paused */
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{ opacity: 0.5 }}
          >
            <path
              d="M2 5.5h2.5L8 2.5v11L4.5 10.5H2a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5z"
              fill="rgba(160,120,64,0.6)"
            />
            <line
              x1="10"
              y1="4"
              x2="14"
              y2="12"
              stroke="rgba(160,120,64,0.5)"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <line
              x1="14"
              y1="4"
              x2="10"
              y2="12"
              stroke="rgba(160,120,64,0.5)"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {/* CSS keyframes for the sound bars */}
      <style>{`
        @keyframes musicBar {
          0% { height: 3px; }
          100% { height: 14px; }
        }
      `}</style>
    </>
  );
}
