import Link from "next/link";
import Image from "next/image";
import procurementImage from "@/public/images/procurement.jpg"
import logisticImage from "@/public/images/logistic.jpg"
import onlineShop from "@/public/images/online_shopping_03.jpg"
import productSourcing from "@/public/images/productSourcing.avif";
import rmbExchange from "@/public/images/rmb-exchange.avif";
import masterClass from "@/public/images/masterClass.avif";
import { ArrowRight, BookOpen, PackageCheck, RefreshCcw, Search, ShoppingBag, Truck } from "lucide-react";

const ServicesComponent = () => {
  const services = [
    {
      title: "Product Sourcing",
      desc: "Stop guessing, start knowing. We find high-quality suppliers in China that meet your specific standards, verifying credentials to protect your capital.",
      image: productSourcing,
      icon: <Search className="h-8 w-8 text-secondary" />,
      link: "/services#sourcing",
    },
    {
      title: "Seamless Procurement",
      desc: "We handle the entire buying process, from negotiating prices to ensuring specifications are met perfectly before orders leave the warehouse.",
      image:  procurementImage,
      icon: <PackageCheck className="h-8 w-8 text-secondary" />,
      link: "/services#procurement",
    },
    {
      title: "RMB Exchange Services",
      desc: "Enjoy fast, secure, and transparent currency exchange with competitive rates for your China payments through verified business channels.",
      image: rmbExchange,
      icon: <RefreshCcw className="h-8 w-8  text-secondary" />,
      link: "/services#rmb",
    },
    {
      title: "Logistics & Shipping",
      desc: "Transparent shipping with clear timelines. Air Freight (3-14 days) or Sea Freight (45-60 days) with real-time tracking from port to warehouse.",
      image: logisticImage,
      icon: <Truck className="h-8 w-8  text-secondary" />,
      link: "/services#shipping",
    },
    {
      title: "Import Masterclass",
      desc: "Learn the 'Globit Way' through digital courses. We teach you everything from finding hot products to navigating complex global logistics.",
      image: masterClass,
      icon: <BookOpen className="h-8 w-8  text-secondary" />,
      link: "/services#masterclass",
    },
    {
      title: "The Globit Shop",
      desc: "Leverage 'Group Power.' Join preorders for wholesale prices on individual units or browse ready-to-pickup stock in Ghana.",
      image: onlineShop,
      icon: <ShoppingBag className="h-8 w-8  text-secondary" />,
      link: "/services#shop",
    },
  ];

  return (
    <section className="py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-15 animate-reveal">
          <h2 className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm mb-2">
            Our Services
          </h2>
          <h3 className="text-2xl md:text-4xl font-bold text-slate-900  tracking-tight">
            Your End-to-End{" "}
            <span className="text-secondary">Import Solution</span>
          </h3>
          <div className="w-24 h-1.5 bg-se mx-auto mt-4 bg-secondary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg border border-slate-100 overflow-visible transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-56 overflow-hidden rounded-t-3xl relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>

              <div className="relative flex justify-center -mt-10 mb-6">
                <div className="w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center border border-slate-50 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  {service.icon}
                </div>
              </div>

              <div className="px-8 pb-10 text-center md:text-left">
                <h4 className="text-2xl font-semibold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h4>
                <p className="text-slate-500 leading-relaxed font-medium mb-8 min-h-[100px]">
                  {service.desc}
                </p>
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all"
                >
                  Read More <ArrowRight className="h-4 w-4" />
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
