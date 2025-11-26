import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "ghost";

type CommonProps = {
  variant?: ButtonVariant;
  icon?: ReactNode;
  className?: string;
};

type ButtonProps =
  | (ButtonHTMLAttributes<HTMLButtonElement> & CommonProps & { href?: undefined })
  | (AnchorHTMLAttributes<HTMLAnchorElement> & CommonProps & { href: string });

export function Button({
  variant = "primary",
  className,
  icon,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";
  const styles: Record<ButtonVariant, string> = {
    primary:
      "bg-primary text-primary-foreground shadow-glow hover:bg-primary-strong focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    secondary:
      "bg-white/5 text-white border border-white/10 hover:border-primary/60 hover:text-primary px-5 py-3",
    ghost: "text-text-muted hover:text-white px-3 py-2",
  };

  if ("href" in props && props.href) {
    return (
      <a className={clsx(base, styles[variant], className)} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {icon && <span aria-hidden>{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button className={clsx(base, styles[variant], className)} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {icon && <span aria-hidden>{icon}</span>}
      {children}
    </button>
  );
}
