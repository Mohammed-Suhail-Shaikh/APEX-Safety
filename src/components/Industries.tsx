import { IMG_INDUSTRY, INDUSTRIES } from '@/data/content'
import { Reveal } from '@/components/Reveal'

export function Industries() {
  return (
    <section id="industries" className="section-pad border-t border-border bg-white">
      <div className="page-shell grid grid-cols-1 items-center gap-5 sm:gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="mb-2.5 font-heading text-xs font-bold tracking-widest text-label uppercase sm:mb-3">
            Industries Served
          </p>
          <h2 className="mb-3 text-[1.55rem] leading-[1.2] font-bold tracking-[-0.02em] text-foreground sm:mb-6 sm:text-3xl sm:leading-[1.15] lg:text-4xl">
            We understand your industry.
          </h2>
          <p className="mb-4 text-[14px] leading-[1.65] text-body sm:mb-8 sm:text-base sm:leading-[1.8]">
            Our consultants are trained across a range of high-risk sectors. You won&apos;t need to
            explain your operations from scratch — we arrive with working knowledge of your
            regulatory environment and operational risks.
          </p>

          <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind}
                className="flex items-center gap-2 border-b border-border py-2 text-[13px] text-[#374151] sm:gap-2.5 sm:py-3 sm:text-sm"
              >
                <span className="text-[10px] text-green" aria-hidden="true">
                  ●
                </span>
                <span className="min-w-0">{ind}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface sm:aspect-[5/4] lg:aspect-auto lg:min-h-[480px]">
          <img
            src={IMG_INDUSTRY}
            alt="Industrial manufacturing floor"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
