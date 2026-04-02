import {
  BookOpen,
  PackageCheck,
  RefreshCcw,
  Search,
  ShoppingBag,
  Truck,
} from "lucide-react";

import { cn } from "@/lib/utils";

type ServiceIconProps = {
  slug: string;
  className?: string;
};

const iconMap = {
  "product-sourcing": Search,
  "seamless-procurement": PackageCheck,
  "rmb-exchange": RefreshCcw,
  "global-logistics": Truck,
  courses: BookOpen,
  "globit-shop": ShoppingBag,
} as const;

export const ServiceIcon = ({ slug, className }: ServiceIconProps) => {
  const Icon = iconMap[slug as keyof typeof iconMap] ?? PackageCheck;

  return <Icon className={cn("h-6 w-6", className)} />;
};
