import { useEffect, useState } from 'react'
import apexNavLogo from '@/assets/apex-nav-logo.png'
import { NAV_LINKS } from '@/data/content'
import { useScrollY } from '@/hooks/useScrollY'

export function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const scrolled = useScrollY() > 20

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1))

    const onScroll = () => {
      const offset = window.matchMedia('(min-width: 640px)').matches ? 96 : 72
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= offset) current = id
      }
      setActive(current ? `#${current}` : '')
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = (href: string) =>
    `text-sm font-medium transition-colors duration-150 ${
      active === href ? 'text-green' : 'text-body hover:text-green'
    }`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border bg-white pt-[env(safe-area-inset-top)] transition-shadow duration-200 ${
        scrolled ? 'shadow-[0_1px_12px_rgba(0,0,0,0.06)]' : ''
      }`}
    >
      <div className="flex h-14 w-full items-center justify-between gap-3 px-3.5 sm:h-16 sm:gap-3 sm:px-8 lg:px-14">
        <a
          href="#"
          className="relative z-10 flex min-w-0 flex-1 items-center"
          aria-label="APEX Safety Consultancy home"
          onClick={() => setOpen(false)}
        >
          <img
            src={apexNavLogo}
            alt="APEX Safety Consultancy"
            className="h-10 w-auto max-w-[min(260px,calc(100vw-5.75rem))] object-contain object-left sm:max-w-[300px] lg:h-12"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className={linkClass(href)}>
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-green px-5 py-2 font-heading text-sm font-semibold text-white transition-opacity hover:opacity-85"
          >
            Contact Us
          </a>
        </nav>

        <button
          type="button"
          className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-foreground transition-transform duration-200 ${
                open ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 bg-foreground transition-opacity duration-200 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 bg-foreground transition-transform duration-200 ${
                open ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`border-t border-border bg-white transition-[max-height,opacity] duration-300 lg:hidden ${
          open
            ? 'max-h-[min(32rem,calc(100dvh-3.5rem-env(safe-area-inset-top)))] opacity-100'
            : 'max-h-0 overflow-hidden opacity-0'
        }`}
      >
        <div className="flex flex-col px-4 py-2 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`border-b border-border/60 py-4 text-base font-medium last:border-b-0 ${
                active === href ? 'text-green' : 'text-body'
              }`}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-3 mb-1 min-h-12 w-full bg-green px-5 py-3.5 text-center font-heading text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  )
}
