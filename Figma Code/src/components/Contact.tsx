import type { FormEvent } from 'react'
import { CONTACT_DETAILS } from '@/data/content'
import { Reveal } from '@/components/Reveal'

function FormInput({
  label,
  placeholder,
  type = 'text',
  name,
}: {
  label: string
  placeholder: string
  type?: string
  name: string
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-xs font-semibold text-[#374151]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full border border-[#D1D5DB] px-3 py-2.5 font-body text-sm text-[#374151] outline-none transition-colors focus:border-green"
      />
    </div>
  )
}

export function Contact() {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="border-t border-border bg-surface-alt px-5 py-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="mb-4 font-heading text-xs font-bold tracking-widest text-label uppercase">
            Get In Touch
          </p>
          <h2 className="mb-6 text-3xl leading-[1.15] font-bold tracking-[-0.02em] text-foreground lg:text-4xl">
            Let&apos;s talk about
            <br />
            your workplace safety.
          </h2>
          <p className="mb-8 text-base leading-[1.8] text-body">
            Fill in the form and we&apos;ll get back to you within one business day. No sales pitch
            — just an honest conversation about whether and how we can help.
          </p>

          <div className="flex flex-col gap-5">
            {CONTACT_DETAILS.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="mt-1 h-8 w-0.5 shrink-0 bg-green" aria-hidden="true" />
                <div>
                  <div className="mb-0.5 font-heading text-xs font-bold tracking-widest text-label uppercase">
                    {item.label}
                  </div>
                  <div className="text-sm font-medium text-[#374151]">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <form
            className="flex flex-col gap-4 border border-border bg-white p-8"
            onSubmit={onSubmit}
          >
            <p className="mb-2 font-heading text-xs font-bold tracking-widest text-green uppercase">
              Free Consultation Request
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormInput label="First Name" name="firstName" placeholder="Jane" />
              <FormInput label="Last Name" name="lastName" placeholder="Smith" />
            </div>
            <FormInput
              label="Work Email"
              name="email"
              placeholder="jane@company.com"
              type="email"
            />
            <FormInput label="Organization" name="organization" placeholder="Company name" />
            <FormInput
              label="Industry / Sector"
              name="industry"
              placeholder="e.g. Construction"
            />

            <div className="flex flex-col gap-1">
              <label htmlFor="challenge" className="text-xs font-semibold text-[#374151]">
                Tell us about your safety challenge
              </label>
              <textarea
                id="challenge"
                name="challenge"
                rows={3}
                placeholder="Briefly describe what you're dealing with..."
                className="w-full resize-none border border-[#D1D5DB] px-3 py-2.5 font-body text-sm text-[#374151] outline-none transition-colors focus:border-green"
              />
            </div>

            <button
              type="submit"
              className="mt-1 w-full bg-green py-3.5 font-heading text-sm font-bold tracking-[0.04em] text-white transition-opacity hover:opacity-85"
            >
              SEND MESSAGE
            </button>
            <p className="text-center text-xs text-label">No commitment. Completely confidential.</p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
