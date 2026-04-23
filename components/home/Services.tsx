import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { servicePages } from "@/lib/services";

import { ServiceIcon } from "../services/service-icons";

const serviceTitleMap: Record<string, string> = {
  "product-sourcing": "Product Sourcing",
  "seamless-procurement": "Seamless Procurement",
  "rmb-exchange": "RMB Exchange Services",
  "global-logistics": "Logistics & Shipping",
  courses: "Import Masterclass",
  "globit-shop": "The Globit Shop",
};

const ServicesComponent = () => {
  return (
    <section className="relative bg-slate-50 py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-15 flex flex-col gap-6 md:flex-row md:items-end md:justify-between animate-reveal">
          <div className="max-w-3xl">
            <h2 className="mb-2 text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
              Our Services
            </h2>
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Your End-to-End <span className="text-secondary">Import Solution</span>
            </h3>
            <p className="mt-5 text-base leading-relaxed text-slate-500 md:text-lg">
              From product discovery to supplier payment, shipping, training, and curated preorders, Globit helps you move with more control and less guesswork.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-slate-800"
          >
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {servicePages.map((service, index) => (
            <div
              key={service.slug}
              className="group animate-reveal overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.label}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" /> */}
              </div>

              <div className="relative flex justify-center -mt-10 mb-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-slate-50 bg-white shadow-xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <ServiceIcon slug={service.slug} className="h-8 w-8 text-secondary" />
                </div>
              </div>

              <div className="px-8 pb-10 text-center md:text-left">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-blue-600">
                  {service.heroEyebrow}
                </p>
                <h4 className="mb-4 text-2xl font-semibold text-slate-900 transition-colors group-hover:text-blue-600">
                  {serviceTitleMap[service.slug] ?? service.label}
                </h4>
                <p className="mb-6 min-h-[110px] font-medium leading-relaxed text-slate-500">
                  {service.summary}
                </p>
                <div className="mb-8 flex flex-wrap justify-center gap-2 md:justify-start">
                  {service.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-600 transition-all hover:gap-4"
                >
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;
