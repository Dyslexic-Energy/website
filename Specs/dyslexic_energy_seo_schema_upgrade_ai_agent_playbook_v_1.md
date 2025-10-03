DyslexicEnergy SEO & Schema Upgrade — AI Agent Playbook (v1.0)

Goal: Turn the current holding page at https://www.dyslexicenergy.com/ into a search‑friendly, share‑worthy, and accessible page by adding a precise <title>, head metadata, and schema.org JSON‑LD, while keeping the HTML clean and lightweight (no heavy third‑party JS).

Style: Plain English, British English. No tracking. Minimal dependencies. Keep performance and accessibility in mind.

⸻

0) Deliverables (what you must output)
	•	Updated <head> markup (copy‑pasteable) with:
	•	Title, meta description, robots, canonical
	•	Open Graph & Twitter Card
	•	Icons (favicon / apple‑touch‑icon)
	•	Optional: theme‑colour
	•	JSON‑LD <script> block containing WebSite, Organization, WebPage (and optional ContactPoint)
	•	Updated visible HTML structure for the holding page (header/main/footer) with semantic, accessible markup and email sign‑up placeholder.
	•	Robots.txt and optional sitemap.xml examples.
	•	Validation checklist and local‑preview instructions.

Keep all placeholders as {{LIKE_THIS}} so they are easy to search & replace.

⸻

1) Variables to collect (fill these before you start)

Token	What it is	Example / tips
{{BRAND_NAME}}	Brand/website name	DyslexicEnergy
{{PRIMARY_KEYPHRASE}}	Main SEO phrase	dyslexia support for adults
{{SECONDARY_KEYPHRASE}}	Complementary phrase	dyslexia coaching
{{TAGLINE}}	Short line used in titles	Different brains are amazing (if desired)
{{MISSION_SENTENCE}}	1–2 sentences	We celebrate dyslexia as a different way of thinking…
{{PAGE_URL}}	Canonical URL of page	https://www.dyslexicenergy.com/
{{OG_IMAGE_URL}}	1200×630 (min) social image	Absolute URL to a compressed PNG/JPG
{{LOGO_URL}}	Square logo for schema & icons	Absolute URL (ideally SVG or 512×512 PNG)
{{SOCIAL_LINKS}}	Array of profiles	e.g. BlueSky, Instagram, Mastodon, LinkedIn
{{CONTACT_EMAIL}}	Public email (optional)	hello@dyslexicenergy.com
{{LANG}}	Language code	en-GB

Title length: aim ≤ 60 characters. Meta description: aim 150–160 characters.

⸻

2) Phase Plan (expanded) — based on supplied guide

Phase 1 — Define your key message & SEO targets

Answer these:
	•	What is {{BRAND_NAME}}?
	•	Who is the audience?
	•	Pick 2–3 keyword phrases ({{PRIMARY_KEYPHRASE}}, {{SECONDARY_KEYPHRASE}}, optional long‑tail).
	•	Confirm tagline and mission sentence.

Why: These drive <title>, meta description, hero copy, and headings. Avoid “Coming soon” as the only signal.

Outputs:
	•	Draft <title> using brand + {{PRIMARY_KEYPHRASE}}
	•	Draft meta description weaving in both keyphrases naturally
	•	1× <h1> and a short intro paragraph using the same language

⸻

Phase 2 — Prepare head metadata

Must include:
	1.	Charset & viewport
	2.	Title (≤ ~60 chars)
	3.	Meta description (150–160 chars)
	4.	Robots (index, follow) unless intentionally noindex
	5.	Canonical linking to {{PAGE_URL}}
	6.	Open Graph block (og:title, og:description, og:type, og:url, og:image)
	7.	Twitter/X Card (summary_large_image)
	8.	Optional: theme‑colour, language, icons
	9.	JSON‑LD script (see Phase 3)

Output: the Head Snippet (see §4).

⸻

Phase 3 — Add structured data (schema.org via JSON‑LD)

