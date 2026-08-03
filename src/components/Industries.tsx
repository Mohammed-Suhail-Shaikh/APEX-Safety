import { IMG_AUDIT, INDUSTRIES } from '@/data/content'
import { Reveal } from '@/components/Reveal'

export function Industries() {
  return (
    <section id="industries" className="border-t border-border bg-white px-5 py-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="mb-4 font-heading text-xs font-bold tracking-widest text-label uppercase">
            Industries Served
          </p>
          <h2 className="mb-6 text-3xl leading-[1.15] font-bold tracking-[-0.02em] text-foreground lg:text-4xl">
            We understand
            <br />
            your industry.
          </h2>
          <p className="mb-8 text-base leading-[1.8] text-body">
            Our consultants are trained across a range of high-risk sectors. You won&apos;t need to
            explain your operations from scratch — we arrive with working knowledge of your
            regulatory environment and operational risks.
          </p>

          <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind}
                className="flex items-center gap-2 border-b border-border py-3 text-sm text-[#374151]"
              >
                <span className="text-[10px] text-green" aria-hidden="true">
                  ●
                </span>
                {ind}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <img
            src={IMG_AUDIT}
            alt="Safety professional conducting site inspection"
            className="h-[480px] w-full object-cover object-center"
          />
        </Reveal>
      </div>
    </section>
  )
}
