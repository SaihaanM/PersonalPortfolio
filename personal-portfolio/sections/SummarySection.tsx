import styles from "../styles/SummarySection.module.css";

export default function SummarySection() {
  return (
    <section className={styles.container} aria-label="Summary">
      <div className={styles.card}>
        <h2 className={styles.title}>About</h2>

        <p className={styles.blurb}>

        </p>

        <ul className={styles.highlights}>

        </ul>

        <div className={styles.actions}>
          <a className={styles.ghost} href="/Saihaan Resume 2025.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
