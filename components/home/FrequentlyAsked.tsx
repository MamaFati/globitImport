'use client'
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FrequentlyAskeQuestions = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
      setOpenFaq(openFaq === index ? null : index);
    };

     const faqs = [
       {
         category: "Preorders & Payments",
         items: [
           {
             q: "How do preorders work?",
             a: "Preorders allow you to buy high-quality items at wholesale prices by joining a group shipment. You pay for the item upfront, and we handle the sourcing and shipping from China to Ghana.",
           },
           {
             q: "Why do I have to pay 100% upfront?",
             a: "To secure the wholesale pricing from our international suppliers, we must commit the full funds immediately. This ensures your slot in the upcoming container or flight.",
           },
           {
             q: "What payment methods do you accept?",
             a: "We only accept payments through our official business channels listed on the checkout page. Never pay into a personal Mobile Money account.",
           },
         ],
       },
       {
         category: "Shipping & Timelines",
         items: [
           {
             q: "How long will it take for my items to arrive?",
             a: "Air Freight takes approximately 3-14 business days, while Sea Freight takes 45-60 days. Note: The countdown begins only after the container or plane has officially departed.",
           },
           {
             q: "Is shipping included in the product price?",
             a: "No. The price on the website is for the product only. Shipping and clearing fees are calculated based on weight/volume once the goods arrive in Ghana.",
           },
           {
             q: "How much will shipping cost?",
             a: "Shipping fees depend on actual weight/size and market rates at the time of clearing. You will receive a separate bill for this when your item reaches our warehouse.",
           },
         ],
       },
       {
         category: "Reliability & Security",
         items: [
           {
             q: "Is Globit Imports a registered business?",
             a: "Yes. We have been operating since 2022 and are based in Kumasi, Ghana. We pride ourselves on transparency and reliability.",
           },
           {
             q: "Can I track my order?",
             a: "Yes! Once the group order closes and shipping begins, we provide regular updates so you know exactly where your goods are in the process.",
           },
         ],
       },
       {
         category: "Refunds & Issues",
         items: [
           {
             q: "Can I cancel my order if I change my mind?",
             a: "No. Once a preorder is paid, the funds are committed to the supplier in China. We do not offer cancellations or swaps for 'change of mind'.",
           },
           {
             q: "What if my item is damaged or wrong?",
             a: "Refunds are only issued if the supplier fails to deliver or if the item is significantly different from what was ordered. Minor imperfections do not qualify.",
           },
         ],
       },
     ];
    //  const flatFaqs = faqs.flatMap((cat) =>
    //    cat.items.map((item) => ({ ...item, category: cat.category })),
    //  );

    return (
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-reveal">
            <h2 className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm mb-2">
              Support
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold text-slate-900  tracking-tight">
              Frequently Asked <span className="text-secondary">Questions</span>
            </h3>
            <div className="w-24 h-1.5 bg-secondary mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="space-y-12">
            {faqs.map((category, catIdx) => (
              <div
                key={catIdx}
                className="animate-reveal"
                style={{ animationDelay: `${catIdx * 150}ms` }}
              >
                <h4 className="text-lg font-normal text-blue-600 mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-blue-200"></span>
                  {category.category}
                </h4>
                <div className="space-y-4">
                  {category.items.map((item, itemIdx) => {
                    const globalIdx =
                      faqs
                        .slice(0, catIdx)
                        .reduce((acc, c) => acc + c.items.length, 0) + itemIdx;
                    const isOpen = openFaq === globalIdx;
                    return (
                      <div
                        key={itemIdx}
                        className={` rounded transition-all duration-300 ${isOpen ? " bg-blue-50/30" : "  bg-white hover:border-slate-200 "}`}
                      >
                        <button
                          onClick={() => toggleFaq(globalIdx)}
                          className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                        >
                          <span
                            className={`text-lg font-semibold transition-colors ${isOpen ? "text-blue-600" : "text-slate-800"}`}
                          >
                            {item.q}
                          </span>
                          <div
                            className={`shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all ${isOpen ? "bg-secondary text-white rotate-180" : "bg-slate-50 text-slate-400 group-hover:bg-slate-100"}`}
                          >
                            <ChevronDown className="h-5 w-5" />
                          </div>
                        </button>
                        <div
                          className={`overflow-hidden  transition-all duration-500 ease-in-out ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}
                        >
                          <div className="p-6 pt-0 text-slate-600 font-normal leading-relaxed border-t border-slate-900/50">
                            <p className="py-4">{item.a}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}
 
export default FrequentlyAskeQuestions;


 