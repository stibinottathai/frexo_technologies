"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import styles from "./CtaBanner.module.css";

export default function CtaBanner() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      data-visible={isInView || undefined}
      className={styles.section}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>
          Ready to build <span className={styles.accent}>something great?</span>
        </h2>
        <Link href="#contact" className={styles.btn}>
          Get in Touch
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
