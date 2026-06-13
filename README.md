# joshclinton.com — site mockup

Hand-coded static site (HTML + CSS + vanilla JS, no build step). Open any
`.html` file in a browser to view. Everything renders from small data arrays,
so updating the site means editing text, not a page builder.

## Structure

```
mockups/
  about.html        About — bio, photo, connect links (landing page)
  personal.html     Personal — who I am, with Sarah's painting
  research.html     Research — publications, filterable by topic (the centerpiece)
  teaching.html     Teaching — courses, newest first
  writing.html      Writing & Talks — public writing, talks, lectures
  styles.css        the whole design system (one file)
  publications.js   the publications data (single source of truth for Research)
  assets/           all images, the CV PDF, and thumbnails
  assets/papers/    the paper PDFs the Research list links to
```

The site is self-contained: every link stays inside this folder, so it works
as-is when hosted. (The original paper PDFs also live in `../Published/` and
`../WorkingPapers/` as the research corpus; `assets/papers/` holds the site's copy.)

## How to update

- **Add or edit a publication:** edit `publications.js`. Each entry has
  `title, authors, venue, year, type, topics, abstract, links{pdf, doi}`.
  The Research page re-renders from this list automatically.
- **Add or edit a course:** edit the `COURSES` array near the bottom of
  `teaching.html` (term, number, title, level, optional `desc`, `img`, `caption`,
  `note`, `url`).
- **Add writing / a talk / a lecture:** edit the `ARTICLES`, `TALKS`, or
  `LECTURES` arrays near the bottom of `writing.html`.
- **Edit prose** (About bio, Personal): edit the text directly in
  `about.html` / `personal.html`.
- **Colors, type, spacing:** all live in the `:root` block at the top of
  `styles.css`.

## Notes

- Images are optimized for the web; drop new ones in `assets/` and reference
  them as `assets/yourfile.jpg`.
- Full-resolution source images live in `assets/originals/` (the portrait,
  Sarah's painting, the elections logo, the 1798 etching). The pages use the
  optimized copies in `assets/`; the originals are kept for re-cropping later.
- Two alternates are kept in `assets/` for easy swaps:
  `cjr-eq2.png` (the likelihood equation, instead of `cjr-eq1.png`) and
  `elections-logo.png` (the course logo, instead of `elections-photo.jpg`).
- The light tan `mock-note` lines on some pages are review notes; remove them
  before launch.
