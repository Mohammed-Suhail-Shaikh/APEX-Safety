/** Stable lead shape — keep this consistent when changing providers. */
export type LeadPayload = {
  firstName: string
  lastName: string
  email: string
  organization: string
  industry: string
  challenge: string
  /** Where the lead came from (useful when migrating / reporting). */
  source: 'website-contact'
  submittedAt: string
}

export type SubmitLeadResult =
  | { ok: true }
  | { ok: false; message: string }

export interface LeadProvider {
  submit(payload: LeadPayload): Promise<SubmitLeadResult>
}

export type LeadProviderName = 'formspree'
