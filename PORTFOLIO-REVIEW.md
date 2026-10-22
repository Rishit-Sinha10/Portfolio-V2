# Portfolio Audit & Review — Rishit Sinha

**Portfolio URL:** https://www.rishitsinha.online
**Repo:** `C:\Users\DELL\Desktop\Portfolio-V2` (Next.js 16.2.10, App Router, Tailwind v4, React 19)
**Review date:** 2026-10-10
**Type:** Review-only. No files were modified except this report.

---

## Part 1 — Executive Verdict

The portfolio is clean, fast-feeling, and structurally sound — a competent personal site that demonstrates React/Next.js fluency and a genuine minimalist aesthetic. It sits comfortably above generic-template territory.

However, it is not yet a **credible hiring instrument**. The three highest-impact problems are:

1. **The strongest engineering evidence is inaccessible.** The most prominent project (OpenLink) links to a GitHub repository that returns **404**, and its live link is an empty `href`. Separately, the single most credible signal in the portfolio — Klryo being _"Selected for Sentry's Open Source Program"_ — is not featured in any project section (and `/work/klryo` also 404s).
2. **Claimed case studies are not case studies.** Every project card says _"Read case study"_ but the destination is a GitHub page, not a case study. The `/work/[slug]` routes that exist in the sitemap contain only a title + a one-line summary. The engineering depth you actually have (adapter architecture, validation, streaming pipelines, OCR) is **described, never demonstrated**.
3. **The identity and copy are inconsistent and stale.** Hero says _"Software Engineer & Shopify SEO"_, metadata says _"Full-Stack Developer"_, body copy leads with frontend; the contact page says _"Open to full-time roles starting 2026"_ while it is now October 2026; typos (e.g. _"200+ Assest"_, _"Mainly Focused On Seo And Performance"_) appear in the most evidence-heavy section (Experience).

A technical recruiter scanning for 60–90 seconds is likely to come away with: _"clean site, frontend-focused student, some ambitious projects, but I can't verify the work and the featured repo is broken."_

**Strongest aspect:** The visual restraint and typographic cleanliness (Black/white, generous whitespace, hairline borders) — together with honest intent — exceed most student portfolios.
**Biggest weakness:** Credibility infrastructure — broken/empty project links, no readable case studies, and missing links for the best evidence.
**Hiring readiness:** Not shortlist-ready _today_; it is probably one focused week of content + link repair away from being a strong candidate for early-career Frontend/React roles.

---

## Part 2 — Scorecard

| Category                                    | Score      | Confidence | Justification                                                                                                                                                                                                                            |
| ------------------------------------------- | ---------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Professional positioning & first impression | 5 / 10     | High       | Identity is visible but inconsistent (three different job titles across hero/metadata/copy). Clear 5-second "engineer" signal; unclear _which kind_.                                                                                     |
| Visual design & typography                  | 5 / 10     | Medium     | Clean and disciplined, but art direction is dormant: the editorial design system (Instrument Serif, `.heading-hero`, grid/texture tokens) is defined then barely used; pages run on default Tailwind sizing.                             |
| Layout & information hierarchy              | 5 / 10     | High       | Single-column, scannable, good whitespace. But projects render as `h3` under a `<p>` label with no parent `h2`, and the two fully-constructed home sections (work + experience) plus a duplicated experience page compete for attention. |
| UX & navigation                             | 5 / 10     | High       | Core nav is clear (Home/Blog/Projects/Experience). But `/contact` exists and returns 200 while being unreachable from any navigation; experience is shown twice; "Read case study"/"Visit" labels mislead or dead-end.                   |
| Project presentation & credibility          | 3 / 10     | High       | Featured repo 404s; one empty live link; no real case studies; sitemap-only `/work/` pages are shells; strongest project (Klryo/Sentry) absent from projects.                                                                            |
| Technical engineering evidence              | 4 / 10     | Medium     | Reasonable component structure and strict TS at root; but heavy dead code, phantom dependencies, stray `import { title } from "process"`, `strict:false` in `app/tsconfig.json`, zero tests.                                             |
| Responsive design                           | 6 / 10     | Low        | Source is fully mobile-aware (breakpoints, mobile nav, wrap points), and body masks horizontal overflow — but this could not be verified in a browser.                                                                                   |
| Accessibility                               | 5 / 10     | Medium     | Skip link, `aria-label`s, `:focus-visible` outline, `aria-expanded` on collapsibles are present. Inverted heading order, a focusable empty `href`, JS-driven motion ignoring reduced-motion, and an audible theme toggle weaken it.      |
| Performance                                 | 4 / 10     | Low        | Not measured (no Lighthouse/CWV available). Source risks: client-heavy home page, GSAP + transition router, unused-but-preloaded serif font. Bundle metrics unverified.                                                                  |
| SEO & discoverability                       | 4 / 10     | High       | Sitemap lists 4 URLs that 404 and omits 3 live routes; no `rel=canonical`; llms.txt links dead pages; title/OG/twitter descriptions disagree.                                                                                            |
| Copywriting                                 | 4 / 10     | High       | Specific and honest in places (payload 40MB→9MB, 200+ assets), but typo-ridden, mixed voice/case, stale timeline ("starting 2026"), and buzzword-adjacent phrasing in project blurbs.                                                    |
| **Overall hiring readiness**                | **4 / 10** | Medium     | Fundamentally good material undermined by broken evidence links and shallow project presentation.                                                                                                                                        |

