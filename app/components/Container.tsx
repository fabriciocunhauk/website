import clsx from "clsx";
import { ReactNode, type JSX } from "react";

type ContainerProps = {
  children: ReactNode;
  element?: keyof JSX.IntrinsicElements;
  classes?: { container?: string };
  size?: string;
};

type SizeMapProps = {
  [key: string]: string;
};

export default function Container({
  children,
  element: Tag = "div",
  classes,
  size = "lg",
}: ContainerProps) {
  const sizeMap: SizeMapProps = {
    xs: "max-w-md",
    sm: "max-w-3xl",
    md: "max-w-6xl",
    lg: "max-w-7xl",
  };

  const className = clsx(
    "mx-auto py-4 px-10 xl:px-0",
    sizeMap[size],
    classes?.container
  );

  return <Tag className={className}>{children}</Tag>;
}
