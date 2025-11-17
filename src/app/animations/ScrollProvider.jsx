// components/ScrollProvider.jsx
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function ScrollProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,      // adjust easing
      easing: (t) => t < 0.5 ? 2*t*t : -1 + (4 - 2*t)*t,  // custom curve
      smoothWheel: true,
      smoothTouch: false // maybe disable on touch if you prefer native
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
