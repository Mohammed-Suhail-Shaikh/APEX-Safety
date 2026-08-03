import { useState } from 'react'
import { FAQS } from '@/data/content'
import { Reveal } from '@/components/Reveal'

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="border-t border-border bg-white px-5 py-20 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="mb-3 font-heading text-xs font-bold tracking-widest text-label uppercase">
            FAQs
          </p>
          <h2 className="mb-10 text-3xl font-bold tracking-[-0.02em] text-foreground lg:text-4xl">
            Questions? We have answers.
          </h2>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="flex flex-col">
            {FAQS.map((faq, i) => {
              const isOpen = open === i
              return (
                <div
                  key={faq.q}
                  className={`border-t border-border ${i === FAQS.length - 1 ? 'border-b' : ''}`}
                >
                  <button
                    type="button"
                    className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-heading text-base font-semibold transition-colors duration-150 ${
                        isOpen ? 'text-green' : 'text-foreground'
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`shrink-0 text-xl text-label transition-transform duration-200 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 text-sm leading-[1.8] text-body">{faq.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
