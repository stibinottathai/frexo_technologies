"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import styles from "./Portfolio.module.css";

const projects = [
  { title: "FinTech Dashboard", tag: "Web Application", color: "#4F7DF3" },
  { title: "E-Commerce Experience", tag: "Mobile App", color: "#06B6D4" },
  { title: "Real Estate Identity", tag: "Branding", color: "#6366F1" },
];

export default function Portfolio() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      data-visible={isInView || undefined}
      className={styles.section}
      id="work"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Selected work</h2>
            <p className={styles.sub}>Recent digital solutions we&apos;ve delivered.</p>
          </div>
          <Link href="#contact" className={styles.cta}>
            Build yours
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.mockup} style={{ background: `linear-gradient(135deg, ${p.color}, color-mix(in srgb, ${p.color} 70%, #000))` }}>
                <div className={styles.pattern}>
                  {Array.from({ length: 16 }).map((_, j) => (
                    <div key={j} className={styles.dot} />
                  ))}
                </div>
              </div>
              <div className={styles.body}>
                <span className={styles.tag}>{p.tag}</span>
                <h3 className={styles.projectTitle}>{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
