# joshclinton.com — TODO & project notes

(This file lives in the repo so it travels to any machine. It is not part of the
published website.)

## Status / working from any machine
- ✅ Site is **live** at https://joshclinton.github.io
- The whole website IS this git repo (`joshclinton/joshclinton.github.io`). To pick this
  up on another computer: install **GitHub Desktop**, clone the repo, edit files, then
  **Commit to main → Push**. Changes go live in ~1 minute.
- Local copy: `~/GitHub/joshclinton.github.io`. Content lives in `publications.js`
  (Research) and per-page data arrays (Teaching, Writing). Design tokens in `styles.css`
  (`:root`). See `README.md` for the full map.

## 1. Connect the custom domain (joshclinton.com) — ✅ DONE 2026-06-13
- Live at **https://joshclinton.com** (and www → redirects to apex), served by GitHub
  Pages over HTTPS. The `CNAME` file in this repo holds `joshclinton.com`.
- What we did in **Wix → Domains → joshclinton.com → Manage DNS records**:
    - Deleted the 3 Wix A records and added four **A** records on the root pointing at
      GitHub Pages: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
    - Replaced the `www` CNAME (was `cdn1.wixdns.net`) with `www` → `joshclinton.github.io`
    - No MX/TXT/SRV existed (no email), NS left as Wix (not editable).
- **To revert to Wix** if ever needed: restore A records 185.230.63.171 / .186 / .107 and
  www CNAME → `cdn1.wixdns.net`, and remove the custom domain in repo Settings → Pages.
- Remaining nicety: confirm **Enforce HTTPS** is ticked in Settings → Pages.

## 2. Track down author PDFs (these papers are DOI-only)
- More a Molehill than a Mountain (2011)
- Congress, Lawmaking, and the Fair Labor Standards Act (2012)
- Separated Powers in the United States (2012)
- The Effect of Majority Party Agenda Setting on Roll Calls (2020)
- Reluctant Republicans? (2022)
- Protecting the Integrity of Survey Research (2023)
- (Drop any PDF you find into `assets/papers/` and add the `pdf:` link in `publications.js`.)

## 3. Advice section
- The old Wix site had an "Advice" page (grad-student advice). Decide: its own page, or
  fold into About/Personal.
- Need the content — paste the old text, or write fresh.

## 4. A place for writings / analyses
- Decide: a section on this site (a simple list of posts), or just link out to Substack.

## 5. Mobile polish (deferred)
- Test on a real phone; tune spacing and the nav for small screens.
- **Research filters on phone:** the topic menu was a hidden sideways-scroll strip
  (you'd never know to scroll right). Changed to wrapping chips so all are visible and
  tappable. STILL TO CONSIDER (another day): a clearer mobile layout — present the
  category filters as an obvious labeled block at the top, then the papers below, so
  it's unmistakable they're filters. (Josh: "list the categories at the top and then
  the papers.")
