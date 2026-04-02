import { ArrowRight } from "lucide-react";
import Link from "next/link";

import type { ServiceAction } from "@/lib/services";
import { cn } from "@/lib/utils";

type ServiceActionLinkProps = {
  action: ServiceAction;
  className?: string;
};

const variantClasses: Record<NonNullable<ServiceAction["variant"]>, string> = {
  primary:
    "bg-secondary text-slate-950 hover:bg-secondary/90 shadow-[0_18px_45px_-20px_rgba(213,173,54,0.9)]",
  secondary:
    "bg-white text-slate-950 hover:bg-slate-100 shadow-[0_18px_45px_-24px_rgba(15,23,42,0.45)]",
  outline:
    "border border-white/20 bg-white/5 text-white hover:bg-white/10",
};

export const ServiceActionLink = ({
  action,
  className,
}: ServiceActionLinkProps) => {
  const variant = action.variant ?? "primary";

  return (
    <Link
      href={action.href}
      target={action.external ? "_blank" : undefined}
      rel={action.external ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] transition-transform duration-300 hover:-translate-y-0.5",
        variantClasses[variant],
        className
      )}
    >
      <span>{action.label}</span>
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
};
