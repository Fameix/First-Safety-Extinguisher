import { Geist_Mono, Inter, Manrope } from "next/font/google"

import "./globals.css"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { companyName, pageMetadata, siteUrl } from "@/lib/site-data"

const manropeHeading = Manrope({subsets:['latin'],variable:'--font-heading'});

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
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
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable, manropeHeading.variable)}
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
