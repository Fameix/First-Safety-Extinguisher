import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQAccordion({
  items,
  className,
  itemClassName,
  triggerClassName,
  contentClassName,
}: {
  items: Array<{ question: string; answer: string }>
  className?: string
  itemClassName?: string
  triggerClassName?: string
  contentClassName?: string
}) {
  return (
    <Accordion className={className}>
      {items.map((item) => (
        <AccordionItem key={item.question} value={item.question} className={itemClassName}>
          <AccordionTrigger className={triggerClassName}>
            {item.question}
          </AccordionTrigger>
          <AccordionContent className={contentClassName}>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
