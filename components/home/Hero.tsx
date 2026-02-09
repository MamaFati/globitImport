import Image from "next/image";
import HeroImg from '@/public/images/pexels-tomfisk-3057960.jpg'
import { FaRegCheckCircle } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { PiOptionFill } from "react-icons/pi";
import { Button } from "../ui/button";
const HeroPage = () => {
    return (
      <section className="relative w-full min-h-screen overflow-hidden z-0">
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

        <div className="container mx-auto px-6 lg:px-12 py-80 lg:py-50">
          <div className="max-w-3xl text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight">
              From China to Your Doorstep.{" "}
              <span className="text-slate-900" style={{color:"#d5ad36"}}>Guaranteed.</span>
            </h1>
            <p className="mt-4 text-lg sm:text-base text-gray-200 max-w-lg">
              We simplify international sourcing from China. Whether you are a
              business scaling up or an individual shopping for quality, Globit
              Imports bridges the gap between China and you with transparency
              and speed.
            </p>
            <div className="mt-6 flex gap-4">
              <div className="flex ">
                <div className="">
                  <FaRegCheckCircle className="inline-flex text-green-600 mr-2" />{" "}
                </div>
                <div className="">
                  Verified Suppliers
                </div>
              </div>
              <div className="flex">
                {" "}
                <div>
                  <RiSecurePaymentLine className="inline-flex text-green-600  mr-2" />
                </div>
                <div>
                  Secure Payment
                </div>
              </div>
              <div className="flex">
                <div>
                  <PiOptionFill className="inline-flex text-green-600  mr-2" />
                </div>
                <div>
                  Sea and Air Option
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <Button variant="secondary" className="px-6 py-2 rounded-md">
                View Open Preorders
              </Button>
              <Button variant="secondary" className="px-6 py-2 rounded-md">
                Join the Import Masterclass
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
}
 
export default HeroPage;
