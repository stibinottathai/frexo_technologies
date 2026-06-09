"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { useToast } from "@/contexts/ToastContext";
import styles from "./Contact.module.css";

export default function Contact() {
  const { ref, isInView } = useInView();
  const { addToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      addToast("Please fill in all fields", "warning");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      addToast("Thank you! We'll get back to you within 24 hours.", "success");
      setFormData({ name: "", email: "", service: "", message: "" });
    }, 1500);
  };

  return (
    <section
      ref={ref}
      data-visible={isInView || undefined}
      className={styles.section}
      id="contact"
    >
      <div className={styles.container}>
        <div className={styles.info}>
          <h2 className={styles.title}>Let&apos;s talk</h2>
          <p className={styles.desc}>Have a project in mind? Reach out and we&apos;ll get back to you within 24 hours.</p>

          <div className={styles.meta}>
            <div className={styles.item}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              Dubai, UAE
            </div>
            <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer" className={styles.item}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="name">Full name</label>
              <input
                type="text"
                id="name"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="service">Service interested in</label>
            <select id="service" required value={formData.service} onChange={handleChange} disabled={isLoading}>
              <option value="">Select a service...</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="Desktop App Development">Desktop App Development</option>
              <option value="SEO/AEO">SEO &amp; AEO</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Branding & Identity">Branding &amp; Identity</option>
              <option value="Logo Design">Logo Design</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              required
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>

          <button type="submit" className={styles.btn} disabled={isLoading}>
            {isLoading ? (
              <>
                <span className={styles.spinner} />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
