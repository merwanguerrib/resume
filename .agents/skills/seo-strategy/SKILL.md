---
name: seo-strategy
description: >
  Unified SEO skill with two modes: Article/Page Optimization and Full Website Audit.

  MODE 1 — ARTICLE/PAGE SEO OPTIMIZATION: Use this mode whenever the user shares an article,
  blog post, draft, page content, or a URL to a single page and mentions SEO, search optimization,
  ranking, or Google — or even when they just say "check this article", "optimize this", or
  "improve this" without explicitly saying SEO. Also trigger when the user pastes or attaches
  article text and asks you to review, improve, rewrite, or polish it for publishing. Trigger
  phrases include: "optimize this article", "SEO optimize this", "improve this for SEO",
  "optimize this page", "rewrite for SEO", "check this article", "improve this content",
  "make this rank", "SEO this". When in doubt, lean toward activating this mode — it's better
  to offer SEO optimization than to miss the opportunity.

  MODE 2 — FULL WEBSITE AUDIT: Use this mode whenever the user asks for a full website SEO audit,
  site-wide SEO strategy, multi-page SEO analysis, SEO health check, website audit, site audit,
  domain SEO review, or wants to understand their overall website SEO performance. Trigger phrases
  include: "audit my site", "SEO strategy for my website", "check my website SEO", "full SEO audit",
  "multi-page SEO", "site SEO", "website SEO review", "SEO health check", "site audit",
  "domain audit", or when the user provides a root URL and asks for SEO help. This mode crawls
  multiple pages across a website and produces a comprehensive HTML report with site-wide analysis,
  cross-page patterns, architecture review, and prioritized strategy.
---

# Unified SEO Skill

This skill handles two distinct SEO workflows depending on what the user provides. Read the Mode Detection section first to determine which mode to use, then follow the corresponding instructions.

---

## Mode Detection

Before doing anything else, determine which mode to use based on the user's input.

### Use Mode 1 (Article/Page SEO Optimization) when:
- User shares article text, a blog post draft, or page content directly
- User provides a single URL and asks to "optimize", "improve", "rewrite" the content
- User mentions a target keyword or title they want to rank for
- User says "optimize this article", "SEO optimize this", "improve this for SEO", "check this article", "make this rank"
- User pastes or attaches written content and asks you to review, improve, or polish it for publishing
- The focus is on making a single piece of content rank better

### Use Mode 2 (Full Website Audit) when:
- User provides a root domain or homepage URL and asks for an "audit", "review", "strategy"
- User says "audit my site", "full SEO audit", "website SEO", "site audit", "SEO health check"
- User asks about site-wide issues, multiple pages, site architecture
- User provides a local directory of HTML files and asks for a review
- The focus is on evaluating an entire website's SEO health across many pages

### If ambiguous:
- A single URL + "optimize" or "improve the content" = Mode 1
- A single URL + "audit" or "review my site" = Mode 2
- Just a domain with no specific request = Mode 2
- Just article text with no specific request = Mode 1

---

# MODE 1: Article/Page SEO Optimization

You receive an article and produce a visual HTML report with three tabs:
1. **Revised Article** — a fully rewritten, SEO-optimized version the user can publish as-is
2. **Changelog** — every change grouped by category with impact badges (High/Medium/Low)
3. **Original** — the unmodified article for easy comparison

## How to Think About This

Your goal is to maximize the article's chance of ranking on Google. The process is research-first:
study what's already winning, understand exactly what keywords and topics the top results cover,
then rewrite the article to compete with — and surpass — those results. Every change should be
data-informed, not guesswork.

## Mode 1 Step 0: User Intake Questionnaire (MANDATORY — DO NOT SKIP)

**Before doing ANY research or analysis, you MUST ask the user the following questions.**
Use `AskUserQuestion` to gather this information. Do NOT proceed until you have answers.
Present all questions in a single message so the user can answer them at once.

Ask the user:

1. **Target keywords** — "What keywords or phrases do you want this article to rank for?
   List your primary keyword and any secondary keywords. If you're unsure, I can suggest
   some based on your article — just say 'suggest for me'."

2. **Target audience** — "Who is your target reader? (e.g., homeowners in the UK, first-time
   buyers, small business owners, developers, etc.)"

