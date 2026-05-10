// ─── App — The House of Seasons ────────────────────────────────────────────
import HeroSection from "./components/HeroSection";
import SeasonSection from "./components/SeasonSection";
import LibrarySection from "./components/LibrarySection";
import NavDots from "./components/NavDots";
import MusicPlayer from "./components/MusicPlayer";
import { seasons } from "./data/seasons";

export default function App() {
  return (
    <main className="relative">
      <NavDots />
      <MusicPlayer />
      <HeroSection />
      {seasons.map((season) => (
        <SeasonSection key={season.id} season={season} />
      ))}
      <LibrarySection />
    </main>
  );
}
