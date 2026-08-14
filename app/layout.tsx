import { Outfit } from "next/font/google"

import "./globals.css"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import { companyName, pageMetadata, siteUrl } from "@/lib/site-data"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

export const metadata = {
  ...pageMetadata(
    "Fire Safety Company in Chennai | Aulukya",
    "Aulukya Fire & Safety Solutions provides fire protection, safety equipment, maintenance, audits, and Fire NOC consulting services in Chennai."
  ),
  metadataBase: new URL(siteUrl),
  applicationName: companyName,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.className} ${outfit.variable} antialiased`}
    >
      <body>
        <ThemeProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