3. **Search intent** — "What should someone searching for this topic be looking to do?
   - Learn something (informational)
   - Buy or hire something (transactional)
   - Compare options before deciding (commercial investigation)
   - Find a specific brand or site (navigational)
   - Not sure (I'll determine this from competitor research)"

4. **Geographic focus** — "Is there a geographic focus? (e.g., UK-only, US, global, specific city)"

5. **LSI / semantic keyword preferences** — "Are there any specific related terms, industry
   jargon, or semantic keywords you want included? For example, if your article is about
   'home removals', related terms might include 'packing service', 'man and van', 'moving
   checklist', 'removal quote', etc. List any you want prioritized, or say 'research for me'
   and I'll extract them from competitor analysis."

6. **Competitor awareness** — "Are there any specific competitor URLs or articles you want me
   to analyze and outrank? (optional — I'll find top-ranking competitors automatically either way)"

7. **Content constraints** — "Any constraints I should know about?
   - Maximum word count?
   - Tone/voice requirements? (formal, casual, authoritative, friendly)
   - Topics or claims to avoid?
   - Mandatory sections or CTAs to include?"

### Processing the answers:

- If the user says "suggest for me" for keywords: proceed to Step 1 and infer keywords from
  the article, but confirm your suggestion with the user before starting competitor research.
- If the user says "research for me" for LSI keywords: note this and extract LSI terms from
  competitor research in Step 2b, but highlight them prominently in the report for user review.
- If the user provides specific keywords: use those as the definitive target. Do NOT override
  the user's keyword choices with your own inference — the user knows their business and audience.
- If the user provides competitor URLs: include those in your competitor analysis in Step 2a
  alongside the top organic results.
- Store ALL user answers and reference them throughout the optimization. The user's keyword
  choices and audience context should inform every decision in Steps 1-5.

---

## Mode 1 Step 1: Determine Target Keyword

Using the user's answers from Step 0, confirm the target keyword strategy:

1. **Target keyword/keyphrase** — Use the primary keyword the user provided in Step 0.
   If the user said "suggest for me", read the article carefully and infer the primary keyword
   from the title, recurring themes, and topic. Pick the most specific, searchable phrase that
   captures the article's intent. **Present your suggestion to the user and get confirmation
   before proceeding.**

2. **Search intent** — Use the intent the user selected in Step 0. If they said "not sure",
   determine it from the keyword and competitor research. The article must match this intent
   or it won't rank regardless of other optimizations.

## Mode 1 Step 2: Competitor Research (CRITICAL — DO NOT SKIP)

This is the most important step. You must research what's currently ranking before making any changes.

### 2a. Find Top-Ranking Competitors

Use `WebSearch` to search for the target keyword. Examine the top 5-10 results.

For each top result, note:
- **Title tag** — exact wording
- **URL** — structure and slug
- **Meta description** — if visible in search results

Then use `WebFetch` to retrieve the full HTML of the **top 3-5 ranking pages**. For each page, extract:

- **Title tag and H1**
- **All H2 and H3 headings** — these reveal the subtopics competitors cover
- **Word count** — approximate length of the content
- **Key topics/sections covered** — what subtopics do they address that the user's article doesn't?
- **Content structure** — how do they organize the information? (listicle, how-to, comparison, etc.)

### 2b. Extract Keyword & LSI Strategy (CRITICAL FOR RANKING)

From the competitor pages AND the user's keyword preferences from Step 0, build a **keyword map**:

1. **Primary keyword** — Use the keyword the user provided in Step 0. If they said "suggest for me",
   confirm/refine based on what competitors are targeting and present your recommendation.
2. **Secondary keywords** — close variations and long-tail versions competitors use in their titles/H2s
   (e.g., if primary is "best running shoes", secondaries might be "top running shoes 2025", "running shoes for beginners").
   Cross-reference with any secondary keywords the user listed in Step 0.
3. **LSI (Latent Semantic Indexing) keywords** — semantically related terms that appear frequently
   across multiple competitor pages. These are NOT synonyms — they're contextually related words
   that signal topical depth to Google. **This is one of the most powerful ranking signals you
   can optimize for — Google uses semantic relevance to determine topical authority.**

   **How to extract LSI keywords:**
   - Start with any LSI terms the user provided in Step 0 — these are priority inclusions
   - Read through competitor content and note terms/phrases that appear in 2+ of the top results
   - Look for technical terms, related concepts, and descriptive phrases specific to the topic
   - Group them by subtopic/theme (e.g., for a moving company: "logistics terms", "cost terms",
     "service types", "trust signals")
   - Aim for 20-40 LSI terms (more than fewer — topical depth is a ranking advantage)
   - Use `WebSearch` to search for "[primary keyword] related searches" and
     "[primary keyword] people also ask" to discover additional LSI terms from Google's own
     suggestions

   **Example:** For "home removals UK" the LSI terms might include: packing service, removal quote,
   man and van, moving checklist, removal insurance, house clearance, storage solutions, moving day,
   white glove service, fragile items, disassembly, inventory list, transit insurance, removal boxes,
   bubble wrap, moving costs, local movers, long distance move, same day removal, weekend moves,
   Trustpilot reviews, vetted movers, price comparison

   **LSI keyword categories to always look for:**
   - **Process terms** — words describing how the service/product works
   - **Cost/pricing terms** — words people use when comparing prices
   - **Trust/quality terms** — words that signal reliability and quality
   - **Problem terms** — words describing the pain points the content solves
   - **Comparison terms** — words used when evaluating alternatives
   - **Location terms** — geographic modifiers relevant to the user's target area (from Step 0)

4. **Keyword density targets** — For the primary keyword, note the approximate density used by
   top-ranking pages (typically 1-2%). For LSI keywords, they should appear naturally throughout
   the article — not forced, but present. Each LSI term should appear 1-3 times depending on
   article length.

5. **User-provided LSI integration** — If the user provided specific LSI/semantic keywords in
   Step 0, these MUST be integrated into the revised article. Mark them separately in the report
   so the user can verify their priority terms were included.

### 2c. Gap Analysis

Compare the user's article against the competitor research:

- **Content gaps** — What subtopics do ALL top competitors cover that the user's article misses?
  These are mandatory additions.
- **Structural gaps** — Do competitors use a format (e.g., comparison table, step-by-step, FAQ)
  that the user's article doesn't? Consider adopting effective structures.
- **Depth gaps** — Where do competitors go deeper? Which sections of the user's article are
  too thin compared to what's ranking?
- **Keyword gaps** — Which LSI keywords and secondary keywords are missing from the user's article?
- **Unique angles** — What does the user's article offer that competitors DON'T? Preserve and
  amplify these differentiators.

## Mode 1 Step 3: Analyze Current Article Strengths

Now assess the user's article:

1. **Current SEO strengths** — What's already working? Don't fix what isn't broken.
2. **SEO gaps** — Mapped against the competitor research above.
3. **Author's voice and style** — Note the tone so you can preserve it in the rewrite.

## Mode 1 Step 4: The SEO Optimization Checklist

Work through each of these areas. Every decision should be informed by the competitor research from Step 2.

### Content Quality & Search Intent (Highest Impact)

- **Search intent match**: Does the article fully satisfy what the searcher wants? If someone
  Googles the target keyword, would this article answer their question completely? Based on
  competitor research, add any missing subtopics that ALL top results cover.
- **Depth and comprehensiveness**: Based on your gap analysis, add substance where the article
  is thinner than competitors. Cover the subtopics they cover. But don't pad with fluff —
  only add genuinely useful information.
- **LSI keyword integration**: Weave the LSI keywords from Step 2b naturally throughout the
  article. They should appear in body text, headings, image alt text, and lists. Aim for each
  LSI term to appear 1-3 times depending on article length. Never force them — if a term
  doesn't fit naturally, skip it.
- **E-E-A-T signals**: Experience, Expertise, Authoritativeness, Trustworthiness. Does the
  article demonstrate firsthand knowledge? Add concrete examples, data points, specific
  details, or actionable steps where the content feels generic.
- **Originality**: Amplify any unique angles the user's article has that competitors lack.
  This is the article's competitive advantage — don't dilute it while adding competitor-matched content.

### Title Tag / H1

- Include the target keyword, ideally near the beginning
- Keep it under 60 characters so it doesn't get truncated in search results
- Make it compelling enough to earn clicks over competing results
- Use a power word or emotional trigger where it fits naturally (e.g., "proven," "complete,"
  "ultimate," "[year]")

### Meta Description

- Write a meta description of 150-160 characters
- Include the target keyword naturally
- Write it as a compelling pitch — give the reader a reason to click
- Include a call to action or value proposition

### Heading Structure (H2s, H3s)

- Use a clear hierarchy: one H1 (the title), then H2s for major sections, H3s for subsections
- Include the target keyword or close variations in at least one H2
- **Cross-reference competitor H2s from Step 2a** — if all top results have a section for a
  specific subtopic (e.g., "How Much Does X Cost?"), the article likely needs one too
- Use headings that read like the questions/subtopics people actually search for —
  these can appear as featured snippets
- Every section should earn its heading. If a section is only one paragraph, it probably
  doesn't need its own H2.

### Keyword Usage (Informed by Competitor Research)

- Use the **primary keyword** in the first 100 words of the article
- Match or slightly exceed the keyword density of top-ranking competitors (typically 1-2%)
- Include **all secondary keywords** from Step 2b at least once, ideally in headings or early paragraphs
- Integrate **LSI keywords** from Step 2b throughout — aim for each term to appear 1-3 times
  naturally in body text. Cluster related LSI terms near relevant sections.
- Cross-reference your keyword placement against the competitor analysis — if every top result
  mentions a specific term in their intro, include it in yours too
- Never keyword-stuff. If it sounds unnatural when read aloud, remove it.

### Internal & External Linking

- If the article references concepts that could link to other content, note where internal
  links should go (use placeholder notation like `[link to: topic]` if you don't know the
  user's site structure)
- Suggest 1-2 authoritative external link opportunities where citing a source would boost
  credibility (studies, official documentation, reputable sources)

### URL Slug

- Suggest an SEO-friendly URL slug: short, lowercase, hyphenated, includes the target keyword
- Example: `how-to-start-a-podcast` not `how-to-start-a-podcast-in-2024-the-complete-guide`

### Readability & User Experience

- Break up long paragraphs (aim for 2-4 sentences per paragraph for web reading)
- Use bullet points and numbered lists where they make content easier to scan
- Add a clear introduction that hooks the reader and previews what they'll learn
- Include a conclusion or summary that reinforces the key takeaway
- Ensure transitions between sections are smooth

### Featured Snippet Optimization

- If the keyword has featured snippet potential (how-to, what-is, list, comparison),
  structure one section to directly answer the query in a concise format that Google
  can pull as a snippet (a short paragraph, a numbered list, or a table)

### Image/Media Recommendations

- Suggest where images, diagrams, or tables would improve the article and help rankings
- Provide recommended alt text for each suggested image (include the keyword where relevant)

## Mode 1 Step 5: Produce the Output as an HTML Report

Generate a single, self-contained HTML file using the EXACT template below. Replace all `{{PLACEHOLDER}}` values with actual data from the analysis. Do NOT improvise the design — use this template verbatim, only filling in the dynamic content.

Save the HTML file next to the user's article (same directory), named `seo-report-{{URL_SLUG}}.html`. Then open it in the user's browser with `open <path-to-file>` and tell the user where the file is saved.

### Complete Mode 1 HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SEO Strategy Report — {{ARTICLE_TITLE}}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --bg: #0a0a0f;
    --bg-card: rgba(255,255,255,0.03);
    --bg-card-hover: rgba(255,255,255,0.06);
    --border: rgba(255,255,255,0.08);
    --border-hover: rgba(255,255,255,0.15);
    --text: #e8e8ed;
    --text-secondary: #8b8b9e;
    --text-muted: #5a5a6e;
    --accent: #6366f1;
    --accent-glow: rgba(99,102,241,0.3);
    --green: #22c55e;
    --green-bg: rgba(34,197,94,0.12);
    --green-border: rgba(34,197,94,0.25);
    --yellow: #eab308;
    --yellow-bg: rgba(234,179,8,0.12);
    --yellow-border: rgba(234,179,8,0.25);
    --red: #ef4444;
    --red-bg: rgba(239,68,68,0.12);
    --red-border: rgba(239,68,68,0.25);
    --blue: #3b82f6;
    --blue-bg: rgba(59,130,246,0.12);
    --orange: #f97316;
    --orange-bg: rgba(249,115,22,0.12);
    --orange-border: rgba(249,115,22,0.25);
    --radius: 16px;
    --radius-sm: 10px;
    --radius-xs: 6px;
  }

  ::selection { background: var(--accent); color: white; }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* Ambient background */
  body::before {
    content: '';
    position: fixed;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.06) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.04) 0%, transparent 50%),
                radial-gradient(ellipse at 50% 80%, rgba(59,130,246,0.03) 0%, transparent 50%);
    z-index: -1;
    animation: ambientDrift 20s ease-in-out infinite;
  }
  @keyframes ambientDrift {
    0%, 100% { transform: translate(0, 0); }
    33% { transform: translate(-2%, 1%); }
    66% { transform: translate(1%, -1%); }
  }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }
  ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }

  /* Layout */
  .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

  /* Header */
  .header {
    padding: 40px 0 0;
    text-align: center;
  }
  .header-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 100px;
    font-size: 12px;
    font-weight: 500;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 20px;
  }
  .header-badge .dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--green);
    box-shadow: 0 0 8px var(--green);
    animation: pulse 2s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }
  .header h1 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 42px;
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 12px;
    background: linear-gradient(135deg, #fff 0%, #a5a5c0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .header .subtitle {
    font-size: 16px;
    color: var(--text-secondary);
    margin-bottom: 32px;
  }

  /* Tabs */
  .tabs {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(10,10,15,0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
    padding: 0;
  }
  .tabs-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    gap: 0;
    overflow-x: auto;
    scrollbar-width: none;
  }
  .tabs-inner::-webkit-scrollbar { display: none; }
  .tab-btn {
    padding: 16px 24px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-muted);
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s;
    position: relative;
  }
  .tab-btn:hover { color: var(--text-secondary); }
  .tab-btn.active {
    color: var(--text);
    border-bottom-color: var(--accent);
  }
  .tab-btn .tab-count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 100px;
    font-size: 11px;
    font-weight: 600;
    margin-left: 8px;
    color: var(--text-secondary);
  }
  .tab-btn.active .tab-count {
    background: var(--accent);
    border-color: var(--accent);
    color: white;
  }

  /* Tab Content */
  .tab-content { display: none; padding: 40px 0 80px; }
  .tab-content.active { display: block; }

  /* Score Circle */
  .score-section {
    display: flex;
    align-items: center;
    gap: 48px;
    margin-bottom: 40px;
    padding: 40px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    backdrop-filter: blur(20px);
  }
  .score-circle-wrap { position: relative; flex-shrink: 0; }
  .score-circle {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
  }
  .score-circle svg {
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }
  .score-circle svg circle {
    fill: none;
    stroke-width: 6;
    stroke-linecap: round;
  }
  .score-circle svg .bg-ring { stroke: rgba(255,255,255,0.06); }
  .score-circle svg .progress-ring {
    stroke: var(--accent);
    /* stroke-dashoffset calculated as: 502 - (502 * score / 100) */
    stroke-dasharray: 502;
    stroke-dashoffset: {{SCORE_DASHOFFSET}};
    filter: drop-shadow(0 0 6px var(--accent-glow));
    transition: stroke-dashoffset 1.5s ease-out;
  }
  .score-number {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 56px;
    font-weight: 700;
    line-height: 1;
    color: white;
    position: relative;
    z-index: 1;
  }
  .score-label {
    font-size: 13px;
    color: var(--text-secondary);
    font-weight: 500;
    position: relative;
    z-index: 1;
    margin-top: 4px;
  }
  .score-details { flex: 1; }
  .score-details h2 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 8px;
  }
  .score-details p {
    color: var(--text-secondary);
    font-size: 15px;
    line-height: 1.7;
    margin-bottom: 20px;
  }

  /* Sub-scores */
  .sub-scores {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
  }
  .sub-score {
    padding: 14px 16px;
    background: rgba(255,255,255,0.02);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
  }
  .sub-score-label {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--text-muted);
    margin-bottom: 6px;
  }
  .sub-score-value {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 28px;
    font-weight: 700;
  }
  .sub-score-bar {
    height: 3px;
    border-radius: 2px;
    background: rgba(255,255,255,0.06);
    margin-top: 8px;
    overflow: hidden;
  }
  .sub-score-bar-fill {
    height: 100%;
    border-radius: 2px;
    transition: width 1s ease-out;
  }

  /* Stats grid */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 40px;
  }
  .stat-card {
    padding: 24px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    text-align: center;
    transition: border-color 0.2s;
  }
  .stat-card:hover { border-color: var(--border-hover); }
  .stat-value {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 36px;
    font-weight: 700;
    color: white;
    margin-bottom: 4px;
  }
  .stat-label {
    font-size: 13px;
    color: var(--text-secondary);
  }

  /* Cards */
  .card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 28px;
    margin-bottom: 16px;
    transition: border-color 0.2s;
  }
  .card:hover { border-color: var(--border-hover); }
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    cursor: pointer;
  }
  .card-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .card-title .icon {
    width: 36px;
    height: 36px;
    border-radius: var(--radius-xs);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    flex-shrink: 0;
  }

  /* Badges */
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 4px 12px;
    border-radius: 100px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.3px;
  }
  .badge-critical { background: var(--red-bg); color: var(--red); border: 1px solid var(--red-border); }
  .badge-high { background: var(--orange-bg); color: var(--orange); border: 1px solid var(--orange-border); }
  .badge-medium { background: var(--yellow-bg); color: var(--yellow); border: 1px solid var(--yellow-border); }
  .badge-low { background: var(--green-bg); color: var(--green); border: 1px solid var(--green-border); }
  .badge-pass { background: var(--green-bg); color: var(--green); border: 1px solid var(--green-border); }
  .badge-warning { background: var(--yellow-bg); color: var(--yellow); border: 1px solid var(--yellow-border); }
  .badge-fail { background: var(--red-bg); color: var(--red); border: 1px solid var(--red-border); }

  /* Collapsible */
  .collapsible-body {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.35s ease;
  }
  .collapsible.open .collapsible-body {
    max-height: 2000px;
  }
  .collapse-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: rgba(255,255,255,0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: var(--text-muted);
    transition: transform 0.3s, background 0.2s;
    flex-shrink: 0;
  }
  .collapsible.open .collapse-icon { transform: rotate(180deg); }

  /* Finding item */
  .finding {
    padding: 16px 0;
    border-bottom: 1px solid rgba(255,255,255,0.04);
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 16px;
    align-items: start;
  }
  .finding:last-child { border-bottom: none; }
  .finding-status {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-top: 8px;
  }
  .finding-status.pass { background: var(--green); box-shadow: 0 0 6px rgba(34,197,94,0.4); }
  .finding-status.warning { background: var(--yellow); box-shadow: 0 0 6px rgba(234,179,8,0.4); }
  .finding-status.fail { background: var(--red); box-shadow: 0 0 6px rgba(239,68,68,0.4); }
  .finding-content h4 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 4px;
  }
  .finding-content p {
    font-size: 13px;
    color: var(--text-secondary);
    line-height: 1.6;
  }
  .finding-rec {
    margin-top: 8px;
    padding: 10px 14px;
    background: rgba(99,102,241,0.06);
    border-left: 3px solid var(--accent);
    border-radius: 0 var(--radius-xs) var(--radius-xs) 0;
    font-size: 13px;
    color: var(--text);
    line-height: 1.5;
  }

  /* Keyword table */
  .keyword-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 16px;
  }
  .keyword-table th {
    text-align: left;
    padding: 12px 16px;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--text-muted);
    border-bottom: 1px solid var(--border);
    font-weight: 600;
  }
  .keyword-table td {
    padding: 12px 16px;
    font-size: 14px;
    border-bottom: 1px solid rgba(255,255,255,0.03);
    vertical-align: top;
  }
  .keyword-table tr:hover td { background: rgba(255,255,255,0.02); }
  .keyword-primary {
    font-weight: 600;
    color: var(--accent);
  }
  .keyword-tag {
    display: inline-block;
    padding: 3px 10px;
    background: rgba(255,255,255,0.04);
    border: 1px solid var(--border);
    border-radius: 100px;
    font-size: 12px;
    font-family: 'JetBrains Mono', monospace;
    margin: 2px 4px 2px 0;
    color: var(--text-secondary);
  }

  /* Competitor cards */
  .competitor-card {
    padding: 20px;
    background: rgba(255,255,255,0.02);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    margin-bottom: 12px;
  }
  .competitor-rank {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--accent);
    color: white;
    font-size: 13px;
    font-weight: 700;
    margin-right: 12px;
    flex-shrink: 0;
  }
  .competitor-title {
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
  }
  .competitor-url {
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    color: var(--text-muted);
    margin-bottom: 12px;
    word-break: break-all;
  }
  .competitor-meta {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }
  .competitor-meta-item {
    font-size: 12px;
    color: var(--text-secondary);
  }
  .competitor-meta-item strong {
    color: var(--text);
  }
  .competitor-topics {
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid rgba(255,255,255,0.04);
  }
  .competitor-topics h5 {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--text-muted);
    margin-bottom: 8px;
  }

  /* Article content */
  .article-content {
    font-size: 16px;
    line-height: 1.8;
    color: var(--text);
  }
  .article-content h1 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 32px;
    font-weight: 700;
    margin: 32px 0 16px;
    color: white;
  }
  .article-content h2 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 24px;
    font-weight: 600;
    margin: 28px 0 12px;
    padding-top: 20px;
    border-top: 1px solid var(--border);
    color: white;
  }
  .article-content h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
    font-weight: 600;
    margin: 20px 0 8px;
    color: white;
  }
  .article-content p { margin-bottom: 16px; }
  .article-content ul, .article-content ol {
    margin-bottom: 16px;
    padding-left: 24px;
  }
  .article-content li { margin-bottom: 6px; }
  .article-content .new-section {
    border-left: 3px solid var(--accent);
    padding-left: 16px;
    margin-left: -19px;
    position: relative;
  }
  .article-content .new-section::before {
    content: 'NEW — Added based on competitor research';
    position: absolute;
    top: -20px;
    left: 16px;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--accent);
    font-weight: 600;
  }

  /* Metadata card */
  .meta-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    margin-bottom: 32px;
  }
  .meta-item {
    padding: 20px 24px;
    background: var(--bg);
  }
  .meta-item:nth-child(odd) { background: rgba(255,255,255,0.015); }
  .meta-label {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--text-muted);
    margin-bottom: 6px;
  }
  .meta-value {
    font-size: 14px;
    font-weight: 500;
    color: var(--text);
  }
  .meta-value.mono {
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
  }

  /* Changelog */
  .change-category {
    margin-bottom: 32px;
  }
  .change-category-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border);
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .change-item {
    padding: 14px 0;
    border-bottom: 1px solid rgba(255,255,255,0.03);
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 16px;
    align-items: start;
  }
  .change-item:last-child { border-bottom: none; }
  .change-what {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 4px;
  }
  .change-why {
    font-size: 13px;
    color: var(--text-secondary);
  }

  /* Gap analysis */
  .gap-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 16px;
  }
  .gap-card {
    padding: 20px;
    background: rgba(255,255,255,0.02);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
  }
  .gap-card h4 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .gap-card ul {
    list-style: none;
    padding: 0;
  }
  .gap-card ul li {
    font-size: 13px;
    color: var(--text-secondary);
    padding: 4px 0;
    padding-left: 16px;
    position: relative;
  }
  .gap-card ul li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 11px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent);
    opacity: 0.5;
  }

  /* Original banner */
  .original-banner {
    padding: 16px 24px;
    background: var(--yellow-bg);
    border: 1px solid var(--yellow-border);
    border-radius: var(--radius-sm);
    color: var(--yellow);
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  /* Section titles */
  .section-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  .section-subtitle {
    color: var(--text-secondary);
    font-size: 15px;
    margin-bottom: 24px;
  }

  /* LSI keyword cloud */
  .lsi-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 12px;
  }
  .lsi-tag {
    padding: 6px 14px;
    background: rgba(99,102,241,0.08);
    border: 1px solid rgba(99,102,241,0.2);
    border-radius: 100px;
    font-size: 13px;
    font-family: 'JetBrains Mono', monospace;
    color: var(--text);
    transition: all 0.2s;
  }
  .lsi-tag:hover {
    background: rgba(99,102,241,0.15);
    border-color: rgba(99,102,241,0.4);
  }
  .lsi-tag.integrated {
    background: var(--green-bg);
    border-color: var(--green-border);
    color: var(--green);
  }
  .lsi-tag.missing {
    background: var(--red-bg);
    border-color: var(--red-border);
    color: var(--red);
    opacity: 0.7;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .header h1 { font-size: 28px; }
    .score-section { flex-direction: column; text-align: center; padding: 24px; gap: 24px; }
    .stats-grid { grid-template-columns: repeat(2, 1fr); }
    .meta-card { grid-template-columns: 1fr; }
    .gap-grid { grid-template-columns: 1fr; }
    .sub-scores { grid-template-columns: repeat(2, 1fr); }
  }
