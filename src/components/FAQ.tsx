import { useState } from 'react'
import { FAQS } from '@/data/content'
import { Reveal } from '@/components/Reveal'

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section-pad border-t border-border bg-white">
      <div className="page-shell max-w-4xl">
        <Reveal>
          <p className="mb-3 font-heading text-xs font-bold tracking-widest text-label uppercase">
            FAQs
          </p>
          <h2 className="mb-4 text-[1.55rem] font-bold tracking-[-0.02em] text-foreground sm:mb-10 sm:text-3xl lg:text-4xl">
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
                    className="flex w-full cursor-pointer items-start justify-between gap-3 py-3.5 text-left sm:items-center sm:gap-6 sm:py-5"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`min-w-0 font-heading text-[15px] leading-snug font-semibold transition-colors duration-150 sm:text-base sm:leading-normal ${
                        isOpen ? 'text-green' : 'text-foreground'
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center text-xl text-label transition-transform duration-200 sm:mt-0 sm:h-auto sm:w-auto ${
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
                      <p className="pb-3.5 text-[13px] leading-[1.65] text-body sm:pb-5 sm:text-sm sm:leading-[1.8]">
                        {faq.a}
                      </p>
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
