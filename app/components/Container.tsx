import clsx from "clsx";
import type { JSX, ReactNode } from "react";

const SIZE_MAP = Object.freeze({
  xs: "max-w-md",
  sm: "max-w-3xl",
  md: "max-w-6xl",
  lg: "max-w-7xl",
});

type ContainerProps = {
  children: ReactNode;
  element?: keyof JSX.IntrinsicElements;
  classes?: { container?: string };
  size?: keyof typeof SIZE_MAP;
};

export default function Container({
  children,
  element: Tag = "div",
  classes,
  size = "lg",
}: ContainerProps) {
  const className = clsx(
    "mx-auto py-4 px-10 xl:px-0",
    SIZE_MAP[size],
    classes?.container
  );

  return <Tag className={className}>{children}</Tag>;
}
