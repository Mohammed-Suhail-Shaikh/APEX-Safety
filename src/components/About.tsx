import { ABOUT_VALUES } from '@/data/content'
import { Reveal } from '@/components/Reveal'

export function About() {
  return (
    <section id="about" className="section-pad border-t border-border bg-surface-alt">
      <div className="page-shell">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <p className="mb-2.5 font-heading text-xs font-bold tracking-widest text-label uppercase sm:mb-3">
              About APEX
            </p>
            <h2 className="mb-3 text-[1.55rem] leading-[1.2] font-bold tracking-[-0.02em] text-foreground sm:mb-6 sm:text-3xl sm:leading-[1.15] lg:text-4xl">
              New company.
              <br />
              <span className="text-green">Experienced practitioners.</span>
            </h2>
            <div className="space-y-3 text-[14px] leading-[1.65] text-body sm:space-y-5 sm:text-base sm:leading-[1.8]">
              <p>
                APEX Safety Consultancy is a newly established consultancy, but our consultants are
                not new to safety. We bring hands-on EHS field experience from years of working
                within high-risk industries — now channelled into independent practice.
              </p>
              <p>
                We started APEX because we saw a gap: too many organizations — especially small and
                mid-sized ones — couldn&apos;t access quality safety expertise without paying
                enterprise consulting rates. We&apos;re here to change that.
              </p>
              <p>
                Our work is always independent and commercially unbiased. We have no products to
                sell you. Our only interest is helping you build a safer workplace.
              </p>
            </div>
          </Reveal>

          <div className="grid content-start grid-cols-1 gap-0 sm:grid-cols-2 lg:col-span-7">
            {ABOUT_VALUES.map((item, i) => (
              <Reveal key={item.title} delayMs={i * 60}>
                <div
                  className={`border-t border-border py-4 sm:px-5 sm:py-6 lg:px-6 ${
                    i % 2 === 0 ? 'sm:border-r sm:pl-0' : 'sm:pr-0'
                  }`}
                >
                  <div className="mb-1.5 h-0.5 w-8 bg-green sm:mb-2" />
                  <h4 className="mb-1.5 font-heading text-sm font-bold text-foreground sm:mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[13px] leading-[1.55] text-muted-foreground sm:text-sm sm:leading-[1.7]">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}

            <Reveal delayMs={240} className="sm:col-span-2">
              <div className="mt-1 border border-green-soft-border bg-green-soft p-3.5 sm:mt-2 sm:p-6">
                <p className="text-[13px] leading-[1.55] text-green sm:text-sm sm:leading-[1.7]">
                  <strong>Ready to talk?</strong> We offer a no-obligation discovery conversation to
                  understand your situation and tell you honestly whether we can help.{' '}
                  <a
                    href="#contact"
                    className="font-semibold underline underline-offset-2 transition-colors duration-200 hover:text-foreground"
                  >
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
