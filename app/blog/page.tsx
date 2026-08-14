import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Container } from "@/components/site/container"
import { CTASection } from "@/components/site/cta-section"
import { HeroSection } from "@/components/site/hero-section"
import { blogPosts, pageMetadata } from "@/lib/site-data"

export const metadata = pageMetadata(
  "Fire Safety Blog | Aulukya",
  "Read practical fire safety articles from Aulukya covering maintenance, alarms, audits, and workplace safety topics.",
  "/blog"
)

function PostMeta({ category, date }: { category: string; date: string }) {
  return (
    <p className="text-xs font-medium text-primary sm:text-sm">
      {category} <span className="px-1 text-muted-foreground">&bull;</span>{" "}
      {date}
    </p>
  )
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Article topics">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground"
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}

export default function Page() {
  const [featured, ...latest] = blogPosts

  return (
    <>
      <HeroSection
        eyebrow="Blog"
        title="Fire safety insights for Chennai workplaces."
        description="Useful articles on fire protection, maintenance, audits, alarm systems, and safer business environments."
        image="/blog-hero-banner.png"
      />
      <section className="bg-background py-14 sm:py-16 lg:py-20">
        <Container>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Recent blog posts
          </h1>

          <div className="mt-9 grid gap-12 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] lg:gap-8 xl:gap-10">
            <article>
              <Link
                href={`/blog/${featured.slug}`}
                className="group block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-muted">
                  <Image
                    src={featured.image}
                    alt="Fire safety professional completing a workplace audit"
                    fill
                    priority
                    sizes="(min-width: 1024px) 52vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="pt-6">
                  <PostMeta
                    category={featured.category}
                    date={featured.displayDate}
                  />
                  <div className="mt-3 flex items-start gap-4">
                    <h2 className="max-w-2xl flex-1 text-2xl leading-tight font-semibold tracking-tight text-foreground sm:text-3xl">
                      {featured.title}
                    </h2>
                    <ArrowUpRight
                      className="mt-1 size-6 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
                    {featured.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Read More{" "}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </span>
                  <div className="mt-5">
                    <Tags tags={featured.tags} />
                  </div>
                </div>
              </Link>
            </article>

            <div className="grid gap-8 lg:grid-rows-3 lg:gap-6">
              {latest.map((post) => (
                <article key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group grid gap-5 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:grid-cols-[minmax(190px,0.9fr)_minmax(0,1.1fr)] lg:h-full lg:grid-cols-[minmax(180px,0.9fr)_minmax(0,1.1fr)] xl:grid-cols-[minmax(220px,0.95fr)_minmax(0,1.05fr)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-muted sm:aspect-auto sm:min-h-48 lg:min-h-0">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        sizes="(min-width: 1280px) 20vw, (min-width: 640px) 38vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex min-w-0 flex-col justify-center py-1">
                      <PostMeta
                        category={post.category}
                        date={post.displayDate}
                      />
                      <div className="mt-2 flex items-start gap-2">
                        <h2 className="flex-1 text-xl leading-snug font-semibold tracking-tight text-foreground">
                          {post.title}
                        </h2>
                        <ArrowUpRight
                          className="mt-0.5 size-5 shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
                        {post.excerpt}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        Read More{" "}
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </span>
                      <div className="mt-4">
                        <Tags tags={post.tags} />
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  )
}
