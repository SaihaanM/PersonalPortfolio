import styles from "../styles/SummarySection.module.css";

export default function SummarySection() {
  return (
    <section className={styles.container} aria-label="Summary">
      <div className={styles.card}>
        <h2 className={styles.title}>About</h2>

        <p className={styles.blurb}>
          I’m a Computer Science student at the University of Calgary building
          performance-focused software systems and full-stack products, with
          experience across robotics autonomy, cloud infrastructure, and AI-powered
          learning tools.
        </p>

        <ul className={styles.highlights}>
          <li>
            Built a full-stack RAG study platform (React/Next.js + Python + AWS)
            that turns uploaded notes into flashcards, practice problems, summaries,
            and progress tracking.
          </li>
          <li>
            Led VEX Robotics autonomous systems in C++, using PID control and odometry
            for high-precision motion—resulting in World Championship qualification
            and top global/national autonomous rankings.
          </li>
          <li>
            Developed backend + infrastructure for a university trivia platform,
            including migrating PostgreSQL to AWS for scalability.
          </li>
        </ul>

        <div className={styles.actions}>
          <a className={styles.primary} href="mailto:saihaan.mahmud01@gmail.com">
            Contact Me
          </a>

          <a
            className={styles.secondary}
            href="https://github.com/SaihaanM"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a className={styles.ghost} href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
