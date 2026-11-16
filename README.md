# Sarthi AI Solutions website

React + Vite + Tailwind site for Sarthi AI Solutions, built to the website blueprint (v1.0).

## Development

```bash
npm install
npm run dev
```

`npm run build` creates the production build in `dist/`; `npm run lint` runs Oxlint.

## Contact form (Formspree)

The Contact Us enquiry form posts to a [Formspree](https://formspree.io) form.

1. Sign in to Formspree with the business mailbox that should receive enquiries and create a new form.
2. Copy the form endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
3. Set it as `VITE_CONTACT_ENDPOINT`:
   - **Locally:** copy `.env.example` to `.env.local` and paste the endpoint.
   - **GitHub Pages:** add a repository variable `VITE_CONTACT_ENDPOINT` under
     Settings → Secrets and variables → Actions → Variables (the deploy workflow passes it to the build).
   - **Vercel:** add the same name under Project → Settings → Environment Variables.
4. In Formspree, add the site's domain under the form's allowed domains, and turn on the
   autoresponse if visitors should get an acknowledgement email.

Until the variable is set, the form validates input but shows a "couldn't send" message on submit.

## Careers form (Forminit)

The careers application form posts to a [Forminit](https://forminit.com) form, because its free
plan accepts file uploads (100 submissions a month, 100 MB of file storage, 25 MB per submission).

1. Sign in to Forminit with the business mailbox and create a form.
2. In the form's settings, keep the submission mode **Public**, leave CAPTCHA off (the site uses
   the `_gotcha` honeypot), and add the site's hostname under **Authorized Domains**
   (add `localhost` too for local testing). Submissions from other domains go to Spam.
3. Copy the endpoint, e.g. `https://forminit.com/f/abc123`, and set it as `VITE_CAREERS_ENDPOINT`
   the same way as the contact form (`.env.local`, GitHub repository variable, or Vercel).

Forminit only stores fields named `fi-<type>-<name>` (for example `fi-sender-email`,
`fi-text-skills`, `fi-file-resume`); anything else is dropped. Keep that prefix when adding fields
in `src/pages/CareersApply.jsx`. When storage fills up, uploads are rejected, so delete old
applications in Forminit from time to time.
