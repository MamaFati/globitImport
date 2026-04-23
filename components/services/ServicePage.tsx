import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";

import type { ServiceCard, ServicePageData } from "@/lib/services";
import { cn } from "@/lib/utils";

import { ExchangeCalculator } from "./ExchangeCalculator";
import { ServiceActionLink } from "./ServiceActionLink";
import { ServiceIcon } from "./service-icons";

type ServicePageProps = {
  service: ServicePageData;
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
}) => (
  <div className="max-w-3xl">
    <p
      className={cn(
        "text-sm font-bold uppercase tracking-[0.3em]",
        dark ? "text-blue-200" : "text-blue-600"
      )}
    >
      {eyebrow}
    </p>
    <h2
      className={cn(
        "mt-3 text-[25] font-bold md:text-2xl",
        dark ? "text-white" : "text-slate-950"
      )}
    >
      {title}
    </h2>
    {description ? (
      <p
        className={cn(
          "mt-4 text-base leading-relaxed md:text-lg",
          dark ? "text-slate-300" : "text-slate-600"
        )}
      >
        {description}
      </p>
    ) : null}
  </div>
);

const InfoCard = ({
  card,
  dark = false,
}: {
  card: ServiceCard;
  dark?: boolean;
}) => (
  <div
    className={cn(
      "rounded-[1.75rem] border p-6 shadow-md",
      dark
        ? "border-white/10 bg-white/5"
        : "border-slate-200 bg-white shadow-md  "
    )}
  >
    {card.badge ? (
      <span
        className={cn(
          "inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em]",
          dark ? "bg-white/10 text-blue-100" : "bg-blue-50 text-blue-700"
        )}
      >
        {card.badge}
      </span>
    ) : null}
    <h3
      className={cn(
        "mt-3 text-xl font-bold",
        dark ? "text-white" : "text-bold"
      )}
    >
      {card.title}
    </h3>
    <p
      className={cn(
        "mt-3 leading-relaxed",
        dark ? "text-slate-300" : "text-slate-600"
      )}
    >
      {card.description}
    </p>
  </div>
);

