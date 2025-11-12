// animations/heroAnimation.js
"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initHeroAnimation = (heroRef, shape1Ref, shape2Ref) => {
  const ctx = gsap.context(() => {
    // Shape 1
    gsap.fromTo(
      shape1Ref.current,
      { y: 0, x: 0 },
      {
        y: -60,
        x: 40,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Shape 2
    gsap.fromTo(
      shape2Ref.current,
      { y: 0, x: 0 },
      {
        y: 80,
        x: -30,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });

  return () => ctx.revert();
};
