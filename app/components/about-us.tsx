"use client";
import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import Proof from "../../public/Images/Levi_Ackermann_29_character_image.png";
const SECTION_HEADING =
  "text-left text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[var(--muted)]";
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="mt-10">
      <Reveal>
        <h2 id="about-heading" className={`${SECTION_HEADING} mb-3`}>
          About
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16">
        <Reveal delay={160}>
          <div className="space-y-5 text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
            <p>
              I'm a software engineer who enjoys turning pixel-perfect designs
              into clean, minimal, performant frontends. By day I work as a
              Shopify Developer, shipping storefront components and improving
              technical SEO and speed on production sites.
            </p>
            <p>
              Outside of work I build products with React, Next.js, and
              TypeScript, and I'm pushing deeper into backend and architecture,
              aiming to take a product from polished interface to reliable
              production system.
            </p>
          </div>
        </Reveal>
        <Image
          src={Proof}
          alt="Portrait of Rishit Sinha"
          width={120}
          height={120}
          className="rounded-md object-cover"
        />
      </div>
    </section>
  );
}
