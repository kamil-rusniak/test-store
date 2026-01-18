import styles from "./page.module.css";
import { HeroSection } from "./components/HeroSection";
import { CategoryGrid } from "./components/CategoryGrid";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <HeroSection />
        <CategoryGrid />
      </main>
    </div>
  );
}
