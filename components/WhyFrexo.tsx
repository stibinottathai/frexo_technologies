"use client";

import { useInView } from "@/hooks/useInView";
import styles from "./WhyFrexo.module.css";

const reasons = [
  { stat: "2x", label: "faster delivery", title: "Speed of Delivery", desc: "We move fast without cutting corners. Agile workflows mean your project ships on time." },
  { stat: "360°", label: "full service", title: "Full-Service", desc: "Strategy, design, development, marketing — one team, one vision, end-to-end." },
  { stat: "UAE", label: "headquarters", title: "Dubai-Based", desc: "Rooted in the UAE with a global outlook. We understand the regional market intimately." },
  { stat: "100%", label: "transparent", title: "Transparent Pricing", desc: "Clear quotes, no hidden fees, no surprises. You always know where you stand." },
];

export default function WhyFrexo() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      data-visible={isInView || undefined}
      className={styles.section}
      id="about"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Why Frexo?</h2>
        </div>
        <div className={styles.grid}>
          {reasons.map((r, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.stat}>
                <span className={styles.num}>{r.stat}</span>
                <span className={styles.statLabel}>{r.label}</span>
              </div>
              <h3 className={styles.cardTitle}>{r.title}</h3>
              <p className={styles.cardDesc}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
