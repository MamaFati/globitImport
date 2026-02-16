import { Heart, ShieldCheck, Target } from "lucide-react";
import Image from "next/image";
import leaderImage from "@/public/images/leaderImage.jpeg";
import backImage from "@/public/images/warehouseImage.avif";
import WhyChooseUs from "@/components/home/WhyChooseUs";

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="relative bg-slate-900 py-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={backImage}
            alt="Warehouse Operations"
            width={2000}
            height={1200}
            className="h-full w-full scale-105 object-cover opacity-20 animate-soft-float"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(213,173,54,0.2),rgba(2,6,23,0.05),rgba(29,78,216,0.2))] bg-[length:220%_220%] animate-bg-pan" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 animate-fade-in">
          <h1 className="mb-6 animate-fade-up text-4xl font-black text-white md:text-6xl">
            The Globit Story
          </h1>
          <p
            className="animate-fade-up text-xl font-bold uppercase tracking-widest text-secondary"
            style={{ animationDelay: "120ms" }}
          >
            Built on Experience, Driven by Growth
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Founder / Visual */}
            <div className="relative animate-fade-up">
              <div className="group relative z-10 aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={leaderImage}
                  alt="Founder of Globit Imports"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={200}
                  height={250}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="mb-1 text-sm font-bold uppercase tracking-widest text-blue-300">
                    Founding Mission
                  </p>
                  <p className="text-2xl font-black">
                    Building Global Connections
                  </p>
                </div>
              </div>
              <div className="absolute -right-6 -top-6 -z-0 h-32 w-32 animate-soft-float rounded-full bg-blue-100" />
              <div
                className="absolute -bottom-6 -left-6 -z-0 h-48 w-48 animate-soft-float rounded-3xl bg-slate-100"
                style={{ animationDelay: "350ms" }}
              />
            </div>

            <div
              className="animate-fade-up px-2 text-center"
              style={{ animationDelay: "140ms" }}
            >
              <h2 className="mb-8 border-l-4 border-secondary pl-6 text-3xl font-black text-slate-900">
                Redefining the import journey for every Ghanaian.
              </h2>
              <div className="space-y-6 text-lg px-4 leading-relaxed text-slate-600">
                <p>
                  In 2022, Globit Imports started with a simple mission: to make
                  high-quality international products accessible to every
                  Ghanaian without the fear of being scammed or overcharged.
                </p>
                <p>
                  Our founder started just like many of you, navigating the
                  complexities of Chinese suppliers and the unpredictability of
                  port clearings. We learned the hard way so that you don&apos;t
                  have to. What began as a small operation in Kumasi has grown
                  into a trusted sourcing partner for hundreds of retailers and
                  individuals.
                </p>
                <p>
                  At Globit, we don&apos;t just move boxes; we build businesses.
                  We believe that everyone should have the tools to import
                  safely. That&apos;s why we&apos;ve integrated our hands-on
                  Import Training Portal directly into our platform, turning
                  aspiring entrepreneurs into confident global traders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
     <WhyChooseUs />
    </div>
  );
};

export default About;
