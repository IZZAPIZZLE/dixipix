# CLAUDE.md — DIXIPIX

**Master identity loaded from FOCUS YEAR/CLAUDE.md**

## PROJECT
Architectural visualisation studio website for DIXIPIX.
Live at dixipix.nz — portfolio, services, contact, developer sales page.

## SITE
- Live: dixipix.nz
- Repo: github.com/IZZAPIZZLE/dixipix
- Hosting: Vercel (auto-deploys on push)
- DNS: Cloudflare
- Email: studio@dixipix.nz / accounts@dixipix.nz → dixipix3dart@gmail.com
- Forms: Formsubmit.co → studio@dixipix.nz

## STACK
HTML · CSS · JS · Inter (Google Fonts) · Vercel · GitHub · Formsubmit.co

## PAGES
| File | Purpose |
|------|---------|
| index.html | Landing — carousel, tagline, DS link, testimonial |
| work.html | Project grid + Exterior / Interior filter |
| project.html | Individual project pages |
| developer-set.html | DS sales page — hero video, pricing, package |
| what-we-do.html | Services — animations, carousels |
| contact.html | Contact form → studio@dixipix.nz |

## WORKSPACE STRUCTURE
```
dixipix/
├── CLAUDE.md              ← you are here. router.
├── CLIENT-INFO/           ← client records, project briefs. text only.
│   └── CONTEXT.md
├── BRAINSTORM/            ← ideas, strategy, notes. text only.
│   └── CONTEXT.md
├── CONTENT/               ← all media. one folder per client project.
│   ├── CONTEXT.md
│   └── yowie-bay/
└── CODE/                  ← all website code. nothing else.
    └── CONTEXT.md
```

## ROUTING
Tell CORA which workspace before starting work:
- "go to CODE" → reads CODE/CONTEXT.md, works on site files
- "go to CLIENT-INFO" → reads client records
- "go to CONTENT" → references media assets
- "go to BRAINSTORM" → ideas and strategy mode

## DIXIPIX CONTEXT
- Pricing: $1.2k–$2.5k AUD per deliverable
- Turnaround: 4 days standard
- Market: AU + NZ boutique developers, architects, builders
- Testimonials: Chris Austin (Couvaras), Chris Freeburn (Ironbark), Sargiz Morad (Morad Design)

## PROJECT RULES
- Hero image locked — no changes without HERMES approval
- Never autoplay hero rotation
- Always push after every edit
- Mobile check before any UI change
