import { PROCESS_STEPS } from '@/data/content'
import { Reveal } from '@/components/Reveal'

export function Approach() {
  return (
    <section id="approach" className="section-pad bg-green">
      <div className="page-shell">
        <Reveal>
          <div className="mb-4 text-left sm:mb-14 sm:text-center">
            <p className="mb-2 font-heading text-[11px] font-bold tracking-widest text-white/45 uppercase sm:mb-4 sm:text-xs">
              How We Work
            </p>
            <h2 className="text-[1.45rem] leading-[1.2] font-bold tracking-[-0.02em] text-white sm:text-3xl sm:leading-tight lg:text-4xl">
              Fewer incidents. Cleaner audits. A culture that actually sticks.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.step} delayMs={i * 70}>
              <div className="h-full bg-green px-4 py-3.5 sm:p-8">
                <div className="mb-1.5 font-heading text-[1.75rem] leading-none font-bold tracking-[-0.04em] text-white italic sm:mb-5 sm:text-4xl">
                  {step.step}
                </div>
                <h3 className="mb-1 font-heading text-[14px] font-bold text-white sm:mb-3 sm:text-base">
                  {step.title}
                </h3>
                <p className="text-[12px] leading-[1.5] text-white/65 sm:text-sm sm:leading-[1.75] sm:text-white/60">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={200}>
          <div className="mt-4 sm:mt-10 sm:text-center">
            <a
              href="#contact"
              className="btn-inverse inline-flex min-h-12 w-full items-center justify-center bg-white px-5 py-3.5 font-heading text-[13px] font-bold tracking-wide text-green sm:min-h-0 sm:w-auto sm:px-8 sm:py-3.5 sm:text-sm"
            >
              Learn more about our approach
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
