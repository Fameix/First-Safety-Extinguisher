import Image from "next/image"

import { cn } from "@/lib/utils"

export function SiteLogo({
  className,
  mode = "auto",
  priority = false,
}: {
  className?: string
  mode?: "auto" | "light" | "dark"
  priority?: boolean
}) {
  const sizeClass = cn(
    "h-auto w-[140px] object-cover object-center sm:w-[160px] md:w-[180px] lg:w-[200px]",
    className
  )
  const logoSrc = "/aulukya-logo-transparent.png"
  const logoWidth = 1536
  const logoHeight = 400

  if (mode === "dark") {
    return (
      <Image
        src={logoSrc}
        alt="Aulukya Fire & Safety Solutions logo"
        width={logoWidth}
        height={logoHeight}
        className={sizeClass}
        priority={priority}
      />
    )
  }

  if (mode === "light") {
    return (
      <Image
        src={logoSrc}
        alt="Aulukya Fire & Safety Solutions logo"
        width={logoWidth}
        height={logoHeight}
        className={sizeClass}
        priority={priority}
      />
    )
  }

  return (
    <>
      <Image
        src={logoSrc}
        alt="Aulukya Fire & Safety Solutions logo"
        width={logoWidth}
        height={logoHeight}
        className={cn(sizeClass, "dark:hidden")}
        priority={priority}
      />
      <Image
        src={logoSrc}
        alt="Aulukya Fire & Safety Solutions logo"
        width={logoWidth}
        height={logoHeight}
        className={cn(sizeClass, "hidden dark:block")}
        priority={priority}
      />
    </>
  )
}
