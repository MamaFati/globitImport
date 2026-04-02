import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServicePage } from "@/components/services/ServicePage";
import { getServiceBySlug, servicePages } from "@/lib/services";

type ServiceDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return servicePages.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Globit Imports",
    };
  }

  return {
    title: `${service.label} | Globit Imports`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServicePage service={service} />;
}