---

## Part 3 — Top 10 Findings (by practical impact)

**1. [Critical] Featured project (OpenLink) has a dead GitHub and an empty live link.**

- **Location:** `data/projects.ts:36-37`; rendered by `app/components/project-card.tsx:51-70` on Home and `/projects`.
- **Evidence:** `https://github.com/Rishit-Sinha10/OpenLink` returns GitHub 404 (API verified). The card's second link is `href=""` (verified in live HTML: `href=""` on the visit icon for OpenLink).
- **Impact:** The #1, most architecturally interesting project leads recruiters to a broken repo and a no-op link. This is the first credibility hit a tech recruiter takes.
- **Severity:** Critical — **Confidence:** High

**2. [High] Sitemap advertises pages that 404 and omits live pages.**

- **Location:** `app/sitemap.ts:20-51`.
- **Evidence:** Live `/sitemap.xml` lists `/manifesto`, `/uses`, `/acknowledgement`, `/work/klryo` — all verified to return 404 — and omits `/projects`, `/experience`, `/contact` (all 200).
- **Impact:** Wastes crawl budget, produces 404 soft-signals to Google, and makes a reviewer who clicks "case studies" from the sitemap land on dead routes.
- **Severity:** High — **Confidence:** High (HTTP statuses verified)

**3. [High] "Read case study" is a link to GitHub, not a case study — and `/work/[slug]` pages are empty shells.**

- **Location:** `app/components/project-card.tsx:52-60`; `app/work/[slug]/page.tsx:19-61`.
- **Evidence:** Project cards' "Read case study" anchors point to `project.githubUrl`. The live `/work/openlink` page renders only title + status + one summary paragraph + Visit/Code links. No architecture, no decisions, no screenshots.
- **Impact:** The strongest proof of engineering ability is withheld. Independent-verification quality drops from "senior" to "list of tools."
- **Severity:** High — **Confidence:** High

**4. [High] The best credential (Klryo / Sentry Open Source Program) is unlinked and unlisted.**

- **Location:** `app/now/page.tsx:24-27`; llms.txt; blog posts.
- **Evidence:** Klryo appears only in `/now` and the blog; it is absent from `data/projects.ts`, `/work/klryo` 404s, and llms.txt links it.
- **Impact:** Recruiters independently check the most interesting claim (Sentry program) and hit a dead end, eroding trust in the claim itself.
- **Severity:** High — **Confidence:** High

**5. [High] Inconsistent professional identity across title, hero, metadata, and copy.**

