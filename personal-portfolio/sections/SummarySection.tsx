import React from "react";
import styles from "../styles/SummarySection.module.css";

const BLURB_TEXT =
  "I'm Saihaan, a 2nd year Computer Science student studying at the University of Calgary";

const HIGHLIGHTS_TEXT = ["ppppp"];

type Phase = "idle" | "blurb" | "bullets" | "done";

export default function SummarySection() {
  const [started, setStarted] = React.useState(false);
  const [phase, setPhase] = React.useState<Phase>("idle");

  const [blurb, setBlurb] = React.useState("");
  const [bullets, setBullets] = React.useState<string[]>([]);
  const [activeBullet, setActiveBullet] = React.useState<number>(-1);

  const blurbIndex = React.useRef(0);
  const bulletIndex = React.useRef(0);
  const bulletCharIndex = React.useRef(0);
  const timerRef = React.useRef<number | null>(null);

  const startTyping = React.useCallback(() => {
    if (started) return;
    setStarted(true);
    setPhase("blurb");

    const tick = () => {
      // 1) Type blurb
      if (blurbIndex.current < BLURB_TEXT.length) {
        blurbIndex.current += 1;
        setBlurb(BLURB_TEXT.slice(0, blurbIndex.current));
        setPhase("blurb");
        return;
      }

      // 2) Type bullets
      if (bulletIndex.current < HIGHLIGHTS_TEXT.length) {
        setPhase("bullets");

        const line = HIGHLIGHTS_TEXT[bulletIndex.current];
        setActiveBullet(bulletIndex.current);

        if (bulletCharIndex.current === 0) {
          setBullets((prev) => [...prev, ""]);
        }

        if (bulletCharIndex.current < line.length) {
          bulletCharIndex.current += 1;
          setBullets((prev) => {
            const copy = [...prev];
            copy[bulletIndex.current] = line.slice(0, bulletCharIndex.current);
            return copy;
          });
          return;
        }

        bulletIndex.current += 1;
        bulletCharIndex.current = 0;
        return;
      }

      // 3) Done
      setPhase("done");
      if (timerRef.current !== null) window.clearInterval(timerRef.current);
      timerRef.current = null;
    };

    // Slower typing: 32ms feels smooth (tweak 28–40)
    timerRef.current = window.setInterval(tick, 32);
  }, [started]);

  React.useEffect(() => {
    return () => {
      if (timerRef.current !== null) window.clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section
      className={styles.container}
      aria-label="Summary"
      onMouseEnter={startTyping}
    >
      <div className={styles.card}>
        <h2 className={styles.title}>About</h2>

        <p className={styles.blurb}>
          {blurb}
          {!started ? (
            <span className={styles.hint}> (hover here!)</span>
          ) : phase === "blurb" ? (
            <span className={styles.cursor}>▍</span>
          ) : null}
        </p>

        <ul className={styles.highlights}>
          {bullets.map((b, i) => (
            <li key={i}>
              {b}
              {phase === "bullets" && i === activeBullet ? (
                <span className={styles.cursor}>▍</span>
              ) : null}

              {phase === "done" && i === bullets.length - 1 ? (
                <span className={styles.cursor}>▍</span>
              ) : null}
            </li>
          ))}

          {phase === "done" && bullets.length === 0 ? (
            <li className={styles.cursorOnly}>
              <span className={styles.cursor}>▍</span>
            </li>
          ) : null}
        </ul>

        <div className={styles.actions}>
          <a
            className={styles.ghost}
            href="/Saihaan Resume 2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
