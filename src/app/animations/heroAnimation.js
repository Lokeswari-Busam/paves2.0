// animations/heroAnimation.js
"use client";

import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export const initHeroAnimation = (
  heroRef,
  shape1Ref,
  shape2Ref,
  svgRef,
  heroHeadingRef
) => {
  const split = new SplitText(heroHeadingRef.current, { type: "words,chars" });
  // gsap.set(split.chars, { opacity: 0, y: 20 });

  gsap.from(
    split.chars,
    {
      opacity: 0,
      y: 20,
      ease: "power3.out",
      stagger: 0.05,
    }
  );

  const ctx = gsap.context(() => {
    // Shape 1
    gsap.to(shape1Ref.current, {
      y: 150,
      //   x: "-300%",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top", // later trigger point
        end: "bottom top",
        scrub: true,
      },
    });

    // Shape 2
    gsap.fromTo(
      shape2Ref.current,
      { y: 0, x: 0 },
      {
        y: -200,
        // x: 0,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    gsap.to(svgRef.current, {
      x: "-50%",
      y: 250,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  return () => ctx.revert();
};
