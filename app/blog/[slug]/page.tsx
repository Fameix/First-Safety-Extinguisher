import Link from "next/link"
import { notFound } from "next/navigation"

import { Container } from "@/components/site/container"
import { CTASection } from "@/components/site/cta-section"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { blogPosts, pageMetadata } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug)
  if (!post) return {}
  return pageMetadata(`${post.title} | Aulukya`, post.excerpt, `/blog/${post.slug}`)
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug)
  if (!post) notFound()

  return (
    <>
      <section className="border-b bg-muted/30 py-10">
        <Container>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href="/blog">Blog</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>{post.title}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Badge variant="secondary" className="mt-8">{post.category}</Badge>
          <h1 className="mt-4 max-w-4xl text-4xl font-medium tracking-normal md:text-5xl">{post.title}</h1>
          <p className="mt-4 text-sm text-muted-foreground">{post.date}</p>
        </Container>
      </section>
      <article className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.35fr]">
          <div>
            <div className="aspect-[16/9] rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} role="img" aria-label={post.title} />
            <div className="prose prose-neutral mt-10 max-w-none">
              <p>{post.excerpt}</p>
              <h2>Practical safety focus</h2>
              <p>
                Fire safety works best when equipment, systems, maintenance, and workplace awareness are reviewed together.
                Aulukya supports businesses with services connected to the topic of this article.
              </p>
              <h2>Internal links</h2>
              <p>
                Explore related Aulukya services below, or use the contact page to discuss a specific requirement.
              </p>
            </div>
          </div>
          <Card className="h-fit rounded-lg">
            <CardHeader>
              <CardTitle className="text-xl font-medium">Related links</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3">
              {post.related.map((href) => (
                <Link key={href} href={href} className={cn(buttonVariants({ variant: "outline" }), "justify-start")}>
                  {href === "/contact" ? "Contact Us" : href.replaceAll("-", " ").replace("/", "")}
                </Link>
              ))}
            </CardContent>
          </Card>
        </Container>
      </article>
      <CTASection />
    </>
  )
}
