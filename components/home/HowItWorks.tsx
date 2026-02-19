import { PackageCheck, Ship, Wallet } from "lucide-react";

const HowItWorks = () => {
  return (
    <>
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-2">
              How It Works
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold text-slate-900">
              How Globit Makes Importing <span className="text-secondary">Simple &amp; Safe</span> 
            </h3>
          {/* <div className="w-24 h-1.5  mx-auto mt-4 bg-secondary rounded-full"></div> */}

            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Our streamlined 3-step process takes the headache out of
              international commerce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-24 left-[15%] right-[15%] h-0.5 bg-blue-100 -z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white shadow-xl rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:scale-110 group-hover:bg-secondary transition-all duration-300">
                <PackageCheck className="h-10 w-10 text-secondary group-hover:text-white transition-colors" />
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-slate-900">
                Select & Pay
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Browse our vetted product list and pay 100% upfront to secure
                your items at factory prices.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white shadow-xl rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:scale-110 group-hover:bg-secondary transition-all duration-300">
                <Ship className="h-10 w-10 text-secondary group-hover:text-white transition-colors" />
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-slate-900">
                We Source & Ship
              </h4>
              <p className="text-slate-600 leading-relaxed">
                We handle the supplier communication, strict quality checks, and
                all international logistics.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white shadow-xl rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:scale-110 group-hover:bg-secondary transition-all duration-300">
                <Wallet className="h-10 w-10 text-secondary group-hover:text-white transition-colors" />
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-slate-900">
                Pay Shipping & Collect
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Pay your weight-based shipping fee once the goods arrive in our
                warehouse and collect your items!
              </p>
            </div>
          </div>
        </div>
      </section>
      `{" "}
      {/* <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#FFDF00]/10 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-custom-navy/10 blur-3xl" />
        </div>

        <div className="container mx-auto px-5 sm:px-6 lg:px-12">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-custom-navy/70">
              How It Works
            </p>
            <h2 className="mt-3 text-2xl font-bold text-custom-navy sm:text-3xl lg:text-4xl">
              How Globit Makes Importing Simple &amp; Safe
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
              Three clear steps. Transparent fees. Your goods delivered with
              confidence.
            </p>
          </div>

          <div className="relative mt-10">
            <div className="pointer-events-none absolute inset-x-0 top-12 hidden -translate-y-1/2 lg:block">
              <svg
                className="h-20 w-full"
                viewBox="0 0 1200 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="stepLine" x1="0" y1="0" x2="1200" y2="0">
                    <stop offset="0%" stopColor="#0F172A" stopOpacity="0" />
                    <stop offset="20%" stopColor="#0F172A" stopOpacity="0.25" />
                    <stop offset="50%" stopColor="#0F172A" stopOpacity="0.35" />
                    <stop offset="80%" stopColor="#0F172A" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
                  </linearGradient>
                  <marker
                    id="arrowHead"
                    markerWidth="10"
                    markerHeight="10"
                    refX="8"
                    refY="3.5"
                    orient="auto"
                  >
                    <path
                      d="M0,0 L8,3.5 L0,7 Z"
                      fill="#0F172A"
                      fillOpacity="0.45"
                    />
                  </marker>
                </defs>
                <path
                  d="M40 60 C 240 20, 360 20, 560 60 S 880 100, 1160 60"
                  stroke="url(#stepLine)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  markerEnd="url(#arrowHead)"
                />
                <circle cx="200" cy="46" r="6" fill="#FFDF00" />
                <circle cx="600" cy="70" r="6" fill="#FFDF00" />
                <circle cx="1000" cy="54" r="6" fill="#FFDF00" />
              </svg>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1">
                <div className="absolute right-4 top-4 rounded-full bg-[#FFDF00]/20 px-3 py-1 text-xs font-semibold text-custom-navy">
                  Step 1
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl  text-[#FFDF00]">
                    <FiShoppingCart className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-custom-navy">
                      Select &amp; Pay
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Browse our vetted product list and pay 100% upfront to
                      secure your items.
                    </p>
                  </div>
                </div>
                <div className="mt-5 rounded-xl border border-dashed border-slate-200 bg-slate-50 p-4 text-sm text-slate-500">
                  Illustration: Phone screen showing products + secure lock.
                </div>
              </article>

              <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1">
                <div className="absolute right-4 top-4 rounded-full bg-[#FFDF00]/20 px-3 py-1 text-xs font-semibold text-custom-navy">
                  Step 2
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl   text-[#FFDF00]">
                    <FiGlobe className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-custom-navy">
                      We Source &amp; Ship
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      We handle supplier communication, quality checks, and
                      international logistics.
                    </p>
                  </div>
                </div>
              </article>

              <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1">
                <div className="absolute right-4 top-4 rounded-full bg-[#FFDF00]/20 px-3 py-1 text-xs font-semibold text-custom-navy">
                  Step 3
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl   text-secondary">
                    <FiTruck className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-custom-navy">
                      Pay Shipping &amp; Collect
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Pay your weight-based shipping fee once goods arrive in
                      our warehouse and collect your items.
                    </p>
                  </div>
                </div>
                <div className="mt-5 rounded-xl border border-dashed border-slate-200 bg-slate-50 p-4 text-sm text-slate-500">
                  Illustration: Happy customer receiving package, pickup truck
                  and scale.
                </div>
              </article>
            </div>
          </div>

          <div className="mt-10">
            <div className="mx-auto flex max-w-md items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <FiLock className="text-custom-navy" />
              <div className="flex-1">
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-custom-navy via-[#FFDF00] to-[#FFDF00] motion-safe:animate-pulse" />
                </div>
              </div>
              <span className="text-xs font-semibold text-custom-navy">
                Safe &amp; Tracked
              </span>
            </div>
          </div>
        </div>
      </section>` */}
    </>
  );
};

export default HowItWorks;