</style>
</head>
<body>

<div class="header">
  <div class="container">
    <div class="header-badge"><span class="dot"></span> SEO Strategy Report</div>
    <h1>{{ARTICLE_TITLE}}</h1>
    <p class="subtitle">Article SEO Optimization Report — Generated {{REPORT_DATE}}</p>
  </div>
</div>

<div class="tabs">
  <div class="tabs-inner">
    <button class="tab-btn active" onclick="switchTab('research')">Competitor Research</button>
    <button class="tab-btn" onclick="switchTab('revised')">Revised Article</button>
    <button class="tab-btn" onclick="switchTab('changelog')">Changelog <span class="tab-count">{{CHANGELOG_COUNT}}</span></button>
    <button class="tab-btn" onclick="switchTab('original')">Original</button>
  </div>
</div>

<!-- ==================== TAB 1: COMPETITOR RESEARCH ==================== -->
<div id="tab-research" class="tab-content active">
<div class="container">

  <!-- Score section with SVG ring -->
  <div class="score-section">
    <div class="score-circle-wrap">
      <div class="score-circle">
        <svg viewBox="0 0 160 160">
          <circle class="bg-ring" cx="80" cy="80" r="74"/>
          <circle class="progress-ring" cx="80" cy="80" r="74"/>
        </svg>
        <span class="score-number">{{OVERALL_SCORE}}</span>
        <span class="score-label">SEO Score</span>
      </div>
    </div>
    <div class="score-details">
      <!-- POPULATE: One-line summary of the overall assessment -->
      <h2>{{SCORE_HEADLINE}}</h2>
      <!-- POPULATE: 2-3 sentence explanation of the score -->
      <p>{{SCORE_SUMMARY}}</p>
      <div class="sub-scores">
        <!-- POPULATE: 4 sub-scores. Use var(--green) for 80+, var(--yellow) for 60-79, var(--orange) for 40-59, var(--red) for <40 -->
        <div class="sub-score">
          <div class="sub-score-label">Content</div>
          <div class="sub-score-value" style="color: {{CONTENT_SCORE_COLOR}}">{{CONTENT_SCORE}}</div>
          <div class="sub-score-bar"><div class="sub-score-bar-fill" style="width:{{CONTENT_SCORE}}%; background: {{CONTENT_SCORE_COLOR}}"></div></div>
        </div>
        <div class="sub-score">
          <div class="sub-score-label">Keywords</div>
          <div class="sub-score-value" style="color: {{KEYWORDS_SCORE_COLOR}}">{{KEYWORDS_SCORE}}</div>
          <div class="sub-score-bar"><div class="sub-score-bar-fill" style="width:{{KEYWORDS_SCORE}}%; background: {{KEYWORDS_SCORE_COLOR}}"></div></div>
        </div>
        <div class="sub-score">
          <div class="sub-score-label">Structure</div>
          <div class="sub-score-value" style="color: {{STRUCTURE_SCORE_COLOR}}">{{STRUCTURE_SCORE}}</div>
          <div class="sub-score-bar"><div class="sub-score-bar-fill" style="width:{{STRUCTURE_SCORE}}%; background: {{STRUCTURE_SCORE_COLOR}}"></div></div>
        </div>
        <div class="sub-score">
          <div class="sub-score-label">Technical</div>
          <div class="sub-score-value" style="color: {{TECHNICAL_SCORE_COLOR}}">{{TECHNICAL_SCORE}}</div>
          <div class="sub-score-bar"><div class="sub-score-bar-fill" style="width:{{TECHNICAL_SCORE}}%; background: {{TECHNICAL_SCORE_COLOR}}"></div></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Quick stats -->
  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-value">{{COMPETITORS_ANALYZED}}</div>
      <div class="stat-label">Competitors Analyzed</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">{{LSI_TOTAL}}</div>
      <div class="stat-label">LSI Keywords Found</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">{{CONTENT_GAPS_COUNT}}</div>
      <div class="stat-label">Content Gaps</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">{{TARGET_KEYWORD_DENSITY}}</div>
      <div class="stat-label">Target Keyword Density</div>
    </div>
  </div>

  <!-- Top Ranking Competitors -->
  <div class="section-title">Top Ranking Competitors</div>
  <div class="section-subtitle">Pages currently ranking for "{{TARGET_KEYWORD}}"</div>

  <!-- POPULATE: One competitor-card per competitor analyzed (3-5 cards).
       Each card structure:
       <div class="competitor-card">
         <div class="competitor-title"><span class="competitor-rank">1</span> [Competitor page title]</div>
         <div class="competitor-url">[Full URL]</div>
         <div class="competitor-meta">
           <span class="competitor-meta-item"><strong>[word count]</strong> words</span>
           <span class="competitor-meta-item"><strong>[H2 count]</strong> H2 sections</span>
           <span class="competitor-meta-item"><strong>[image count]</strong> images</span>
           <span class="competitor-meta-item">Keyword density: <strong>[density]%</strong></span>
         </div>
         <div class="competitor-topics">
           <h5>Key Topics Covered</h5>
           <div class="lsi-cloud">
             <span class="keyword-tag">[topic 1]</span>
             <span class="keyword-tag">[topic 2]</span>
             ...
           </div>
         </div>
       </div>
  -->
  {{COMPETITOR_CARDS}}

  <!-- Keyword Strategy Table -->
  <div style="margin-top: 40px;">
    <div class="section-title">Keyword Strategy</div>
    <div class="section-subtitle">Extracted from competitor analysis — integrate these into the revised article</div>

    <table class="keyword-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Keyword</th>
          <th>Density Target</th>
          <th>Competitors Using</th>
        </tr>
      </thead>
      <tbody>
        <!-- POPULATE: One row for the primary keyword:
             <tr>
               <td><span class="keyword-primary">PRIMARY</span></td>
               <td><strong>[primary keyword]</strong></td>
               <td>[density range]%</td>
               <td>[N]/[total]</td>
             </tr>
             Then rows for each secondary keyword:
             <tr>
               <td><span class="badge badge-medium">Secondary</span></td>
               <td>[keyword]</td>
               <td>[density range]%</td>
               <td>[N]/[total]</td>
             </tr>
             Then a row for LSI keywords:
             <tr>
               <td><span class="badge badge-low">LSI</span></td>
               <td>[comma-separated LSI terms]</td>
               <td>1-3 mentions each</td>
               <td>[N]/[total]</td>
             </tr>
        -->
        {{KEYWORD_TABLE_ROWS}}
      </tbody>
    </table>
  </div>

  <!-- LSI Keyword Cloud -->
  <div style="margin-top: 40px;">
    <div class="section-title">LSI Keywords</div>
    <div class="section-subtitle">Green = already in your article | Red = missing — must add</div>
    <div class="lsi-cloud">
      <!-- POPULATE: One lsi-tag per LSI keyword.
           Use class="lsi-tag integrated" for keywords already present in the original article.
           Use class="lsi-tag missing" for keywords that need to be added.
           Example:
           <span class="lsi-tag integrated">responsive design</span>
           <span class="lsi-tag missing">pricing</span>
      -->
      {{LSI_CLOUD}}
    </div>
  </div>

  <!-- Gap Analysis -->
  <div style="margin-top: 40px;">
    <div class="section-title">Gap Analysis</div>
    <div class="section-subtitle">What your article is missing vs. what's ranking</div>
    <div class="gap-grid">
      <div class="gap-card">
        <h4 style="color: var(--red);">Content Gaps</h4>
        <ul>
          <!-- POPULATE: One li per content gap found.
               Example: <li>No cost/pricing comparison section (all 5 competitors have this)</li>
          -->
          {{CONTENT_GAPS_LIST}}
        </ul>
      </div>
      <div class="gap-card">
        <h4 style="color: var(--yellow);">Structural Gaps</h4>
        <ul>
          <!-- POPULATE: One li per structural gap found.
               Example: <li>Competitors average 3,400 words — your article is 1,800</li>
          -->
          {{STRUCTURAL_GAPS_LIST}}
        </ul>
      </div>
      <div class="gap-card">
        <h4 style="color: var(--green);">Your Unique Advantages</h4>
        <ul>
          <!-- POPULATE: One li per unique advantage the original article has.
               Example: <li>First-person experience with the topic</li>
          -->
          {{UNIQUE_ADVANTAGES_LIST}}
        </ul>
      </div>
      <div class="gap-card">
        <h4 style="color: var(--blue);">Keyword Gaps</h4>
        <ul>
          <!-- POPULATE: One li per keyword gap found.
               Example: <li>14 of 24 LSI keywords not present in current article</li>
          -->
          {{KEYWORD_GAPS_LIST}}
        </ul>
      </div>
    </div>
  </div>

