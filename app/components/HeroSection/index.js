import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            Lorem ipsum dolor sit amet
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus earum fuga aut nisi inventore fugiat veniam eligendi totam, enim.
          </p>
        </div>
      </div>
    </section>
  );
}
