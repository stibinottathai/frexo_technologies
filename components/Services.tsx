"use client";

import { useInView } from "@/hooks/useInView";
import styles from "./Services.module.css";

const services = [
  {
    cluster: "We Build",
    items: [
      {
        title: "Web Development",
        desc: "Custom websites, web apps, and platforms built with modern technology stacks.",
        icon: "🌐",
      },
      {
        title: "Mobile App Development",
        desc: "Native and cross-platform applications for iOS and Android.",
        icon: "📱",
      },
      {
        title: "Desktop App Development",
        desc: "Performant desktop applications for Windows and macOS.",
        icon: "💻",
      },
    ],
  },
  {
    cluster: "We Grow",
    items: [
      {
        title: "SEO & AEO",
        desc: "Search and answer engine optimization to dominate modern discoverability.",
        icon: "🔍",
      },
      {
        title: "Digital Marketing",
        desc: "Data-driven campaigns across social, paid media, and content channels.",
        icon: "📊",
      },
      {
        title: "Branding & Identity",
        desc: "Strategic brand development from positioning to visual identity systems.",
        icon: "🎨",
      },
      {
        title: "Logo Design",
        desc: "Distinctive marks that capture the essence of your business.",
        icon: "✨",
      },
    ],
  },
];

export default function Services() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      data-visible={isInView || undefined}
      className={styles.section}
      id="services"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our services</h2>
          <p className={styles.sub}>
            From strategy and design to development and marketing — everything under one roof.
          </p>
        </div>

        {services.map((group, i) => (
          <div className={styles.group} key={i}>
            <h3 className={styles.groupTitle}>{group.cluster}</h3>
            <div className={styles.grid}>
              {group.items.map((s, j) => (
                <div className={styles.card} key={j}>
                  <div className={styles.iconWrapper}>{s.icon}</div>
                  <h4 className={styles.cardTitle}>{s.title}</h4>
                  <p className={styles.cardDesc}>{s.desc}</p>
                  <button className={styles.learnMore}>
                    Learn more
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
