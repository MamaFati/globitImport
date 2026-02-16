import Image from 'next/image'
import AboutUsImage from '@/public/images/about-Image.jpg'
import { Button } from '../ui/button';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <section className=" py-20 sm:py-24 md:py-10">
      <h1 className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
        About Globit Imports
      </h1>
      <div className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-12 px-6 md:flex-row md:gap-16">
        <div className="w-full md:w-1/2">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
            <Image
              src={AboutUsImage}
              alt="About us image"
              width={720}
              height={560}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-balance text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            The Globit Story: Built on Experience, Driven by Growth.
          </h3>
          <p className="mt-5 text-left text-base leading-7 text-slate-600 sm:text-lg">
            In 2022, Globit Imports started with a simple mission: to make
            high-quality international products accessible to every Ghanaian
            without the fear of being scammed or overcharged. Our founder
            started just like many of you, navigating the complexities of
            Chinese suppliers and the unpredictability of port clearings. We
            learned the hard way so that you do not have to.
          </p>
          <div className="mt-8">
            <Link href="/aboutUs" className="inline-block">
              <Button variant="secondary" className="px-6 py-4 rounded-md">
                Read More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs
