// ─── NavDots — Fixed side navigation for season sections ───────────────────
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "hero", label: "সূচনা" },
  { id: "basonto", label: "বসন্ত" },
  { id: "summer", label: "গ্রীষ্ম" },
  { id: "monsoon", label: "বর্ষা" },
  { id: "autumn", label: "শরৎ" },
  { id: "hemonto", label: "হেমন্ত" },
  { id: "winter", label: "শীত" },
  { id: "library", label: "গ্রন্থাগার" },
];

export default function NavDots() {
  const [active, setActive] = useState("hero");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show nav after first scroll
    const onScroll = () => setVisible(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);

    // Intersection observer for section detection
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 transition-opacity duration-700"
      style={{ opacity: visible ? 1 : 0 }}
      role="navigation"
      aria-label="ঋতু নেভিগেশন"
    >
      {NAV_ITEMS.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          aria-label={label}
          className="group flex items-center justify-end gap-2"
        >
          {/* Label — appears on hover */}
          <span
            className="font-bengali text-xs opacity-0 group-hover:opacity-70 transition-all duration-300 translate-x-1 group-hover:translate-x-0 whitespace-nowrap"
            style={{
              color: active === id ? "#a07840" : "#888",
              fontSize: "10px",
            }}
          >
            {label}
          </span>

          {/* Dot */}
          <span
            className="block rounded-full transition-all duration-400"
            style={{
              width: active === id ? "6px" : "4px",
              height: active === id ? "6px" : "4px",
              background: active === id ? "#a07840" : "rgba(120,100,80,0.3)",
            }}
          />
        </button>
      ))}
    </div>
  );
}