- **Location:** `app/pages/Home.tsx:71` (_"Software Engineer & Shopify SEO"_); `app/layout.tsx:29-44` (_"Full-stack Developer"_, default title _"Rishit Sinha — Portfolio"_); body copy leads _"focus on frontend development."_
- **Evidence:** Three different framings; og/twitter titles also differ from the page title (verified in live HTML).
- **Impact:** For Frontend Engineer roles, the headline is vague ("Software Engineer & Shopify SEO" is unusual and self-limiting) and the role mismatch can cause a rejection before code is seen.
- **Severity:** High — **Confidence:** High

**6. [High] Stale, typo-ridden, and over-claimed copy in the Experience section.**

- **Location:** `app/experience/[[...rest]]/page.tsx:34-41`; `app/contact/page.tsx:16`.
- **Evidence:** _"Sept 15 2026 - Present"_, _"Mainly Focused On Seo And Performance"_, _"200+ Assest"_, _"Improve Image Seo By 10%"_, _"a Employee Management System"_; contact page says _"Open to full-time roles starting 2026"_ (weeks late). Resume file could not be DOI'd; unread PDF.
- **Impact:** Typos in the metrics section undercut quantitative claims; stale availability language suggests the site is not maintained.
- **Severity:** High — **Confidence:** High

**7. [Medium] Inverted and gapped heading hierarchy.**

- **Location:** Home page live HTML (verified): `h1` → projects as `h3` with no `h2` parent; section labels ("Skills", "Selected work", "Experience") are `<p>` elements.
- **Impact:** Weak for screen readers and for SEO heading signals; a reviewer using a heading map sees project names as top-level docs with no section context.
- **Severity:** Medium — **Confidence:** High

**8. [Medium] Accessibility gaps: focusable empty link, JS motion ignores reduced-motion, audible theme toggle.**

- **Location:** `app/components/project-card.tsx:62-70` (empty `href` anchor focusable); `appponents/transitionpage.tsx` + `app/pages/reavel.tsx` (JS-driven motion, no `prefers-reduced-motion` handling); `app/components/navbar.tsx:100-104` (click sound on theme toggle via `lib/sound-engine.ts`).
- **Evidence:** `globals.css:275-283` only neuters CSS animations/transitions, not the JS (GSAP/Framer) motion. Skip link and `:focus-visible` are correct (credit).
- **Impact:** Keyboard/vestibular users get broken/no-op focus targets; sound-on-toggle has no opt-out.
- **Severity:** Medium — **Confidence:** High (source), Medium (behavioral)

**9. [Medium] Engineering debt: dead code, phantom dependencies, and a broken import.**

