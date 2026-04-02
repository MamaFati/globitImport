import { serviceLinks as servicePageLinks } from "@/lib/services";

export type NavLink = {
  label: string;
  href: string;
};

export type ServiceLink = {
  value: string;
  label: string;
  href: string;
};

export const primaryNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/aboutUs" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const serviceLinks: ServiceLink[] = servicePageLinks;
