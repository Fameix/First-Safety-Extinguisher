"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { services } from "@/lib/site-data"

type Errors = Partial<Record<"name" | "email" | "phone" | "service" | "message", string>>

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  function submit(formData: FormData) {
    const nextErrors: Errors = {}
    const email = String(formData.get("email") || "")
    const phone = String(formData.get("phone") || "")

    if (!String(formData.get("name") || "").trim()) nextErrors.name = "Enter your name."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email address."
    if (!phone.trim()) nextErrors.phone = "Enter your phone number."
    if (!String(formData.get("service") || "").trim()) nextErrors.service = "Choose a service."
    if (!String(formData.get("message") || "").trim()) nextErrors.message = "Enter your message."

    setErrors(nextErrors)
    setSent(Object.keys(nextErrors).length === 0)
  }

  return (
    <form action={submit} className="grid gap-5" noValidate>
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" aria-describedby={errors.name ? "name-error" : undefined} />
        {errors.name ? <p id="name-error" className="text-sm text-destructive">{errors.name}</p> : null}
      </div>
      <div className="grid gap-2 md:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" aria-describedby={errors.email ? "email-error" : undefined} />
          {errors.email ? <p id="email-error" className="text-sm text-destructive">{errors.email}</p> : null}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" aria-describedby={errors.phone ? "phone-error" : undefined} />
          {errors.phone ? <p id="phone-error" className="text-sm text-destructive">{errors.phone}</p> : null}
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="company">Company</Label>
        <Input id="company" name="company" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="service">Service Required</Label>
        <Select name="service">
          <SelectTrigger id="service" aria-describedby={errors.service ? "service-error" : undefined}>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service.href} value={service.title}>
                {service.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.service ? <p id="service-error" className="text-sm text-destructive">{errors.service}</p> : null}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={5} aria-describedby={errors.message ? "message-error" : undefined} />
        {errors.message ? <p id="message-error" className="text-sm text-destructive">{errors.message}</p> : null}
      </div>
      <Button type="submit" size="lg">Submit Enquiry</Button>
      {sent ? (
        <p className="rounded-lg border bg-muted/30 p-4 text-sm text-muted-foreground" role="status">
          Your enquiry is ready to be connected to the company&apos;s preferred submission method.
        </p>
      ) : null}
    </form>
  )
}
