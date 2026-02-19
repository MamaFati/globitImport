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
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const serviceLinks: ServiceLink[] = [
  {
    value: "product-sourcing",
    label: "Product Sourcing",
    href: "/services/product-sourcing",
  },
  {
    value: "seamless-procurement",
    label: "Seamless Procurement",
    href: "/services/seamless-procurement",
  },
  {
    value: "rmb-exchange",
    label: "RMB Exchange",
    href: "/services/rmb-exchange",
  },
  {
    value: "global-logistics",
    label: "Global Logistics & Shipping",
    href: "/services/global-logistics",
  },
  { value: "courses", label: "Courses", href: "/services/courses" },
  {
    value: "globit-shop",
    label: "Globit Shop",
    href: "/services/globit-shop",
  },
];
