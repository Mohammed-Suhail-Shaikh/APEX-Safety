import { IMG_HERO } from '@/data/content'

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden pt-16">
      {/* Full-bleed photo plane */}
      <div className="absolute inset-0">
        <img
          src={IMG_HERO}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green via-green/92 to-green/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-green via-transparent to-green/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-24 lg:px-10 lg:pb-28 lg:pt-32">
        <p className="mb-5 font-heading text-sm font-semibold tracking-[0.08em] text-green-muted uppercase">
          APEX Safety Consultants
        </p>

        <h1 className="mb-6 max-w-3xl font-heading text-[clamp(2.25rem,5.5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.025em] text-white">
          Building safer workplaces from the ground up.
        </h1>

        <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/75">
          Practical, no-nonsense safety management consulting for organizations that want to
          protect their people and get compliance right — not just on paper. Practical.
          Independent. Unbiased.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="bg-green-cta px-7 py-3.5 font-heading text-sm font-bold tracking-wide text-white transition-opacity hover:opacity-90"
          >
            Get a Free Consultation
          </a>
          <a
            href="#services"
            className="border border-white/35 px-7 py-3.5 font-heading text-sm font-bold tracking-wide text-white/90 transition-colors hover:border-white/75 hover:text-white"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  )
}