export const ServicePage = ({ service }: ServicePageProps) => {
  return (
    <div className="bg-white ">
      <section className="relative overflow-hidden bg-slate-950 pb-20 pt-32 text-white">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.label}
            fill
            className="scale-105 object-cover  animate-soft-float opacity-20"
            sizes="100vw"
            priority
          />
          {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(213,173,54,0.32),transparent_32%),linear-gradient(135deg,rgba(2,6,23,0.96),rgba(15,23,42,0.84),rgba(1,0,121,0.65))]" /> */}
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div className="max-w-3xl">
            {/* <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] text-blue-100">
              {service.heroEyebrow}
            </span> */}
            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-4xl">
              {service.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">
              {service.heroDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {service.heroActions.map((action) => (
                <ServiceActionLink key={action.href} action={action} />
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="self-end hidden">
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-slate-950">
                  <ServiceIcon slug={service.slug} className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-100">
                    Service snapshot
                  </p>
                  <h2 className="mt-1 text-2xl font-black">{service.label}</h2>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {service.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[1.5rem] border border-white/10 bg-slate-950/35 p-5"
                  >
                    <p className="text-2xl font-black text-secondary">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {service.calculator ? (
        <section className="mx-auto -mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
          <ExchangeCalculator calculator={service.calculator} />
        </section>
      ) : null} */}

      {service.problemTitle || service.solutionTitle ? (
        <section className="py-5 sm:py-10">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 text-lg sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div>
              {service.problemTitle ? (
                <>
                  <SectionHeading
                    eyebrow={service.introEyebrow ?? "Overview"}
                    title={service.problemTitle}
                    description={service.problemIntro}
                  />
                  {service.painPoints ? (
                    <div className="mt-8 grid gap-5">
                      {service.painPoints.map((card) => (
                        <InfoCard key={card.title} card={card} />
                      ))}
                    </div>
                  ) : null}
                </>
              ) : null}
            </div>

            {service.solutionTitle ? (
              <div className="rounded-[2rem] bg-slate-50 leading-relaxed shadow-md p-8 md:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-white">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
                  Our answer
                </p>
                <h2 className="mt-3 text-2xl font-bold text-justify text-slate-950">
                  {service.solutionTitle}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-slate-600">
                  {service.solutionDescription}
                </p>

                <div className="mt-8 space-y-4">
                  {service.tags.map((tag) => (
                    <div key={tag} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                      <span className="text-slate-700">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {service.comparisonCards ? (
        <section className="bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Compare"
              title={service.comparisonTitle ?? "Options"}
              description={service.comparisonDescription}
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {service.comparisonCards.map((card) => (
                <InfoCard key={card.title} card={card} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {service.workflowSteps ? (
        <section
          className={cn(
            "py-5 sm:py-10 ",
            service.workflowTone === "dark" ? "bg-slate-950" : "bg-white",
          )}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Workflow"
              title={service.workflowTitle ?? "How it works"}
              description={service.workflowDescription}
              dark={service.workflowTone === "dark"}
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {service.workflowSteps.map((step, index) => (
                <div
                  key={step.title}
                  className={cn(
                    "rounded-[1.75rem] border p-6",
                    service.workflowTone === "dark"
                      ? "border-white/10 bg-white/5 text-white"
                      : "border-slate-200 bg-slate-50",
                  )}
                >
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-bold",
                      service.workflowTone === "dark"
                        ? "bg-secondary text-slate-950"
                        : "bg-secondary/50 text-white",
                    )}
                  >
                    {index + 1}
                  </div>
                  <h3
                    className={cn(
                      "mt-5 text-xl font-bold",
                      service.workflowTone === "dark"
                        ? "text-white"
                        : "text-slate-950",
                    )}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-3 leading-relaxed",
                      service.workflowTone === "dark"
                        ? "text-slate-300"
                        : "text-slate-600",
                    )}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {service.featureCards ? (
        <section className="py-5 sm:py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Highlights"
              title={service.featureTitle ?? "Key features"}
              description={service.featureDescription}
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {service.featureCards.map((card) => (
                <InfoCard key={card.title} card={card} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {service.feeCards ? (
        <section className="bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Commitment"
              title={service.feeTitle ?? "Commercial structure"}
              description={service.feeDescription}
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {service.feeCards.map((card) => (
                <InfoCard key={card.title} card={card} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {service.pricingCards ? (
        <section className="bg-slate-950 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Programs"
              title={service.pricingTitle ?? "Choose your path"}
              description={service.pricingDescription}
              dark
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {service.pricingCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[1.9rem] border border-white/10 bg-white/5 p-7 text-white"
                >
                  {card.badge ? (
                    <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-blue-100">
                      {card.badge}
                    </span>
                  ) : null}
                  <h3 className="mt-4 text-2xl font-black">{card.title}</h3>
                  <p className="mt-4 leading-relaxed text-slate-300">
                    {card.description}
                  </p>
                  {card.action ? (
                    <ServiceActionLink
                      action={card.action}
                      className="mt-8 w-full"
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {service.galleryCards ? (
        <section className="py-5 sm:py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Showcase"
              title={service.galleryTitle ?? "Gallery"}
              description={service.galleryDescription}
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {service.galleryCards.map((card, index) => (
                <div
                  key={card.title}
                  className="overflow-hidden rounded-[1.9rem] border border-slate-200 bg-white shadow-[0_28px_80px_-50px_rgba(15,23,42,0.45)]"
                >
                  <div className="relative bg-[linear-gradient(135deg,rgba(1,0,121,0.95),rgba(15,23,42,0.88),rgba(213,173,54,0.45))] px-6 py-10 text-white">
                    <div className="absolute right-5 top-5 text-sm font-black text-white/30">
                      0{index + 1}
                    </div>
                    <Sparkles className="h-10 w-10 text-secondary" />
                    <h3 className="mt-8 text-2xl font-black">{card.title}</h3>
                  </div>
                  <div className="p-6">
                    {card.badge ? (
                      <span className="inline-flex rounded-full bg-secondary/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-amber-700">
                        {card.badge}
                      </span>
                    ) : null}
                    <p className="mt-4 leading-relaxed text-slate-600">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {service.notice ? (
        <section className="py-5 sm:py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[1.8rem] border border-blue-200 bg-blue-50 px-6 py-6 md:px-8">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-700">
                {service.notice.title}
              </p>
              <p className="mt-3 max-w-4xl text-base leading-relaxed text-blue-950">
                {service.notice.description}
              </p>
            </div>
          </div>
        </section>
      ) : null}

      {service.testimonial ? (
        <section className="py-5 sm:py-10">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <div className="rounded-[2.2rem] bg-slate-50 px-6 py-10 md:px-12 md:py-14 shadow-md">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
                Student proof
              </p>
              <blockquote className="mt-5 text-lg font-bold leading-tight text-black md:text-2xl">
                &ldquo;{service.testimonial.quote}&rdquo;
              </blockquote>
              <p className="mt-6 text-base font-semibold text-slate-500">
                {service.testimonial.author}
              </p>
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] px-6 py-10 md:px-10 md:py-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-100">
                  Next move
                </p>
                <h2 className="mt-3 text-3xl font-black md:text-5xl">
                  {service.ctaTitle}
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
                  {service.ctaDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                {service.ctaActions.map((action) => (
                  <ServiceActionLink key={action.href} action={action} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
