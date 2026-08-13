"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Menu } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { SiteLogo } from "@/components/site/site-logo"
import { Container } from "@/components/site/container"
import { navLinks, services } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }

    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header className="sticky top-3 z-50">
      <Container>
        <div className="flex items-center justify-between gap-3 rounded-full border border-border/40 bg-background/70 px-4 py-2.5 shadow-2xl shadow-primary/5 backdrop-blur-xl sm:px-5 lg:gap-6 lg:px-6">
          <Link href="/" className="flex shrink-0 items-center leading-none" aria-label="Aulukya home">
            <SiteLogo priority className="block h-11 w-auto sm:h-12 lg:h-14" />
          </Link>

          <NavigationMenu className="hidden min-w-0 flex-1 justify-center lg:flex">
            <NavigationMenuList className="gap-0 rounded-full bg-muted p-1">
              {navLinks.map((link) =>
                link.label === "Services" ? (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuTrigger className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-background hover:text-foreground data-[state=open]:bg-background data-[state=open]:text-foreground">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[620px] grid-cols-2 gap-2 p-3">
                        {services.map((service) => (
                          <div key={service.href}>
                            <Link href={service.href} className="block rounded-xl p-3 hover:bg-accent">
                              <div className="text-base font-medium">{service.title}</div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "rounded-full px-4 py-2 text-sm font-medium transition-all hover:bg-background hover:text-foreground",
                        isActiveLink(link.href)
                          ? "bg-background text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="/contact"
              className={cn(
                buttonVariants(),
                "group h-11 rounded-full px-5 text-sm font-medium shadow-none transition-all hover:ps-6 hover:pe-4"
              )}
            >
              Free Consultation
              <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Link href="/contact" className={cn(buttonVariants({ size: "sm" }), "rounded-full px-4")}>
              Free Consultation
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground outline-none transition-colors hover:bg-muted">
                <Menu aria-hidden="true" className="size-4" />
                <span className="sr-only">Open navigation</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="mt-2 w-64">
                {navLinks.map((link) => (
                  <DropdownMenuItem key={link.href} className="p-0">
                    <Link
                      href={link.href}
                      className={cn(
                        "block w-full cursor-pointer px-3 py-2 transition-colors hover:text-primary",
                        isActiveLink(link.href) ? "text-primary" : "text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <div className="my-1 h-px bg-border/60" />
                {services.map((service) => (
                  <DropdownMenuItem key={service.href} className="p-0">
                    <Link href={service.href} className="block w-full cursor-pointer px-3 py-2 text-muted-foreground">
                      {service.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </Container>
    </header>
  )
}
