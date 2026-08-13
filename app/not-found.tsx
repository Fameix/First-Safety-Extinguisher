import Link from "next/link"

import { Container } from "@/components/site/container"
import { buttonVariants } from "@/components/ui/button"

export default function NotFound() {
  return (
    <section className="section-surface py-24">
      <Container>
        <p className="text-sm font-medium uppercase text-primary">404</p>
        <h1 className="mt-4 text-4xl font-medium tracking-normal">Page not found</h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          The page you requested is not available. Use the main navigation or return to the homepage.
        </p>
        <Link href="/" className={buttonVariants({ className: "mt-8" })}>Go Home</Link>
      </Container>
    </section>
  )
}
