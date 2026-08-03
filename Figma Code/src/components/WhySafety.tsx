import { IMG_CONSTRUCTION } from '@/data/content'
import { Reveal } from '@/components/Reveal'

const STATS = [
  { stat: '$171B', label: 'lost annually in the US due to workplace injuries (OSHA)' },
  { stat: '95%', label: 'of workplace incidents are preventable with proper systems' },
]

export function WhySafety() {
  return (
    <section className="bg-white px-5 py-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="mb-4 font-heading text-xs font-bold tracking-widest text-label uppercase">
            Why It Matters
          </p>
          <h2 className="mb-6 text-3xl leading-[1.15] font-bold tracking-[-0.02em] text-foreground lg:text-4xl">
            Workplace incidents are preventable.
            <br />
            <span className="text-green">Most businesses don&apos;t know where to start.</span>
          </h2>
          <p className="mb-6 text-base leading-[1.8] text-body">
            Many organizations want to do safety right but don&apos;t have in-house EHS expertise.
            They rely on outdated procedures, react to incidents instead of preventing them, and
            struggle to keep up with changing regulations.
          </p>
          <p className="mb-8 text-base leading-[1.8] text-body">
            APEX was founded to close that gap — providing the same quality of safety management
            guidance that large corporates access, scaled and priced appropriately for organizations
            at every stage.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((item) => (
              <div key={item.stat} className="border-l-[3px] border-green bg-surface p-5">
                <div className="mb-1 font-heading text-2xl font-bold tracking-[-0.02em] text-green">
                  {item.stat}
                </div>
                <div className="text-xs leading-snug text-body">{item.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <img
            src={IMG_CONSTRUCTION}
            alt="Workers on construction site"
            className="h-[420px] w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  )
}
