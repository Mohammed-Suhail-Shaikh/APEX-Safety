import { useState, type FormEvent } from 'react'
import { CONTACT_EMAIL, CONTACT_PHONES } from '@/data/content'
import { Reveal } from '@/components/Reveal'
import { submitLead } from '@/lib/leads/submitLead'

function FormInput({
  label,
  placeholder,
  type = 'text',
  name,
  required,
  disabled,
}: {
  label: string
  placeholder: string
  type?: string
  name: string
  required?: boolean
  disabled?: boolean
}) {
  return (
    <div className="flex flex-col gap-0.5 sm:gap-1">
      <label htmlFor={name} className="text-[11px] font-semibold text-[#374151] sm:text-xs">
        {label}
        {required ? <span className="text-green"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className="w-full border border-[#D1D5DB] px-2.5 py-2.5 font-body text-base leading-normal text-[#374151] outline-none transition-colors focus:border-green disabled:cursor-not-allowed disabled:bg-surface sm:px-3 sm:py-2.5 sm:text-sm"
      />
    </div>
  )
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    if (String(data.get('company_website') || '').trim()) {
      setStatus('success')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    const result = await submitLead({
      firstName: String(data.get('firstName') || '').trim(),
      lastName: String(data.get('lastName') || '').trim(),
      email: String(data.get('email') || '').trim(),
      organization: String(data.get('organization') || '').trim(),
      industry: String(data.get('industry') || '').trim(),
      challenge: String(data.get('challenge') || '').trim(),
    })

    if (result.ok) {
      setStatus('success')
      form.reset()
      return
    }

    setStatus('error')
    setErrorMessage(result.message)
  }

  const busy = status === 'submitting'

  return (
    <section id="contact" className="section-pad border-t border-border bg-surface-alt">
      <div className="page-shell grid grid-cols-1 items-start gap-7 sm:gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="mb-2.5 font-heading text-xs font-bold tracking-widest text-label uppercase sm:mb-3">
            Get In Touch
          </p>
          <h2 className="mb-3 text-[1.5rem] leading-[1.2] font-bold tracking-[-0.02em] text-foreground sm:mb-6 sm:text-3xl sm:leading-[1.15] lg:text-4xl">
            Let&apos;s talk about your workplace safety.
          </h2>
          <p className="mb-5 text-[14px] leading-[1.65] text-body sm:mb-8 sm:text-base sm:leading-[1.8]">
            Fill in the form and we&apos;ll get back to you within one business day. No sales pitch
            — just an honest conversation about whether and how we can help.
          </p>

          <div className="flex flex-col gap-4 sm:gap-5">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="mt-1 h-7 w-0.5 shrink-0 bg-green sm:h-8" aria-hidden="true" />
              <div className="min-w-0">
                <div className="mb-0.5 font-heading text-[11px] font-bold tracking-widest text-green uppercase sm:text-xs">
                  Email
                </div>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="break-all text-[13px] font-medium text-[#374151] transition-colors hover:text-green sm:text-sm"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="mt-1 h-7 w-0.5 shrink-0 bg-green sm:h-8" aria-hidden="true" />
              <div>
                <div className="mb-1.5 font-heading text-[11px] font-bold tracking-widest text-green uppercase sm:mb-2 sm:text-xs">
                  Phone
                </div>
                <ul className="flex flex-col gap-1 sm:gap-1.5">
                  {CONTACT_PHONES.map((phone) => (
                    <li key={phone.country} className="text-[13px] text-[#374151] sm:text-sm">
                      <span className="font-heading text-[11px] font-bold tracking-widest text-label uppercase sm:text-xs">
                        {phone.country}:
                      </span>{' '}
                      <a
                        href={phone.href}
                        className="font-medium transition-colors hover:text-green"
                      >
                        {phone.number}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={100} className="w-full min-w-0">
          {status === 'success' ? (
            <div className="border border-green-soft-border bg-green-soft p-4 sm:p-8">
              <p className="mb-2 font-heading text-[11px] font-bold tracking-widest text-green uppercase sm:text-xs">
                Message sent
              </p>
              <h3 className="mb-2 font-heading text-lg font-bold text-foreground sm:mb-3 sm:text-xl">
                Thanks — we&apos;ll be in touch.
              </h3>
              <p className="mb-5 text-[13px] leading-[1.65] text-body sm:mb-6 sm:text-sm sm:leading-[1.7]">
                Your consultation request was received. We typically reply within one business day.
              </p>
              <button
                type="button"
                className="w-full bg-green px-4 py-2.5 font-heading text-sm font-semibold text-white transition-opacity hover:opacity-85 sm:w-auto sm:px-5"
                onClick={() => setStatus('idle')}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              className="relative flex w-full min-w-0 flex-col gap-3 border border-border bg-white p-4 sm:gap-4 sm:p-8"
              onSubmit={onSubmit}
            >
              <p className="font-heading text-[11px] font-bold tracking-widest text-green uppercase sm:mb-2 sm:text-xs">
                Free Consultation Request
              </p>

              <div className="grid grid-cols-1 gap-2.5 min-[420px]:grid-cols-2 sm:gap-4">
                <FormInput
                  label="First Name"
                  name="firstName"
                  placeholder="Jane"
                  required
                  disabled={busy}
                />
                <FormInput
                  label="Last Name"
                  name="lastName"
                  placeholder="Smith"
                  required
                  disabled={busy}
                />
              </div>
              <FormInput
                label="Work Email"
                name="email"
                placeholder="jane@company.com"
                type="email"
                required
                disabled={busy}
              />
              <FormInput
                label="Organization"
                name="organization"
                placeholder="Company name"
                required
                disabled={busy}
              />
              <FormInput
                label="Industry / Sector"
                name="industry"
                placeholder="e.g. Construction"
                disabled={busy}
              />

              <div className="flex flex-col gap-0.5 sm:gap-1">
                <label
                  htmlFor="challenge"
                  className="text-[11px] font-semibold text-[#374151] sm:text-xs"
                >
                  Tell us about your safety challenge
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  rows={3}
                  placeholder="Briefly describe what you're dealing with..."
                  disabled={busy}
                  className="w-full resize-none border border-[#D1D5DB] px-2.5 py-2.5 font-body text-base leading-normal text-[#374151] outline-none transition-colors focus:border-green disabled:cursor-not-allowed disabled:bg-surface sm:px-3 sm:py-2.5 sm:text-sm"
                />
              </div>

              <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
                <label htmlFor="company_website">Website</label>
                <input
                  id="company_website"
                  name="company_website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {status === 'error' ? (
                <p
                  className="border border-red-200 bg-red-50 px-2.5 py-2 text-[13px] text-red-700 sm:px-3 sm:text-sm"
                  role="alert"
                >
                  {errorMessage}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={busy}
                className="mt-0.5 min-h-12 w-full bg-green py-3.5 font-heading text-[13px] font-bold tracking-[0.04em] text-white transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-60 sm:mt-1 sm:min-h-0 sm:py-3.5 sm:text-sm"
              >
                {busy ? 'SENDING…' : 'SEND MESSAGE'}
              </button>
              <p className="text-center text-[11px] text-label sm:text-xs">
                No commitment. Completely confidential.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
