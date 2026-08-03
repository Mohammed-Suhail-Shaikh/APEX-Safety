import { useState, type FormEvent } from 'react'
import { CONTACT_DETAILS } from '@/data/content'
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
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-xs font-semibold text-[#374151]">
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
        className="w-full border border-[#D1D5DB] px-3 py-2.5 font-body text-sm text-[#374151] outline-none transition-colors focus:border-green disabled:cursor-not-allowed disabled:bg-surface"
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

    // Honeypot — bots fill this; humans never see it
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
          {status === 'success' ? (
            <div className="border border-green-soft-border bg-green-soft p-8">
              <p className="mb-2 font-heading text-xs font-bold tracking-widest text-green uppercase">
                Message sent
              </p>
              <h3 className="mb-3 font-heading text-xl font-bold text-foreground">
                Thanks — we&apos;ll be in touch.
              </h3>
              <p className="mb-6 text-sm leading-[1.7] text-body">
                Your consultation request was received. We typically reply within one business day.
              </p>
              <button
                type="button"
                className="bg-green px-5 py-2.5 font-heading text-sm font-semibold text-white transition-opacity hover:opacity-85"
                onClick={() => setStatus('idle')}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              className="flex flex-col gap-4 border border-border bg-white p-8"
              onSubmit={onSubmit}
              noValidate={false}
            >
              <p className="mb-2 font-heading text-xs font-bold tracking-widest text-green uppercase">
                Free Consultation Request
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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

              <div className="flex flex-col gap-1">
                <label htmlFor="challenge" className="text-xs font-semibold text-[#374151]">
                  Tell us about your safety challenge
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  rows={3}
                  placeholder="Briefly describe what you're dealing with..."
                  disabled={busy}
                  className="w-full resize-none border border-[#D1D5DB] px-3 py-2.5 font-body text-sm text-[#374151] outline-none transition-colors focus:border-green disabled:cursor-not-allowed disabled:bg-surface"
                />
              </div>

              {/* Honeypot — leave empty */}
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
                <p className="border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
                  {errorMessage}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={busy}
                className="mt-1 w-full bg-green py-3.5 font-heading text-sm font-bold tracking-[0.04em] text-white transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {busy ? 'SENDING…' : 'SEND MESSAGE'}
              </button>
              <p className="text-center text-xs text-label">
                No commitment. Completely confidential.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
