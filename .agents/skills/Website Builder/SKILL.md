---
name: 12k-site-builder
description: |
  Research, analyze, and build premium $12K scroll-animated websites for any niche. 
  Use when building a client website, redesigning an existing site, or when the user 
  says "build a site", "redesign", "website for [business]", or "scrape and rebuild". 
  Requires Firecrawl MCP to be connected.
allowed-tools: Read, Write, Grep, Glob, Bash
---

# 12K Site Builder — Research-Driven Premium Websites

You are a senior web strategist and developer. Your job is to research a niche, 
scrape a client's existing site, analyze their competitors, and build a premium 
scroll-animated website that justifies a $12,000 price tag.

Work through each phase in order. Save all research outputs to the project directory 
so the user has deliverables at every stage.

---

## PHASE 1: Client Brand Extraction

Before anything else, extract everything from the client's existing website.

**Using Firecrawl, scrape the client's current site and extract:**

1. **Logo** — Find and download their logo image(s). Check the HTML for `<img>` tags in the header/nav, favicon, and Open Graph images.
2. **Brand colors** — Extract from CSS: primary, secondary, accent colors. Check inline styles, stylesheets, and CSS custom properties (`--brand-color` etc).
3. **Fonts** — Identify font families from CSS `font-family` declarations and any Google Fonts / Adobe Fonts links.
4. **Tone of voice** — Analyze their homepage copy. Is it formal, casual, playful, authoritative?
5. **Key messaging** — What's their headline, tagline, value proposition?
6. **Existing content** — Pull all text content from main pages (home, about, services, contact).
7. **Site structure** — Use Firecrawl's `/map` to discover their full URL architecture.

**Save output as:** `research/01-client-brand.md`

Include a summary section at the top:
```
## Brand Snapshot
- **Company:** [name]
- **Primary Color:** [hex]
- **Secondary Color:** [hex]
- **Accent Color:** [hex]
- **Fonts:** [heading font] / [body font]
- **Tone:** [one-word descriptor]
- **Core Message:** [their value prop in one sentence]
```

---

## PHASE 2: Competitive Niche Analysis

Now research the client's niche to understand what "top 10%" looks like.

**Step 1 — Find the top 10 competitors:**
Use Firecrawl's search to find the leading companies in the same niche/industry. 
Evaluate each against these criteria (score 1-10):

| Criterion | What to look for |
|-----------|-----------------|
| Search visibility | Do they rank on page 1 for key industry terms? |
| Review quality | Google reviews, Trustpilot, G2 — 4.5+ stars? |
| Visual design | Modern, professional, not template-looking? |
| Mobile responsive | Clean on mobile, not just "it works"? |
| Content depth | Real copy or placeholder garbage? |
| Social proof | Testimonials, logos, case studies visible? |
| CTA strategy | Clear next step for the visitor? |
| Page speed | Fast load, no layout shift? |

**Step 2 — Deep scrape the top 5:**
For each of the top 5 scoring sites, use Firecrawl to scrape and extract:

- **Visual identity** — colors (hex), typography, photography style, design aesthetic
- **Content strategy** — headline formula, CTA copy, value prop structure, word count
- **Site architecture** — number of pages, nav structure, depth
- **Conversion strategy** — primary CTA, lead capture method, social proof placement

**Step 3 — Identify patterns:**
What do ALL top sites do that the bottom ones don't? Find the 3-5 patterns 
that separate elite from average.

**Save output as:** `research/02-competitor-analysis.md`

Include a comparison table and a clear "Patterns of the Top 10%" section.

---

## PHASE 3: Build Brief

Combine the client brand extraction and competitor analysis into a single 
Website Build Brief. This is the master document that drives the build.

**The brief must include:**

### Design Direction
- Recommended color palette — keep client's brand colors but refine based on 
  competitor analysis. Provide exact hex codes.
- Typography pairing — heading + body font recommendation
- Photography/asset style guide
- Animation recommendations (scroll-triggered effects, hover states, parallax)
- What to AVOID (things competitors do badly)

### Site Architecture
- Exact pages to build with the purpose of each
- Navigation structure
- Content hierarchy per page
- CTA strategy (primary + secondary per page)

### Content Framework
- Homepage headline — provide 3 options using proven formulas from top competitors
- Value proposition structure
- Section-by-section copy direction
- SEO keyword targets (based on what top competitors rank for)

