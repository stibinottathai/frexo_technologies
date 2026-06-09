"use client";

import { useInView } from "@/hooks/useInView";
import styles from "./Process.module.css";

const steps = [
  { title: "Discover", desc: "We dive deep into your business, audience, and market to build a strategic foundation." },
  { title: "Design", desc: "Our team crafts experiences that are intuitive, beautiful, and aligned with your brand." },
  { title: "Develop", desc: "We write clean, scalable code using cutting-edge technology to bring ideas to life." },
  { title: "Deliver", desc: "Rigorous testing, optimization, and a seamless launch — followed by ongoing support." },
];

export default function Process() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      data-visible={isInView || undefined}
      className={styles.section}
      id="process"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>How we work</h2>
        </div>

        <div className={styles.track}>
          {steps.map((s, i) => (
            <div className={styles.step} key={i}>
              <div className={styles.num}>0{i + 1}</div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
