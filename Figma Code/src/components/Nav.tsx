import { useEffect, useState } from 'react'
import apexLogo from '@/assets/apex-logo.png'
import { NAV_LINKS } from '@/data/content'
import { useScrollY } from '@/hooks/useScrollY'

export function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const scrolled = useScrollY() > 20

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1))

    const onScroll = () => {
      const offset = 96
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
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border bg-white transition-shadow duration-200 ${
        scrolled ? 'shadow-[0_1px_12px_rgba(0,0,0,0.06)]' : ''
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-10">
        <a href="#" className="relative z-10" aria-label="APEX Safety Consultants home">
          <img src={apexLogo} alt="APEX Safety Consultants" className="h-9 w-auto" />
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
          className="relative z-10 p-1.5 lg:hidden"
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
          open ? 'max-h-96 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`py-2.5 text-sm font-medium ${active === href ? 'text-green' : 'text-body'}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 w-fit bg-green px-5 py-2.5 font-heading text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  )
}
