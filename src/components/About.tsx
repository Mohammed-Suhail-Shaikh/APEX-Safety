import apexIcon from '@/assets/apex-icon.png'
import { ABOUT_VALUES } from '@/data/content'
import { Reveal } from '@/components/Reveal'

export function About() {
  return (
    <section id="about" className="border-t border-border bg-surface-alt px-5 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="mb-4 font-heading text-xs font-bold tracking-widest text-label uppercase">
              About APEX
            </p>
            <h2 className="mb-6 text-3xl leading-[1.15] font-bold tracking-[-0.02em] text-foreground lg:text-4xl">
              New company.
              <br />
              <span className="text-green">Experienced practitioners.</span>
            </h2>
            <p className="mb-5 text-base leading-[1.8] text-body">
              APEX Safety Consultants is a newly established consultancy, but our consultants are
              not new to safety. We bring hands-on EHS field experience from years of working within
              high-risk industries — now channelled into independent practice.
            </p>
            <p className="mb-5 text-base leading-[1.8] text-body">
              We started APEX because we saw a gap: too many organizations — especially small and
              mid-sized ones — couldn&apos;t access quality safety expertise without paying
              enterprise consulting rates. We&apos;re here to change that.
            </p>
            <p className="text-base leading-[1.8] text-body">
              Our work is always independent and commercially unbiased. We have no products to sell
              you. Our only interest is helping you build a safer workplace.
            </p>
          </Reveal>

          <div className="grid content-start grid-cols-1 gap-0 sm:grid-cols-2 lg:col-span-7">
            {ABOUT_VALUES.map((item, i) => (
              <Reveal key={item.title} delayMs={i * 60}>
                <div
                  className={`border-t border-border py-6 sm:px-6 ${
                    i % 2 === 0 ? 'sm:border-r sm:pl-0' : 'sm:pr-0'
                  }`}
                >
                  <div className="mb-2 h-0.5 w-8 bg-green" />
                  <h4 className="mb-2 font-heading text-sm font-bold text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-[1.7] text-muted-foreground">{item.body}</p>
                </div>
              </Reveal>
            ))}

            <Reveal delayMs={240} className="sm:col-span-2">
              <div className="mt-2 flex items-center gap-5 border border-green-soft-border bg-green-soft p-6">
                <img
                  src={apexIcon}
                  alt="APEX Safety Consultants"
                  className="h-12 w-12 shrink-0 object-contain"
                />
                <p className="text-sm leading-[1.7] text-green">
                  <strong>Ready to talk?</strong> We offer a no-obligation discovery conversation to
                  understand your situation and tell you honestly whether we can help.{' '}
                  <a href="#contact" className="font-semibold underline underline-offset-2">
                    Get in touch →
                  </a>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
