"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function LottieAI() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animations/ai-3d.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Lottie Load Error:", err));
  }, []);

  if (!animationData) return null;

  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      className="w-full h-full"
    />
  );
}
