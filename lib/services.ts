import type { StaticImageData } from "next/image";

import logisticImage from "@/public/images/logistic.jpg";
import masterClassImage from "@/public/images/masterClass.avif";
import shopImage from "@/public/images/online_shopping_03.jpg";
import procurementImage from "@/public/images/pocurementImage.jpeg";
import productSourcingImage from "@/public/images/productSourcingImage.jpeg";
import rmbExchangeImage from "@/public/images/rmbExchangeImage.jpeg";
import warehouseImage from "@/public/images/warehouseImage.avif";

export type ServiceAction = {
  href: string;
  label: string;
  external?: boolean;
  variant?: "primary" | "secondary" | "outline";
};

export type ServiceCard = {
  title: string;
  description: string;
  badge?: string;
};

export type ServiceStep = {
  title: string;
  description: string;
};

export type ServiceMetric = {
  value: string;
  label: string;
};

export type ServiceCalculator = {
  heading: string;
  note: string;
  fromLabel: string;
  fromValue: number;
  toLabel: string;
  rate: number;
  button: ServiceAction;
};

export type ServiceTestimonial = {
  quote: string;
  author: string;
};

export type ServicePageData = {
  slug: string;
  label: string;
  summary: string;
  image: StaticImageData;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  heroActions: ServiceAction[];
  tags: string[];
  metrics: ServiceMetric[];
  introEyebrow?: string;
  problemTitle?: string;
  problemIntro?: string;
  painPoints?: ServiceCard[];
  solutionTitle?: string;
  solutionDescription?: string;
  workflowTitle?: string;
  workflowDescription?: string;
  workflowSteps?: ServiceStep[];
  workflowTone?: "light" | "dark";
  featureTitle?: string;
  featureDescription?: string;
  featureCards?: ServiceCard[];
  comparisonTitle?: string;
  comparisonDescription?: string;
  comparisonCards?: ServiceCard[];
  pricingTitle?: string;
  pricingDescription?: string;
  pricingCards?: Array<ServiceCard & { action?: ServiceAction }>;
  galleryTitle?: string;
  galleryDescription?: string;
  galleryCards?: ServiceCard[];
  feeTitle?: string;
  feeDescription?: string;
  feeCards?: ServiceCard[];
  calculator?: ServiceCalculator;
  notice?: {
    title: string;
    description: string;
  };
  testimonial?: ServiceTestimonial;
  ctaTitle: string;
  ctaDescription: string;
  ctaActions: ServiceAction[];
};

const whatsappLink = (message: string) =>
  `https://wa.me/233551193503?text=${encodeURIComponent(message)}`;

export const servicesHubImage = warehouseImage;

