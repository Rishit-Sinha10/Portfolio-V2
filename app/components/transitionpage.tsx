"use client";

import { TransitionRouter } from "next-transition-router";
import { PropsWithChildren, useCallback, useEffect, useRef } from "react";
import gsap from "gsap";

const DURATION = 0.6;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function TransitionLayout({ children }: PropsWithChildren) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const squareRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const killTween = useCallback(() => {
    tweenRef.current?.kill();
    tweenRef.current = null;
  }, []);

  // Start hidden, clean up on unmount
  useEffect(() => {
    gsap.set(squareRef.current, { scale: 0, rotate: 0 });
    return killTween;
  }, [killTween]);

  // CLOSE: square grows from the center and covers the screen
  const leave = useCallback(
    (next: () => void) => {
      killTween();
      if (prefersReducedMotion()) return next();

      gsap.set(overlayRef.current, { autoAlpha: 1, pointerEvents: "auto" });
      tweenRef.current = gsap.fromTo(
        squareRef.current,
        { scale: 0, rotate: 0 },
        {
          scale: 1,
          rotate: 90,
          duration: DURATION,
          ease: "power3.inOut",
          onComplete: next,
        },
      );
    },
    [killTween],
  );

  // OPEN: square shrinks back to the center, revealing the new page
  const enter = useCallback(
    (next: () => void) => {
      killTween();
      if (prefersReducedMotion()) {
        gsap.set(overlayRef.current, { autoAlpha: 0, pointerEvents: "none" });
        return next();
      }

      tweenRef.current = gsap.to(squareRef.current, {
        scale: 0,
        rotate: 180,
        duration: DURATION,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.set(overlayRef.current, { autoAlpha: 0, pointerEvents: "none" });
          next();
        },
      });
    },
    [killTween],
  );

  return (
    <TransitionRouter auto leave={leave} enter={enter}>
      <div
        ref={overlayRef}
        aria-hidden
        className="pointer-events-none invisible fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      >
        {/* 150vmax guarantees full coverage even while rotated */}
        <div
          ref={squareRef}
          className="bg-black"
          style={{ width: "150vmax", height: "150vmax", flexShrink: 0 }}
        />
      </div>
      {children}
    </TransitionRouter>
  );
}
