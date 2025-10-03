# Clarifying Questions

1. **Email capture endpoint** — What service or API should both sign-up forms submit to (e.g., Mailchimp, custom endpoint, static form provider), and does the existing `Specs/MailChimpScript.js` snippet remain valid?
Answer: We are using Mailchimp, there is a JS script snip-it in the file MailChimpScript.js that MUST be included on the page. Action URL is https://dyslexicenergy.us18.list-manage.com/subscribe/post?u=f8c2bc087d8a8d19cc91821bd&id=ecdeb3a050&f_id=00b2abe6f0.

2. **Privacy link destination** — Which URL should the privacy microcopy reference, and will it live on the dedicated Privacy page that must share the main site template (header + footer)?
Answer: URL: `/privacy` 

"""Privacy Statement

We respect your privacy. DyslexicEnergy.com does not track visitors or collect personal data beyond your email address if you choose to share it with us. Emails are collected only so we can keep you updated about our work and news. We will never sell or pass your details to anyone else."""

3. **Accessibility statement link** — Do we have an approved Accessibility Statement page (same template as Privacy) or draft content to link against?
Answer: URL: `/accessibility` 

"""
Accessibility Statement

DyslexicEnergy.com is committed to making our website accessible to everyone. We follow our obligations under the Disability Discrimination Act and aim to ensure that people with visual, hearing, motor, or cognitive impairments can use our site.

Accessibility is a shared responsibility between us as site creators and the technologies people use, such as browsers, operating systems, and assistive tools like screen readers, text-to-speech, or larger fonts.

To support this, DyslexicEnergy.com will:
- Ensure our content works well with assistive technologies.
- Continue to improve our site based on accessibility standards and community feedback.
- Work with the wider accessibility community to support the development of future tools and standards.
"""

4. **Typography sourcing** — Should we license Helvetica Bold, use an alternative (e.g., Neuzeit Grotesk), or self-host Atkinson Hyperlegible for dyslexia mode?
Answer: Use Google Fonts; provide (at lease) Atkinson Hyperlegible and "Open Dyslexic". Open Dyslexic will be self-hosted from `/fonts/`.

5. **Grain overlay asset** — Does a specific grain texture exist for the hero background, or should we generate one (SVG / PNG) within the repo?
Answer: Generate one

6. **Analytics configuration** — Confirm whether Plausible is the desired provider and provide the domain configuration snippet if so.
Answer: NO ANALYTICS ARE REQUIRED


7. **Form validation messaging** — Are there approved tone/style guidelines for success and error copy beyond generic defaults?
Answer: Tone should be friendly and whimsical. 

8. **Star icons reference** — Are there preferred star illustrations (SVG assets) from brand guidelines, or should we implement custom CSS/SVG shapes?
Answer: Custom CSS or SVG shapes 

9. **Legal compliance** — Any regional compliance requirements (GDPR consent, cookie banners) to handle alongside the sign-up forms?
Answer: Add a note to the bottom of the page (in the footer) stating no cookies are used!  

10. **Deployment target** — Confirm the target hosting platform (GitHub Pages vs. Netlify) and any build tooling expectations (pure static vs. pipeline).
Answer: GitHub pages proxied via Cloudflair. 
