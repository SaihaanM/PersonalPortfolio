import styles from "../styles/HeadingSection.module.css";

function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M4 6h16v12H4V6zm8 7L5.5 8.5v-.5L12 12l6.5-4v.5L12 13z"
      />
    </svg>
  );
}

function IconGitHub(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6.7 2 .1.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 016 0C17.3 6 18.3 6.3 18.3 6.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .5z"
      />
    </svg>
  );
}

function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M4.98 3.5A2.5 2.5 0 102.5 6a2.5 2.5 0 002.48-2.5zM3 8.5h4v12H3v-12zM9 8.5h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6v6.3h-4v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.7H9V8.5z"
      />
    </svg>
  );
}

export default function HeadingSection() {
  return (
    <header className={styles.container}>
      <div className={styles.inner}>
        <h1 className={styles.name}>Saihaan Mahmud</h1>

        <p className={styles.tagline}>
          Computer Science Student • Software Development & Data Science
        </p>

        <nav className={styles.links}>
          <a className={styles.link} href="mailto:saihaan.mahmud01@gmail.com">
            <IconMail className={styles.icon} />
            Email
          </a>

          <a
            className={styles.link}
            href="https://github.com/SaihaanM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconGitHub className={styles.icon} />
            GitHub
          </a>

          <a
            className={styles.link}
            href="https://www.linkedin.com/in/saihaan-mahmud-27817a307/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconLinkedIn className={styles.icon} />
            LinkedIn
          </a>
        </nav>
      </div>
    </header>
  );
}
