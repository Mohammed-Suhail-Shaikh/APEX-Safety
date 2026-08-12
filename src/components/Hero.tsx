import { IMG_HERO } from '@/data/content'

export function Hero() {
  return (
    <section className="relative flex min-h-[87svh] items-end overflow-hidden pt-14 sm:min-h-[100svh] sm:pt-16">
      <div className="absolute inset-0">
        <img
          src={IMG_HERO}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[center_28%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green/55 via-green/85 to-green sm:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-green via-green/92 to-green/55 sm:block" />
        <div className="absolute inset-0 hidden bg-gradient-to-t from-green via-transparent to-green/40 sm:block" />
      </div>

      <div className="page-shell relative z-10 w-full pb-[max(2rem,env(safe-area-inset-bottom))] pt-8 sm:pb-20 sm:pt-24 lg:pb-28 lg:pt-32">
        <p className="mb-2.5 max-w-[22ch] font-heading text-[11px] font-semibold tracking-[0.1em] text-green-muted uppercase sm:mb-5 sm:max-w-none sm:text-sm sm:tracking-[0.08em]">
          APEX Safety Consultancy
        </p>

        <h1 className="mb-3.5 max-w-[16ch] font-heading text-[clamp(1.6rem,7vw,4.5rem)] font-bold leading-[1.12] tracking-[-0.025em] text-white sm:mb-6 sm:max-w-3xl sm:leading-[1.05]">
          Building safer workplaces from the ground up.
        </h1>

        <p className="mb-6 max-w-xl text-[14px] leading-[1.6] text-white/80 sm:mb-10 sm:text-lg sm:leading-relaxed sm:text-white/75">
          Practical, no-nonsense safety management consulting for organizations that want to
          protect their people and get compliance right — not just on paper.{' '}
          <span className="text-white/90">Practical. Independent. Unbiased.</span>
        </p>

        <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center bg-green-cta px-5 py-3.5 text-center font-heading text-[13px] font-bold tracking-wide text-white transition-opacity hover:opacity-90 sm:min-h-0 sm:px-7 sm:py-3.5 sm:text-sm"
          >
            Get a Free Consultation
          </a>
          <a
            href="#services"
            className="inline-flex min-h-12 items-center justify-center border border-white/35 px-5 py-3.5 text-center font-heading text-[13px] font-bold tracking-wide text-white/90 transition-colors hover:border-white/75 hover:text-white sm:min-h-0 sm:px-7 sm:py-3.5 sm:text-sm"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  )
}
