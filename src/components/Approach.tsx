import { PROCESS_STEPS } from '@/data/content'
import { Reveal } from '@/components/Reveal'

export function Approach() {
  return (
    <section id="approach" className="bg-green px-5 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-14 text-center">
            <p className="mb-4 font-heading text-xs font-bold tracking-widest text-white/45 uppercase">
              How We Work
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.02em] text-white lg:text-4xl">
              Fewer incidents. Cleaner audits.
              <br />
              A culture that actually sticks.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.step} delayMs={i * 70}>
              <div className="h-full bg-green p-8">
                <div className="mb-5 font-heading text-4xl leading-none font-bold tracking-[-0.04em] text-white/15">
                  {step.step}
                </div>
                <h3 className="mb-3 font-heading text-base font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-[1.75] text-white/60">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={200}>
          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="inline-block bg-white px-8 py-3.5 font-heading text-sm font-bold tracking-wide text-green transition-opacity hover:opacity-85"
            >
              Start with a Free Discovery Call
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
