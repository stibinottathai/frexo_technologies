import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            Fre<span className={styles.accent}>xo</span>
          </Link>
          <p className={styles.tagline}>Full-service digital agency based in Dubai. We build. We grow. We deliver.</p>
        </div>

        <div className={styles.links}>
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Company</h4>
            <Link href="#about" className={styles.link}>About Us</Link>
            <Link href="#process" className={styles.link}>Our Process</Link>
            <Link href="#work" className={styles.link}>Portfolio</Link>
            <Link href="#contact" className={styles.link}>Contact</Link>
          </div>
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Services</h4>
            <Link href="#services" className={styles.link}>Web Development</Link>
            <Link href="#services" className={styles.link}>Mobile Apps</Link>
            <Link href="#services" className={styles.link}>SEO &amp; AEO</Link>
            <Link href="#services" className={styles.link}>Digital Marketing</Link>
          </div>
        </div>

        <div className={styles.social}>
          <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="#" className={styles.socialIcon} aria-label="Twitter/X">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          </a>
          <a href="#" className={styles.socialIcon} aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        &copy; {new Date().getFullYear()} Frexo Technologies. All rights reserved.
      </div>
    </footer>
  );
}