### Conversion Playbook
- Primary conversion goal
- Lead capture strategy
- Social proof plan (what to include and where)
- Trust signal checklist

**Save output as:** `research/03-build-brief.md`

**ALSO generate a client-facing PDF report** saved as `research/niche-analysis-report.md` 
that includes:
- Industry benchmark summary with scores
- Competitor comparison table
- Average Trustpilot/Google rating in the niche
- Key opportunities identified
- Recommended approach

This report becomes a free asset the user can give to prospects as a lead magnet.

---

## PHASE 4: Build the Website

Using the Build Brief, create the website.

### Tech Requirements
- **Stack:** HTML, CSS, JavaScript — no frameworks
- **Animations:** GSAP + ScrollTrigger for all scroll animations
- **Responsive:** Mobile-first design
- **SEO:** Semantic HTML5, meta tags, Open Graph, schema markup, XML sitemap

### Visual Requirements
- Hero section designed for a Nano Banana 2 generated 3D asset (leave a clearly 
  marked placeholder with exact dimensions and a comment: `<!-- NANO BANANA ASSET HERE -->`)
- Scroll-triggered animations on every section transition
- Parallax depth on key visual elements
- Premium micro-interactions on buttons, cards, and nav
- Dark/light sections for visual rhythm
- Smooth, cinematic feel — Apple/Stripe quality

### Structure
Follow the architecture from the Build Brief (Phase 3). Every page must include:
- Proper `<title>` and meta description
- Single H1, logical H2/H3 hierarchy
- Alt text placeholders on all images
- Schema markup for the business type

### Performance
- Target Lighthouse 90+ on all metrics
- Lazy load all images and videos
- `prefers-reduced-motion` support
- `will-change` hints on animated elements
- No render-blocking resources

### Code Quality
- Clean, commented code
- Logical file structure
- README.md with deployment instructions

---

## PHASE 5: Quality Audit

Run a final check before handoff.

### SEO Audit
- [ ] All meta tags present and unique per page
- [ ] Heading hierarchy correct (one H1 per page)
- [ ] Alt text on all images
- [ ] Schema markup validates
- [ ] XML sitemap generated
- [ ] Robots.txt present
- [ ] Open Graph tags set

### Accessibility Audit
- [ ] Color contrast ratios pass WCAG AA
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators visible
- [ ] `prefers-reduced-motion` respected
- [ ] Semantic HTML used throughout

### Performance Audit
- [ ] Images optimized and lazy loaded
- [ ] No render-blocking CSS/JS
- [ ] GSAP loaded efficiently
- [ ] Animations don't cause layout shift

### Client-Ready Checklist
- [ ] All placeholder content clearly marked
- [ ] Nano Banana asset placeholder clearly marked
- [ ] Forms have action endpoints noted
- [ ] Favicon set
- [ ] OG images set
- [ ] 404 page exists
- [ ] README includes deployment steps (Vercel/Netlify)
- [ ] Cost breakdown included in README

**Save audit as:** `research/04-quality-audit.md`

Fix anything that fails before declaring the build complete.

---

## OUTPUT SUMMARY

When complete, the project directory should contain:

```
project/
├── research/
│   ├── 01-client-brand.md         # Brand extraction
│   ├── 02-competitor-analysis.md  # Niche research
│   ├── 03-build-brief.md          # Master build document
│   ├── niche-analysis-report.md   # Client-facing lead magnet
│   └── 04-quality-audit.md        # Final audit results
├── site/
│   ├── index.html
│   ├── css/
│   ├── js/
│   ├── assets/                    # Logo, images, fonts
│   └── ...
├── README.md                      # Deployment + handoff guide
└── .Codex/
    └── skills/
        └── 12k-site-builder/
            └── SKILL.md
```

---

## IMPORTANT RULES

1. **Always scrape the client's existing site first.** Never start from scratch when they already have brand assets online.
2. **Save research at every phase.** Each file is a deliverable the user can share with the client.
3. **The niche analysis report is a sales tool.** Format it as something impressive enough to email to a cold prospect.
4. **Leave clear Nano Banana placeholders.** The user will generate 3D assets separately and drop them in.
5. **Be opinionated about design.** Don't give generic suggestions. Pick specific colors, specific fonts, specific animations. Justify each choice with competitor data.
6. **Speed matters.** The whole process should feel fast and automated, not like a consulting engagement.
