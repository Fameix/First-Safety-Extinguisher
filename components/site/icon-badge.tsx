import type { ComponentPropsWithoutRef, ReactNode } from "react"

import { cn } from "@/lib/utils"

type IconBadgeProps = ComponentPropsWithoutRef<"span"> & {
  children: ReactNode
  size?: "sm" | "md" | "lg"
}

const sizeClasses = {
  sm: "size-10 [&>svg]:size-5",
  md: "size-11 [&>svg]:size-5",
  lg: "size-12 [&>svg]:size-6",
} as const

export function IconBadge({
  children,
  size = "md",
  className,
  ...props
}: IconBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600",
        "[&>svg]:shrink-0 [&>svg]:stroke-[1.8] [&>svg]:fill-none",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
