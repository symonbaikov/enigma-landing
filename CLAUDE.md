# CLAUDE.md — AI Content Generation & Architecture Rules

## PROJECT OVERVIEW
This project automates the creation and updating of website pages using structured data, research papers, and top SEO/GEO/AEO practices. The goal is to generate high-quality, authoritative content that complies with Google's E-E-A-T and Information Gain guidelines.

## REUSE & GENERATION CORE PRINCIPLES
* **No Literary Fluff:** Never use generic AI intros (e.g., "In today's fast-paced world...", "It is important to remember..."). Start directly with the core value or answer.
* **Architecture over Prose:** Treat every page as a data structure. Use headers (H1, H2, H3), lists, and tables to make the text scannable for both humans and AI search engines (GEO/AEO).
* **Information Gain:** Every text must provide unique value. Do not just summarize sources — contrast them, find contradictions, or add technical depth.
* **Strict Fact-Checking:** Never invent facts, statistics, or URLs. Every claim must rely strictly on the provided research data.

---

## CONTENT FRAMEWORK: "SMART FRAME" (СМЫСЛОВОЙ КАРКАС)
Every page generated or updated must strictly follow this structural sequence:

1. **Hero Section (H1):** 
   - Clear, direct title answering: "What is this page about?"
   - Subtitle: The immediate benefit for the user.
   - Placeholder for CTA button.
2. **Context / Problem:**
   - A short paragraph or 3 bullet points outlining the user's specific pain point.
3. **Core Value (The "Meat"):**
   - Must be divided into H2/H3 subheadings.
   - Every paragraph must follow the formula: **Thesis ➔ Argument ➔ Proof (Citation)**.
   - Max paragraph length: 3–4 lines. Text must "breathe".
4. **E-E-A-T Block (Trust):**
   - Explicit references to the analyzed research articles.
   - Use direct quotes or data tables comparing different sources.
5. **AEO / FAQ Block:**
   - 3-4 highly specific "Question-Answer" pairs targeted at voice and AI search.
   - Question must be in H3. Answer must be direct and concise (under 50 words).

---

## WORKFLOW COMMANDS
When executing tasks, use or expect these specific content routines:

* `clerk gen-page [topic] [data_source]` — Generate a new page based on specific JSON/Markdown research data using the "Smart Frame" framework.
* `clerk enrich-eeat [page_path] [sources]` — Review an existing page, inject direct citations, statistics, and external authority links without breaking current logic.
* `clerk validate-seo [page_path]` — Check the page for AI footprints, passive voice, over-nested sentences, and missing Schema markup placeholders.

---

## CODE & MARKDOWN STANDARDS
* **Output Format:** Always return clean Markdown (or HTML/TSX components if explicitly requested).
* **Tables over Lists:** If comparing 3 or more metrics/items, always format them as a Markdown table.
* **Schema Markup:** Always include a placeholder or structure for `FAQPage` and `Article` JSON-LD microdata at the bottom of the content file.
