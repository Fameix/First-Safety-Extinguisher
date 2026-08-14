'use client'

import { useMemo, useState } from "react"
import { Minus, Plus, Search } from "lucide-react"

import { Container } from "@/components/site/container"
import { cn } from "@/lib/utils"

type FAQItem = {
  question: string
  answer: string
}

export function FAQShowcase({ items }: { items: FAQItem[] }) {
  const [query, setQuery] = useState("")
  const [openIndex, setOpenIndex] = useState(0)

  const filteredItems = useMemo(() => {
    const normalized = query.trim().toLowerCase()

    if (!normalized) {
      return items
    }

    return items.filter((item) =>
      `${item.question} ${item.answer}`.toLowerCase().includes(normalized)
    )
  }, [items, query])

  return (
    <section className="section-surface-alt py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-[-0.04em] text-balance text-zinc-950 sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <div className="relative mx-auto mt-8 max-w-2xl">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-zinc-500"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value)
                setOpenIndex(0)
              }}
              placeholder="Search for a question"
              className="h-14 w-full rounded-full border border-zinc-200 bg-white pl-12 pr-5 text-base text-zinc-950 shadow-[0_4px_18px_rgba(0,0,0,0.04)] outline-none transition focus:border-zinc-300 focus:shadow-[0_8px_24px_rgba(0,0,0,0.06)] placeholder:text-zinc-400"
            />
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5">
          {filteredItems.length ? (
            filteredItems.map((item, index) => {
              const isOpen = index === openIndex

              return (
                <article
                  key={item.question}
                  className={cn(
                    "rounded-[28px] border border-zinc-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-shadow",
                    isOpen && "shadow-[0_16px_42px_rgba(15,23,42,0.08)]"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-start justify-between gap-6 px-6 py-6 text-left sm:px-8 sm:py-7"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg font-medium leading-snug tracking-[-0.02em] text-zinc-950 sm:text-xl">
                      {item.question}
                    </span>
                    <span className="mt-1 flex size-8 shrink-0 items-center justify-center text-zinc-900">
                      {isOpen ? <Minus className="size-8" aria-hidden="true" /> : <Plus className="size-8" aria-hidden="true" />}
                    </span>
                  </button>

                  {isOpen ? (
                    <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                      <p className="max-w-4xl text-base leading-8 text-zinc-600">
                        {item.answer}
                      </p>
                    </div>
                  ) : null}
                </article>
              )
            })
          ) : (
            <div className="rounded-[28px] border border-zinc-200 bg-white px-6 py-10 text-center text-sm text-zinc-500 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
              No questions match your search.
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
