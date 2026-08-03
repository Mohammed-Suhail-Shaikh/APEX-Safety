import { useEffect, useRef, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delayMs?: number
}

export function Reveal({ children, className = '', delayMs = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.matchMedia('(max-width: 767px)').matches

    // Skip animation on mobile — keeps layout filled and avoids blank opacity:0 states
    if (reduceMotion || isMobile) {
      el.classList.add('is-visible')
      return
    }

    const show = () => {
      el.classList.add('is-visible')
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          show()
          observer.unobserve(el)
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(el)

    // Failsafe if observer never fires
    const timer = window.setTimeout(() => {
      if (!el.classList.contains('is-visible')) show()
    }, 1200)

    return () => {
      observer.disconnect()
      window.clearTimeout(timer)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  )
}
