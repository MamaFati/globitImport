import { Heart, ShieldCheck, Target } from "lucide-react";

const WhyChooseUs = () => {
    return (
      <section className="bg-custom-background  py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 animate-fade-up text-center">
            <h3 className="mb-4 text-3xl font-black text-slate-900 md:text-4xl">
              Why Choose Globit?
            </h3>
            <p className="text-lg text-slate-600">
              Because we&apos;ve been where you are.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div
              className="hover:-translate-y-2 hover:shadow-2xl animate-reveal flex flex-col items-center rounded-3xl border border-slate-100 bg-white p-10 text-center shadow-sm"
              style={{ animationDelay: "300ms" }}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-custom-background  ">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="mb-4 text-xl font-bold text-slate-900">
                Transparency First
              </h4>
              <p className="text-slate-600">
                We believe in 100% clarity. From sourcing costs to logistics
                fees, you&apos;ll always know where your money goes.
              </p>
            </div>

            <div
              className="hover:-translate-y-2 hover:shadow-2xl animate-reveal flex flex-col items-center rounded-3xl border border-slate-100 bg-white p-10 text-center shadow-sm"
              style={{ animationDelay: "300ms" }}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-custom-background ">
                <Heart className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="mb-4 text-xl font-bold text-slate-900">
                Capital Respect
              </h4>
              <p className="text-slate-600">
                We respect your hard-earned capital. We treat your orders with
                the same care and urgency as our own.
              </p>
            </div>

            <div
              className="hover:-translate-y-2 hover:shadow-2xl animate-reveal flex flex-col items-center rounded-3xl border border-slate-100 bg-white p-10 text-center shadow-sm"
              style={{ animationDelay: "300ms" }}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-custom-background  text-indigo-600">
                <ShieldCheck className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="mb-4 text-xl font-bold text-slate-900">
                Commitment to Delivery
              </h4>
              <p className="text-slate-600">
                From our base in Kumasi, we are redefining what it means to shop
                globally. We deliver on our promises, every time.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}
 
export default WhyChooseUs;