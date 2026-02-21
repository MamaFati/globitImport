'use client'

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, Clock, Search, Sparkles, XCircle } from "lucide-react"

import { blogCategories, blogPosts } from "@/lib/blog-posts"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const POSTS_PER_PAGE = 6

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0]

  const filteredBlogs = useMemo(() => {
    const normalized = searchQuery.trim().toLowerCase()

    return blogPosts.filter((blog) => {
      const matchesCategory =
        activeCategory === "All" || blog.category === activeCategory
      const matchesSearch =
        normalized.length === 0 ||
        blog.title.toLowerCase().includes(normalized) ||
        blog.excerpt.toLowerCase().includes(normalized) ||
        blog.category.toLowerCase().includes(normalized)

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  const showFeatured = activeCategory === "All" && searchQuery.trim() === ""

  const visibleBlogs = showFeatured
    ? filteredBlogs.filter((post) => post.slug !== featuredPost.slug)
    : filteredBlogs

  const totalPages = Math.max(1, Math.ceil(visibleBlogs.length / POSTS_PER_PAGE))

  const paginatedBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE
    return visibleBlogs.slice(startIndex, startIndex + POSTS_PER_PAGE)
  }, [currentPage, visibleBlogs])

  useEffect(() => {
    setCurrentPage(1)
  }, [activeCategory, searchQuery])

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages)
    }
  }, [currentPage, totalPages])

  const handleResetFilters = () => {
    setSearchQuery("")
    setActiveCategory("All")
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <section className="relative overflow-hidden border-b bg-slate-950 px-4 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(213,173,54,0.28),transparent_35%)]" />
        <div className="relative mx-auto max-w-6xl">
          <Badge variant="secondary" className="mb-4">
            The Import Journal
          </Badge>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Practical China-to-Ghana import insights for smarter business
            decisions
          </h1>
          <p className="mt-5 max-w-2xl text-base text-slate-300 md:text-lg">
            Weekly breakdowns on sourcing, logistics, payments, and market
            shifts that affect your margins.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-xs tracking-wide text-slate-200 uppercase">
            <span className="rounded-full border border-white/20 px-3 py-1">
              {blogPosts.length} articles
            </span>
            <span className="rounded-full border border-white/20 px-3 py-1">
              Updated weekly
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto mt-8 flex w-full max-w-6xl flex-col gap-8 px-4">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="group relative w-full md:w-96">
            <Search
              className={`absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transition-colors ${searchQuery ? "text-blue-600" : "text-slate-400"}`}
            />
            <Input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search articles, topics..."
              className="h-12 rounded-2xl border-none bg-white px-10 font-medium text-slate-900 focus-visible:ring-1 focus-visible:ring-blue-500/50"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <XCircle className="h-5 w-5" />
              </button>
            )}
          </div>

          <div className="no-scrollbar flex w-full gap-2 overflow-x-auto rounded-lg bg-white px-4 py-2 md:w-auto">
            {blogCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-lg px-3 py-1 text-sm font-medium tracking-widest transition-all ${
                  activeCategory === category
                    ? "bg-secondary text-white"
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {searchQuery && (
          <p className="text-muted-foreground text-sm">
            {filteredBlogs.length} result(s) for "{searchQuery}"
          </p>
        )}

        {showFeatured && featuredPost && (
          <Card className="overflow-hidden border-white/60 bg-white/95 shadow-lg">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="relative block aspect-[16/10] lg:aspect-auto"
              >
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="h-full w-full object-cover"
                />
                <Badge className="absolute top-4 left-4 gap-1.5 bg-slate-900 text-white">
                  <Sparkles className="h-3.5 w-3.5" />
                  Featured
                </Badge>
              </Link>
              <CardContent className="flex flex-col justify-center p-6 md:p-8">
                <div className="text-muted-foreground mb-4 flex flex-wrap items-center gap-4 text-xs">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {featuredPost.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <Link href={`/blog/${featuredPost.slug}`}>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900 transition-colors hover:text-blue-700 md:text-3xl">
                    {featuredPost.title}
                  </h2>
                </Link>
                <p className="text-muted-foreground mt-4 text-sm leading-6 md:text-base">
                  {featuredPost.excerpt}
                </p>
                {/* <Button asChild variant="link" className="mt-4 w-fit px-0 text-blue-700">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    Continue reading
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button> */}
              </CardContent>
            </div>
          </Card>
        )}

        {visibleBlogs.length > 0 ? (
          <>
            <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {paginatedBlogs.map((blog) => (
                <Card
                  key={blog.slug}
                  className="hover-lift flex h-full flex-col overflow-hidden border-white/60 bg-white/95"
                >
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="relative block aspect-[16/10]"
                  >
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="h-full w-full object-cover"
                    />
                    <Badge
                      variant="secondary"
                      className="absolute top-3 left-3 rounded-full"
                    >
                      {blog.category}
                    </Badge>
                  </Link>
                  <CardHeader className="flex grow flex-col space-y-3">
                    <CardDescription className="flex flex-wrap items-center gap-3 text-xs tracking-wide uppercase">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {blog.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {blog.readTime}
                      </span>
                    </CardDescription>
                    <Link href={`/blog/${blog.slug}`}>
                      <CardTitle className="text-lg leading-snug transition-colors hover:text-blue-700">
                        {blog.title}
                      </CardTitle>
                    </Link>
                    <CardDescription className="line-clamp-3 text-sm leading-6">
                      {blog.excerpt}
                    </CardDescription>
                  </CardHeader>
                  {/* <CardFooter className="justify-between border-t pt-4">
                    <Button asChild variant="link" className="px-0">
                      <Link href={`/blog/${blog.slug}`}>
                        Read article
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter> */}
                </Card>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3  p-3">
              <p className="text-muted-foreground text-sm">
                Page {currentPage} of {totalPages}
              </p>
              {totalPages > 1 && (
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    disabled={currentPage === 1}
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(1, prev - 1))
                    }
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  {Array.from({ length: totalPages }, (_, index) => {
                    const page = index + 1;
                    return (
                      <Button
                        key={page}
                        size="sm"
                        variant={currentPage === page ? "secondary" : "outline"}
                        onClick={() => setCurrentPage(page)}
                        className="min-w-9"
                      >
                        {page}
                      </Button>
                    );
                  })}
                  <Button
                    size="sm"
                    variant="outline"
                    disabled={currentPage === totalPages}
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                    }
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </>
        ) : (
          <Card className="border-dashed bg-white/80">
            <CardContent className="flex flex-col items-center gap-4 px-6 py-14 text-center">
              <Search className="text-muted-foreground h-8 w-8" />
              <h3 className="text-xl font-semibold">No articles found</h3>
              <p className="text-muted-foreground max-w-md text-sm">
                No posts matched your current filters. Reset to browse all
                available insights.
              </p>
              <Button variant="secondary" onClick={handleResetFilters}>
                Reset filters
              </Button>
            </CardContent>
          </Card>
        )}

        <Card className="relative overflow-hidden border-0 bg-slate-900 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.2),transparent_38%),radial-gradient(circle_at_100%_100%,rgba(213,173,54,0.35),transparent_40%)]" />
          <CardContent className="relative p-6 md:p-10">
            <div className="mx-auto max-w-3xl text-center">
              <Badge variant="secondary" className="mb-4">
                Weekly Brief
              </Badge>
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Get new import insights in your inbox
              </h3>
              <p className="mt-3 text-sm text-slate-300 md:text-base">
                Market shifts, supplier tips, and shipping updates for serious
                importers.
              </p>
              <form
                onSubmit={(event) => event.preventDefault()}
                className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row"
              >
                <Input
                  type="email"
                  placeholder="you@email.com"
                  className="h-11 border-white/20 bg-white/10 text-white placeholder:text-slate-300"
                />
                <Button
                  type="submit"
                  variant="secondary"
                  className="h-11 rounded-md px-6"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
