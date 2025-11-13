// animations/heroAnimation.js
"use client";

import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export const initWhyPavesAnimation = ({whyPavesSectionRef,sectionRef, titleRef,subTitleRef }) => {
  const ctx = gsap.context(() => {
    // Shape 1
    gsap.from(
        [titleRef.current,subTitleRef.current],
        {
            y:"-150%",
            scrollTrigger:{
                trigger: whyPavesSectionRef.current,
                start: "top 60%", // later trigger point
                end: "top 10%",
                scrub: true,
            }
        }
    )
  });

  return () => ctx.revert();
};
