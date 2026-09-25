"use client";

import { ButtonHTMLAttributes } from "react";
import { useQuoteModal } from "@/components/QuoteModalProvider";

type Variant = "primary" | "secondary" | "outline-light" | "ghost";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-red-600 text-white hover:bg-red-700 focus-visible:outline-red-600",
  secondary:
    "bg-navy-900 text-white hover:bg-navy-800 focus-visible:outline-navy-900",
  "outline-light":
    "border border-white/70 text-white hover:bg-white hover:text-navy-900",
  ghost:
    "border border-navy-900/15 text-navy-900 hover:border-navy-900 hover:bg-navy-50",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 whitespace-nowrap cursor-pointer";

export function QuoteButton({
  productName,
  variant = "primary",
  size = "md",
  className = "",
  children = "Demander un devis",
  ...props
}: {
  productName?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: React.ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">) {
  const { open } = useQuoteModal();

  return (
    <button
      type="button"
      onClick={() => open(productName)}
      className={`${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
