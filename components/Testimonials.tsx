"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote: "Frexo completely transformed our digital presence. Their team delivered a robust e-commerce platform that increased our sales by 40% in just three months.",
    name: "Ahmed Al Maktoum",
    title: "CEO, Gulf Retail Partners",
    rating: 5,
    company: "Gulf Retail",
  },
  {
    quote: "Working with Frexo was seamless. They understood our vision perfectly and built an intuitive mobile app that our users absolutely love.",
    name: "Sarah Jenkins",
    title: "Founder, TechNova Startups",
    rating: 5,
    company: "TechNova",
  },
  {
    quote: "Their approach to SEO and AEO gave us a significant competitive edge. We are now ranking on the first page for all our primary keywords.",
    name: "Omar Tariq",
    title: "Director, Dubai Elite Real Estate",
    rating: 5,
    company: "Elite Real Estate",
  },
];

export default function Testimonials() {
  const { ref, isInView } = useInView();
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section
      ref={ref}
      data-visible={isInView || undefined}
      className={styles.section}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>What clients say</h2>
          <p className={styles.sub}>Trusted by agencies and startups worldwide</p>
        </div>

        <div className={styles.carousel}>
          <div className={styles.card}>
            <div className={styles.stars}>
              {[...Array(current.rating)].map((_, i) => (
                <span key={i} className={styles.star}>
                  ⭐
                </span>
              ))}
            </div>

            <p className={styles.quote}>&ldquo;{current.quote}&rdquo;</p>

            <div className={styles.author}>
              <div className={styles.avatar}>{current.name.charAt(0)}</div>
              <div>
                <div className={styles.name}>{current.name}</div>
                <div className={styles.role}>{current.title}</div>
              </div>
            </div>
          </div>

          <div className={styles.controls}>
            <button className={styles.navBtn} onClick={goToPrev} aria-label="Previous testimonial">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div className={styles.indicators}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.indicator} ${i === currentIndex ? styles.active : ""}`}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button className={styles.navBtn} onClick={goToNext} aria-label="Next testimonial">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statValue}>150+</div>
            <div className={styles.statLabel}>Projects Delivered</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>4.9/5</div>
            <div className={styles.statLabel}>Average Rating</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>98%</div>
            <div className={styles.statLabel}>Client Retention</div>
          </div>
        </div>
      </div>
    </section>
  );
}
