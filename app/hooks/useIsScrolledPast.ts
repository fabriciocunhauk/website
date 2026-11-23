"use client";
import { useEffect, useState } from "react";

/** Returns whether the window is scrolled beyond `threshold` px; re-renders only when that flips. */
export function useIsScrolledPast(threshold: number): boolean {
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsPast(window.scrollY > threshold);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isPast;
}
