import clsx from "clsx";
import Link from "next/link";
import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  link?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  classes?: { link?: string; button?: string };
  disabled?: boolean;
  fullWidth?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  type = "button",
  link,
  variant = "primary",
  size = "md",
  classes,
  disabled,
  fullWidth = false,
  ...props
}) => {
  const baseStyles =
    "flex items-center justify-center gap-2 transition ease-in-out duration-150 cursor-pointer";

  const variants = {
    primary: "bg-primary hover:bg-primary/70 text-white",
    secondary: "bg-secondary hover:bg-secondary-dark text-white",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "hover:bg-gray-100 text-gray-700",
  };

  const sizes = {
    sm: "text-sm px-2 py-2 rounded-lg",
    md: "text-base px-4 py-3 rounded-xl",
    lg: "text-lg px-6 py-4 rounded-2xl",
  };

  const widthStyles = fullWidth ? "w-full" : "max-w-max";
  const disabledStyles = "opacity-30 cursor-not-allowed pointer-events-none";

  const buttonStyles = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    widthStyles,
    disabled && disabledStyles,
    classes?.button
  );

  if (link) {
    return (
      <Link
        href={link}
        className={clsx(buttonStyles, classes?.link)}
        {...props}
      >
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonStyles} type={type} disabled={disabled} {...props}>
      {icon}
      {children}
    </button>
  );
};

export default Button;
