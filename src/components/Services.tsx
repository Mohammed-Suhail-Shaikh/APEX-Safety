import { SERVICE_CATEGORIES, SERVICES_LIST } from '@/data/content'
import { Reveal } from '@/components/Reveal'

export function Services() {
  return (
    <section id="services" className="section-pad border-t border-border bg-surface-alt">
      <div className="page-shell">
        <Reveal>
          <div className="mb-5 sm:mb-12">
            <p className="mb-2 font-heading text-[11px] font-bold tracking-widest text-label uppercase sm:mb-3 sm:text-xs">
              Our Services
            </p>
            <div className="flex flex-col gap-2 sm:gap-3">
              <h2 className="text-[1.5rem] font-bold tracking-[-0.02em] text-foreground sm:text-3xl lg:text-4xl">
                What we help you with
              </h2>
              <p className="max-w-xl text-[13px] leading-[1.6] text-body sm:text-sm sm:leading-[1.75]">
                Practical safety management across your entire operation — from hazard
                identification to cultural transformation.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="mb-5 border-t border-border py-4 sm:mb-12 sm:py-8">
            <p className="mb-3 font-heading text-[11px] font-bold tracking-widest text-label uppercase sm:mb-6 sm:text-xs">
              All Services
            </p>
            <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-3 lg:grid-cols-3">
              {SERVICES_LIST.map((s) => (
                <div
                  key={s}
                  className="flex items-start gap-2 text-[13px] leading-snug text-[#374151] sm:text-sm sm:leading-normal"
                >
                  <span className="mt-[3px] text-[9px] text-green sm:text-[10px]" aria-hidden="true">
                    →
                  </span>
                  <span className="min-w-0">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-0 border-t border-border lg:grid-cols-3">
          {SERVICE_CATEGORIES.map((cat, i) => (
            <Reveal key={cat.title} delayMs={i * 80}>
              <div
                className={`flex h-full flex-col border-b border-border py-5 sm:py-8 lg:border-b-0 lg:px-8 lg:py-10 ${
                  i < SERVICE_CATEGORIES.length - 1 ? 'lg:border-r' : ''
                } ${i === 0 ? 'lg:pl-0' : ''} ${i === SERVICE_CATEGORIES.length - 1 ? 'lg:pr-0' : ''}`}
              >
                <div className="mb-1.5 font-heading text-2xl leading-none font-bold tracking-[-0.04em] text-green italic sm:mb-2 sm:text-4xl">
                  {cat.number}
                </div>
                <h3 className="mb-1.5 font-heading text-base font-bold tracking-[-0.01em] text-foreground sm:mb-3 sm:text-lg">
                  {cat.title}
                </h3>
                <p className="mb-3.5 text-[13px] leading-[1.65] text-muted-foreground sm:mb-6 sm:text-sm sm:leading-[1.75]">
                  {cat.desc}
                </p>
                <ul className="mt-auto flex flex-col gap-1.5 sm:gap-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[13px] leading-snug text-[#374151] sm:text-sm sm:leading-normal"
                    >
                      <span
                        className="mt-[3px] shrink-0 text-[9px] text-green sm:text-[10px]"
                        aria-hidden="true"
                      >
                        →
                      </span>
                      <span className="min-w-0">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
