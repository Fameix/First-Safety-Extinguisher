import type { MetadataRoute } from "next"

import { blogPosts, navLinks, services, siteUrl } from "@/lib/site-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    ...navLinks.map((link) => link.href),
    ...services.map((service) => service.href),
    "/privacy-policy",
    "/terms-and-conditions",
    ...blogPosts.map((post) => `/blog/${post.slug}`),
  ]

  return Array.from(new Set(staticRoutes)).map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }))
}
