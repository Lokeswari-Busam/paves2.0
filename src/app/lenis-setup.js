"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function LenisSetup() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,          // reduce if it feels sluggish
      lerp: 0.1,              // smoothness (0–1)
      smoothWheel: true,
      smoothTouch: false,     // enable if you want touch to be inertial
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return null;
}
