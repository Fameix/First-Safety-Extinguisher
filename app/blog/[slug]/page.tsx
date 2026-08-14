import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { notFound } from "next/navigation"

import { Container } from "@/components/site/container"
import { blogArticles } from "@/lib/blog-articles"
import { blogPosts, pageMetadata } from "@/lib/site-data"

type BlogPageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((item) => item.slug === slug)
  if (!post) return {}
  const metadata = pageMetadata(post.metaTitle, post.metaDescription, `/blog/${post.slug}`)
  return {
    ...metadata,
    openGraph: { ...metadata.openGraph, type: "article", publishedTime: post.date, images: [{ url: post.image, alt: post.imageAlt }] },
    twitter: { ...metadata.twitter, images: [post.image] },
  }
}

export default async function Page({ params }: BlogPageProps) {
  const { slug } = await params
  const post = blogPosts.find((item) => item.slug === slug)
  if (!post) notFound()
  const article = blogArticles[post.slug]
  if (!article) notFound()
  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3)

  return (
    <>
      <article>
        <header className="section-surface-alt py-12 sm:py-16 lg:py-20">
          <Container>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              <ArrowLeft className="size-4" aria-hidden="true" /> Back to Blog
            </Link>
            <p className="mt-8 text-sm font-medium text-primary">{post.category} <span className="px-1.5 text-muted-foreground">&bull;</span> {post.displayDate}</p>
            <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">{post.title}</h1>
          </Container>
        </header>

        <Container className="py-10 sm:py-14 lg:py-16">
          <div className="relative aspect-[16/9] max-h-[680px] overflow-hidden rounded-xl bg-muted">
            <Image src={post.image} alt={post.imageAlt} fill priority sizes="(min-width: 1280px) 1200px, 100vw" className="object-cover" />
          </div>
          <div className="w-full pt-10 sm:w-[90%] sm:pt-14 lg:w-full lg:max-w-[900px]">
            <section aria-labelledby="introduction-heading">
              <h2 id="introduction-heading" className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Introduction</h2>
              <div className="mt-5 space-y-5 text-[17px] leading-[1.75] text-muted-foreground sm:text-lg">
                {article.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>

            <aside className="mt-10 border-l-2 border-primary/50 bg-primary/[0.035] py-5 pr-5 pl-6" aria-labelledby="takeaways-heading">
              <h2 id="takeaways-heading" className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Key Takeaways</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[17px] leading-[1.7] text-muted-foreground sm:text-lg">
                {article.takeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}
              </ul>
            </aside>

            <div className="mt-14 space-y-12 sm:space-y-14">
              {article.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{section.heading}</h2>
                  <div className="mt-5 space-y-5 text-[17px] leading-[1.75] text-muted-foreground sm:text-lg">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {section.bullets && <ul className="list-disc space-y-2 pl-6 marker:text-primary">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
                  </div>
                  {section.subheading && (
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">{section.subheading}</h3>
                      <div className="mt-4 space-y-5 text-[17px] leading-[1.75] text-muted-foreground sm:text-lg">
                        {section.subparagraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                      </div>
                    </div>
                  )}
                </section>
              ))}
              <section>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Conclusion</h2>
                <div className="mt-5 space-y-5 text-[17px] leading-[1.75] text-muted-foreground sm:text-lg">
                  {article.conclusion.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>
            </div>
          </div>
        </Container>
      </article>

      <section className="section-surface-alt py-14 sm:py-16 lg:py-20">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Related blog posts</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {relatedPosts.map((related) => (
              <article key={related.slug}>
                <Link href={`/blog/${related.slug}`} className="group block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-muted">
                    <Image src={related.image} alt={related.imageAlt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  </div>
                  <p className="mt-5 text-sm font-medium text-primary">{related.category} &bull; {related.displayDate}</p>
                  <div className="mt-2 flex items-start gap-3">
                    <h3 className="flex-1 text-xl font-semibold leading-snug tracking-tight text-foreground">{related.title}</h3>
                    <ArrowUpRight className="mt-1 size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
