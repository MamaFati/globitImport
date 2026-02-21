import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"
import { notFound } from "next/navigation"

import { blogPosts, getBlogPostBySlug } from "@/lib/blog-posts"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type BlogPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: "Article Not Found",
    }
  }

  return {
    title: `${post.title} | Globit Import Journal`,
    description: post.excerpt,
  }
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const morePosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 6)

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <section className="relative overflow-hidden bg-slate-950 px-4 py-16 text-white md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.2),transparent_40%),radial-gradient(circle_at_90%_90%,rgba(213,173,54,0.28),transparent_45%)]" />
        <div className="relative mx-auto max-w-4xl">
          <Button
            asChild
            variant="ghost"
            className="mb-6 text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4" />
              Back to all articles
            </Link>
          </Button>

          <Badge variant="secondary" className="mb-4">
            {post.category}
          </Badge>

          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-slate-300">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      <main className="mx-auto mt-8 flex max-w-4xl flex-col gap-8 px-4">
        <Card className="overflow-hidden border-white/60 bg-white/95 shadow-lg">
          <div className="relative aspect-[16/9]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
          <CardContent className="px-6 py-8 md:px-10">
            <p className="text-muted-foreground text-lg leading-8">{post.excerpt}</p>
            <article className="mt-8 space-y-6 text-slate-700">
              {post.content.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 md:text-lg">
                  {paragraph}
                </p>
              ))}
            </article>
          </CardContent>
        </Card>

        {morePosts.length > 0 && (
          <section>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-slate-900">
              More Articles
            </h2>
            <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {morePosts.map((item) => (
                <Card key={item.slug} className="flex h-full flex-col border-white/60 bg-white/95">
                  <CardHeader className="space-y-2">
                    <Badge variant="secondary" className="w-fit">
                      {item.category}
                    </Badge>
                    <CardTitle className="text-base leading-6">{item.title}</CardTitle>
                    <CardDescription className="line-clamp-2 text-sm">
                      {item.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <Button asChild variant="link" className="px-0">
                      <Link href={`/blog/${item.slug}`}>
                        Read article
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