</div>
</div>

<!-- ==================== TAB 2: REVISED ARTICLE ==================== -->
<div id="tab-revised" class="tab-content">
<div class="container">

  <!-- Metadata card -->
  <div class="meta-card">
    <div class="meta-item">
      <div class="meta-label">Title Tag</div>
      <div class="meta-value">{{TITLE_TAG}}</div>
    </div>
    <div class="meta-item">
      <div class="meta-label">Target Keyword</div>
      <div class="meta-value mono">{{TARGET_KEYWORD}}</div>
    </div>
    <div class="meta-item">
      <div class="meta-label">Meta Description</div>
      <div class="meta-value">{{META_DESCRIPTION}}</div>
    </div>
    <div class="meta-item">
      <div class="meta-label">URL Slug</div>
      <div class="meta-value mono">{{URL_SLUG}}</div>
    </div>
    <div class="meta-item">
      <div class="meta-label">Keyword Density</div>
      <div class="meta-value"><span style="color: var(--green)">{{NEW_KEYWORD_DENSITY}}</span> (was {{OLD_KEYWORD_DENSITY}})</div>
    </div>
    <div class="meta-item">
      <div class="meta-label">LSI Coverage</div>
      <div class="meta-value"><span style="color: var(--green)">{{LSI_INTEGRATED}} of {{LSI_TOTAL}}</span> keywords integrated</div>
    </div>
  </div>

  <!-- Full revised article rendered as HTML -->
  <div class="article-content">
    <!-- POPULATE: The complete revised article with proper heading hierarchy (h1, h2, h3),
         paragraphs, lists, tables, blockquotes, etc.
         Wrap any NEW sections added based on competitor research in:
         <div class="new-section" style="margin-top: 40px;">
           [new content here]
         </div>
         This adds a purple left border and "NEW" label to highlight competitor-informed additions.
    -->
    {{REVISED_ARTICLE_HTML}}
  </div>

</div>
</div>

<!-- ==================== TAB 3: CHANGELOG ==================== -->
<div id="tab-changelog" class="tab-content">
<div class="container">

  <div class="section-title">What Changed &amp; Why</div>
  <div class="section-subtitle">{{CHANGELOG_COUNT}} changes across {{CHANGELOG_CATEGORY_COUNT}} categories, all informed by competitor research</div>

  <!-- POPULATE: One change-category block per category. Always start with "Competitor-Informed Additions".
       Then include categories like "Keyword Optimization", "Title & Meta", "Structure & Content Depth",
       "Preserved Strengths", etc.

       Each category structure:
       <div class="change-category">
         <div class="change-category-title">
           <span style="color: var(--accent);">&#9672;</span> [Category Name]
         </div>
         <div class="change-item">
           <div>
             <div class="change-what">[What changed — brief description]</div>
             <div class="change-why">[Why — reference competitor data]</div>
           </div>
           <span class="badge badge-[critical|high|medium|low]">[Impact Level]</span>
         </div>
         ... more change-items ...
       </div>

       Use these colors for the category icon (&#9672;):
       - Competitor-Informed Additions: var(--accent)
       - Keyword Optimization: var(--green)
       - Title & Meta: var(--yellow)
       - Structure & Content Depth: var(--blue)
       - Preserved Strengths: var(--text-muted)

       Badge levels:
       - badge-critical: For the most important additions driven by competitor research
       - badge-high: For significant improvements
       - badge-medium: For moderate improvements
       - badge-low: For preserved strengths or minor tweaks
  -->
  {{CHANGELOG_HTML}}

</div>
</div>

<!-- ==================== TAB 4: ORIGINAL ==================== -->
<div id="tab-original" class="tab-content">
<div class="container">

  <div class="original-banner">
    <span style="font-size: 18px;">&#9888;</span>
    This is the original, pre-optimization version of the article. Compare with the Revised Article tab to see all improvements.
  </div>

  <div class="article-content" style="opacity: 0.8;">
    <!-- POPULATE: The original article rendered as HTML, exactly as provided by the user.
         Use proper heading hierarchy, paragraphs, lists, etc.
    -->
    {{ORIGINAL_ARTICLE_HTML}}
  </div>

</div>
</div>

<script>
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tabId).classList.add('active');
  event.target.closest('.tab-btn').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Collapsible cards
document.querySelectorAll('.collapsible .card-header').forEach(header => {
  header.addEventListener('click', () => {
    header.closest('.collapsible').classList.toggle('open');
  });
});
</script>

</body>
</html>
```

### Placeholder Reference (Mode 1)

When generating the report, replace these placeholders with actual data:

| Placeholder | Description |
|---|---|
| `{{ARTICLE_TITLE}}` | The article's title (used in page header and `<title>` tag) |
| `{{REPORT_DATE}}` | Current date in "March 6, 2026" format |
| `{{OVERALL_SCORE}}` | Computed SEO score 0-100 |
| `{{SCORE_DASHOFFSET}}` | SVG ring offset: `502 - (502 * score / 100)` rounded to integer |
| `{{SCORE_HEADLINE}}` | One-line assessment, e.g., "Good foundation, but missing key topics competitors cover" |
| `{{SCORE_SUMMARY}}` | 2-3 sentence explanation of what's strong and what needs work |
| `{{CONTENT_SCORE}}`, `{{KEYWORDS_SCORE}}`, `{{STRUCTURE_SCORE}}`, `{{TECHNICAL_SCORE}}` | Sub-scores 0-100 |
| `{{*_SCORE_COLOR}}` | CSS color: `var(--green)` for 80+, `var(--yellow)` for 60-79, `var(--orange)` for 40-59, `var(--red)` for <40 |
| `{{COMPETITORS_ANALYZED}}` | Number of competitors researched (e.g., "5") |
| `{{LSI_TOTAL}}` | Total LSI keywords identified |
| `{{CONTENT_GAPS_COUNT}}` | Number of content gaps found |
| `{{TARGET_KEYWORD_DENSITY}}` | Target density from competitors (e.g., "1.4%") |
| `{{TARGET_KEYWORD}}` | The primary target keyword |
| `{{COMPETITOR_CARDS}}` | HTML for all competitor cards (see template comments for structure) |
| `{{KEYWORD_TABLE_ROWS}}` | HTML table rows for keyword strategy table |
| `{{LSI_CLOUD}}` | HTML for LSI tag cloud with integrated/missing classes |
| `{{CONTENT_GAPS_LIST}}`, `{{STRUCTURAL_GAPS_LIST}}`, `{{UNIQUE_ADVANTAGES_LIST}}`, `{{KEYWORD_GAPS_LIST}}` | HTML `<li>` items for each gap card |
| `{{TITLE_TAG}}` | Optimized title tag |
| `{{META_DESCRIPTION}}` | Optimized meta description |
| `{{URL_SLUG}}` | Suggested URL slug |
| `{{NEW_KEYWORD_DENSITY}}` | Keyword density in revised article |
| `{{OLD_KEYWORD_DENSITY}}` | Keyword density in original article |
| `{{LSI_INTEGRATED}}` | Count of LSI keywords successfully integrated |
| `{{REVISED_ARTICLE_HTML}}` | Full revised article as HTML (h1, h2, h3, p, ul, ol, etc.) |
| `{{CHANGELOG_COUNT}}` | Total number of changes made |
| `{{CHANGELOG_CATEGORY_COUNT}}` | Number of change categories |
| `{{CHANGELOG_HTML}}` | Full changelog HTML (see template comments for structure) |
| `{{ORIGINAL_ARTICLE_HTML}}` | Original article as HTML, unmodified |

## Mode 1 Important Principles

- **Preserve the author's voice.** You're an SEO editor, not a ghostwriter. The article
  should still sound like the person who wrote it. Match their tone, vocabulary level, and
  style.

- **Don't over-optimize.** Google penalizes content that reads like it was written for bots.
  Every keyword insertion should feel natural. If you can't fit the keyword naturally,
  don't force it.

- **Substance over tricks.** The single most important ranking factor is whether the content
  genuinely helps the reader. Prioritize making the article genuinely better and more useful.

- **Be honest in the changelog.** If the article was already strong in an area, say so.
  The user wants to understand what was changed, not see a list of trivial edits.

---

# MODE 2: Full Website SEO Audit

Perform a comprehensive, site-wide SEO audit covering multiple pages, cross-page patterns, site architecture, technical infrastructure, content strategy, and internal linking. Produce a visually stunning interactive HTML report with scores, findings, and a prioritized action plan.

## Mode 2 Workflow Overview

0. **Ask the user mandatory intake questions** (target keywords, audience, LSI preferences, goals)
1. Determine input type (live URL or local directory)
2. Crawl and collect data from multiple pages (up to 15)
3. Fetch site-wide resources (robots.txt, sitemap.xml, security headers)
4. Analyze each page individually
5. Perform cross-page analysis (duplicates, cannibalization, linking, LSI coverage)
6. Score all categories
7. Generate the interactive HTML report
8. Save and open in browser

---

## Mode 2 Step 0: User Intake Questionnaire (MANDATORY — DO NOT SKIP)

**Before crawling or analyzing anything, you MUST ask the user the following questions.**
Use `AskUserQuestion` to gather this information. Do NOT proceed until you have answers.
Present all questions in a single message so the user can answer them at once.

Ask the user:

1. **Target keywords** — "What are the main keywords or phrases your website should rank for?
   List your top 3-5 target keywords. If you're unsure, I can infer them from your site
   content — just say 'analyze and suggest'."

2. **Business type & audience** — "Briefly describe your business and target audience.
   (e.g., 'We're a UK removals company targeting homeowners who need affordable moving services')"

3. **Geographic focus** — "What geographic area do you serve? (e.g., UK-wide, London only,
   US, global, etc.)"

4. **Key competitors** — "Are there any competitor websites you want to outrank or that you
   consider benchmarks? (optional — list URLs if you have them)"

5. **SEO goals** — "What's your primary SEO goal right now?
   - Get more organic traffic generally
   - Rank for specific keywords (list them)
   - Improve local SEO / Google Maps presence
   - Fix technical issues I know about
   - Build a content strategy from scratch
   - Other (describe)"

6. **LSI / semantic keyword priorities** — "Are there any specific related terms, industry
   jargon, or semantic keywords that are important to your business? For example, if you're
   a removals company, related terms might include 'packing service', 'man and van', 'storage',
   'house move checklist', etc. List any you want prioritized across your site, or say
   'research for me' and I'll identify them from your content and competitors."

7. **Known issues** — "Are there any SEO issues you already know about or have been told about?
   (e.g., 'pages aren't getting indexed', 'we lost rankings recently', 'site is slow')"

### Processing the answers:

- If the user says "analyze and suggest" for keywords: proceed with the audit, infer keywords
  from page content, but highlight your keyword suggestions prominently in the Content Strategy
  tab for user review.
- If the user says "research for me" for LSI keywords: extract semantic keywords from the site's
  content and competitor analysis. Include a dedicated LSI keyword section in the report showing
  which terms are present vs missing across all pages.
- If the user provides specific target keywords: evaluate every page against those keywords.
  Check which pages target which keywords, flag cannibalization, and assess keyword coverage
  across the site.
- If the user provides competitor URLs: include those in the analysis. Compare the user's site
  structure, content depth, and keyword coverage against those competitors.
- Store ALL user answers and reference them throughout the audit. The user's keyword priorities
  and business context should inform scoring, recommendations, and the action plan.

---

## Mode 2 Step 1: Determine Input and Collect Page List

### If the user provides a live URL (root domain or homepage):

1. Use `WebFetch` to retrieve the homepage HTML.
2. Parse all internal links from the homepage HTML — look for `<a href="...">` tags where the href:
   - Starts with `/` (relative paths)
   - Starts with the same domain (absolute internal links)
   - Does NOT point to static assets (images, CSS, JS, PDFs)
   - Does NOT point to anchor-only links (`#`)
3. Deduplicate the link list and remove query parameters and fragments.
4. Prioritize pages to audit (select up to 15 total including the homepage):
   - Homepage (always included)
   - Main navigation links (typically in `<nav>` or `<header>`)
   - Pages linked from the homepage that appear to be key content (blog posts, service pages, about, contact)
   - Prefer pages at different URL path depths to assess site architecture
5. Use `WebFetch` to retrieve each selected page's HTML. Fetch pages in parallel where possible.
6. Also fetch these site-wide resources using `WebFetch`:
   - `{root_domain}/robots.txt`
   - `{root_domain}/sitemap.xml`
   - `{root_domain}/sitemap_index.xml` (fallback if sitemap.xml is an index)

### If the user provides a local directory:

1. Use `Glob` to find all HTML files: `{directory}/**/*.html`
2. Use `Read` to load each HTML file (up to 15 files).
3. Treat the file named `index.html` at the root as the homepage.
4. robots.txt and sitemap.xml checks will be limited to checking if those files exist in the directory.

