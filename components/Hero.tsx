"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import styles from "./Hero.module.css";

export default function Hero() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section
      ref={ref}
      data-visible={isInView || undefined}
      className={styles.hero}
      id="home"
    >
      <div className={styles.ring} />
      <div className={styles.content}>
        <h1 className={styles.headline}>
          We build brands<br />
          <span className={styles.accent}>that matter.</span>
        </h1>
        <p className={styles.sub}>
          A full-service digital agency crafting products, identities, and
          experiences that drive real growth.
        </p>
        <div className={styles.actions}>
          <Link href="#contact" className={styles.primary}>
            Start a Project
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <Link href="#work" className={styles.secondary}>View Our Work</Link>
        </div>
      </div>
    </section>
  );
}