export const servicePages: ServicePageData[] = [
  {
    slug: "product-sourcing",
    label: "Product Sourcing",
    summary:
      "We find verified factories, compare the real options, and give you landed-cost clarity before you commit money to stock.",
    image: productSourcingImage,
    heroEyebrow: "Direct factory access",
    heroTitle: "Do not just find products. Source opportunities with Globit.",
    heroDescription:
      "We bridge the gap between your vision and the factories that can actually deliver. From high-tech electronics to retail essentials, we help you buy with margin, confidence, and proof.",
    heroActions: [
      {
        href: whatsappLink(
          "Hello Globit, I want to start a product sourcing request."
        ),
        label: "Start sourcing request",
        external: true,
        variant: "primary",
      },
      {
        href: "/services",
        label: "Explore all services",
        variant: "secondary",
      },
    ],
    tags: ["Factory shortlist", "Supplier verification", "Landed-cost planning"],
    metrics: [
      { value: "3-5", label: "top manufacturers shortlisted" },
      { value: "20-30%", label: "potential margin protected from middlemen" },
      { value: "100%", label: "commitment fee credited on procurement" },
    ],
    introEyebrow: "Why this service matters",
    problemTitle: "Why sourcing alone is risky",
    problemIntro:
      "The global market is crowded, noisy, and full of expensive mistakes. Basic search results often look convenient, but they hide serious cost and quality risk.",
    painPoints: [
      {
        title: "Middleman inflation",
        description:
          "Many importers pay 20-30% more because they never reach the actual factory.",
      },
      {
        title: "Quality inconsistency",
        description:
          "Samples look excellent, then the bulk order arrives with defects and mismatched finishing.",
      },
      {
        title: "Scam exposure",
        description:
          "Unverified suppliers can disappear after receiving the first transfer.",
      },
    ],
    solutionTitle: "The Globit advantage",
    solutionDescription:
      "We use a deep-sourcing protocol that combines ecommerce ecosystems, direct factory networks, and verification workflows inside China's industrial hubs. You get a sourcing report with usable choices, not a random supplier list.",
    workflowTitle: "Our 4-step sourcing SOP",
    workflowDescription:
      "A structured sourcing process keeps your search disciplined, commercial, and defensible from day one.",
    workflowSteps: [
      {
        title: "The brief",
        description:
          "You tell us what you need and share any reference photos, specs, or target quantity.",
      },
      {
        title: "The hunt",
        description:
          "We identify 3-5 qualified manufacturers and negotiate directly for stronger MOQs and better pricing.",
      },
      {
        title: "The verification",
        description:
          "We review licenses, export history, and real-shot factory evidence before recommending a supplier.",
      },
      {
        title: "The delivery",
        description:
          "You receive a sourcing report with landed-cost estimates so profit is visible before you pay for stock.",
      },
    ],
    workflowTone: "dark",
    feeTitle: "Serious sourcing for serious businesses",
    feeDescription:
      "To reserve expert time for genuine importers, custom sourcing requests carry a small commitment fee that becomes an advantage if you proceed.",
    feeCards: [
      {
        title: "$20 or 200 GHS commitment fee",
        description:
          "This covers factory outreach, negotiation time, and supplier document checks.",
      },
      {
        title: "Built for qualified requests",
        description:
          "The structure filters casual browsing and lets us focus on commercial sourcing work.",
      },
      {
        title: "Fully credited later",
        description:
          "If you move forward with procurement, the full amount is credited toward your procurement service fee.",
      },
    ],
    ctaTitle: 'Ready to find your next "hero product"?',
    ctaDescription:
      "Stop guessing and start sourcing with precision. Join the retailers in Kumasi and Accra who use Globit to source smarter and protect margin.",
    ctaActions: [
      {
        href: whatsappLink(
          "Hello Globit, I want to begin a sourcing request and pay the commitment fee."
        ),
        label: "Start sourcing request",
        external: true,
        variant: "primary",
      },
    ],
  },
  {
    slug: "seamless-procurement",
    label: "Seamless Procurement",
    summary:
      "We manage the buying process end to end, from invoice and RMB settlement to warehouse inspection, packing, and dispatch.",
    image: procurementImage,
    heroEyebrow: "Supply chain management",
    heroTitle: "Your business, powered by our precision.",
    heroDescription:
      "We do not just place orders. We manage the operational chain between supplier payment and the moment your goods are ready to move to Ghana.",
    heroActions: [
      {
        href: whatsappLink(
          "Hello Globit, I want to start a procurement request."
        ),
        label: "Start procurement request",
        external: true,
        variant: "primary",
      },
      {
        href: "/services/product-sourcing",
        label: "See sourcing first",
        variant: "outline",
      },
    ],
    tags: ["Invoice control", "Warehouse QC", "Dispatch readiness"],
    metrics: [
      { value: "1", label: "detailed proforma invoice in GHS" },
      { value: "24/7", label: "supplier coordination through our team" },
      { value: "4", label: "core workflow checkpoints" },
    ],
    introEyebrow: "The procurement gap",
    problemTitle: "What happens when procurement goes wrong?",
    problemIntro:
      'Many importers get trapped inside the gap between paying a supplier in China and receiving the right goods in Ghana. That gap is where capital gets exposed.',
    painPoints: [
      {
        title: "The payment gap",
        description:
          "Suppliers claim they have not received funds, or payments arrive without adequate confirmation.",
      },
      {
        title: "The quality gap",
        description:
          'You pay for Grade A goods and receive Grade B results because nobody checked at the warehouse.',
      },
      {
        title: "The communication gap",
        description:
          "Language and specification errors lead to the wrong color, size, packaging, or product mix.",
      },
    ],
    solutionTitle: "The Globit solution",
    solutionDescription:
      "We become your boots on the ground in China. Factories deal with Globit as an established operating partner, which gives your order more accountability than a one-off buyer usually gets.",
    workflowTitle: "The seamless workflow",
    workflowDescription:
      "Every procurement order moves through a documented control chain before dispatch.",
    workflowSteps: [
      {
        title: "Order confirmation and invoice",
        description:
          "Once sourcing is complete, we issue a detailed proforma invoice in GHS so your numbers are clear before payment.",
      },
      {
        title: "Secure RMB settlement",
        description:
          "We handle currency conversion and supplier settlement through verified business channels.",
      },
      {
        title: "In-warehouse quality control",
        description:
          "When your order reaches our China warehouse, the team checks visual condition and specification alignment before release.",
      },
      {
        title: "Labeling and dispatch",
        description:
          'Goods are packed, labeled with your unique "Globit ID," and assigned to the next air or sea freight batch.',
      },
    ],
    featureTitle: "Why bulk buyers choose Globit",
    featureCards: [
      {
        title: "Negotiation power",
        description:
          "We push beyond first-offer pricing to secure volume discounts that solo buyers rarely unlock.",
      },
      {
        title: "Escrow-style safety",
        description:
          "We can hold partial supplier payments until the goods are physically verified at the warehouse gate.",
      },
      {
        title: "Error-free documentation",
        description:
          "Packing lists and commercial invoices are prepared correctly for smoother clearing and port handling.",
      },
    ],
    ctaTitle: "Move from stressful imports to seamless growth",
    ctaDescription:
      "Let Globit handle the technical risk, supplier coordination, and warehouse controls while you stay focused on selling.",
    ctaActions: [
      {
        href: whatsappLink(
          "Hello Globit, I need procurement support for an order."
        ),
        label: "Chat on WhatsApp",
        external: true,
        variant: "primary",
      },
    ],
  },
  {
    slug: "rmb-exchange",
    label: "RMB Exchange",
    summary:
      "Settle supplier payments quickly with transparent GHS-to-RMB support, trade-focused processing, and proof of payment for every transfer.",
    image: rmbExchangeImage,
    heroEyebrow: "Payment settlement",
    heroTitle: "GHS to RMB. Secure, fast, and transparent.",
    heroDescription:
      "When exchange timing affects inventory and supplier trust, speed matters. We help businesses settle Chinese supplier payments through verified channels with visible pricing.",
    heroActions: [
      {
        href: whatsappLink(
          "Hello Globit, I need today's RMB exchange rate for a supplier payment."
        ),
        label: "Get today's rate",
        external: true,
        variant: "primary",
      },
      {
        href: "https://buy-rmb.com/",
        label: "Go to payment portal",
        external: true,
        variant: "outline",
      },
    ],
    tags: ["Same-day settlement", "Trade-focused KYC", "Proof of payment"],
    metrics: [
      { value: "Same day", label: "target settlement after GHS confirmation" },
      { value: "0", label: "hidden fee claims in our promise" },
      { value: "50,000+ GHS", label: "bulk volume for VIP corporate rate" },
    ],
    calculator: {
      heading: "Indicative exchange calculator",
      note:
        "Illustrative estimate based on the service brief. Final rates are confirmed before settlement and may change during the day.",
      fromLabel: "GHS",
      fromValue: 1000,
      toLabel: "RMB",
      rate: 1.56,
      button: {
        href: "https://buy-rmb.com/",
        label: "Lock this rate and pay now",
        external: true,
        variant: "primary",
      },
    },
    featureTitle: "Why use Globit for exchange?",
    featureCards: [
      {
        title: "Transparent spread",
        description:
          "Unlike banks that hide commission inside the quote, our pricing approach is clear and upfront.",
      },
      {
        title: "Same-day settlement",
        description:
          "Once your GHS transfer is confirmed, we can settle to a Chinese bank account or Alipay within hours.",
      },
      {
        title: "Proof of payment",
        description:
          "Every transaction comes with a digital payment confirmation you can forward to your supplier immediately.",
      },
      {
        title: "Bulk discounts",
        description:
          "Higher-value settlements can be priced on a stronger VIP corporate rate.",
      },
    ],
    workflowTitle: "How it works",
    workflowDescription:
      "The exchange flow is simple, fast, and built around verified business settlement.",
    workflowSteps: [
      {
        title: "Check the rate",
        description:
          "Visit the page or request the current Globit rate on WhatsApp before you transfer.",
      },
      {
        title: "Transfer GHS",
        description:
          "Send your cedi amount to our verified business account through bank transfer or MoMo.",
      },
      {
        title: "Provide supplier details",
        description:
          "Share the supplier bank account or Alipay details and receive payment confirmation once the transfer lands.",
      },
    ],
    notice: {
      title: "Compliance and safety",
      description:
        "We only facilitate payments tied to legitimate trade activity. First-time users complete a quick KYC verification before settlement.",
    },
    ctaTitle: "Ready to pay your supplier?",
    ctaDescription:
      "Do not wait for rates to move against you. Get a current quote, confirm your details, and settle with confidence.",
    ctaActions: [
      {
        href: whatsappLink(
          "Hello Globit, I want to check the current RMB exchange rate."
        ),
        label: "Check rate on WhatsApp",
        external: true,
        variant: "primary",
      },
      {
        href: "https://buy-rmb.com/",
        label: "Open payment portal",
        external: true,
        variant: "secondary",
      },
    ],
  },
  {
    slug: "global-logistics",
    label: "Global Logistics & Shipping",
    summary:
      "Ship from China to Ghana through a controlled air or sea workflow with consolidation, local delivery options, and no surprise clearing costs.",
    image: logisticImage,
    heroEyebrow: "China to Ghana delivery",
    heroTitle: "From China to Ghana. Fast, safe, and reliable.",
    heroDescription:
      "Whether you are moving a single parcel or a larger commercial shipment, we handle the logistics chain so your cargo arrives with clarity, control, and professional handling.",
    heroActions: [
      {
        href: whatsappLink(
          "Hello Globit, I need the China warehouse address and current shipping rates."
        ),
        label: "Get address and rates",
        external: true,
        variant: "primary",
      },
      {
        href: "/services/seamless-procurement",
        label: "See procurement workflow",
        variant: "outline",
      },
    ],
    tags: ["Air freight", "Sea freight", "Warehouse consolidation"],
    metrics: [
      { value: "3-10 days", label: "air freight delivery window" },
      { value: "45-60 days", label: "sea freight delivery window" },
      { value: "7 days", label: "free storage at our Kumasi warehouse" },
    ],
    comparisonTitle: "Shipping options",
    comparisonDescription:
      "Choose the route that matches your urgency, cargo profile, and margin model.",
    comparisonCards: [
      {
        title: "Air freight",
        badge: "Express",
        description:
          "Best for high-value electronics, urgent inventory, and product samples. Pricing is calculated per kilogram and arrival supports Accra and Kumasi pickup.",
      },
      {
        title: "Sea freight",
        badge: "Bulk",
        description:
          "Best for furniture, heavy machinery, warehouse stock, and large-volume orders. Pricing is calculated per CBM with consolidated monthly containers.",
      },
    ],
    workflowTitle: "How to ship with Globit",
    workflowDescription:
      "A simple operating routine keeps your packages identifiable from China warehouse intake to Ghana delivery.",
    workflowSteps: [
      {
        title: "Get your unique shipping mark",
        description:
          'Before anything ships to our warehouse, request your unique "Globit ID" so your goods stay traceable.',
      },
      {
        title: "Send to our China warehouse",
        description:
          "Use our professional warehouse address in Guangzhou or Yiwu for supplier deliveries.",
      },
      {
        title: "Submit tracking numbers",
        description:
          "Tell our logistics desk what is coming so we can match inbound packages to your account.",
      },
      {
        title: "Consolidation and dispatch",
        description:
          "We group items to reduce cost and assign them to the next available flight or vessel.",
      },
      {
        title: "Local delivery",
        description:
          "After clearing, collect from our warehouse or arrange doorstep delivery in Kumasi or Accra.",
      },
    ],
    workflowTone: "dark",
    notice: {
      title: "Important",
      description:
        "For the current warehouse address and latest per-kg or per-CBM rates, message our logistics desk directly so the handling instructions match your cargo.",
    },
    featureTitle: "Why shippers stay with us",
    featureCards: [
      {
        title: "No hidden clearing fees",
        description:
          "Our quoted price is designed to include the customs and port costs that usually surprise importers later.",
      },
      {
        title: "Professional packing",
        description:
          "Fragile items such as TVs and solar panels can be crated or padded for safer movement.",
      },
      {
        title: "Secure storage",
        description:
          "You get seven days of free storage at our Kumasi warehouse before pickup arrangements.",
      },
      {
        title: "Cargo insurance support",
        description:
          "Insurance can be arranged for higher-risk or higher-value cargo that needs extra protection.",
      },
    ],
    ctaTitle: "Have a parcel ready in China?",
    ctaDescription:
      "Do not let it sit at the factory. Get the warehouse address, the current rates, and the right dispatch instructions from the team today.",
    ctaActions: [
      {
        href: whatsappLink(
          "Hello Globit, I need logistics support for goods already in China."
        ),
        label: "Chat with the logistics team",
        external: true,
        variant: "primary",
      },
    ],
  },
  {
    slug: "courses",
    label: "Life Changing Imports Masterclass",
    summary:
      "Learn sourcing, landed-cost math, shipping strategy, and product turnover through practical import training built from active business experience.",
    image: masterClassImage,
    heroEyebrow: "Training and advisory",
    heroTitle: "Do not just shop. Build a global import empire.",
    heroDescription:
      "The academy is built for people who want more than mini-import guesses. Learn the frameworks, contacts, and decision models behind repeatable import growth.",
    heroActions: [
      {
        href: "https://selar.com/f1t123",
        label: "Book a consultation",
        external: true,
        variant: "primary",
      },
      {
        href: "https://selar.com/2g704i",
        label: "Start virtual training",
        external: true,
        variant: "outline",
      },
    ],
    tags: ["Live coaching", "Practical systems", "Importer community"],
    metrics: [
      { value: "3", label: "structured learning paths" },
      { value: "1:1", label: "direct coaching available" },
      { value: "4", label: "core business skills covered deeply" },
    ],
    introEyebrow: "Why learn from Globit?",
    problemTitle: "The difference between a hobbyist and a professional",
    problemIntro:
      "Many people try mini-importation and lose money to weak product selection, inflated shipping, or low-turnover inventory. This program is designed to move you toward professional execution.",
    painPoints: [
      {
        title: "Real-world experience",
        description:
          "Learn from an active operator moving products monthly through the same channels you want to use.",
      },
      {
        title: "Proven systems",
        description:
          "No filler. Just the exact apps, negotiation habits, and logistics strategies that work now.",
      },
      {
        title: "Network access",
        description:
          "Get exposed to verified supplier pathways and a business-minded importer community.",
      },
    ],
    featureTitle: "What you will master",
    featureCards: [
      {
        title: "The sourcing secret",
        description:
          'How to find factories and suppliers that never show up in a simple search.',
      },
      {
        title: "The profit math",
        description:
          "How to calculate landed cost correctly and set pricing with real margin discipline.",
      },
      {
        title: "The logistics maze",
        description:
          "How to use air and sea freight strategically so shipping supports profit instead of destroying it.",
      },
      {
        title: "Marketing for turnover",
        description:
          "How to use social selling to create demand before your goods even arrive in Ghana.",
      },
    ],
    pricingTitle: "Choose your learning path",
    pricingDescription:
      "Pick the format that matches your stage, schedule, and level of support required.",
    pricingCards: [
      {
        title: "One-on-one physical training",
        badge: "Hands-on",
        description:
          "A personalized in-person coaching session at an agreed public location for founders who want guided setup support.",
        action: {
          href: "https://selar.com/41l768",
          label: "Book physical training",
          external: true,
          variant: "primary",
        },
      },
      {
        title: "One-on-one live training",
        badge: "Virtual",
        description:
          "A private live session for importers who want focused support without leaving their schedule behind.",
        action: {
          href: "https://selar.com/2g704i",
          label: "Start virtual training",
          external: true,
          variant: "primary",
        },
      },
      {
        title: "Online business consultation",
        badge: "Strategy",
        description:
          "A targeted consulting session for supplier issues, customs delays, low sales, or stalled operations.",
        action: {
          href: "https://selar.com/f1t123",
          label: "Book consultation",
          external: true,
          variant: "primary",
        },
      },
    ],
    testimonial: {
      quote:
        "I used to struggle with 1688, but after the masterclass I placed my first order of 500 units and sold out in two weeks.",
      author: "Grace, Boutique Owner, Accra",
    },
    ctaTitle: "Your journey to financial independence starts with one decision",
    ctaDescription:
      "Do not wait for the perfect moment. Choose the support level that fits your stage and start building a stronger import business now.",
    ctaActions: [
      {
        href: "https://selar.com/f1t123",
        label: "Book a consultation",
        external: true,
        variant: "primary",
      },
      {
        href: "https://selar.com/2g704i",
        label: "Start virtual training",
        external: true,
        variant: "secondary",
      },
    ],
  },
  {
    slug: "globit-shop",
    label: "The Globit Shop",
    summary:
      "Join curated preorders for verified products and wholesale-style pricing without carrying a full factory MOQ on your own.",
    image: shopImage,
    heroEyebrow: "Curated preorder model",
    heroTitle: "Hand-picked. Factory-priced. Globit-verified.",
    heroDescription:
      "Skip the sourcing stress. The shop is where curated demand, verified supply, and practical landed pricing come together for smaller buyers and fast-moving retailers.",
    heroActions: [
      {
        href: "https://whatsapp.com/channel/0029VbA5FEuLI8YWPxJb630L",
        label: "Join the deals channel",
        external: true,
        variant: "primary",
      },
      {
        href: whatsappLink(
          "Hello Globit, I want updates on upcoming preorder drops."
        ),
        label: "Ask about preorders",
        external: true,
        variant: "outline",
      },
    ],
    tags: ["Curated products", "Landed pricing", "Group buying advantage"],
    metrics: [
      { value: "3", label: "simple preorder steps" },
      { value: "1", label: "landed price before you commit" },
      { value: "Lower MOQs", label: "factory-style access in smaller batches" },
    ],
    workflowTitle: "How the shop works",
    workflowDescription:
      "The preorder model is simple: we curate, verify, consolidate, and deliver.",
    workflowSteps: [
      {
        title: "Browse the gallery",
        description:
          "We publish trending products with a clear landed price that combines product, shipping, and clearing unless stated otherwise.",
      },
      {
        title: "Pay to join",
        description:
          "Secure your units by paying the listed amount or the stated commitment fee.",
      },
      {
        title: "Wait for the batch",
        description:
          "Your items move in the next air or sea batch and are delivered once the shipment lands and clears.",
      },
    ],
    galleryTitle: "Preorder gallery",
    galleryDescription:
      "The full preorder catalog is still being finalized. For now, the experience is positioned as a coming-soon showcase.",
    galleryCards: [
      {
        title: "Trending electronics",
        badge: "Coming soon",
        description:
          "Factory-verified devices and accessories with demand potential and clearer landed pricing.",
      },
      {
        title: "Retail-ready accessories",
        badge: "Coming soon",
        description:
          "Fast-moving items selected for resale, gifting, and impulse purchase categories.",
      },
      {
        title: "Home and lifestyle finds",
        badge: "Coming soon",
        description:
          "Practical products intended for grouped preorders and smaller-volume buyers.",
      },
    ],
    featureTitle: "Why buyers shop with Globit",
    featureCards: [
      {
        title: "No hidden fees",
        description:
          'The price shown is intended to be the price paid, with no surprise clearing add-ons unless clearly stated.',
      },
      {
        title: "Quality guaranteed",
        description:
          "We only spotlight products we have tested directly or sourced from verified five-star factories.",
      },
      {
        title: "Lower MOQs",
        description:
          "Group ordering lets you benefit from stronger factory pricing without buying a full 100-piece run yourself.",
      },
    ],
    ctaTitle: "Do not miss the next container",
    ctaDescription:
      "Our best deals move quickly. Join the WhatsApp broadcast channel for early access to new inventory and preorder opportunities.",
    ctaActions: [
      {
        href: "https://whatsapp.com/channel/0029VbA5FEuLI8YWPxJb630L",
        label: "Browse latest preorders",
        external: true,
        variant: "primary",
      },
    ],
  },
];

export const servicesBySlug = new Map(
  servicePages.map((service) => [service.slug, service])
);

export const getServiceBySlug = (slug: string) => servicesBySlug.get(slug);

export const serviceLinks = [
  { value: "all-services", label: "All Services", href: "/services" },
  ...servicePages.map((service) => ({
    value: service.slug,
    label: service.label,
    href: `/services/${service.slug}`,
  })),
];
