"use client";

import { useInView } from "@/hooks/useInView";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote: "Frexo completely transformed our digital presence. Their team delivered a robust e-commerce platform that increased our sales by 40% in just three months.",
    name: "Ahmed Al Maktoum",
    title: "CEO, Gulf Retail Partners",
  },
  {
    quote: "Working with Frexo was seamless. They understood our vision perfectly and built an intuitive mobile app that our users absolutely love.",
    name: "Sarah Jenkins",
    title: "Founder, TechNova Startups",
  },
  {
    quote: "Their approach to SEO and AEO gave us a significant competitive edge. We are now ranking on the first page for all our primary keywords.",
    name: "Omar Tariq",
    title: "Director, Dubai Elite Real Estate",
  },
];

export default function Testimonials() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      data-visible={isInView || undefined}
      className={styles.section}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>What clients say</h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div className={styles.card} key={i}>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.name.charAt(0)}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
