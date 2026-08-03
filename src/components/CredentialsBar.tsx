import { CREDENTIALS } from '@/data/content'

export function CredentialsBar() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="page-shell py-3.5 sm:py-4">
        <p className="mb-2.5 font-heading text-[11px] font-bold tracking-widest text-label uppercase sm:mb-0 sm:mr-6 sm:inline sm:text-xs">
          Our Practitioners Work To:
        </p>
        <div className="flex gap-x-4 gap-y-2 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:inline-flex sm:flex-wrap sm:items-center sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden">
          {CREDENTIALS.map((c) => (
            <span
              key={c}
              className="flex shrink-0 items-center gap-1.5 font-heading text-xs font-semibold whitespace-nowrap text-[#374151]"
            >
              <span className="text-[10px] text-green" aria-hidden="true">
                ●
              </span>
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
