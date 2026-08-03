import apexLogo from '@/assets/apex-logo.png'
import { FOOTER_COLUMNS } from '@/data/content'

export function Footer() {
  return (
    <footer className="bg-foreground">
      <div className="border-b border-white/[0.07] px-5 py-8 lg:px-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <p className="text-sm text-white/55">
            <span className="font-semibold text-white">Ready to build a safer workplace?</span>{' '}
            We&apos;re just a conversation away.
          </p>
          <a
            href="#contact"
            className="shrink-0 bg-green px-6 py-2.5 font-heading text-sm font-bold text-white transition-opacity hover:opacity-85"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-10">
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <img
              src={apexLogo}
              alt="APEX Safety Consultants"
              className="mb-4 h-12 w-auto invert"
            />
            <p className="text-xs leading-relaxed text-white/35">
              Independent safety management consultancy. Practitioner-led. Commercially unbiased.
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="mb-4 font-heading text-xs font-bold tracking-widest text-white/30 uppercase">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-white/45 transition-colors duration-150 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/[0.07] pt-8 md:flex-row md:items-center">
          <p className="text-xs text-white/20">
            © 2026 APEX Safety Consultants. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service'].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs text-white/20 transition-colors duration-150 hover:text-white/55"
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