### Data to Extract From Each Page

For every page, extract and store the following data points. Parse the raw HTML carefully.

**Meta Information:**
- URL / file path
- `<title>` tag content and character count
- `<meta name="description">` content and character count
- `<meta name="robots">` content (if present)
- `<link rel="canonical">` href (if present)
- `<meta name="viewport">` (if present)
- Language attribute from `<html lang="...">`

**Heading Structure:**
- H1 tag(s) — content and count (there should be exactly one)
- H2 tags — content and count
- H3 tags — content and count
- Whether the heading hierarchy is logical (no skipping from H1 to H3, etc.)

**Content Metrics:**
- Total word count of visible text (exclude nav, footer, script, style content)
- Approximate reading time (assume 200 words/min)
- Number of paragraphs
- Number of images (`<img>` tags)
- Image alt text presence (how many images have alt vs don't)

**Links:**
- Count of internal links (pointing to same domain)
- Count of external links
- List of all internal link hrefs (for cross-page analysis)
- Any broken-looking links (e.g., href="#", href="javascript:void(0)", empty href)

**Technical Elements:**
- Schema/structured data (`<script type="application/ld+json">` or microdata)
- Open Graph tags (og:title, og:description, og:image, og:url)
- Twitter Card tags
- Favicon reference
- CSS and JS file counts (external resources)
- Whether images use modern formats (WebP, AVIF) vs legacy (PNG, JPG, BMP, GIF)
- Lazy loading usage (`loading="lazy"` on images)
- `<link rel="preload">`, `<link rel="preconnect">` tags
- Breadcrumb markup
- Hreflang tags

---

## Mode 2 Step 2: Site-Wide Resource Analysis

### robots.txt Analysis
- Does it exist and is it valid?
- Which user-agents are specified?
- Are any important paths blocked (e.g., `/`, CSS/JS files needed for rendering)?
- Does it reference a sitemap?
- Are there any `Crawl-delay` directives?

### sitemap.xml Analysis
- Does it exist and is it valid XML?
- How many URLs are listed?
- Are all audited pages present in the sitemap?
- Are there `<lastmod>` dates? Are they recent?
- Are there any URLs in the sitemap that return errors (note as potential issue)?
- Is it an index sitemap pointing to sub-sitemaps?

### Server/Hosting Headers (for live URLs only)
When fetching pages with WebFetch, examine response headers if available:
- **HTTPS**: Is the site served over HTTPS?
- **HSTS**: Is `Strict-Transport-Security` header present?
- **CSP**: Is `Content-Security-Policy` header present?
- **X-Content-Type-Options**: Is `nosniff` set?
- **X-Frame-Options**: Present?
- **Referrer-Policy**: Present?
- **Cache-Control / Expires**: Are caching headers set?
- **Content-Encoding**: Is gzip or brotli compression enabled?
- **Server**: What server software is revealed? (Flag if it reveals version numbers)

---

## Mode 2 Step 3: Per-Page Analysis

For each page, evaluate the following and assign a status of PASS, WARNING, or FAIL.

### On-Page SEO

**Title Tag:**
- PASS: Present, 30-60 characters, appears descriptive and unique
- WARNING: Present but too short (<30 chars), too long (>60 chars), or generic
- FAIL: Missing entirely

**Meta Description:**
- PASS: Present, 120-160 characters, appears descriptive
- WARNING: Present but too short (<120 chars) or too long (>160 chars)
- FAIL: Missing entirely

**H1 Tag:**
- PASS: Exactly one H1 tag present, descriptive
- WARNING: Multiple H1 tags
- FAIL: No H1 tag

**Heading Hierarchy:**
- PASS: Logical hierarchy (H1 > H2 > H3), no skipped levels
- WARNING: Minor issues (e.g., jumps from H2 to H4)
- FAIL: No headings at all beyond H1, or severely broken hierarchy

**Content Length:**
- PASS: 300+ words of body content
- WARNING: 150-299 words (thin content)
- FAIL: <150 words (extremely thin)

**Image Alt Text:**
- PASS: All images have descriptive alt text
- WARNING: Some images missing alt text
- FAIL: Most or all images missing alt text (or no images at all on a content page)

**Canonical Tag:**
- PASS: Present and points to the correct URL
- WARNING: Present but points to a different URL (intentional? or misconfigured?)
- FAIL: Missing on a page that should have one

### Technical SEO

**Viewport Meta:**
- PASS: `<meta name="viewport">` present with proper content
- FAIL: Missing (not mobile-friendly)

**Structured Data:**
- PASS: Valid JSON-LD or microdata present
- WARNING: Schema present but incomplete
- FAIL: No structured data

**Open Graph Tags:**
- PASS: All four core OG tags present (title, description, image, url)
- WARNING: Some OG tags present but incomplete
- FAIL: No OG tags

**Twitter Card:**
- PASS: Twitter card tags present and complete
- WARNING: Partial Twitter card
- FAIL: No Twitter card tags

---

## Mode 2 Step 4: Cross-Page Analysis

This is the most valuable part of this skill — analyzing patterns ACROSS all audited pages.

### Duplicate Content Detection
- Compare title tags across all pages. Flag any exact duplicates.
- Compare meta descriptions across all pages. Flag any exact duplicates.
- Compare H1 tags across all pages. Flag any exact duplicates.
- Note pages with very similar content themes that might be cannibalizing each other.

### Keyword Cannibalization
- Infer the likely target keyword for each page based on its title, H1, and first 150 words.
- Flag any pages that appear to target the same keyword or very similar keywords.
- Recommend which page should be the canonical target and suggest differentiating the others.

### Internal Linking Analysis
- Build a simple link matrix: which pages link to which other pages.
- Calculate how many internal links each page receives (link equity distribution).
- Identify **orphan pages**: pages in the audit set that receive zero internal links from other audited pages.
- Identify **hub pages**: pages that link out to many other internal pages.
- Identify pages with no outgoing internal links (dead ends).
- Suggest specific internal links that should be added (e.g., "Page A discusses Topic X but doesn't link to Page B which covers Topic X in depth").

### Site Architecture Assessment
- Analyze URL structure patterns:
  - Consistent URL format? (lowercase, hyphens, no underscores)
  - Logical directory structure? (/blog/post-name, /services/service-name)
  - Maximum click depth from homepage (how many clicks to reach the deepest page?)
- Check for flat vs. deep architecture
- Note any URL anomalies (mixed conventions, overly long URLs, parameter-heavy URLs)

### Content Theme Clustering
- Group pages by inferred topic/theme
- Identify potential pillar page + cluster content opportunities
- Note any major topic gaps based on the site's apparent focus area

### LSI / Semantic Keyword Analysis (Cross-Page)

This section evaluates the site's semantic keyword coverage — a critical ranking factor that
most audits miss. Using the user's target keywords from Step 0 and the site's content:

1. **Extract site-wide LSI terms** — For each target keyword the user provided in Step 0,
   identify 15-25 semantically related terms that should appear across the site. Use the same
   LSI extraction techniques from Mode 1 Step 2b:
   - Search for "[target keyword] related searches" and "people also ask"
   - Include any LSI terms the user specifically requested in Step 0
   - Group by category: process terms, cost terms, trust terms, problem terms, location terms

2. **Map LSI coverage per page** — For each page, check which LSI terms appear in the content.
   Create a coverage matrix showing:
   - Which LSI terms appear on which pages
   - Which important LSI terms are completely missing from the site
   - Which pages have the best/worst semantic depth

3. **Identify LSI gaps** — Flag the most important missing LSI terms that competitors would
   typically cover. These represent immediate content improvement opportunities.

4. **LSI cannibalization** — Check if the same LSI terms cluster on too few pages while other
   pages are semantically thin. Recommend distributing semantic keywords more evenly.

5. **Include in report** — Add an LSI keyword coverage section in the Content Strategy tab
   showing a visual tag cloud of found vs missing terms, and a per-page LSI coverage score.

---

## Mode 2 Step 5: Scoring

Calculate scores for each category on a 0-100 scale.

### Technical SEO Score (weight: 25%)
- HTTPS: 10 points
- Viewport meta on all pages: 10 points
- robots.txt valid: 10 points
- sitemap.xml valid: 10 points
- Schema markup coverage: 15 points (proportional to % of pages with schema)
- Security headers: 10 points (2 pts each for HSTS, CSP, X-Content-Type, X-Frame, Referrer-Policy)
- Image optimization (modern formats, lazy loading): 10 points
- Canonical tags present: 10 points
- Compression enabled: 5 points
- Preload/preconnect hints: 5 points
- No blocked resources in robots.txt: 5 points

### Content Score (weight: 25%)
- Average word count above 300: 20 points
- No thin content pages (<150 words): 15 points
- All pages have unique titles: 15 points
- All pages have meta descriptions: 15 points
- All pages have H1 tags: 10 points
- Proper heading hierarchy on all pages: 10 points
- All images have alt text: 10 points
- No duplicate content detected: 5 points

### Architecture Score (weight: 20%)
- Consistent URL structure: 20 points
- Reasonable click depth (max 3 clicks from homepage): 20 points
- No orphan pages: 20 points
- No dead-end pages: 15 points
- Logical directory structure: 15 points
- Breadcrumb markup present: 10 points

### Cross-Page Score (weight: 15%)
- No duplicate titles: 20 points
- No duplicate meta descriptions: 20 points
- No keyword cannibalization: 25 points
- Good internal link distribution: 20 points
- Content theme coverage: 15 points

### Social & Schema Score (weight: 15%)
- OG tags on all pages: 30 points
- Twitter cards on all pages: 20 points
- Schema markup on all pages: 30 points
- Consistent branding in OG tags: 10 points
- Favicon present: 10 points

### Overall Score
Weighted average of all category scores. Grade scale:
- 90-100: A+ (Excellent)
- 80-89: A (Great)
- 70-79: B (Good, needs work)
- 60-69: C (Fair, significant issues)
- 50-59: D (Poor)
- <50: F (Critical issues)

---

## Mode 2 Step 6: Generate the HTML Report

Generate a single, self-contained HTML file. The report must be visually stunning with a dark premium design. Use the complete HTML template below as the structure — populate it with actual audit data.

### Complete Mode 2 HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SEO Strategy Report — {{SITE_DOMAIN}}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --bg: #0a0a0f;
    --bg-card: rgba(255,255,255,0.03);
    --bg-card-hover: rgba(255,255,255,0.06);
    --border: rgba(255,255,255,0.08);
    --border-hover: rgba(255,255,255,0.15);
    --text: #e8e8ed;
    --text-secondary: #8b8b9e;
    --text-muted: #5a5a6e;
    --accent: #6366f1;
    --accent-glow: rgba(99,102,241,0.3);
    --green: #22c55e;
    --green-bg: rgba(34,197,94,0.12);
    --green-border: rgba(34,197,94,0.25);
    --yellow: #eab308;
    --yellow-bg: rgba(234,179,8,0.12);
    --yellow-border: rgba(234,179,8,0.25);
    --red: #ef4444;
    --red-bg: rgba(239,68,68,0.12);
    --red-border: rgba(239,68,68,0.25);
    --blue: #3b82f6;
    --blue-bg: rgba(59,130,246,0.12);
    --orange: #f97316;
    --orange-bg: rgba(249,115,22,0.12);
    --orange-border: rgba(249,115,22,0.25);
    --purple: #a78bfa;
    --purple-bg: rgba(167,139,250,0.08);
    --purple-border: rgba(167,139,250,0.15);
    --radius: 16px;
    --radius-sm: 10px;
    --radius-xs: 6px;
  }

  ::selection { background: var(--accent); color: white; }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* Ambient background */
  body::before {
    content: '';
    position: fixed;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.06) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.04) 0%, transparent 50%),
                radial-gradient(ellipse at 50% 80%, rgba(59,130,246,0.03) 0%, transparent 50%);
    z-index: -1;
    animation: ambientDrift 20s ease-in-out infinite;
  }
  @keyframes ambientDrift {
    0%, 100% { transform: translate(0, 0); }
    33% { transform: translate(-2%, 1%); }
    66% { transform: translate(1%, -1%); }
  }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }
  ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }

  /* Layout */
  .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

  /* Header / Hero */
  .header {
    padding: 40px 0 0;
    text-align: center;
  }
  .header-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 100px;
    font-size: 12px;
    font-weight: 500;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 20px;
  }
  .header-badge .dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--green);
    box-shadow: 0 0 8px var(--green);
    animation: pulse 2s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }
  .header h1 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 42px;
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 12px;
    background: linear-gradient(135deg, #fff 0%, #a5a5c0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .header .subtitle {
    font-size: 16px;
    color: var(--text-secondary);
    margin-bottom: 32px;
  }

  /* Score Circle with SVG ring */
  .score-section {
    display: flex;
    align-items: center;
    gap: 48px;
    margin-bottom: 40px;
    padding: 40px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    backdrop-filter: blur(20px);
  }
  .score-circle-wrap { position: relative; flex-shrink: 0; }
  .score-circle {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
  }
  .score-circle svg {
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }
  .score-circle svg circle {
    fill: none;
    stroke-width: 6;
    stroke-linecap: round;
  }
  .score-circle svg .bg-ring { stroke: rgba(255,255,255,0.06); }
  .score-circle svg .progress-ring {
    stroke: var(--accent);
    stroke-dasharray: 502;
    stroke-dashoffset: {{SCORE_DASHOFFSET}};
    filter: drop-shadow(0 0 6px var(--accent-glow));
    transition: stroke-dashoffset 1.5s ease-out;
  }
  .score-number {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 56px;
    font-weight: 700;
    line-height: 1;
    color: white;
    position: relative;
    z-index: 1;
  }
  .score-label {
    font-size: 13px;
    color: var(--text-secondary);
    font-weight: 500;
    position: relative;
    z-index: 1;
    margin-top: 4px;
  }
  .score-grade {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    z-index: 1;
    margin-top: 2px;
  }
  .score-details { flex: 1; }
  .score-details h2 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 8px;
  }
  .score-details p {
    color: var(--text-secondary);
    font-size: 15px;
    line-height: 1.7;
    margin-bottom: 20px;
  }

  /* Sub-scores */
  .sub-scores {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 12px;
  }
  .sub-score {
    padding: 14px 16px;
    background: rgba(255,255,255,0.02);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
  }
  .sub-score-label {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--text-muted);
    margin-bottom: 6px;
  }
  .sub-score-value {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 28px;
    font-weight: 700;
  }
  .sub-score-bar {
    height: 3px;
    border-radius: 2px;
    background: rgba(255,255,255,0.06);
    margin-top: 8px;
    overflow: hidden;
  }
  .sub-score-bar-fill {
    height: 100%;
    border-radius: 2px;
    transition: width 1s ease-out;
  }

  /* Tabs */
  .tabs {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(10,10,15,0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
    padding: 0;
  }
  .tabs-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    gap: 0;
    overflow-x: auto;
    scrollbar-width: none;
  }
  .tabs-inner::-webkit-scrollbar { display: none; }
  .tab-btn {
    padding: 16px 24px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-muted);
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s;
    position: relative;
  }
  .tab-btn:hover { color: var(--text-secondary); }
  .tab-btn.active {
    color: var(--text);
    border-bottom-color: var(--accent);
  }
  .tab-btn .tab-count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 100px;
    font-size: 11px;
    font-weight: 600;
    margin-left: 8px;
    color: var(--text-secondary);
  }
  .tab-btn.active .tab-count {
    background: var(--accent);
    border-color: var(--accent);
    color: white;
  }

  /* Tab Content */
  .tab-content { display: none; padding: 40px 0 80px; }
  .tab-content.active { display: block; }

  /* Section titles */
  .section-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  .section-subtitle {
    color: var(--text-secondary);
    font-size: 15px;
    margin-bottom: 24px;
  }

  /* Stats grid */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 16px;
    margin-bottom: 40px;
  }
  .stat-card {
    padding: 24px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    text-align: center;
    transition: border-color 0.2s;
  }
  .stat-card:hover { border-color: var(--border-hover); }
  .stat-value {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 36px;
    font-weight: 700;
    color: white;
    margin-bottom: 4px;
  }
  .stat-label {
    font-size: 13px;
    color: var(--text-secondary);
  }

  /* Cards */
  .card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 28px;
    margin-bottom: 16px;
    transition: border-color 0.2s;
  }
  .card:hover { border-color: var(--border-hover); }
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    cursor: pointer;
  }
  .card-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  /* Badges */
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 4px 12px;
    border-radius: 100px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.3px;
  }
  .badge-critical { background: var(--red-bg); color: var(--red); border: 1px solid var(--red-border); }
  .badge-high { background: var(--orange-bg); color: var(--orange); border: 1px solid var(--orange-border); }
  .badge-medium { background: var(--yellow-bg); color: var(--yellow); border: 1px solid var(--yellow-border); }
  .badge-low { background: var(--green-bg); color: var(--green); border: 1px solid var(--green-border); }
  .badge-pass { background: var(--green-bg); color: var(--green); border: 1px solid var(--green-border); }
  .badge-warning { background: var(--yellow-bg); color: var(--yellow); border: 1px solid var(--yellow-border); }
  .badge-fail { background: var(--red-bg); color: var(--red); border: 1px solid var(--red-border); }

  /* Finding items */
  .finding {
    padding: 16px 0;
    border-bottom: 1px solid rgba(255,255,255,0.04);
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 16px;
    align-items: start;
  }
  .finding:last-child { border-bottom: none; }
  .finding-status {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-top: 8px;
  }
  .finding-status.pass { background: var(--green); box-shadow: 0 0 6px rgba(34,197,94,0.4); }
  .finding-status.warning { background: var(--yellow); box-shadow: 0 0 6px rgba(234,179,8,0.4); }
  .finding-status.fail { background: var(--red); box-shadow: 0 0 6px rgba(239,68,68,0.4); }
  .finding-content h4 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 4px;
  }
  .finding-content p {
    font-size: 13px;
    color: var(--text-secondary);
    line-height: 1.6;
  }
  .finding-rec {
    margin-top: 8px;
    padding: 10px 14px;
    background: rgba(99,102,241,0.06);
    border-left: 3px solid var(--accent);
    border-radius: 0 var(--radius-xs) var(--radius-xs) 0;
    font-size: 13px;
    color: var(--text);
    line-height: 1.5;
  }

  /* Collapsible */
  .collapsible {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    margin-bottom: 12px;
    overflow: hidden;
    transition: border-color 0.2s;
  }
  .collapsible:hover { border-color: var(--border-hover); }
  .collapsible-header {
    padding: 20px 24px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
  }
  .collapsible-header:hover { background: rgba(255,255,255,0.02); }
  .collapsible-title {
    font-weight: 600;
    color: var(--text);
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .collapsible-body {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.35s ease;
  }
  .collapsible.open .collapsible-body {
    max-height: 5000px;
  }
  .collapsible-body-inner {
    padding: 0 24px 24px;
  }
  .collapse-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: rgba(255,255,255,0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: var(--text-muted);
    transition: transform 0.3s, background 0.2s;
    flex-shrink: 0;
  }
  .collapsible.open .collapse-icon { transform: rotate(180deg); }

  /* Page table */
  .page-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 16px;
  }
  .page-table th {
    text-align: left;
    padding: 12px 16px;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--text-muted);
    border-bottom: 1px solid var(--border);
    font-weight: 600;
  }
  .page-table td {
    padding: 12px 16px;
    font-size: 14px;
    border-bottom: 1px solid rgba(255,255,255,0.03);
    vertical-align: top;
  }
  .page-table tr:hover td { background: rgba(255,255,255,0.02); }
  .page-url {
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    color: var(--accent);
    word-break: break-all;
  }

  /* Checklist */
  .checklist-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 12px 0;
    border-bottom: 1px solid rgba(255,255,255,0.04);
  }
  .checklist-item:last-child { border-bottom: none; }
  .check-icon {
    width: 22px;
    height: 22px;
    border-radius: 6px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    margin-top: 1px;
  }
  .check-icon.pass {
    background: var(--green-bg);
    color: var(--green);
    border: 1px solid var(--green-border);
  }
  .check-icon.fail {
    background: var(--red-bg);
    color: var(--red);
    border: 1px solid var(--red-border);
  }
  .check-icon.warn {
    background: var(--yellow-bg);
    color: var(--yellow);
    border: 1px solid var(--yellow-border);
  }
  .check-text {
    font-size: 14px;
    color: var(--text);
  }
  .check-text.muted {
    color: var(--text-secondary);
  }

  /* Action items */
  .action-item {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    padding: 24px;
    margin-bottom: 12px;
    display: flex;
    gap: 20px;
    align-items: flex-start;
    transition: border-color 0.2s;
  }
  .action-item:hover { border-color: var(--border-hover); }
  .action-number {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: var(--accent);
    flex-shrink: 0;
    width: 36px;
    text-align: center;
    opacity: 0.5;
  }
  .action-content { flex: 1; }
  .action-title {
    font-weight: 600;
    color: var(--text);
    font-size: 15px;
    margin-bottom: 6px;
  }
  .action-desc {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.6;
  }
  .action-impact {
    margin-top: 8px;
    font-size: 13px;
    color: var(--green);
    font-weight: 500;
  }

  /* Content clusters */
  .cluster {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 24px;
    margin-bottom: 16px;
  }
  .cluster-title {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 600;
    color: var(--purple);
    font-size: 16px;
    margin-bottom: 12px;
  }
  .cluster-pages {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .cluster-page {
    padding: 6px 14px;
    border-radius: 100px;
    background: var(--purple-bg);
    border: 1px solid var(--purple-border);
    font-size: 13px;
    font-family: 'JetBrains Mono', monospace;
    color: var(--text-secondary);
  }
  .cluster-page.pillar {
    background: rgba(167,139,250,0.15);
    border-color: rgba(167,139,250,0.3);
    color: var(--purple);
    font-weight: 600;
  }

  /* Link matrix */
  .matrix-grid {
    display: grid;
    gap: 2px;
    font-size: 12px;
    overflow-x: auto;
    font-family: 'JetBrains Mono', monospace;
  }
  .matrix-cell {
    padding: 8px;
    text-align: center;
    border-radius: 4px;
  }
  .matrix-cell.linked {
    background: rgba(99,102,241,0.15);
    color: var(--accent);
  }
  .matrix-cell.self {
    background: rgba(255,255,255,0.03);
    color: var(--text-muted);
  }
  .matrix-cell.empty {
    background: rgba(239,68,68,0.05);
    color: var(--text-muted);
  }

  /* Responsive */
  @media (max-width: 768px) {
    .header h1 { font-size: 28px; }
    .score-section { flex-direction: column; text-align: center; padding: 24px; gap: 24px; }
    .stats-grid { grid-template-columns: repeat(2, 1fr); }
    .sub-scores { grid-template-columns: repeat(2, 1fr); }
    .action-item { flex-direction: column; gap: 12px; }
  }

  /* Print */
  @media print {
    .tabs { display: none; }
    .tab-content { display: block !important; page-break-before: always; }
    body::before { display: none; }
  }
</style>
</head>
<body>

<div class="header">
  <div class="container">
    <div class="header-badge"><span class="dot"></span> Site-Wide SEO Audit</div>
    <h1>{{SITE_DOMAIN}}</h1>
    <p class="subtitle">Comprehensive analysis of {{PAGE_COUNT}} pages — Generated {{REPORT_DATE}}</p>
  </div>
</div>

<!-- Score overview (below header, above tabs) -->
<div class="container" style="padding-top: 0; padding-bottom: 32px;">
  <div class="score-section">
    <div class="score-circle-wrap">
      <div class="score-circle">
        <svg viewBox="0 0 160 160">
          <circle class="bg-ring" cx="80" cy="80" r="74"/>
          <circle class="progress-ring" cx="80" cy="80" r="74"/>
        </svg>
        <span class="score-number">{{OVERALL_SCORE}}</span>
        <span class="score-grade">{{GRADE}}</span>
        <span class="score-label">Overall Health</span>
      </div>
    </div>
    <div class="score-details">
      <h2>{{SCORE_HEADLINE}}</h2>
      <p>{{SCORE_SUMMARY}}</p>
      <div class="sub-scores">
        <div class="sub-score">
          <div class="sub-score-label">Technical</div>
          <div class="sub-score-value" style="color: {{TECH_SCORE_COLOR}}">{{TECH_SCORE}}</div>
          <div class="sub-score-bar"><div class="sub-score-bar-fill" style="width:{{TECH_SCORE}}%; background: {{TECH_SCORE_COLOR}}"></div></div>
        </div>
        <div class="sub-score">
          <div class="sub-score-label">Content</div>
          <div class="sub-score-value" style="color: {{CONTENT_SCORE_COLOR}}">{{CONTENT_SCORE}}</div>
          <div class="sub-score-bar"><div class="sub-score-bar-fill" style="width:{{CONTENT_SCORE}}%; background: {{CONTENT_SCORE_COLOR}}"></div></div>
        </div>
        <div class="sub-score">
          <div class="sub-score-label">Architecture</div>
          <div class="sub-score-value" style="color: {{ARCH_SCORE_COLOR}}">{{ARCH_SCORE}}</div>
          <div class="sub-score-bar"><div class="sub-score-bar-fill" style="width:{{ARCH_SCORE}}%; background: {{ARCH_SCORE_COLOR}}"></div></div>
        </div>
        <div class="sub-score">
          <div class="sub-score-label">Cross-Page</div>
          <div class="sub-score-value" style="color: {{CROSS_SCORE_COLOR}}">{{CROSS_SCORE}}</div>
          <div class="sub-score-bar"><div class="sub-score-bar-fill" style="width:{{CROSS_SCORE}}%; background: {{CROSS_SCORE_COLOR}}"></div></div>
        </div>
        <div class="sub-score">
          <div class="sub-score-label">Social & Schema</div>
          <div class="sub-score-value" style="color: {{SOCIAL_SCORE_COLOR}}">{{SOCIAL_SCORE}}</div>
          <div class="sub-score-bar"><div class="sub-score-bar-fill" style="width:{{SOCIAL_SCORE}}%; background: {{SOCIAL_SCORE_COLOR}}"></div></div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- TAB NAVIGATION -->
<div class="tabs">
  <div class="tabs-inner">
    <button class="tab-btn active" onclick="switchTab('executive')">Executive Summary</button>
    <button class="tab-btn" onclick="switchTab('pages')">Page Breakdown <span class="tab-count">{{PAGE_COUNT}}</span></button>
    <button class="tab-btn" onclick="switchTab('sitewide')">Site-Wide Issues <span class="tab-count">{{SITEWIDE_ISSUE_COUNT}}</span></button>
    <button class="tab-btn" onclick="switchTab('technical')">Technical</button>
    <button class="tab-btn" onclick="switchTab('content')">Content Strategy</button>
    <button class="tab-btn" onclick="switchTab('linking')">Internal Linking</button>
    <button class="tab-btn" onclick="switchTab('actions')">Action Plan</button>
  </div>
</div>

<!-- ==================== TAB 1: EXECUTIVE SUMMARY ==================== -->
<div id="tab-executive" class="tab-content active">
<div class="container">

  <div class="section-title">Executive Summary</div>
  <div class="section-subtitle">High-level overview of {{SITE_DOMAIN}}'s SEO health and top priorities</div>

  <!-- Quick Stats -->
  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-value">{{PAGE_COUNT}}</div>
      <div class="stat-label">Pages Audited</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">{{CRITICAL_COUNT}}</div>
      <div class="stat-label">Critical Issues</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">{{HIGH_COUNT}}</div>
      <div class="stat-label">High Priority</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">{{WARNINGS_COUNT}}</div>
      <div class="stat-label">Warnings</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">{{AVG_WORD_COUNT}}</div>
      <div class="stat-label">Avg Word Count</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">{{SCHEMA_COVERAGE}}%</div>
      <div class="stat-label">Schema Coverage</div>
    </div>
  </div>

  <!-- Key Findings -->
  <div class="card" style="margin-bottom: 24px;">
    <div class="card-title" style="margin-bottom: 16px;">Key Findings</div>
    <div style="color: var(--text-secondary); font-size: 15px; line-height: 1.8;">
      <!-- POPULATE: 3-5 sentences summarizing the most important findings. Be specific.
           Reference actual numbers: "4 of 12 pages have <200 words", "meta descriptions missing on 60% of pages" -->
      {{KEY_FINDINGS_PARAGRAPH}}
    </div>
  </div>

  <!-- Top 3 Priorities -->
  <div class="section-title" style="font-size: 18px; margin-top: 32px;">Top 3 Priorities</div>
  <div class="section-subtitle">The highest-impact actions to take right now</div>
  <!-- POPULATE: 3 action-item divs for the most critical fixes.
       <div class="action-item">
         <div class="action-number">1</div>
         <div class="action-content">
           <div class="action-title">[Action title]</div>
           <div class="action-desc">[What to do]</div>
           <div class="action-impact">Expected impact: [description]</div>
         </div>
         <span class="badge badge-critical">Critical</span>
       </div>
  -->
  {{TOP_3_PRIORITIES}}

</div>
</div>

<!-- ==================== TAB 2: PAGE-BY-PAGE BREAKDOWN ==================== -->
<div id="tab-pages" class="tab-content">
<div class="container">

  <div class="section-title">Page-by-Page Breakdown</div>
  <div class="section-subtitle">Individual audit results for each crawled page</div>

  <!-- Summary Table -->
  <div class="card" style="overflow-x: auto; padding: 0;">
    <table class="page-table">
      <thead>
        <tr>
          <th>Page</th>
          <th>Title</th>
          <th>Words</th>
          <th>H1</th>
          <th>Meta Desc</th>
          <th>Schema</th>
          <th>OG Tags</th>
          <th>Issues</th>
        </tr>
      </thead>
      <tbody>
        <!-- POPULATE: One row per audited page.
             <tr>
               <td><span class="page-url">/about</span></td>
               <td>About Us - Company</td>
               <td>450</td>
               <td><span class="badge badge-pass">Pass</span></td>
               <td><span class="badge badge-fail">Fail</span></td>
               <td><span class="badge badge-warning">Warn</span></td>
               <td><span class="badge badge-pass">Pass</span></td>
               <td>3</td>
             </tr>
        -->
        {{PAGE_TABLE_ROWS}}
      </tbody>
    </table>
  </div>

  <!-- Detailed per-page collapsibles -->
  <!-- POPULATE: One collapsible per page with detailed findings.
       <div class="collapsible">
         <div class="collapsible-header" onclick="this.parentElement.classList.toggle('open')">
           <span class="collapsible-title">
             <span class="page-url">/about</span>
             <span class="badge badge-high">3 issues</span>
           </span>
           <span class="collapse-icon">&#9660;</span>
         </div>
         <div class="collapsible-body">
           <div class="collapsible-body-inner">
             <div class="finding">
               <div class="finding-status fail"></div>
               <div class="finding-content">
                 <h4>Missing meta description</h4>
                 <p>No meta description tag found. Search engines will auto-generate one from page content.</p>
                 <div class="finding-rec">Add a meta description of 150-160 characters that includes the page's target keyword.</div>
               </div>
               <span class="badge badge-high">High</span>
             </div>
             ... more findings ...
           </div>
         </div>
       </div>
  -->
  {{PAGE_DETAIL_COLLAPSIBLES}}

</div>
</div>

<!-- ==================== TAB 3: SITE-WIDE ISSUES ==================== -->
<div id="tab-sitewide" class="tab-content">
<div class="container">

  <div class="section-title">Site-Wide Issues</div>
  <div class="section-subtitle">Cross-cutting concerns that affect multiple pages</div>

  <!-- Duplicate Content & Cannibalization -->
  <div class="card">
    <div class="card-title" style="margin-bottom: 16px;">Duplicate Content &amp; Cannibalization</div>
    <!-- POPULATE: findings about duplicate titles, descriptions, keyword cannibalization.
         Use finding items:
         <div class="finding">
           <div class="finding-status [pass|warning|fail]"></div>
           <div class="finding-content">
             <h4>[title]</h4>
             <p>[description]</p>
             <div class="finding-rec">[recommendation]</div>
           </div>
           <span class="badge badge-[level]">[Level]</span>
         </div>
    -->
    {{DUPLICATE_CONTENT_FINDINGS}}
  </div>

  <!-- Consistency Issues -->
  <div class="card">
    <div class="card-title" style="margin-bottom: 16px;">Consistency Issues</div>
    {{CONSISTENCY_FINDINGS}}
  </div>

  <!-- robots.txt & Sitemap -->
  <div class="card">
    <div class="card-title" style="margin-bottom: 16px;">Robots.txt &amp; Sitemap</div>
    {{ROBOTS_SITEMAP_FINDINGS}}
  </div>

  <!-- Security Headers -->
  <div class="card">
    <div class="card-title" style="margin-bottom: 16px;">Security &amp; Server Headers</div>
    {{SECURITY_HEADERS_FINDINGS}}
  </div>

</div>
</div>

<!-- ==================== TAB 4: TECHNICAL ==================== -->
<div id="tab-technical" class="tab-content">
<div class="container">

  <div class="section-title">Technical SEO</div>
  <div class="section-subtitle">Infrastructure, performance indicators, and technical implementation</div>

  <!-- Technical Checklist -->
  <div class="card">
    <div class="card-title" style="margin-bottom: 20px;">Implementation Checklist</div>
    <!-- POPULATE: checklist items for all technical checks.
         <div class="checklist-item">
           <div class="check-icon pass">&#10003;</div>
           <div class="check-text">HTTPS enabled across all pages</div>
         </div>
         <div class="checklist-item">
           <div class="check-icon fail">&#10007;</div>
           <div class="check-text muted">HSTS header not configured</div>
         </div>
    -->
    {{TECHNICAL_CHECKLIST}}
  </div>

  <!-- Schema Coverage -->
  <div class="section-title" style="font-size: 18px; margin-top: 32px;">Schema Markup Strategy</div>
  <div class="section-subtitle">Current structured data and recommended additions</div>
  <div class="card" style="overflow-x: auto; padding: 0;">
    <!-- POPULATE: Table showing current schema per page and recommendations -->
    {{SCHEMA_STRATEGY}}
  </div>

  <!-- Performance Indicators -->
  <div class="section-title" style="font-size: 18px; margin-top: 32px;">Performance Indicators</div>
  <div class="section-subtitle">Resource counts, image optimization, and loading patterns</div>
  <!-- POPULATE: finding items about resource counts, image optimization, lazy loading -->
  {{PERFORMANCE_FINDINGS}}

</div>
</div>

<!-- ==================== TAB 5: CONTENT STRATEGY ==================== -->
<div id="tab-content" class="tab-content">
<div class="container">

  <div class="section-title">Content Strategy</div>
  <div class="section-subtitle">Content gaps, keyword opportunities, and recommended content clusters</div>

  <!-- Content Health Stats -->
  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-value">{{THIN_PAGES}}</div>
      <div class="stat-label">Thin Content Pages</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">{{STRONG_PAGES}}</div>
      <div class="stat-label">Strong Content Pages</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">{{TOTAL_WORDS}}</div>
      <div class="stat-label">Total Word Count</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">{{MISSING_META}}</div>
      <div class="stat-label">Missing Meta Desc</div>
    </div>
  </div>

  <!-- Keyword Map -->
  <div class="section-title" style="font-size: 18px;">Inferred Keyword Map</div>
  <div class="section-subtitle">Target keywords per page with cannibalization risk assessment</div>
  <div class="card" style="overflow-x: auto; padding: 0;">
    <table class="page-table">
      <thead>
        <tr>
          <th>Page</th>
          <th>Inferred Target Keyword</th>
          <th>Title Includes KW</th>
          <th>H1 Includes KW</th>
          <th>In First 100 Words</th>
          <th>Cannibalization Risk</th>
        </tr>
      </thead>
      <tbody>
        <!-- POPULATE: One row per page.
             <tr>
               <td><span class="page-url">/blog/topic</span></td>
               <td>topic keyword phrase</td>
               <td><span class="badge badge-pass">Yes</span></td>
               <td><span class="badge badge-pass">Yes</span></td>
               <td><span class="badge badge-fail">No</span></td>
               <td><span class="badge badge-warning">Medium</span></td>
             </tr>
        -->
        {{KEYWORD_MAP_ROWS}}
      </tbody>
    </table>
  </div>

  <!-- Content Clusters -->
  <div class="section-title" style="font-size: 18px; margin-top: 32px;">Recommended Content Clusters</div>
  <div class="section-subtitle">Group related pages into pillar/cluster structure for topic authority</div>
  <!-- POPULATE: cluster cards.
       <div class="cluster">
         <div class="cluster-title">[Cluster Theme]</div>
         <div class="cluster-pages">
           <span class="cluster-page pillar">/pillar-page (Pillar)</span>
           <span class="cluster-page">/supporting-page-1</span>
           <span class="cluster-page">/supporting-page-2</span>
         </div>
       </div>
  -->
  {{CONTENT_CLUSTERS}}

  <!-- Content Gap Recommendations -->
  <div class="section-title" style="font-size: 18px; margin-top: 32px;">Content Gap Recommendations</div>
  <div class="section-subtitle">Suggested new pages and topics based on what's missing</div>
  <!-- POPULATE: action items or finding items for content gap recommendations -->
  {{CONTENT_GAPS}}

</div>
</div>

<!-- ==================== TAB 6: INTERNAL LINKING ==================== -->
<div id="tab-linking" class="tab-content">
<div class="container">

  <div class="section-title">Internal Linking Analysis</div>
  <div class="section-subtitle">Link equity distribution, orphan pages, and linking opportunities</div>

  <!-- Linking Stats -->
  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-value">{{TOTAL_INTERNAL_LINKS}}</div>
      <div class="stat-label">Total Internal Links</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">{{ORPHAN_PAGES}}</div>
      <div class="stat-label">Orphan Pages</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">{{DEAD_END_PAGES}}</div>
      <div class="stat-label">Dead-End Pages</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">{{AVG_LINKS_PER_PAGE}}</div>
      <div class="stat-label">Avg Links/Page</div>
    </div>
  </div>

  <!-- Link Equity Distribution -->
  <div class="section-title" style="font-size: 18px;">Link Equity Distribution</div>
  <div class="section-subtitle">How internal link juice is distributed across pages</div>
  <div class="card" style="overflow-x: auto; padding: 0;">
    <table class="page-table">
      <thead>
        <tr>
          <th>Page</th>
          <th>Incoming Internal Links</th>
          <th>Outgoing Internal Links</th>
          <th>External Links</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <!-- POPULATE: one row per page showing link counts.
             <tr>
               <td><span class="page-url">/page</span></td>
               <td>5</td>
               <td>3</td>
               <td>2</td>
               <td><span class="badge badge-pass">Healthy</span></td>
             </tr>
        -->
        {{LINK_EQUITY_ROWS}}
      </tbody>
    </table>
  </div>

  <!-- Orphan Pages -->
  <div class="section-title" style="font-size: 18px; margin-top: 32px;">Orphan Pages</div>
  <div class="section-subtitle">Pages receiving zero internal links from other audited pages</div>
  <!-- POPULATE: List pages that receive 0 internal links, with recommendations -->
  {{ORPHAN_PAGES_DETAIL}}

  <!-- Suggested Internal Links -->
  <div class="section-title" style="font-size: 18px; margin-top: 32px;">Suggested Internal Links</div>
  <div class="section-subtitle">Specific linking opportunities to improve equity distribution</div>
  <!-- POPULATE: action items for specific link recommendations.
       <div class="action-item">
         <div class="action-number">1</div>
         <div class="action-content">
           <div class="action-title">Link from /blog/topic-a to /services/topic-a-service</div>
           <div class="action-desc">The blog post discusses [topic] but doesn't link to the service page covering it in depth.</div>
         </div>
         <span class="badge badge-medium">Medium</span>
       </div>
  -->
  {{SUGGESTED_LINKS}}

</div>
</div>

<!-- ==================== TAB 7: ACTION PLAN ==================== -->
<div id="tab-actions" class="tab-content">
<div class="container">

  <div class="section-title">Prioritized Action Plan</div>
  <div class="section-subtitle">Every recommendation ranked by impact, grouped by effort level</div>

  <!-- Quick Wins -->
  <div class="section-title" style="font-size: 18px; color: var(--green);">Quick Wins <span style="font-size: 14px; color: var(--text-muted); font-weight: 400;">&mdash; less than 1 hour each</span></div>
  <div style="margin-bottom: 24px;">
    <!-- POPULATE: easy, high-impact fixes as action-item divs -->
    {{QUICK_WINS}}
  </div>

  <!-- High Impact -->
  <div class="section-title" style="font-size: 18px; color: var(--orange);">High Impact <span style="font-size: 14px; color: var(--text-muted); font-weight: 400;">&mdash; 1-4 hours each</span></div>
  <div style="margin-bottom: 24px;">
    <!-- POPULATE: more involved but very impactful changes as action-item divs -->
    {{HIGH_IMPACT_ACTIONS}}
  </div>

  <!-- Strategic Initiatives -->
  <div class="section-title" style="font-size: 18px; color: var(--purple);">Strategic Initiatives <span style="font-size: 14px; color: var(--text-muted); font-weight: 400;">&mdash; ongoing</span></div>
  <div style="margin-bottom: 24px;">
    <!-- POPULATE: long-term strategy items as action-item divs -->
    {{STRATEGIC_ACTIONS}}
  </div>

  <!-- Full Checklist -->
  <div class="section-title" style="font-size: 18px; margin-top: 32px;">Full Implementation Checklist</div>
  <div class="section-subtitle">Every actionable recommendation in one checklist</div>
  <div class="card">
    <!-- POPULATE: Every recommendation as a checklist-item.
         <div class="checklist-item">
           <div class="check-icon fail">&#10007;</div>
           <div class="check-text">[Action to take]</div>
         </div>
    -->
    {{FULL_CHECKLIST}}
  </div>

</div>
</div>

<script>
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tabId).classList.add('active');
  event.target.closest('.tab-btn').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Collapsible panels
document.querySelectorAll('.collapsible-header').forEach(header => {
  header.addEventListener('click', () => {
    header.closest('.collapsible').classList.toggle('open');
  });
});
</script>

</body>
</html>
```

### Placeholder Reference (Mode 2)

When generating the report, replace these placeholders with actual data:

| Placeholder | Description |
|---|---|
| `{{SITE_DOMAIN}}` | Root domain being audited (e.g., "example.com") |
| `{{PAGE_COUNT}}` | Number of pages audited |
| `{{REPORT_DATE}}` | Current date in "March 6, 2026" format |
| `{{OVERALL_SCORE}}` | Computed overall score 0-100 |
| `{{SCORE_DASHOFFSET}}` | SVG ring offset: `502 - (502 * score / 100)` rounded to integer |
| `{{GRADE}}` | Letter grade (A+, A, B, C, D, F) |
| `{{SCORE_HEADLINE}}` | One-line assessment summary |
| `{{SCORE_SUMMARY}}` | 2-3 sentence explanation |
| `{{TECH_SCORE}}`, `{{CONTENT_SCORE}}`, `{{ARCH_SCORE}}`, `{{CROSS_SCORE}}`, `{{SOCIAL_SCORE}}` | Category scores 0-100 |
| `{{*_SCORE_COLOR}}` | CSS color: `var(--green)` for 80+, `var(--yellow)` for 60-79, `var(--orange)` for 40-59, `var(--red)` for <40 |
| `{{CRITICAL_COUNT}}`, `{{HIGH_COUNT}}`, `{{WARNINGS_COUNT}}` | Issue counts by severity |
| `{{AVG_WORD_COUNT}}` | Average word count across pages |
| `{{SCHEMA_COVERAGE}}` | Percentage of pages with schema markup |
| `{{SITEWIDE_ISSUE_COUNT}}` | Total site-wide issues |
| `{{KEY_FINDINGS_PARAGRAPH}}` | 3-5 sentence summary |
| `{{TOP_3_PRIORITIES}}` | HTML for 3 action-item divs |
| `{{PAGE_TABLE_ROWS}}` | HTML table rows for page summary |
| `{{PAGE_DETAIL_COLLAPSIBLES}}` | HTML for per-page collapsible sections |
| `{{DUPLICATE_CONTENT_FINDINGS}}`, `{{CONSISTENCY_FINDINGS}}`, `{{ROBOTS_SITEMAP_FINDINGS}}`, `{{SECURITY_HEADERS_FINDINGS}}` | HTML finding items |
| `{{TECHNICAL_CHECKLIST}}` | HTML checklist items |
| `{{SCHEMA_STRATEGY}}` | HTML table or findings for schema |
| `{{PERFORMANCE_FINDINGS}}` | HTML findings for performance |
| `{{THIN_PAGES}}`, `{{STRONG_PAGES}}`, `{{TOTAL_WORDS}}`, `{{MISSING_META}}` | Content health stats |
| `{{KEYWORD_MAP_ROWS}}` | HTML table rows for keyword map |
| `{{CONTENT_CLUSTERS}}` | HTML cluster cards |
| `{{CONTENT_GAPS}}` | HTML for content gap recommendations |
| `{{TOTAL_INTERNAL_LINKS}}`, `{{ORPHAN_PAGES}}`, `{{DEAD_END_PAGES}}`, `{{AVG_LINKS_PER_PAGE}}` | Linking stats |
| `{{LINK_EQUITY_ROWS}}` | HTML table rows for link equity |
| `{{ORPHAN_PAGES_DETAIL}}` | HTML for orphan page details |
| `{{SUGGESTED_LINKS}}` | HTML for suggested internal links |
| `{{QUICK_WINS}}`, `{{HIGH_IMPACT_ACTIONS}}`, `{{STRATEGIC_ACTIONS}}` | HTML action-item divs |
| `{{FULL_CHECKLIST}}` | HTML checklist items |

### Generating Finding Items (Mode 2)

For every issue found, use this pattern:

```html
<div class="finding">
  <div class="finding-status [pass|warning|fail]"></div>
  <div class="finding-content">
    <h4>[Concise title]</h4>
    <p>[Description of what was found and why it matters]</p>
    <div class="finding-rec">[Specific, actionable recommendation]</div>
  </div>
  <span class="badge badge-[critical|high|medium|low]">[Level]</span>
