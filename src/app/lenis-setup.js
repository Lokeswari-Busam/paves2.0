"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export default function LenisSetup() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: false,
      autoRaf: true,
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
