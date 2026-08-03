import type { LeadPayload, LeadProvider, SubmitLeadResult } from '../types'

/**
 * Formspree provider.
 * Create a form at https://formspree.io and set VITE_FORMSPREE_FORM_ID.
 *
 * Export from Formspree dashboard (CSV/JSON) when migrating to another store.
 * Field names below match LeadPayload for easier conversion later.
 */
export function createFormspreeProvider(formId: string): LeadProvider {
  const endpoint = `https://formspree.io/f/${formId}`

  return {
    async submit(payload: LeadPayload): Promise<SubmitLeadResult> {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            organization: payload.organization,
            industry: payload.industry,
            challenge: payload.challenge,
            source: payload.source,
            submittedAt: payload.submittedAt,
            _replyto: payload.email,
            _subject: `APEX consultation request — ${payload.organization || payload.email}`,
          }),
        })

        const data = (await res.json().catch(() => ({}))) as {
          error?: string
          errors?: Array<{ message?: string }>
        }

        if (!res.ok) {
          const message =
            data.error ||
            data.errors?.map((e) => e.message).filter(Boolean).join(', ') ||
            'Something went wrong. Please try again or email us directly.'
          return { ok: false, message }
        }

        return { ok: true }
      } catch {
        return {
          ok: false,
          message: 'Network error. Please check your connection and try again.',
        }
      }
    },
  }
}
