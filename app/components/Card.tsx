import clsx from "clsx";
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  classes?: { card?: string };
};

export default function Card({ children, classes }: CardProps) {
  return (
    <div
      className={clsx(
        "p-4 shadow-lg hover:shadow-xl rounded-lg overflow-hidden transition-all duration-150 hover:-translate-y-1",
        classes?.card
      )}
    >
      {children}
    </div>
  );
}
