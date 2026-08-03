import { createFormspreeProvider } from './providers/formspree'
import type { LeadPayload, LeadProvider, LeadProviderName, SubmitLeadResult } from './types'

/**
 * Single entry point for lead capture.
 * Swap providers via VITE_LEADS_PROVIDER without changing the Contact UI.
 *
 * Migration path later:
 * 1. Export submissions from Formspree (CSV/JSON).
 * 2. Map columns to LeadPayload fields.
 * 3. Add a new provider (e.g. providers/supabase.ts) and point VITE_LEADS_PROVIDER at it.
 * 4. Optionally keep Formspree as a backup notifier.
 */
function getProvider(): LeadProvider {
  const name = (import.meta.env.VITE_LEADS_PROVIDER || 'formspree') as LeadProviderName

  switch (name) {
    case 'formspree':
    default: {
      const formId = import.meta.env.VITE_FORMSPREE_FORM_ID
      if (!formId) {
        return {
          async submit(): Promise<SubmitLeadResult> {
            return {
              ok: false,
              message:
                'Form is not configured yet. Set VITE_FORMSPREE_FORM_ID in your .env file.',
            }
          },
        }
      }
      return createFormspreeProvider(formId)
    }
  }
}

export async function submitLead(
  input: Omit<LeadPayload, 'source' | 'submittedAt'>,
): Promise<SubmitLeadResult> {
  const payload: LeadPayload = {
    ...input,
    source: 'website-contact',
    submittedAt: new Date().toISOString(),
  }

  return getProvider().submit(payload)
}

export type { LeadPayload, SubmitLeadResult }
