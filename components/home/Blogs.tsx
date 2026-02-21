import { ArrowRight, Calendar, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { blogPosts } from "@/lib/blog-posts"

const latestBlogs = blogPosts.slice(0, 3)

const BlogSection = () => {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="animate-reveal mb-16 flex flex-col items-center md:items-end justify-between gap-6 md:flex-row">
          <div className="text-left">
            <h2 className="mb-2 text-sm font-bold tracking-[0.3em] text-blue-600 uppercase">
              News & Insights
            </h2>
            <h3 className="text-2xl font-bold text-slate-900 uppercase md:text-4xl">
              The Import <span className="text-secondary">Journal</span>
            </h3>
          </div>
          <Link
            href="/blog"
            className="bg-secondary hover:bg-secondary/80 flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold tracking-widest text-white uppercase transition-all"
          >
            View All Articles <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {latestBlogs.map((blog, i) => (
            <div
              key={blog.slug}
              className="group animate-reveal flex flex-col"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <Link
                href={`/blog/${blog.slug}`}
                className="relative mb-6 block aspect-[16/10] overflow-hidden rounded-[2rem] shadow-xl"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="bg-secondary absolute top-4 left-4 rounded-full px-4 py-1.5 text-[10px] font-black tracking-widest text-white uppercase shadow-lg">
                  {blog.category}
                </div>
              </Link>
              <div className="space-y-4 px-2">
                <div className="flex items-center gap-6 text-sm font-bold tracking-widest text-slate-400 uppercase">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" /> {blog.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" /> {blog.readTime}
                  </span>
                </div>
                <Link href={`/blog/${blog.slug}`}>
                  <h4 className="text-lg leading-tight font-bold text-slate-900 transition-colors group-hover:text-slate-900/60">
                    {blog.title}
                  </h4>
                </Link>
                <p className="font-medium leading-relaxed text-slate-500">
                  {blog.excerpt}
                </p>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-normal tracking-widest text-blue-600 uppercase transition-all hover:gap-4"
                >
                  Read Full Story <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection
