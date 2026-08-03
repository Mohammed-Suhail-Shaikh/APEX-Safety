/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LEADS_PROVIDER?: string
  readonly VITE_FORMSPREE_FORM_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