Types to include:
	•	WebSite — the site as a whole
	•	Organization — the brand entity
	•	WebPage — this specific page
	•	Optional: ContactPoint (nested in Organization) and SearchAction on WebSite

Output: a single JSON‑LD @graph with stable @id anchors (see §5).

⸻

Phase 4 — Build content / visible HTML structure

Structure:
	•	<header>: logo/name + optional simple nav/social list
	•	<main>: <h1> (one per page), short paragraph with mission, optional email form CTA
	•	<footer>: copyright, accessibility & privacy links, social list repeat

Accessibility:
	•	Provide descriptive alt text for images
	•	Honour prefers‑colour‑scheme if you have styles; ensure contrast meets WCAG AA or better
	•	Logical heading order; focus order matches visual order

Output: the Body Skeleton (see §6).

⸻

Phase 5 — Validate & iterate

Run:
	•	Google Rich Results Test (validate JSON‑LD)
	•	Check HTML source (title/description/canonical present once)
	•	Mobile/responsive preview
	•	URL Inspection in Search Console (when live)
	•	Share the {{PAGE_URL}} to verify Open Graph render (e.g. social debuggers)
	•	Monitor impressions/CTR after deployment

Local preview:
	•	Option 1: python3 -m http.server 8080 then open http://localhost:8080
	•	Option 2: npx http-server -p 8080 (Node installed)

⸻

3) Copy guidance (use in title/description/hero)

Title patterns (pick one, keep ≤ ~60 chars):
	•	{{BRAND_NAME}} — {{PRIMARY_KEYPHRASE}}
	•	{{BRAND_NAME}}: {{PRIMARY_KEYPHRASE}} & {{SECONDARY_KEYPHRASE}}

Meta description template (150–160 chars):

{{BRAND_NAME}} offers {{PRIMARY_KEYPHRASE}} with practical tools and a positive, inclusive approach. {{TAGLINE}}. Join our updates to hear when we launch.

Hero content:
	•	<h1>{{BRAND_NAME}} — {{PRIMARY_KEYPHRASE}}</h1>
	•	<p>{{MISSION_SENTENCE}}</p>

Avoid keyword stuffing; write naturally.

⸻

4) HEAD SNIPPET (copy‑paste and fill tokens)

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>{{BRAND_NAME}} — {{PRIMARY_KEYPHRASE}}</title>
  <meta name="description" content="{{BRAND_NAME}} offers {{PRIMARY_KEYPHRASE}} with practical tools and a positive, inclusive approach. {{TAGLINE}}. Join our updates to hear when we launch.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="{{PAGE_URL}}">

  <!-- Language & theme (optional but helpful) -->
  <meta http-equiv="content-language" content="{{LANG}}">
  <meta name="theme-color" content="#111111">

  <!-- Open Graph -->
  <meta property="og:title" content="{{BRAND_NAME}} — {{PRIMARY_KEYPHRASE}}">
  <meta property="og:description" content="{{BRAND_NAME}} offers {{PRIMARY_KEYPHRASE}} with practical tools and a positive, inclusive approach. {{TAGLINE}}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="{{PAGE_URL}}">
  <meta property="og:image" content="{{OG_IMAGE_URL}}">
  <meta property="og:locale" content="{{LANG}}">

  <!-- Twitter / X -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{{BRAND_NAME}} — {{PRIMARY_KEYPHRASE}}">
  <meta name="twitter:description" content="{{BRAND_NAME}} offers {{PRIMARY_KEYPHRASE}} with practical tools and a positive, inclusive approach. {{TAGLINE}}">
  <meta name="twitter:image" content="{{OG_IMAGE_URL}}">

  <!-- Icons -->
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" href="/icon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">

  <!-- JSON-LD schema (see §5) -->
  <script type="application/ld+json" id="schema-graph">
  /* filled by §5 */
  </script>
</head>

Notes: Keep only one <title> and one meta description. OG/Twitter descriptions can be shorter if desired. og:image should be an absolute URL; aim for 1200×630px, ≤ ~300 KB.

⸻

5) JSON‑LD GRAPH (WebSite, Organization, WebPage)

Paste this into the <script type="application/ld+json" id="schema-graph"> block in §4 and replace tokens.

{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "{{PAGE_URL}}#website",
      "url": "{{PAGE_URL}}",
      "name": "{{BRAND_NAME}}",
      "description": "{{BRAND_NAME}}: {{PRIMARY_KEYPHRASE}}",
      "inLanguage": "{{LANG}}",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "{{PAGE_URL}}search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": "{{PAGE_URL}}#organization",
      "name": "{{BRAND_NAME}}",
      "url": "{{PAGE_URL}}",
      "logo": {
        "@type": "ImageObject",
        "url": "{{LOGO_URL}}"
      },
      "sameAs": {{SOCIAL_LINKS}},
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "{{CONTACT_EMAIL}}",
        "availableLanguage": ["English"]
      }
    },
    {
      "@type": "WebPage",
      "@id": "{{PAGE_URL}}#webpage",
      "url": "{{PAGE_URL}}",
      "name": "{{BRAND_NAME}} — {{PRIMARY_KEYPHRASE}}",
      "description": "{{BRAND_NAME}} offers {{PRIMARY_KEYPHRASE}} with practical tools and a positive, inclusive approach. {{TAGLINE}}",
      "inLanguage": "{{LANG}}",
      "isPartOf": { "@id": "{{PAGE_URL}}#website" }
    }
  ]
}

Rules:
	•	Use absolute URLs for url, @id, og:image, logo.url.
	•	Keep stable @id anchors (#website, #organization, #webpage).
	•	Remove SearchAction if you won’t have search soon.
	•	If you don’t want to expose an email, remove the contactPoint block.

⸻

6) BODY SKELETON (semantic, accessible)

<body>
  <header class="site-header">
    <a href="/" class="brand" aria-label="{{BRAND_NAME}} home">
      <img src="{{LOGO_URL}}" alt="{{BRAND_NAME}} logo" width="96" height="96">
      <span class="brand-name">{{BRAND_NAME}}</span>
    </a>
    <nav aria-label="Social links">
      <ul class="social-list">
        <!-- Replace with real links; open in same tab by default -->
        <li><a href="https://bsky.app/profile/{{BRAND_NAME}}" rel="me">BlueSky</a></li>
        <li><a href="https://instagram.com/{{BRAND_NAME}}" rel="me">Instagram</a></li>
        <li><a href="https://mastodon.social/@{{BRAND_NAME}}" rel="me">Mastodon</a></li>
        <li><a href="https://www.linkedin.com/company/{{BRAND_NAME}}" rel="me">LinkedIn</a></li>
      </ul>
    </nav>
  </header>

  <main id="main-content">
    <h1>{{BRAND_NAME}} — {{PRIMARY_KEYPHRASE}}</h1>
    <p>{{MISSION_SENTENCE}}</p>

    <section aria-labelledby="signup-heading">
      <h2 id="signup-heading">Stay in touch</h2>
      <form method="post" action="{{FORM_ACTION_URL}}" class="signup-form" autocomplete="email">
        <label for="email">Email address</label>
        <input id="email" name="email" type="email" required inputmode="email" placeholder="you@example.com">
        <button type="submit">Notify me</button>
      </form>
      <p class="privacy-note">We don’t track you. We only use your email to send updates about {{BRAND_NAME}}.</p>
    </section>

    <!-- Optional hero / image with alt text -->
    <!-- <img src="/assets/hero.jpg" alt="Abstract rainbow gradient background with soft star shapes"> -->
  </main>

  <footer class="site-footer">
    <p>&copy; <span id="year"></span> {{BRAND_NAME}}. <a href="/accessibility">Accessibility</a> · <a href="/privacy">Privacy</a></p>
  </footer>

  <script>
    // Tiny enhancement: current year, no tracking
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>
</body>

Form note: Replace {{FORM_ACTION_URL}} with your provider’s endpoint (or a serverless handler). Keep it as plain HTML to avoid third‑party JS bloat.

⸻

7) robots.txt and (optional) sitemap.xml

/robots.txt

User-agent: *
Allow: /
Sitemap: https://www.dyslexicenergy.com/sitemap.xml

/sitemap.xml (optional; update lastmod on deploy)

<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>{{PAGE_URL}}</loc>
    <lastmod>2025-10-03</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>


⸻

8) Acceptance criteria
	•	Title contains {{BRAND_NAME}} and {{PRIMARY_KEYPHRASE}}; ≤ ~60 chars
	•	Meta description ~150–160 chars; includes keyphrases naturally
	•	Canonical points to {{PAGE_URL}} and appears only once
	•	OG/Twitter tags render correct title, description, and image in debuggers
	•	JSON‑LD validates with zero errors in Rich Results Test
	•	Single <h1>; headings follow a logical order
	•	Images use meaningful alt
	•	Email form is focusable, labelled, and works without JS
	•	No tracking scripts present
	•	Page loads fast (no large blocking assets; og:image ≤ ~300 KB)

⸻

9) Quick QA checklist (tick before publish)
	•	View source: 1× <title>, 1× meta description, 1× canonical
	•	Open Graph Preview OK
	•	Mobile viewport OK; no horizontal scroll
	•	Lighthouse: SEO ≥ 90, Accessibility ≥ 95 (target)
	•	Schema @id anchors stable and absolute
	•	Links have discernible names and adequate contrast

⸻

10) Minimal CSS (optional starter)

:root { color-scheme: light dark; }
body { font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; margin: 0; line-height: 1.6; }
.site-header, .site-footer { padding: 1rem; }
.brand { display: inline-flex; align-items: center; gap: .5rem; text-decoration: none; }
.brand-name { font-weight: 600; }
main { padding: 2rem 1rem; max-width: 70ch; margin: 0 auto; }
.signup-form { display: flex; gap: .5rem; flex-wrap: wrap; }
.signup-form input { flex: 1 1 260px; padding: .6rem .8rem; }
.signup-form button { padding: .6rem .9rem; cursor: pointer; }
.social-list { list-style: none; display: flex; gap: .75rem; padding: 0; margin: 0; }
.privacy-note { font-size: .9rem; opacity: .8; }


⸻

11) Example filled‑in (for reference only — do not ship as‑is)

Example title/description
	•	Title: DyslexicEnergy — dyslexia support for adults
	•	Description: DyslexicEnergy offers dyslexia support for adults with practical tools and a positive, inclusive approach. Different brains are amazing. Join our updates.

Example JSON‑LD edits
	•	Replace {{SOCIAL_LINKS}} with something like:

[
  "https://bsky.app/profile/dyslexicenergy.com",
  "https://www.instagram.com/dyslexicenergy",
  "https://mastodon.social/@dyslexicenergy",
  "https://www.linkedin.com/company/dyslexicenergy"
]



⸻

12) Implementation steps (do this in order)
	1.	Fill tokens in §1.
	2.	Paste Head Snippet (§4) into your page <head> and replace tokens.
	3.	Paste JSON‑LD Graph (§5) into the <script id="schema-graph"> block.
	4.	Update Body Skeleton (§6), especially <h1>, intro paragraph, and form action.
	5.	Add robots.txt (and optional sitemap.xml).
	6.	Preview locally (see Phase 5) and validate (SEO & schema).
	7.	Commit & deploy (e.g., GitHub Pages). Re‑run social debuggers to refresh cache if needed.

⸻

13) Change log
	•	v1.0 (2025‑10‑03): Initial playbook created from step‑by‑step brief; added tokens, copy templates, JSON‑LD @graph, acceptance criteria, and QA checklist.