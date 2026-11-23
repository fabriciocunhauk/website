import clsx from "clsx";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
};

/** Section `<h2>`; wrap the highlighted word in `<span className="text-primary">`. */
export default function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2 className={clsx("text-4xl lg:text-6xl font-bold leading-tight", className)}>
      {children}
    </h2>
  );
}
