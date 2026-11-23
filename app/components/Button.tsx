import clsx from "clsx";
import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

const BUTTON_STYLES = Object.freeze({
  base: "flex items-center justify-center gap-2 transition ease-in-out duration-150 cursor-pointer",
  disabled: "opacity-30 cursor-not-allowed pointer-events-none",
  variants: {
    primary: "bg-primary hover:bg-primary/70 text-white",
    secondary: "bg-indigo-500 hover:bg-primary text-white",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "hover:bg-gray-100 text-gray-700",
  },
  sizes: {
    sm: "text-sm px-2 py-2 rounded-lg",
    md: "text-base px-4 py-3 rounded-xl",
    lg: "text-lg px-6 py-4 rounded-2xl",
  },
});

type ButtonProps = {
  children: ReactNode;
  icon?: ReactNode;
  type?: "button" | "submit" | "reset";
  link?: string;
  variant?: keyof typeof BUTTON_STYLES.variants;
  size?: keyof typeof BUTTON_STYLES.sizes;
  classes?: { link?: string; button?: string };
  disabled?: boolean;
  fullWidth?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
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
}: ButtonProps) {
  const buttonStyles = clsx(
    BUTTON_STYLES.base,
    BUTTON_STYLES.variants[variant],
    BUTTON_STYLES.sizes[size],
    fullWidth ? "w-full" : "max-w-max",
    disabled && BUTTON_STYLES.disabled,
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
}
