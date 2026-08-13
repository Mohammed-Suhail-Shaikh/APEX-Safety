import apexFooterLogo from '@/assets/apex-footer-logo.png'
import eymenLogo from '@/assets/eymen-logo.png'
import { FOOTER_COLUMNS } from '@/data/content'

export function Footer() {
  return (
    <footer className="bg-foreground pb-[env(safe-area-inset-bottom)]">
      <div className="border-b border-white/[0.07]">
        <div className="page-shell flex flex-col items-stretch justify-between gap-3 py-4 sm:gap-5 sm:py-8 md:flex-row md:items-center">
          <p className="text-[13px] leading-relaxed text-white/55 sm:text-sm">
            <span className="font-semibold text-white">Ready to build a safer workplace?</span>
            <span className="ml-1.5">We&apos;re just a conversation away.</span>
          </p>
          <a
            href="#contact"
            className="btn-primary inline-flex min-h-12 shrink-0 items-center justify-center bg-green px-6 py-3.5 text-center font-heading text-sm font-bold text-white md:min-h-0 md:py-2.5"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>

      <div className="page-shell py-6 sm:py-12">
        <div className="mb-6 grid grid-cols-1 gap-y-5 min-[380px]:grid-cols-2 min-[380px]:gap-x-5 min-[380px]:gap-y-7 sm:mb-10 sm:gap-10 md:grid-cols-4">
          <div className="min-[380px]:col-span-2 md:col-span-1">
            <a
              href="#"
              className="mb-2 inline-block sm:mb-1.5"
              aria-label="APEX Safety Consultancy home"
            >
              <img
                src={apexFooterLogo}
                alt="APEX Safety Consultancy"
                className="h-12 w-auto max-w-full object-contain object-left sm:h-[4.75rem] sm:max-w-[380px] lg:h-20 lg:max-w-[420px]"
              />
            </a>
            <p className="max-w-xs text-xs leading-relaxed text-white/35">
              Independent safety management consultancy. Practitioner-led. Commercially unbiased.
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="mb-3 font-heading text-[11px] font-bold tracking-widest text-white uppercase sm:mb-4 sm:text-xs">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2 sm:gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="break-words text-[11px] text-white/45 transition-colors duration-150 hover:text-white sm:text-xs"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-white/[0.07] pt-5 text-center sm:gap-6 sm:pt-8 md:grid md:grid-cols-3 md:items-center md:gap-5 md:text-left">
          <p className="order-2 text-[11px] text-white/20 md:order-1 md:justify-self-start sm:text-xs">
            © 2026 APEX Safety Consultancy. All rights reserved.
          </p>

          <div className="order-1 flex max-w-full flex-wrap items-center justify-center gap-x-2.5 gap-y-2 md:order-2">
            <span className="font-heading text-[11px] font-semibold tracking-[0.08em] text-white/40 uppercase sm:text-sm">
              Subsidiary of
            </span>
            <a
              href="https://www.eymengroups.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Eymen Groups website"
              className="inline-flex shrink-0 transition-opacity hover:opacity-85"
            >
              <img
                src={eymenLogo}
                alt="Eymen Groups"
                className="h-10 w-auto max-w-[min(180px,46vw)] object-contain sm:h-14 sm:max-w-none"
              />
            </a>
            <span className="font-heading text-[11px] font-semibold tracking-[0.08em] text-white/40 uppercase sm:text-sm">
              Groups
            </span>
          </div>

          <div className="order-3 flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-self-end md:justify-end">
            {['Privacy Policy', 'Terms of Service'].map((l) => (
              <a
                key={l}
                href="#"
                className="text-[11px] text-white/20 transition-colors duration-150 hover:text-white/55 sm:text-xs"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
