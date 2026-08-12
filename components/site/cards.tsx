import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ServiceCard({
  title,
  description,
  href,
}: {
  title: string
  description: string
  href: string
}) {
  return (
    <Card className="h-full rounded-lg">
      <CardHeader>
        <CardTitle className="text-xl font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex h-full flex-col gap-5">
        <p className="text-sm leading-6 text-muted-foreground">{description}</p>
        <Link href={href} className={cn(buttonVariants({ variant: "outline" }), "mt-auto w-fit")}>
          View service <ArrowRight aria-hidden="true" />
        </Link>
      </CardContent>
    </Card>
  )
}

export function FeatureCard({ title, text }: { title: string; text: string }) {
  return (
    <Card className="rounded-lg">
      <CardHeader>
        <Badge variant="secondary" className="w-fit">
          {title}
        </Badge>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-muted-foreground">{text}</p>
      </CardContent>
    </Card>
  )
}
