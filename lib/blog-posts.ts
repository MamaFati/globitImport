export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  category: string
  featured?: boolean
  content: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "sourcing-mistakes",
    title: "5 Common Mistakes When Sourcing from 1688",
    excerpt:
      "Many Ghanaian importers lose money due to avoidable mistakes. Learn how to protect your capital and negotiate better prices with vendors.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
    date: "Oct 24, 2024",
    readTime: "6 min read",
    category: "Sourcing",
    featured: true,
    content: [
      "Most failed import deals are not caused by bad luck. They are caused by rushed supplier decisions, weak product checks, and unclear payment terms before funds are sent.",
      "Start with supplier verification. Ask for business registration details, recent transaction history, and clear product specifications in writing. If a supplier avoids details, treat that as a serious warning sign.",
      "Second, confirm quality standards before production. Share exact photos, dimensions, color references, and packaging instructions. Small specification gaps create expensive disputes after shipping.",
      "Third, avoid paying in one step without milestones. Use staged payments where possible, tied to production and quality evidence. This protects your cash flow and reduces avoidable loss.",
      "Finally, protect your margin with total landed-cost calculations. Include product price, exchange rates, freight, clearing, and local delivery before confirming any order quantity.",
    ],
  },
  {
    slug: "rmb-rates",
    title: "Understanding RMB Exchange Rates for 2024",
    excerpt:
      "Fluctuating rates can kill your margins. Here is a practical framework for timing supplier payments and keeping currency risk under control.",
    image:
      "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=800",
    date: "Oct 20, 2024",
    readTime: "4 min read",
    category: "Payments",
    content: [
      "Exchange-rate volatility is often ignored until profits disappear. If you import regularly, currency planning must be part of your procurement workflow, not an afterthought.",
      "Track your cost baseline in both RMB and local currency. This gives you a clear trigger point for when a payment still preserves margin and when it does not.",
      "Where possible, split large orders into phased payments. This reduces the chance of converting the full amount at a single unfavorable rate.",
      "Always compare rate providers and transaction fees together. A better headline rate can still become expensive after settlement costs and transfer delays.",
      "Document your payment policy and review it monthly. A repeatable approach beats emotional timing decisions in volatile markets.",
    ],
  },
  {
    slug: "air-vs-sea",
    title: "Air vs Sea Freight: Which is Better for Your Business?",
    excerpt:
      "Break down the cost and timing tradeoffs for bulk restocks, urgent shipments, and seasonal inventory planning.",
    image:
      "https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "Oct 15, 2024",
    readTime: "8 min read",
    category: "Logistics",
    content: [
      "Air freight is ideal for urgent, high-turnover products where speed protects revenue. Sea freight is better for bulk stock where cost per unit matters more than lead time.",
      "Before choosing a lane, classify your products by urgency, margin, and stockout impact. One shipping method rarely fits every SKU.",
      "Use air for launches and emergency replenishment. Use sea for stable demand products with predictable reorder cycles.",
      "Model both options using landed cost per unit and expected sell-through timeline. This reveals which mode actually protects profit.",
      "The best importers run a hybrid model. Fast lanes keep shelves active while slower lanes rebuild margin through scale.",
    ],
  },
  {
    slug: "import-empire",
    title: "How to Build an Import Empire in Kumasi",
    excerpt:
      "How top students scaled from test orders to full containers in 12 months with better sourcing and tighter operations.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    date: "Oct 10, 2024",
    readTime: "12 min read",
    category: "Masterclass",
    content: [
      "Growth does not come from random product hunts. It comes from disciplined product selection, repeat supplier relationships, and consistent inventory planning.",
      "Start with one profitable line and optimize it deeply before expanding. Learn demand cycles, reorder timing, and customer objections at a detailed level.",
      "Build supplier trust through clear briefs, prompt communication, and predictable payment behavior. Reliable buyers usually get better terms over time.",
      "As volume grows, invest in process documentation. Standard operating procedures prevent quality drift and protect your team as operations scale.",
      "The final shift is managerial: stop acting as a trader and start operating as a systems-driven import business.",
    ],
  },
  {
    slug: "port-regulations",
    title: "New Port Regulations: What Ghanaians Need to Know",
    excerpt:
      "A quick summary of recent clearing rule changes and what importers should update in their shipping workflow.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    date: "Oct 05, 2024",
    readTime: "5 min read",
    category: "Market News",
    content: [
      "Regulatory updates can quietly increase costs if your process is not updated immediately. Most delays happen from missing paperwork, outdated declarations, or classification errors.",
      "Create a compliance checklist for every shipment. Include invoice format, HS code validation, packing list requirements, and broker handoff steps.",
      "Work closely with your clearing partners on pre-arrival document review. Fixing issues before vessel arrival is far cheaper than fixing them at the port.",
      "Track every delay event and root cause across shipments. Over time, this gives you an operational advantage that directly improves cash cycle speed.",
      "Compliance is not just legal protection. It is a competitive strategy for faster stock release and better customer reliability.",
    ],
  },
  {
    slug: "supplier-vetting",
    title: "Vetting Chinese Suppliers: A Professional Guide",
    excerpt:
      "Factory checks, business license reviews, and quality control checkpoints you should complete before paying.",
    image:
      "https://images.unsplash.com/photo-1590497008432-598f04441de8?q=80&w=1391&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "Oct 01, 2024",
    readTime: "10 min read",
    category: "Sourcing",
    content: [
      "Supplier selection should be treated like risk management, not optimism. A low quote is meaningless if delivery, quality, and communication are inconsistent.",
      "Request legal business details and verify that the company identity matches payment information. Mismatched entities are a common fraud signal.",
      "Run sample checks before committing full volume. Test both product quality and supplier responsiveness under revision requests.",
      "Set clear inspection gates with photo or video evidence before final payment release. This reduces disputes after goods leave origin.",
      "A strong supplier portfolio combines price, reliability, and communication speed. Prioritize total performance, not unit price alone.",
    ],
  },
  {
    slug: "supplier-communication-playbook",
    title: "Supplier Communication Playbook for Faster Turnaround",
    excerpt:
      "Use structured supplier messaging to reduce misunderstandings, speed up sampling, and keep production timelines predictable.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=900",
    date: "Sep 28, 2024",
    readTime: "7 min read",
    category: "Sourcing",
    content: [
      "Most delays begin with vague communication. A supplier cannot execute clearly if requirements arrive in fragments or shift daily.",
      "Use one master order brief that includes SKU list, dimensions, material requirements, packaging notes, and shipping targets.",
      "Set response windows for key milestones such as sampling, revision, and final confirmation. This keeps projects moving without repeated follow-up.",
      "Keep all approvals in writing with timestamped media. This prevents disputes when production output differs from verbal expectations.",
      "Consistent supplier communication is a direct productivity lever. It reduces errors, saves time, and protects your delivery promise to customers.",
    ],
  },
  {
    slug: "consolidation-warehouse-guide",
    title: "How Consolidation Warehouses Lower Shipping Costs",
    excerpt:
      "Consolidating multiple supplier orders into one shipment can improve freight efficiency and simplify your clearing process.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=900",
    date: "Sep 24, 2024",
    readTime: "6 min read",
    category: "Logistics",
    content: [
      "Importers who buy from many suppliers often overpay because goods ship separately. Consolidation warehouses solve this by combining cartons before export.",
      "The process starts with supplier delivery labels tied to your shipment plan. Without clear labeling, warehouse errors increase quickly.",
      "Before dispatch, request a consolidated inventory report with weight, dimensions, and photo confirmation by SKU.",
      "Use consolidation for products with similar shipping urgency. Mixing urgent and non-urgent goods can still create avoidable delays.",
      "Done correctly, consolidation lowers freight cost per unit and makes arrival planning much easier for your Ghana-side operations.",
    ],
  },
  {
    slug: "secure-payment-checklist",
    title: "Secure International Payment Checklist for Importers",
    excerpt:
      "A practical checklist to reduce fraud and payment errors when moving funds to overseas suppliers.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=900",
    date: "Sep 18, 2024",
    readTime: "5 min read",
    category: "Payments",
    content: [
      "Payment mistakes are expensive because funds are hard to recover across borders. A checklist protects both speed and security.",
      "Verify supplier legal name, account name, and bank region before each transfer. Re-check whenever banking details change.",
      "Link each payment to a purchase order and approved production milestone. Avoid sending funds based on chat screenshots alone.",
      "Use dual approval in your business for transfers above a defined threshold. This simple control prevents many internal errors.",
      "After payment, archive receipt, invoice, and supplier acknowledgment in one folder. Clean records help with disputes and compliance.",
    ],
  },
  {
    slug: "product-selection-framework",
    title: "A Product Selection Framework for First-Time Importers",
    excerpt:
      "Choose products with better demand stability and less cash-flow pressure using a simple validation framework.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=900",
    date: "Sep 12, 2024",
    readTime: "9 min read",
    category: "Masterclass",
    content: [
      "Beginners lose money by selecting products only by trend. Sustainable import growth starts with repeat demand and controlled competition.",
      "Score each product on demand frequency, breakage risk, storage complexity, and replacement cycle.",
      "Estimate first-order cash lock period from supplier payment to final retail sale. Avoid products with long lock periods if you are cash-constrained.",
      "Test with a small quantity and gather customer feedback before scaling. Real-world demand data beats assumptions.",
      "A structured product framework reduces emotional buying and improves long-term portfolio quality.",
    ],
  },
  {
    slug: "peak-season-shipping-alerts",
    title: "Peak Season Shipping Alerts Every Importer Should Track",
    excerpt:
      "Learn how to plan around seasonal congestion windows to avoid stockouts and sudden freight spikes.",
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=900",
    date: "Sep 08, 2024",
    readTime: "6 min read",
    category: "Market News",
    content: [
      "Freight markets tighten during predictable periods, yet many businesses still plan reactively. That is why costs jump unexpectedly.",
      "Track major holiday cycles, carrier capacity notices, and port advisories at least eight weeks before critical stock periods.",
      "Place orders earlier when your products are seasonal. Lead-time buffers are cheaper than emergency shipping.",
      "Pre-book where possible and secure alternative routes through your forwarder for risk mitigation.",
      "Seasonal logistics discipline protects availability, customer trust, and margin at the same time.",
    ],
  },
  {
    slug: "import-documentation-checklist",
    title: "Import Documentation Checklist for Smooth Clearing",
    excerpt:
      "Use this checklist to prepare shipping and customs documents before cargo arrives in Ghana.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=900",
    date: "Sep 03, 2024",
    readTime: "7 min read",
    category: "Logistics",
    content: [
      "Documentation gaps are a top cause of avoidable clearance delays. The fix is process, not luck.",
      "Prepare commercial invoice, packing list, bill of lading or airway bill, and product classification details before vessel arrival.",
      "Ensure document values, quantities, and descriptions match exactly across files. Inconsistency creates inspection risk.",
      "Share all documents with your broker early and request a pre-arrival review to catch issues in advance.",
      "Strong documentation habits shorten release time and reduce unexpected demurrage costs.",
    ],
  },
];

export const blogCategories = [
  "All",
  ...Array.from(new Set(blogPosts.map((post) => post.category))),
]

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
