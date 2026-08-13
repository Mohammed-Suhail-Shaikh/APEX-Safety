import { IMG_CONSTRUCTION } from '@/data/content'
import { Reveal } from '@/components/Reveal'

const STATS = [
  { stat: '$171B', label: 'lost annually in the US due to workplace injuries (OSHA)' },
  { stat: '95%', label: 'of workplace incidents are preventable with proper systems' },
]

export function WhySafety() {
  return (
    <section className="section-pad bg-white">
      <div className="page-shell grid grid-cols-1 items-center gap-5 sm:gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="mb-2.5 font-heading text-xs font-bold tracking-widest text-label uppercase sm:mb-3">
            Why It Matters
          </p>
          <h2 className="mb-3 text-[1.55rem] leading-[1.2] font-bold tracking-[-0.02em] text-foreground sm:mb-6 sm:text-3xl sm:leading-[1.15] lg:text-4xl">
            Workplace incidents are preventable.{' '}
            <span className="text-green">Most businesses don&apos;t know where to start.</span>
          </h2>
          <p className="mb-3 text-[14px] leading-[1.65] text-body sm:mb-6 sm:text-base sm:leading-[1.8]">
            Many organizations want to do safety right but don&apos;t have in-house EHS expertise.
            They rely on outdated procedures, react to incidents instead of preventing them, and
            struggle to keep up with changing regulations.
          </p>
          <p className="mb-4 text-[14px] leading-[1.65] text-body sm:mb-8 sm:text-base sm:leading-[1.8]">
            APEX was founded to close that gap — providing the same quality of safety management
            guidance that large corporates access, scaled and priced appropriately for organizations
            at every stage.
          </p>
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
            {STATS.map((item) => (
              <div key={item.stat} className="border-l-[3px] border-green bg-surface p-3 sm:p-5">
                <div className="mb-1 font-heading text-xl font-bold tracking-[-0.02em] text-green sm:mb-1.5 sm:text-2xl">
                  {item.stat}
                </div>
                <div className="text-[11px] leading-snug text-body sm:text-xs">{item.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface sm:aspect-auto sm:h-[360px] lg:h-[420px]">
          <img
            src={IMG_CONSTRUCTION}
            alt="Workers on construction site"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
