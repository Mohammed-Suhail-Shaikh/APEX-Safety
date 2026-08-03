import { SERVICE_CATEGORIES, SERVICES_LIST } from '@/data/content'
import { Reveal } from '@/components/Reveal'

export function Services() {
  return (
    <section id="services" className="border-t border-border bg-surface-alt px-5 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-12">
            <p className="mb-3 font-heading text-xs font-bold tracking-widest text-label uppercase">
              Our Services
            </p>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="text-3xl font-bold tracking-[-0.02em] text-foreground lg:text-4xl">
                What we help you with
              </h2>
              <p className="max-w-md text-sm leading-[1.75] text-body">
                Practical safety management across your entire operation — from hazard
                identification to cultural transformation.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="mb-12 border-y border-border py-8">
            <p className="mb-6 font-heading text-xs font-bold tracking-widest text-label uppercase">
              All Services
            </p>
            <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES_LIST.map((s) => (
                <div key={s} className="flex items-start gap-2 text-sm text-[#374151]">
                  <span className="mt-[3px] text-[10px] text-green" aria-hidden="true">
                    →
                  </span>
                  {s}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-0 border-t border-border lg:grid-cols-3">
          {SERVICE_CATEGORIES.map((cat, i) => (
            <Reveal key={cat.title} delayMs={i * 80}>
              <div
                className={`flex h-full flex-col border-b border-border py-8 lg:border-b-0 lg:px-8 lg:py-10 ${
                  i < SERVICE_CATEGORIES.length - 1 ? 'lg:border-r' : ''
                } ${i === 0 ? 'lg:pl-0' : ''} ${i === SERVICE_CATEGORIES.length - 1 ? 'lg:pr-0' : ''}`}
              >
                <div className="mb-2 font-heading text-4xl leading-none font-bold tracking-[-0.04em] text-border">
                  {cat.number}
                </div>
                <h3 className="mb-3 font-heading text-lg font-bold tracking-[-0.01em] text-foreground">
                  {cat.title}
                </h3>
                <p className="mb-6 text-sm leading-[1.75] text-muted-foreground">{cat.desc}</p>
                <ul className="mt-auto flex flex-col gap-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#374151]">
                      <span className="mt-[3px] shrink-0 text-[10px] text-green" aria-hidden="true">
                        →
                      </span>
                      {item}
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
