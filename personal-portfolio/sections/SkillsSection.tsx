import styles from "../styles/SkillsSection.module.css";

type SkillGroup = {
  title: string;
  items: string[];
};

const GROUPS: SkillGroup[] = [
  {
    title: "Programming",
    items: ["TypeScript", "JavaScript", "Python", "Java", "C", "C++", "SQL"],
  },
  {
    title: "Web & Software",
    items: ["React", "Next.js", "HTML", "CSS Modules", "Node.js", "Express", "REST APIs"],
  },
  {
    title: "Cloud & Data",
    items: ["AWS", "Azure", "PostgreSQL", "Docker", "Linux"],
  },
  {
    title: "Systems",
    items: ["Git", "GitHub", "VS Code", "IntelliJ", "PID Control", "Odometry", "Localization", "Motion Planning"],
  },
];

export default function SkillsSection() {
  return (
    <section className={styles.container} aria-label="Skills">
      <div className={styles.header}>
        <h2 className={styles.title}>Skills</h2>
        <p className={styles.subtitle}>
          A quick scan of the stack I’m comfortable building with.
        </p>
      </div>

      <div className={styles.grid}>
        {GROUPS.map((g) => (
          <div key={g.title} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.prompt}>&gt;</span>
              <h3 className={styles.cardTitle}>{g.title}</h3>
            </div>

            <div className={styles.pills}>
              {g.items.map((item) => (
                <span key={item} className={styles.pill}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
