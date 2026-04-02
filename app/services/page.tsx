import type { Metadata } from "next";

import { ServicesLanding } from "@/components/services/ServicesLanding";

export const metadata: Metadata = {
  title: "Services | Globit Imports",
  description:
    "Explore Globit Imports services for sourcing, procurement, RMB exchange, shipping, training, and curated preorder support.",
};

export default function ServicesPage() {
  return <ServicesLanding />;
}
