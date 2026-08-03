import { CREDENTIALS } from '@/data/content'

export function CredentialsBar() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-3 px-5 py-4 lg:px-10">
        <span className="shrink-0 font-heading text-xs font-bold tracking-widest text-label uppercase">
          Our Practitioners Work To:
        </span>
        {CREDENTIALS.map((c) => (
          <span
            key={c}
            className="flex items-center gap-1.5 font-heading text-xs font-semibold text-[#374151]"
          >
            <span className="text-[10px] text-green" aria-hidden="true">
              ●
            </span>
            {c}
          </span>
        ))}
      </div>
    </section>
  )
}
