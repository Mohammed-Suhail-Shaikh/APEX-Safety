# APEX Safety Consultancy

Landing page for APEX Safety Consultancy.

## Setup

Requires **Node.js 22.12+** (Vite 8).

```bash
npm install
cp .env.example .env
npm run dev
```

Open the URL shown in the terminal (default `http://localhost:5173`).

```bash
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Contact form (Formspree)

Leads go through a small provider layer (`src/lib/leads/`) so you can swap storage later without rewriting the form.

1. Create a free form at [formspree.io](https://formspree.io).
2. Copy the form ID from the endpoint (`https://formspree.io/f/XXXX` → `XXXX`).
3. In `.env`:

```env
VITE_LEADS_PROVIDER=formspree
VITE_FORMSPREE_FORM_ID=XXXX
```

4. Restart `npm run dev`.

**Later migration:** export submissions from Formspree (CSV/JSON), map columns to `LeadPayload` in `src/lib/leads/types.ts`, add a new file under `src/lib/leads/providers/`, and switch `VITE_LEADS_PROVIDER`.

## Structure

- `src/components/` — page sections
- `src/data/content.ts` — site copy and lists
- `src/assets/` — brand logo
- `src/lib/leads/` — lead capture providers (Formspree today)

The original Figma Make export remains in `Figma Code/` for reference and can be deleted when you no longer need it.