</div>
```

### Generating Action Items (Mode 2)

```html
<div class="action-item">
  <div class="action-number">[N]</div>
  <div class="action-content">
    <div class="action-title">[Action title]</div>
    <div class="action-desc">[What to do and how]</div>
    <div class="action-impact">Expected impact: [description]</div>
  </div>
  <span class="badge badge-[critical|high|medium|low]">[Level]</span>
</div>
```

### Generating Collapsible Page Details (Mode 2)

```html
<div class="collapsible">
  <div class="collapsible-header" onclick="this.parentElement.classList.toggle('open')">
    <span class="collapsible-title">
      <span class="page-url">[/page-url]</span>
      <span class="badge badge-[worst_severity]">[N] issues</span>
    </span>
    <span class="collapse-icon">&#9660;</span>
  </div>
  <div class="collapsible-body">
    <div class="collapsible-body-inner">
      [Finding items for this page]
    </div>
  </div>
</div>
```

---

## Mode 2 Step 7: Save and Deliver

1. Save the HTML report to the user's preferred location:
   - If the user specified a location, save there.
   - Otherwise, save to the same directory as the input, or to `~/Desktop/` as a fallback.
   - Filename: `seo-strategy-[domain].html` (replace dots in domain with hyphens, e.g., `seo-strategy-example-com.html`)
2. Open the file in the user's browser:
   ```
   open [path-to-file]
   ```
3. Tell the user:
   - Where the file was saved (absolute path)
   - The overall score and grade
   - The top 3 most critical issues found
   - A brief summary of the biggest opportunities

---

## Mode 2 Severity Classification Guide

Use these severity levels consistently:

**Critical** — Issues that severely harm SEO or prevent indexing:
- No HTTPS
- robots.txt blocking important pages
- No title tags on key pages
- noindex on pages that should be indexed
- Broken canonical tags pointing to wrong URLs

**High** — Issues with significant ranking impact:
- Missing meta descriptions on multiple pages
- Duplicate title tags across pages
- Keyword cannibalization between key pages
- No structured data at all
- No sitemap.xml
- Orphan pages (important pages with zero internal links)
- Thin content on primary pages (<150 words)

**Medium** — Issues that noticeably affect SEO:
- Missing OG tags on some pages
- Inconsistent heading hierarchy
- Images without alt text
- No lazy loading on images
- Missing security headers (HSTS, CSP)
- Weak internal linking

**Low** — Minor improvements and best practices:
- Missing Twitter Card tags
- No preload/preconnect hints
- Server version exposed in headers
- Minor heading hierarchy issues
- Missing hreflang (if not targeting international)

---

## Mode 2 Edge Cases

- **Single Page Applications (SPAs)**: If the fetched HTML is mostly empty with JS app shells, note this prominently. Recommend SSR or pre-rendering. The audit will be limited to what's in the initial HTML.
- **Very large sites**: Cap at 15 pages. Prioritize the most important ones (homepage, top-nav pages, a sample of content pages at different depths).
- **Sites behind authentication**: If pages return login redirects, note this and audit only accessible pages.
- **Sites with subdomains**: Only audit the domain/subdomain the user specified. Note if you find links to other subdomains.
- **Non-HTML responses**: Skip pages that return non-HTML content. Note them in the report.
- **International sites**: If hreflang tags are present, note the language targeting and check for consistency across pages.
- **WebFetch failures**: If WebFetch fails for some pages, still report on the pages that succeeded. Note which pages could not be fetched.

---

## Important Principles (Both Modes)

- **Be specific, not generic.** Every finding should reference actual content, URLs, or text. Never say "some pages have issues" — say exactly which pages and what the issue is.
- **Prioritize ruthlessly.** Not all issues are equal. Communicate what matters most for maximum ranking impact.
- **Think like a search engine.** Focus on what actually affects rankings: crawlability, content quality, relevance signals, technical health.
- **Think like a site owner.** The report should be understandable by someone who is not an SEO expert. Explain WHY each issue matters.
- **Be honest about limitations.** For Mode 2, this audit is based on HTML analysis only. It cannot measure actual page speed, backlink profile, or real search rankings. Note these limitations in the executive summary.
- **Self-hosting awareness.** When auditing self-hosted sites, pay extra attention to server configuration issues that managed hosting would handle automatically (caching, compression, security headers, SSL).
