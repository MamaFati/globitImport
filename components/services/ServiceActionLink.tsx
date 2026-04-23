import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ServiceAction } from "@/lib/services";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

type ServiceActionLinkProps = {
  action: ServiceAction;
  className?: string;
};

const buttonVariantMap: Record<
  NonNullable<ServiceAction["variant"]>,
  "default" | "secondary" | "outline"
> = {
  primary: "secondary",
  secondary: "default",
  outline: "outline",
};

export const ServiceActionLink = ({
  action,
  className,
}: ServiceActionLinkProps) => {
  const variant = action.variant ?? "primary";

  return (
    <Button
      asChild
      variant={buttonVariantMap[variant]}
      size="lg"
      // className={cn(
      //   "rounded-md text-base transition-transform duration-300 hover:-translate-y-0.5",
      //   className
      // )}
    >
      <Link
        href={action.href}
        target={action.external ? "_blank" : undefined}
        rel={action.external ? "noopener noreferrer" : undefined}
      >
        <span>{action.label}</span>
        <ArrowRight className="h-4 w-4" />
      </Link>
    </Button>
  );
};
