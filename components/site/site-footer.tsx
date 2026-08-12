"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { SiteLogo } from "@/components/site/site-logo"
import { Container } from "@/components/site/container"
import { IconBadge } from "@/components/site/icon-badge"
import { Separator } from "@/components/ui/separator"
import { companyName, navLinks, services, socialLinks } from "@/lib/site-data"

const footerLinkClass =
  "text-sm leading-6 text-zinc-600 transition-colors hover:text-red-700 focus-visible:text-red-700 focus-visible:outline-none"
function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 3.5h-1.4c-2.2 0-3.6 1.4-3.6 3.7v2H6.5v3.2H9V22h3.6v-9.6h2.8l.4-3.2h-3.2v-1.5c0-.9.3-1.3 1.3-1.3H16V3.5h-2Z" />
    </svg>
  )
}

export function SiteFooter() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <footer className="bg-white py-10 text-zinc-950">
      <Container className="max-w-7xl">
        <div className="flex flex-col gap-6 sm:gap-12">
          <div
            className={[
              "grid grid-cols-1 items-start gap-y-10 py-12 sm:grid-cols-2 lg:grid-cols-4 [&>*]:min-w-0",
              isHomePage ? "gap-x-16 lg:gap-x-20" : "gap-x-8",
            ].join(" ")}
          >
            <div>
              <div className="flex max-w-sm animate-in flex-col gap-4 duration-1000 fill-mode-both slide-in-from-bottom-10 fade-in">
                <Link
                  href="/"
                  aria-label="Aulukya Fire & Safety Solutions home"
                >
                  <SiteLogo
                    mode="dark"
                    className="h-14 w-auto sm:h-16 lg:h-20"
                  />
                </Link>
                <p className="text-base leading-7 font-normal text-zinc-600">
                  Complete fire protection, safety equipment, installation,
                  maintenance, audits and Fire NOC consulting for businesses
                  across Chennai.
                </p>
                <div>
                  <p className="text-sm font-medium text-zinc-950">Follow us</p>
                  <div className="mt-3 flex items-center gap-3">
                    <a
                      href={socialLinks[0].href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={socialLinks[0].label}
                      className="text-red-700 transition-colors hover:text-red-800 focus-visible:text-red-800 focus-visible:outline-none"
                    >
                      <IconBadge>
                        <InstagramIcon />
                      </IconBadge>
                    </a>
                    <a
                      href={socialLinks[1].href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={socialLinks[1].label}
                      className="text-red-700 transition-colors hover:text-red-800 focus-visible:text-red-800 focus-visible:outline-none"
                    >
                      <IconBadge>
                        <FacebookIcon />
                      </IconBadge>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex animate-in flex-col gap-4 duration-1000 fill-mode-both slide-in-from-bottom-10 fade-in">
                <p className="text-base font-medium text-zinc-950">
                  Quick links
                </p>
                <ul className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={footerLinkClass}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="flex animate-in flex-col gap-4 duration-1000 fill-mode-both slide-in-from-bottom-10 fade-in">
                <p className="text-base font-medium text-zinc-950">
                  Fire safety services
                </p>
                <ul className="flex flex-col gap-3">
                  {services.map((service) => (
                    <li key={service.href}>
                      <Link href={service.href} className={footerLinkClass}>
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="flex animate-in flex-col gap-4 duration-1000 fill-mode-both slide-in-from-bottom-10 fade-in">
                <p className="text-base font-medium text-zinc-950">
                  Contact details
                </p>
                <ul className="flex flex-col gap-3">
                  <li className="text-base font-normal text-zinc-600">
                    Pallavaram, Chennai
                  </li>
                  <li>
                    <a
                      href="mailto:info@aulukyafiresafety.com"
                      className={footerLinkClass}
                    >
                      info@aulukyafiresafety.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+919003012345" className={footerLinkClass}>
                      +91 90030 12345
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Separator />

          <div className="flex animate-in flex-col gap-3 pb-8 text-sm text-zinc-500 duration-1000 fill-mode-both slide-in-from-bottom-10 fade-in sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {new Date().getFullYear()} {companyName}. All rights
              reserved.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <Link href="/privacy-policy" className={footerLinkClass}>
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className={footerLinkClass}>
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
