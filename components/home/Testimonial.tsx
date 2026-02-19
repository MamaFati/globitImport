"use client";

import { Quote, Star } from "lucide-react";
import avatar1 from "@/public/images/11475205.jpg";
import avatar2 from "@/public/images/1e59f641-d568-4f4a-8fff-922da4c45c10.jpg";
import avatar3 from "@/public/images/androgynous-avatar-non-binary-queer-person.jpg";
import Image from "next/image";
import { useState } from "react";

const TestimonialSection = () => {
  const [isInteracting, setIsInteracting] = useState(false);

  const testimonials = [
    {
      quote:
        "I always thought importing from China was for big companies only. After taking the GLOBIT online course, I placed my first order using just my phone! The steps are so clear",
      author: "Abena",
      role: "Founder of Accountinghub & Fresh Eggs Market",
      location: "Kumasi/Ghana",
      image: avatar3,
    },
    {
      quote:
        "The best investment I made this year. I saved so much money by cutting out the middleman. Thank you, GLOBIT, for showing me the way!",
      author: "Kojo Antwi",
      role: "Business Owner",
      location: "Accra, Ghana",
      image: avatar1,
    },
    {
      quote:
        "GLOBIT Imports is my most trusted partner. My goods arrived exactly when they said they would, and the packaging was intact. No hidden fees!",
      author: "Mary",
      role: "Entrepreneur",
      location: "Accra, Ghana",
      image: avatar2,
    },
    {
      quote:
        "GLOBIT is fast, professional, and transparent. They handled my procurement of sewing machines from the factory in China straight  to Ghana without any stress on my part.",
      author: "Priscilla",
      role: "Verity College of Creative Arts",
      location: "Kumasi, Ghana",
      image: avatar3,
    },
    {
      quote:
        "Best RMB rates I've found in the market. The transaction was fast and secure. I don't go anywhere else for my currency exchange now.",
      author: " Sarah",
      role: "Entrepreneur",
      location: "Accra, Ghana",
      image: avatar1,
    },
    {
      quote:
        "The Life-Changing Imports Academy opened my eyes to opportunities I never knew existed. The lessons are practical, clear, and easy to understand. This course truly changed my mindset about business.",
      author: "Hawa",
      role: "Entrepreneur",
      location: "Canada",
      image: avatar2,
    },
    {
      quote:
        "I was worried about exchanging cedis to RMB safely, but Globit made it simple and transparent. The process was fast and trustworthy. I highly recommend their exchange service.",
      author: "Alhassan Leiku",
      role: "Entrepreneur",
      location: "Mpraeso, Ghana",
      image: avatar3,
    },
  ];

  const loopingTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 sm:py-32 bg-custom-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-24 animate-reveal">
          <h2 className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm mb-2">
            Testimonials
          </h2>
          <h3 className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Loved by <span className="text-secondary">Hundreds</span>
          </h3>
          <div className="w-24 h-1.5  mx-auto mt-4 bg-secondary rounded-full"></div>
        </div>

        <div
          className="relative overflow-hidden "
          onPointerDown={() => setIsInteracting(true)}
          onPointerUp={() => setIsInteracting(false)}
          onPointerCancel={() => setIsInteracting(false)}
          onPointerLeave={() => setIsInteracting(false)}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 sm:w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 sm:w-16 bg-gradient-to-l from-white to-transparent" />
          <div
            className={`flex w-max gap-5 sm:gap-8 animate-testimonials-scroll-right motion-reduce:animate-none hover:[animation-play-state:paused] ${
              isInteracting ? "[animation-play-state:paused]" : ""
            }`}
          >
            {loopingTestimonials.map((t, idx) => (
              <article
                key={`${t.author}-${idx}`}
                className="w-[88vw] max-w-[19.5rem] sm:w-[22rem] shrink-0 min-h-[25rem] sm:min-h-[27rem] bg-slate-50 p-6 sm:p-8 rounded-[1.75rem] sm:rounded-[2rem] flex flex-col justify-between group hover:bg-slate-50/60 transition-all duration-500"
              >
                <div>
                  <div className="flex justify-between items-start mb-6 sm:mb-8 ">
                    <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-blue-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className="h-4 w-4 fill-secondary text-secondary"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed italic text-sm sm:text-base mb-8 sm:mb-10 font-light">
                    "{t.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 border-t border-slate-700/30 pt-5 sm:pt-6">
                  <Image
                    src={t.image}
                    alt={t.author}
                    width={50}
                    height={50}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-blue-500/30"
                  />
                  <div>
                    <p className="text-slate-600 font-bold text-base sm:text-lg">
                      {t.author}
                    </p>
                    <p className="text-slate-500 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.12em] sm:tracking-widest">
                      {t.role}
                    </p>
                    <p className="text-slate-500 text-[10px] sm:text-xs font-medium uppercase tracking-[0.12em] sm:tracking-widest">
                      {t.location}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
