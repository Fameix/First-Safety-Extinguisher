import Link from "next/link"

import { Container } from "@/components/site/container"
import { CTASection } from "@/components/site/cta-section"
import { HeroSection } from "@/components/site/hero-section"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { blogPosts, pageMetadata } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export const metadata = pageMetadata(
  "Fire Safety Blog | Aulukya",
  "Read practical fire safety articles from Aulukya covering maintenance, alarms, audits, and workplace safety topics.",
  "/blog"
)

export default function Page() {
  const [featured, ...latest] = blogPosts

  return (
    <>
      <HeroSection
        eyebrow="Blog"
        title="Fire safety insights for Chennai workplaces."
        description="Useful articles on fire protection, maintenance, audits, alarm systems, and safer business environments."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=80"
      />
      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="overflow-hidden rounded-lg">
            <div className="aspect-[16/9] bg-cover bg-center" style={{ backgroundImage: `url(${featured.image})` }} role="img" aria-label={featured.title} />
            <CardHeader>
              <Badge variant="secondary" className="w-fit">{featured.category}</Badge>
              <CardTitle className="text-2xl font-medium">{featured.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-muted-foreground">{featured.excerpt}</p>
              <Link href={`/blog/${featured.slug}`} className={cn(buttonVariants(), "mt-5")}>Read article</Link>
            </CardContent>
          </Card>
          <div>
            <h2 className="text-2xl font-medium tracking-normal">Latest articles</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {Array.from(new Set(blogPosts.map((post) => post.category))).map((category) => (
                <Badge key={category} variant="outline">{category}</Badge>
              ))}
            </div>
            <div className="mt-6 grid gap-4">
              {latest.map((post) => (
                <Card key={post.slug} className="rounded-lg">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit">{post.category}</Badge>
                    <CardTitle className="text-xl font-medium">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className={cn(buttonVariants({ variant: "outline" }), "mt-5")}>Read article</Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  )
}