- **Location:** `app/pages/github.tsx` (362-line dead component, never imported); `appponents/animated-button.tsx` (`import from "framer-motion"` — a **phantom dependency** present only via `motion`'s transitive tree); `app/libs/utils.ts` (`clsx` phantom dep via `react-tooltip`); `app/experience/[[...rest]]/page.tsx:5` (`import { title } from "process"` — bogus named import, unused); `app/page.tsx:3-4` (unused `Work` import); empty file `app/components/image-slideshow.tsx`; duplicate region `/* Contact */` in `footer.tsx:13-14`; `app/tsconfig.json` sets `strict:false` under the root's `strict:true`.
- **Evidence:** Grep/import graph confirmed none of these are referenced.
- **Impact:** Reviewer who clones and reads the codebase sees this — it undermines the "engineering credibility" the copy claims.
- **Severity:** Medium — **Confidence:** High

**9b. [Low-Medium] Performance weight risks (unmeasured).**

- **Location:** `app/layout.tsx` imports `SmoothScroll` (Lenis) but never renders it; `app/components/transitionpage.tsx` imports full GSAP; fonts `Instrument_Serif` is preloaded (`next/font/google`) yet its variable/font-family is applied nowhere in visible pages; the hero/profile image is a 1080×1080 PNG (401 KB source; served resized via `next/image`); `og-image.png` is 1.28 MB (social-only cost).
- **Evidence:** Source inspection; no Lighthouse/CWV numbers available.
- **Impact:** Unused font + GSAP/transition router and a client-heavy home page (`"use client"` at `Home.tsx:1`) inflate JS/font payload for no user benefit.
- **Severity:** Medium risk — **Confidence:** Medium

**10. [Medium] Stale/incomplete metadata and llms.txt.**

- **Location:** `app/robots.ts`, `app/sitemap.ts`, `public/llms.txt`, `app/layout.tsx`.
- **Evidence:** No `rel=canonical` anywhere in live HTML; llms.txt references dead pages and `/work/klryo`; sitemap lastmod is `2026-10-03` while source has since diverged (live deploy ≠ current source, e.g. live build has no GSAP chunk).
- **Impact:** Minor signal decay for SEO; a reviewer that checks llms.txt sees broken navigation.
- **Severity:** Medium — **Confidence:** High

---

## Part 4 — Section-by-Section Review (live site + source)

### Hero (Home)

- **Works:** Name, one-line role, avatar, clean monochrome, and two CTAs (Book a Call → cal.com, Resume → PDF) are present. Decent scannability.
- **Doesn't work:** Role line _"Software Engineer & Shopify SEO"_ is vague and doesn't match the frontend focus of the body copy or the metadata. The profile image is an anime character asset whose filename (`Levi_Ackermann_29_character_image`) does not match the persona implied by `alt="Rishit Image"` — a reviewer reading "Rishit Image" whose file is a known anime character will find it jarring.
- **Misses:** No _value statement_ ("I build production frontends for e-commerce"), no location/availability line, no strongest-project anchor in the hero.

### Navigation

- **Works:** Home / Blog / Projects / Experience clear on desktop; hamburger + theme toggle on mobile; GitHub icon with aria-label; active-section logic wired (though `NAV_LINKS` declares `section: null` for all items — `useActiveSection` never fires since no section ids are passed from the nav).
- **Doesn't work:** `/contact` and `/now` are absent from nav (Now only in the footer); nav has no "Work" highlight behavior; the empty `<div></div>` next to the logo suggests a removed name label — the logo has no text "Rishit Sinha", so brand identity in the nav is just a 20px image.

### Skills

- **Works:** 8 concise, low-noise badges with brand icons and hover states. Good restraint.
- **Doesn't work:** Omits the stack you actually market (Shopify/Liquid, Zod, Clerk, Supabase, Socket.IO). For frontend roles this is acceptable, but the list reads slightly generic (React/Next/TS/Tailwind cover the checklist).

### Selected Work (Home + `/projects`)

- **Works:** Uniform cards, status dots, tech stack, GitHub + live icons; hover background; "View more projects" → `/projects`.
- **Doesn't work:** The card's primary CTA is mislabeled ("Read case study" → GitHub). For OpenLink the live icon is `href=""`. All five summaries are vendor-neutral, feature-list blurbs (see Part 5). Cards are `h3` with no section `h2`.

### Experience (Home + `/experience`)

- **Works:** Timeline of three real roles with concrete numbers (8 features, 12+ components, 40MB→9MB) behind an expand/collapse. Honest level (internships).
- **Doesn't work:** The entire section is duplicated on the home page _and_ on `/experience`; copy has material typos and mixed capitalization (see Finding 6); dates run "Apr 2026 — May 2026", "May 2026 — Aug 2026", then "Sept 15 2026 - Present" with inconsistent formats (no leading zero, hyphen vs em dash).

### Blog

- **Works:** 3 posts, properly generated (static params, reading time), reasonable MDX template.
- **Doesn't work:** Relevance gap — the landing is a real-time systems story but there's no Frontend-engineering post (no React patterns, no performance write-ups), which is exactly what a frontend reviewer wants to see.

### Now / Contact / Footer

- **Now:** clean, honest, current-ish (Sept 2026). Good source of evidence (Klryo/Sentry) — but see Finding 4.
- **Contact:** page exists (reaches 200) but is **unreachable from any nav** — dead route. The mailto + GitHub/X/LinkedIn set is otherwise fine.
- **Footer:** email, species of socials, Resume, Now, llms.txt; duplicate `{/* Contact */}` comment; links open the right things.

---

## Part 5 — Project-by-Project Review

Evidence reviewed: `data/projects.ts` blurbs, project cards, `/work/[slug]` pages, GitHub API metadata for each repo, live URLs. Repos inspected via GitHub API (README contents not read).

### OpenLink (status "In dev", #1 position)

- **Presentation:** Summary is the _best written_ — it actually names the architecture (provider-agnostic adapter layer, validation, routing, normalization, error handling). But it's the only such description; it reads like a spec, not a project story.
- **Evidence problems:** GitHub repo **404** (verified). Live link empty. The availability "In dev" with no deploy is fine — but the dead repo is disqualifying right now.
- **Verdict:** Highest-potential project, worst-presented evidence. Needs: restore repo/visibility, a real case study (architecture diagram, validation strategy, error model), and a linked live/optional demo.

### ClarityCXR (status "In dev")

- **Presentation:** "AI-powered workspace... multimodal image analysis, authentication, focused interface for chest X-rays." Medical domain with no depth.
- **Evidence problems:** Repo exists (0 stars), no description, unclear whether HIPAA/pipeline claims hold; live URL is linked.
- **Verdict:** Sounds ambitious; without architecture, dataset, model story, or screenshots it reads as "AI vibe." Differentiator from other projects: unique domain — could be a strong case study if it shows more.

### Financcino (status "Live") — strongest backend story

- **Presentation:** Full-stack finance app: expenses, OCR receipts, budgets, analytics, AI assistant. Repo description is articulate (verified via GitHub API).
- **Evidence problems:** No screenshots/demo link beyond the live URL; no explanation of the OCR pipeline or the AI assistant's grounding.
- **Verdict:** Good, but has the least frontend evidence of the set — spend most of the frontend-featured case study here (Recharts dashboards, budgets).

### Tunnel (status "Live")

- **Presentation:** Streaming platform: RTMP ingest, HLS, chat, analytics. Repo description is specific (FFmpeg, Socket.IO, Clerk, Gemini) — credible.
- **Evidence problems:** Live URL is `echo-rizz.vercel.app` (a placeholder name, likely a re-used old deploy) — this undercuts polish; no screenshots of the actual stream UI; blog does the heavy lifting.
- **Verdict:** Interesting backend engineering; needs a frontend case-study angle (stream UI, player controls, chat state).

### ZecoAI (status "Live") — weakest

- **Presentation:** "AI-powered development platform..." GitHub description is the **default placeholder**: _"This is an AI project created by Rishit-Sinha10, likely focused on..."_ (verified).
- **Evidence problems:** The auto-generated description implies the repo was created from a template/blank — it pro-actively undermines the claim of a built platform.
- **Verdict:** Either write a real README/description and case study, or drop it from the featured list. As-is it's the least credible card.

### Kollective note

- **Missing entirely:** Klryo (the actual shipped, Sentry-selected product, with a Product Hunt launch and a blog series). This is the single best proof of "I ship" and it's buried. The mismatch between the projects shown and the projects discussed in blog/now/llms.txt is a credibility gap a recruiter will notice.
- **Missing across all:** No screenshots, no metrics, no "challenge → decision → outcome" narrative on any card. Every card is a tool list in prose.

---

## Part 6 — Technical Audit

### Engineering / source

**Verified:**

- Root `tsconfig.json` is strict; `app/tsconfig.json` re-declares with `strict:false` (inconsistent type safety for app code).
- `import { title } from "process"` at `app/experience/[[...rest]]/page.tsx:5` — stale/bogus named import (unused, resolves to a CJS property via bundler interop; a smell, not a verified build failure).
- Dead components/hooks never referenced at runtime: `app/pages/github.tsx` (362 lines, hard-coded 2026 contribution data + third-party `jogruber.de` API), `app/components/animated-button.tsx` (imports `framer-motion`, which is not a declared dependency), `app/components/Signature.tsx`, `app/hooks/useScramble.ts`, empty `app/components/image-slideshow.tsx`, unused `LinkPreview` import in `Home.tsx:19`, unused `SmoothScroll` import in `layout.tsx:9`, unused `Work` import in `page.tsx:4`, duplicate `React`-unused imports (`Quote`, `TextQuote` in `Home.tsx:22`).
- Phantom dependencies imported directly: `framer-motion` and `clsx` (both only in the lock-tree via `motion`/`react-tooltip`). Fragile — a lockfile re-resolve could break the build.
- `mdx-components.tsx` defines MDX styling but `@next/mdx` + `next-mdx-remote/rsc` are both installed (two MDX stacks) with `@next/mdx` configured with zero plugins — mild duplication.
- `pageExtensions` includes `.md/.mdx` while MDX is served through `next-mdx-remote`; content is read by `gray-matter`+`fs` at build. Workable, not idiomatic.
- No `loading.tsx`, no `error.tsx`, no Suspense boundaries for data (only the two runtime `BAILOUT_TO_CLIENT_SIDE_RENDERING` seams in the deployed HTML).

### Rendering choices

- Entire home page is `"use client"` (`Home.tsx:1`), same for `/projects`, `/experience`, `/contact`, nav, footer, transition layout. Server components only on `/now`, `/blog`, blog posts, `/work`. For a marketing/portfolio page, a client-heavy home with a full GSAP transition router is more JS than needed with no content-page benefit.

### Bundle/font weight (source evidence — no measured numbers available)

- `next/font/google` self-hosts Geist + Geist Mono + Instrument Serif; `--font-instrument-serif` is declared but no visible page applies it (hero uses `text-5xl font-bold` sans). Likely a wasted ~preloaded font file.
- GSAP (`transitionpage.tsx`) + `next-transition-router` + Lenis (imported, unused) + `motion` are the interactive stack — heavy relative to the page content.
- `optimizePackageImports` set for `simple-icons` and `lucide-react` (good). SVGR loader for SVG imports (a small build-time cost; unused mostly).

### Responsive (source-level only — unverified in a browser)

- Breakpoints are sensible (`sm/md`), nav collapses to a hamburger, cards stack, `time` labels reflow. `body` uses `overflow-x-hidden`, which **masks** rather than fixes any horizontal overflows. The 720px heatmap has an internal scroll container (but it's dead code). Touch targets: buttons/link paddings are ~32-40px tall, borderline vs. 44px guideline.

### Accessibility (inspection + source; no browser/AT testing)

- **Good:** skip link; `:focus-visible` outline; `aria-label` on icon links; `aria-expanded`/`aria-controls` on collapsibles; semantic `<article>`, `<nav>`, `<main>`, `<time>`.
- **Weak:** heading outline (h1 → h3 without h2; project names above section titles); focusable anchor with `href=""`; JS motion (GSAP/Framer) ignores `prefers-reduced-motion`; theme toggle emits a synthesized click sound; `aria-label` on theme button depends on `resolvedTheme` (fine after mount) — but the sound and empty link are the concrete issues.

### Performance / SEO (unmeasured metrics; source + HTTP evidence)

- Verified: sitemap/llms.txt dead links; missing canonical; inconsistent titles; robots.ts fine; `metadataBase` + OG configured; JSON-LD Person block present and valid; `resume.pdf` publicly linked.
- Not measured: Lighthouse, Core Web Vitals, real field data, JS bundle byte counts. Recommendation: after link/content fixes, run Lighthouse on Home `/projects` `/experience`, and validate with PageSpeed Insights.

---

## Part 7 — Hiring Manager Verdict

1. **Strongest signal:** A visibly hand-crafted monochrome site with a real (if underplayed) portfolio: a live finance app, a streaming platform with real infra (FFmpeg/Socket.IO), and an OpenLink architecture blurb that shows awareness of API design beyond frameworks.
2. **Biggest rejection reason:** Broken/empty evidence links (404 GitHub on the top project, `/work/klryo` 404), no readable case studies, and phrase-level typos that hint at not being production-careful — for a frontend candidate, "the details matter" is the whole pitch, and the details here betray it.
3. **Credible frontend ability?** Partially. Source shows restraint, correct component structure, and a clean design. After a single code read, a fair reviewer would conclude "capable, not yet evidence-backed."
4. **Differentiated from templates?** Yes on design surface; the layout/typography are distinctive enough. Story-wise it still reads generic (five "full-stack AI-ish app" summaries).
5. **Questions I'd ask after review:** _Is OpenLink still alive and where's the repo? What exactly did you build in Tunnel vs. what's boilerplate? Why is Klryo (your best product) not on your projects page? What specifically did you do on the Shopify performance work — what were the 40MB and how did you find them? Walk me through a decision you made on OpenLink's validation/normalization layer._
6. **Project inspected first:** OpenLink — declared as #1 and the most architectural; it would be the make-or-break interview topic. Currently it appears first but is the least verifiable.
7. **Missing evidence of engineering ability:** Readable case studies, screenshots/demos, byte-level performance work-ups, a Frontend-focused technical post, clear role claims ("I did X, not 'we'"), and at least one measurable outcome on each project.
8. **Shortlist?** Borderline-No for a technical interview based on today's evidence — the broken links and missing case studies are disqualifying at the screening stage. With the changes below (link/content + copy), it moves to a Yes for junior/frontend tracks.

---

## Part 8 — Prioritized Recommendations (no changes were made)

### P0 — Fix first (Serious defects / credibility)

1. **Restore or replace OpenLink's GitHub + live links.** If the repo is private/deleted, either make it public or remove the card. Replace the empty `href=""` with a real destination or remove the icon. _Benefit:_ removes the first credibility hit. _Effort:_ Small.
2. **Reconcile sitemap/robots/llms.txt with reality.** Remove `/manifesto`, `/uses`, `/acknowledgement`, `/work/klryo` (or restore those pages); add `/projects`, `/experience`, `/contact`. Update llms.txt. _Benefit:_ clean crawl, consistent metadata story. _Effort:_ Small.

### P1 — High impact

3. **Add real case studies on `/work/[slug]` and link cards to them.** Each needs: problem → my role → key decisions (with a short code/diagram) → outcome/metrics → link to code + demo. OpenLink (architecture) and Tunnel (streaming pipeline) first. Change "Read case study" to point at these pages. _Benefit:_ transforms "tool list" into engineering proof. _Effort:_ Large (content) — still the single biggest win.
4. **Feature Klryo (Sentry selection) in the projects section** with a case study; fix `/work/klryo`. _Benefit:_ surfaces the strongest evidence. _Effort:_ Small–Medium.
5. **Fix copy and identity throughout.** Unify the role line (choose one frontend-target framing), rewrite Experience bullets (fix typos/mixed case; convert "200+ Assest" → "200+ assets", "Mainly Focused On Seo And Performance" → proper sentence; consistent date format), update availability language to current. _Benefit:_ immediate professional credibility. _Effort:_ Small.

### P2 — Refinement

6. **Fix heading semantics:** give sections real `h2`s, keep project names as `h3`, turn labels ("Selected work", "Experience") into headings or visible `h2`s.
7. **Address a11y:** guard `LinkPreview`/empty anchors; add JS `prefers-reduced-motion` gating to GSAP/Framer; add a `:has()` or explicit off-switch for the click sound; consider bumping small touch targets toward 44px.
8. **Reduce bundle:** stop preloading Instrument Serif if it isn't used (or actually use the editorial headings); drop unused Lenis/GSAP imports; remove/port the dead `github.tsx` heatmap if unused; add a `loading.tsx`/`error.tsx`.
9. **Add screenshots/demos** to at least Financcino, Tunnel, and ClarityCXR (browser shots, not mockups).

### P3 — Optional

10. Add one Frontend-specific blog post (React patterns / performance work) to balance the backend-heavy writing.
11. Remove dead files (`image-slideshow.tsx` empty, `Signature`, `useScramble`, `animated-button` phantom `framer-motion` import) and add a `bun`/`npm` lint gate. Optionally add a tiny test for `projects.ts` shape or the blog loader.
12. Fix signature/nav brand identity (add a text wordmark next to the avatar).

---

## Part 9 — Final Action Plan (top 5 first)

1. **Repair the evidence trail (P0-1, P0-2).** Fix OpenLink links and reconcile sitemap/llms.txt. _Why first:_ every reviewer hits these in the first 60 seconds; they're cheap and reversible.
2. **Write 2 real case studies — OpenLink and Tunnel (P1-3).** _Why:_ this is the difference between "lists technologies" and "demonstrates engineering." OpenLink's adapter/validation story and Tunnel's pipeline are genuinely strong material; present them.
3. **Feature Klryo + fix `/work/klryo` (P1-4).** _Why:_ your strongest third-party validation ("Sentry Open Source Program") is currently unfindable. Surfacing it is the highest-leverage signal change.
4. **Unify identity and fix copy (P1-5).** Pick one role line that matches the frontend jobs you're targeting, and rewrite the Experience bullets to remove typos and stale dates. _Why:_ it changes first impressions from "tidy student," and prevents automatic filtering on inconsistent claims.
5. **Slim the bundle + fix headings (P2-6/7/8, subset).** Remove unused fonts/motion, gate JS animation on reduced-motion, fix heading hierarchy. _Why:_ frontend roles are judged on exactly these engineering judgments — it also makes Lighthouse/PR review cleaner for the performance section of your interview story.

---

## Part 10 — Verification Log

**Repo inspected (read-only):**

- Full file tree, `package.json`, `next.config.ts`, `tsconfig.json` + `app/tsconfig.json`, `eslint.config.mjs`, `README.md`, `AGENTS.md`.
- All routes: `app/page.tsx`, `pages/Home.tsx`, `pages/reavel.tsx`, `pages/github.tsx`, `projects`, `experience`, `contact`, `work/[slug]`, `now`, `blog` (list + slug), `not-found`, `layout`, `providers`.
- All components: navbar, footer, project-card, transitionpage, smoothscroll, link_preview, animated-button, discord, icon set, image-slideshow (empty), Profile-Image, Signature.
- Data: `data/projects.ts`, lib (`blog`, `sound-engine`, `type`, `utils`), types, content MDX (3 posts), public assets.
- Git: log (`c895abb … a200a72`), status (only `a.txt` untracked).

**Live-site checks performed:**

- Fetched home HTML (56.5 KB), analyzed titles/metas/headings/scripts/images/links via a sub-agent.
- HTTP HEAD checks: `/manifesto` `/uses` `/acknowledgement` `/work/klryo` → **404**; `/projects` `/experience` `/contact` `/work/openlink` `/now` `/blog` `/resume.pdf` `/llms.txt` `/sitemap.xml` → **200**.
- Fetched live `/sitemap.xml` and `/llms.txt` and cross-referenced with actual routes.
- GitHub API (public): `OpenLink` → **404**; `ClarityCXR` (0⭐, no desc); `Financcino` (1⭐, good desc); `P1` (0⭐, good desc); `ZecoAI`/`Klryo`/`klryo` → placeholder auto-generated descriptions.
- Asset check: `og-image.png` 1.28 MB 1917×909; profile PNG 1080×1080 401 KB; `resume.pdf` 119 KB; font files present.

**Not verified (explicit limitations):**

- No browser automation available → **no visual rendering, hover states, mobile viewports, or actual performance measurement**. Responsive, motion, and Lighthouse findings are source-evidence only unless stated otherwise.
- `resume.pdf` could not be parsed (PDF reading unavailable) — its content was not audited.
- Current source tree could not be built (no `.next/BUILD_ID` present in the repo; building would mutate `.next`, which is outside review scope) — the **live build is from 2026-10-03 and diverges from the working tree** (e.g. live has no GSAP chunk). Code-smell findings on the working tree may not describe the deployed site exactly.
- GitHub README contents and commit histories inside each repo were not reviewed.
- No Lighthouse/CWV/PageSpeed data exists in the repo or was measured.
