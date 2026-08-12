import { IMG_INDUSTRY, INDUSTRIES } from '@/data/content'
import { Reveal } from '@/components/Reveal'

export function Industries() {
  return (
    <section id="industries" className="section-pad border-t border-border bg-white">
      <div className="page-shell grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="mb-3 font-heading text-xs font-bold tracking-widest text-label uppercase">
            Industries Served
          </p>
          <h2 className="mb-4 text-[1.65rem] leading-[1.2] font-bold tracking-[-0.02em] text-foreground sm:mb-6 sm:text-3xl sm:leading-[1.15] lg:text-4xl">
            We understand your industry.
          </h2>
          <p className="mb-6 text-[15px] leading-[1.7] text-body sm:mb-8 sm:text-base sm:leading-[1.8]">
            Our consultants are trained across a range of high-risk sectors. You won&apos;t need to
            explain your operations from scratch — we arrive with working knowledge of your
            regulatory environment and operational risks.
          </p>

          <div className="grid grid-cols-1 gap-x-6 min-[400px]:grid-cols-2 sm:gap-x-8">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind}
                className="flex items-center gap-2.5 border-b border-border py-3 text-[14px] text-[#374151] sm:py-3 sm:text-sm"
              >
                <span className="text-[10px] text-green" aria-hidden="true">
                  ●
                </span>
                <span className="min-w-0">{ind}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface sm:aspect-[5/4] lg:aspect-auto lg:min-h-[480px]">
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
