import Image from "next/image";
import HeroImg from '@/public/images/pexels-tomfisk-3057960.jpg'
import { FaRegCheckCircle } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { PiOptionFill } from "react-icons/pi";
import { Button } from "../ui/button";
const HeroPage = () => {
    return (
      <section className="relative w-full min-h-full overflow-hidden z-0">
        <div className="absolute inset-0 -z-10">
          <Image
            src={HeroImg}
            alt="Hero image"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="pointer-events-none absolute inset-0 hero-bg-animate mix-blend-screen" />
          <div className="pointer-events-none absolute inset-0 starfield mix-blend-screen" />
          <div className="pointer-events-none absolute inset-0 starfield-twinkle mix-blend-screen" />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent mix-blend-overlay" /> */}
          <div className="absolute inset-0 bg-slate-900/50 " />
        </div>

        <div className="container mx-auto px-5 sm:px-6 lg:px-12 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight">
              From China to Your Doorstep.{" "}
              <span className="text-custom-navy">Guaranteed.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-lg">
              We simplify international sourcing from China. Whether you are a
              business scaling up or an individual shopping for quality, Globit
              Imports bridges the gap between China and you with transparency
              and speed.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <div className="flex items-center">
                <FaRegCheckCircle className="inline-flex text-custom-green mr-2" />{" "}
                Verified Suppliers
              </div>
              <div className="flex items-center">
                <RiSecurePaymentLine className="inline-flex text-custom-green  mr-2" />
                Secure Payment
              </div>
              <div className="flex items-center">
                <PiOptionFill className="inline-flex text-custom-green  mr-2" />
                Sea and Air Option
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button variant="secondary" className="px-6 py-4 rounded-md">
                View Open Preorders
              </Button>
              <Button variant="ghost" className="px-6 py-2 rounded-md">
                Join the Import Masterclass
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
}
 
export default HeroPage;
