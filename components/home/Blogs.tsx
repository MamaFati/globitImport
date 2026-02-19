import { ArrowRight, Calendar, Clock,  } from "lucide-react";
import Link from "next/link";
 const latestBlogs = [
   {
     title: "5 Common Mistakes When Sourcing from 1688",
     excerpt:
       "Many Ghanaian importers lose money due to these easily avoidable mistakes. Learn how to protect your capital...",
     image:
       "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
     date: "Oct 24, 2024",
     readTime: "6 min read",
     category: "Sourcing",
   },
   {
     title: "Understanding RMB Exchange Rates for 2024",
     excerpt:
       "Fluctuating rates can kill your profit margins. Here's our expert analysis on the best times to make payments...",
     image:
       "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=800",
     date: "Oct 20, 2024",
     readTime: "4 min read",
     category: "Payments",
   },
   {
     title: "Air vs Sea Freight: Which is Better for Your Business?",
     excerpt:
       "Don't let shipping costs eat your profits. We break down the math for bulk orders vs urgent stock...",
     image:
       "https://images.unsplash.com/photo-1494412574743-0195829659f1?auto=format&fit=crop&q=80&w=800",
     date: "Oct 15, 2024",
     readTime: "8 min read",
     category: "Logistics",
   },
 ];

const BlogSection = () => {
    return (  
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 animate-reveal">
            <div className="text-left">
              <h2 className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm mb-2">News & Insights</h2>
              <h3 className="text-2xl md:text-4xl font-bold text-slate-900 uppercase">The Import <span className="text-secondary">Journal</span></h3>
            </div>
            <Link href="/blogs" className="px-6 py-3 bg-secondary text-white rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-secondary/80 transition-all flex items-center gap-2">
              View All Articles <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestBlogs.map((blog, i) => (
              <div key={i} className="group flex flex-col animate-reveal" style={{ animationDelay: `${i * 150}ms` }}>
                <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-6 shadow-xl">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-secondary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                    {blog.category}
                  </div>
                </div>
                <div className="space-y-4 px-2">
                  <div className="flex items-center gap-6 text-slate-400 text-sm font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {blog.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {blog.readTime}</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-slate-900/60 transition-colors leading-tight">
                    {blog.title}
                  </h4>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    {blog.excerpt}
                  </p>
                  <Link href="/blogs" className="inline-flex items-center gap-2 text-blue-600 font-normal uppercase tracking-widest text-sm hover:gap-4 transition-all">
                    Read Full Story <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> );
}
 
export default BlogSection;