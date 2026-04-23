import { ArrowRight, Workflow } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { servicePages, servicesHubImage } from "@/lib/services";

import { ServiceIcon } from "./service-icons";
import { Button } from "../ui/button";
import WhyChooseUs from "../home/WhyChooseUs";

const operatingModel = [
  "Discover the right product",
  "Control procurement and payment",
  "Move goods into Ghana with confidence",
  "Learn the system or join curated preorders",
];

export const ServicesLanding = () => {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-slate-950 pb-24 pt-32 text-white">
        <div className="absolute inset-0">
          <Image
            src={servicesHubImage}
            alt="Globit warehouse operations"
            fill
            priority
            sizes="100vw"
            className="scale-105 object-cover  animate-soft-float opacity-20"
          />
          {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(213,173,54,0.28),transparent_28%),linear-gradient(130deg,rgba(2,6,23,0.98),rgba(15,23,42,0.92),rgba(1,0,121,0.74))]" /> */}
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="max-w-3xl">
            {/* <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] text-blue-100">
              End-to-end trade support
            </span> */}
            <h1 className="mt-4 text-2xl font-black leading-tight md:text-4xl">
              One services platform for sourcing, settlement, shipping, and
              scale.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-200 md:text-xl">
              Globit is built for Ghanaian founders and retailers who want a
              cleaner China-to-Ghana operating model. Use one team to source
              better, procure safely, pay faster, ship smarter, and learn the
              system behind profitable imports.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services/product-sourcing">
                <Button
                  variant="secondary"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-md text-lg"
                >
                  Start with sourcing
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              {/*  */}
              <Link
                href="https://wa.me/233551193503?text=Hello%20Globit%2C%20I%20need%20help%20choosing%20the%20right%20service."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-md text-lg" >
                  Talk to the team
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary text-black">
                <Workflow className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-100">
                  Operating model
                </p>
                <h2 className="mt-1 text-2xl font-black">
                  How the system fits together
                </h2>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {operatingModel.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-[1.4rem] border border-white/10 bg-slate-950/35 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sm font-black text-secondary">
                    0{index + 1}
                  </div>
                  <p className="leading-relaxed text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-10 pb-20 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {servicePages.map((service) => (
              <article
                key={service.slug}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg   transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.label}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                  <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-custom-background text-secondary shadow-lg">
                    <ServiceIcon slug={service.slug} className="h-6 w-6" />
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-100">
                      {service.heroEyebrow}
                    </p>
                    <h2 className="mt-2 text-2xl font-black text-white">
                      {service.label}
                    </h2>
                  </div>
                </div>

                <div className="p-6">
                  <p className="leading-relaxed text-slate-600">
                    {service.summary}
                  </p>

                  {/* <div className="mt-6 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                    {service.metrics.slice(0, 3).map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-[1.25rem] bg-slate-50 px-4 py-3"
                      >
                        <p className="text-lg font-black text-slate-950">
                          {metric.value}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div> */}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
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
                    className="mt-8 inline-flex items-center gap-2 text-lg font-bold  text-blue-600 transition hover:gap-3"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
         
            {/* <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Commercial clarity",
                  description:
                    "Landed-cost planning, invoice visibility, and structured service pages make decisions easier before money moves.",
                },
                {
                  title: "Operational control",
                  description:
                    "Verification, warehouse QC, supplier settlement, and shipping coordination are handled inside one workflow.",
                },
                {
                  title: "Growth support",
                  description:
                    "Training, consultation, and curated preorders help newer importers grow without guessing every step.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_28px_90px_-60px_rgba(15,23,42,0.4)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div> */}
            <WhyChooseUs /> 
          
        
      </section>
    </div>
  );
};
