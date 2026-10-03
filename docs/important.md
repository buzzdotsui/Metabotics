Yes. For the **Metabotics site**, I would separate what Nemotron needs into **(A) project/code files, (B) brand assets, (C) actual website imagery, and (D) content/data**.

The key is: **don't download random images first**. Build an asset inventory, then source only what the design actually requires.

## 1. Files Nemotron needs from your existing project

These are the most important:

```text
METABOTICS/
├── package.json
├── package-lock.json / yarn.lock / pnpm-lock.yaml
├── README.md
├── tsconfig.json                  # if applicable
├── vite.config.*                  # if applicable
├── next.config.*                  # if applicable
├── tailwind.config.*              # if applicable
├── eslint.config.*
├── prettier.config.*
├── .env.example                   # NEVER send real secrets
│
├── src/
│   ├── ...
│
├── public/
│   ├── ...
│
├── app/                           # if applicable
├── pages/                         # if applicable
├── components/                    # if applicable
└── docs/
    ├── 04-COMPONENT-SPECIFICATION.md
    ├── 05-IMPLEMENTATION-PLAN.md
    ├── 06-REPOSITORY-AUDIT.md
    └── MASTER-PROMPT.md
```

If you're giving Nemotron the **whole repository**, you don't need to manually pick these files. Give it the repository and let the audit discover them.

**Never provide:**

```text
.env
.env.local
private API keys
database passwords
production credentials
private certificates
SSH keys
tokens
```

---

# 2. Brand files you need

For the actual Metabotics identity, collect:

### Essential

```text
logo.svg
logo-white.svg
logo-black.svg
favicon.svg
favicon.ico
og-image.jpg
```

Potentially:

```text
logo-mark.svg
wordmark.svg
wordmark-white.svg
wordmark-black.svg
```

### Recommended folder

```text
public/
└── brand/
    ├── logo.svg
    ├── logo-black.svg
    ├── logo-white.svg
    ├── mark.svg
    ├── favicon.svg
    └── og-image.jpg
```

If you **already have the Metabotics logo**, use that.

Don't recreate the logo with AI unless you actually need a new identity.

---

# 3. The actual website pictures

This is where the screenshots you showed earlier matter.

The visual direction you're going for is **black/white, industrial, technical**, so I would not fill the site with generic startup imagery.

You need roughly these categories:

### A. Industrial hero image

One major image for the homepage.

Possible subjects:

- steel mill
- industrial furnace
- manufacturing facility
- heavy industrial machinery
- industrial production line
- molten metal
- industrial control room
- industrial plant

Prefer:

```text
high contrast
monochrome
dark industrial environment
large scale
lots of negative space
technical atmosphere
```

---

### B. Physical-world imagery

For the section explaining the physical world.

Possible:

```text
industrial machinery
factory floor
production equipment
thermal processes
industrial robotics
material processing
```

---

### C. Applications imagery

If these industries are actually part of Metabotics' strategy:

```text
01 — Steel / Foundry
02 — Heat Treatment
03 — Mining / Materials
04 — Energy
```

You could have one image per application.

But **do not create these sections merely because they look good**. Nemotron should only use the industries supported by your actual product strategy/content.

---

### D. Research imagery

Potentially:

```text
scientist/research environment
industrial laboratory
microscopy/materials
simulation
technical workstation
engineering drawings
```

Again, this should support actual Metabotics research rather than pretending the company operates a laboratory if it doesn't.

---

# 4. Technical graphics

These are arguably more important than having dozens of photos.

You need graphics such as:

```text
physical system
      ↓
data
      ↓
digital twin
      ↓
intelligence
      ↓
optimization
```

And potentially:

```text
sensor
   ↓
data acquisition
   ↓
model
   ↓
simulation
   ↓
prediction
   ↓
decision
   ↓
physical system
```

### Important

**Do not download these from somewhere.**

These should preferably be **designed specifically for Metabotics** as SVG/CSS/HTML components.

Nemotron can build them.

For example:

```text
src/
└── components/
    └── diagrams/
        ├── SystemDiagram.*
        ├── ProcessFlow.*
        ├── DataVisualization.*
        └── TechnicalAnnotation.*
```

This is what will make the website feel like a real technology company rather than a stock-photo website.

---

# 5. Icons

You don't need to download 100 icons.

Use a consistent icon system.

You may need icons for:

```text
arrow
external link
menu
close
plus
minus
location
email
LinkedIn
research
system
data
industrial process
```

For technical diagrams, I'd actually prefer **custom SVG geometry** over generic icons.

---

# 6. Fonts

You need to decide the typography before implementation.

You can source fonts from:

[Google Fonts](https://fonts.google.com/?utm_source=chatgpt.com)

or use commercially licensed fonts from foundries such as:

[Fontshare](https://www.fontshare.com/?utm_source=chatgpt.com)

For a more premium editorial/industrial identity, you can also investigate:

[Monotype Fonts](https://www.monotype.com/fonts?utm_source=chatgpt.com)

But **don't download a font just because it looks futuristic**.

You want:

### Display

Strong, distinctive sans-serif.

### Body

Highly readable sans-serif.

### Technical labels

Possibly a mono or compact sans-serif.

A possible structure:

```text
Display:
[chosen font]

Body:
[chosen font]

Technical:
[chosen mono/compact font]
```

Then Nemotron should encode them as design tokens.

---

# 7. Where to get the actual photographs

For free/licensed stock imagery, start with:

[Unsplash](https://unsplash.com/?utm_source=chatgpt.com)

[Pexels](https://www.pexels.com/?utm_source=chatgpt.com)

[Pixabay](https://pixabay.com/?utm_source=chatgpt.com)

For more premium/industrial imagery:

[Adobe Stock](https://stock.adobe.com/?utm_source=chatgpt.com)

[Getty Images](https://www.gettyimages.com/?utm_source=chatgpt.com)

[Shutterstock](https://www.shutterstock.com/?utm_source=chatgpt.com)

**Check the license for every image before using it commercially.**

---

# 8. Don't search for "AI startup images"

This is important.

Don't search for:

> futuristic AI technology

> artificial intelligence business

> digital transformation

> AI brain

> glowing blue circuit

Those tend to produce exactly the generic visual language we're trying to avoid.

Instead search for things like:

```text
steel manufacturing
industrial furnace
metal casting
industrial machinery
factory interior
industrial automation
materials processing
industrial robotics
manufacturing equipment
industrial control room
thermal processing
mining machinery
industrial plant
engineering laboratory
```

Then convert the selected imagery into a **monochrome visual system** where appropriate.

---

# 9. LinkedIn assets

Since you specifically said the LinkedIn page is **white and black**, you should use that as the visual reference.

Collect:

```text
LinkedIn profile/company logo
LinkedIn banner
existing brand graphics
existing posts
existing diagrams
existing typography
existing imagery
```

Don't scrape or reuse images you don't have rights to.

Instead, use the LinkedIn presence to establish:

```text
color
typography
tone
composition
brand language
visual motifs
```

Then recreate the website system from those principles.

---

# 10. Social media assets

You should eventually have:

```text
public/
└── social/
    ├── og-image.jpg
    ├── linkedin.jpg
    ├── twitter.jpg
    └── favicon.png
```

But these don't all have to be separate designs.

A strong Metabotics social card could simply be:

```text
METABOTICS

SOFTWARE
FOR THE
PHYSICAL WORLD.

[technical system graphic]
```

Black/white.

Minimal.

---

# 11. Content files

This is another category Nemotron needs.

Create something like:

```text
content/
├── company.md
├── technology.md
├── applications/
│   ├── steel.md
│   ├── heat-treatment.md
│   ├── mining-materials.md
│   └── energy.md
├── research/
│   └── ...
└── contact.md
```

**Only create the industry files that actually correspond to Metabotics.**

The content should contain real information such as:

```text
company description
technology description
actual products
actual applications
actual research
actual contact details
actual locations
actual social links
```

No invented statistics.

No invented customers.

No invented partnerships.

No invented research.

---

# 12. The single most important thing: don't gather everything before building

You **do not need 50 pictures**.

For version 1, I'd target approximately:

```text
BRAND
├── 1 logo system
├── 1 favicon
└── 1 social preview

PHOTOGRAPHY
├── 1 hero image
├── 2–3 industrial environment images
├── 2–4 application images
└── 1–2 research/technical images

GRAPHICS
├── 1 system diagram
├── 1 process diagram
├── 1 data visualization
└── technical annotation system

ICONS
└── small consistent set

FONTS
├── display
├── body
└── technical/mono
```

That's enough.

---

# 13. Recommended final asset structure

I'd have Nemotron organize the project roughly like this:

```text
public/
│
├── brand/
│   ├── logo.svg
│   ├── logo-black.svg
│   ├── logo-white.svg
│   ├── mark.svg
│   └── favicon.svg
│
├── images/
│   ├── hero/
│   │   └── hero-industrial.webp
│   │
│   ├── industrial/
│   │   ├── industrial-01.webp
│   │   ├── industrial-02.webp
│   │   └── industrial-03.webp
│   │
│   ├── applications/
│   │   ├── steel.webp
│   │   ├── heat-treatment.webp
│   │   ├── mining-materials.webp
│   │   └── energy.webp
│   │
│   └── research/
│       ├── research-01.webp
│       └── research-02.webp
│
├── icons/
│   └── ...
│
├── social/
│   └── og-image.webp
│
└── fonts/
    └── ...
```

---

# 14. What I would NOT fetch

Don't waste time collecting:

```text
❌ random AI stock images
❌ random robot images
❌ fake dashboards
❌ generic "digital transformation" graphics
❌ generic 3D renders
❌ cryptocurrency-style graphics
❌ neon blue/purple AI imagery
❌ random icons
❌ dozens of decorative illustrations
❌ fake industrial data
❌ fake scientific charts
❌ fake company logos
❌ competitor logos unless genuinely necessary
```

---

# 15. Best workflow from here

I would do this in **four stages**:

### STAGE 1 — You give Nemotron the repository

```text
PROJECT
+
04-COMPONENT-SPECIFICATION.md
+
05-IMPLEMENTATION-PLAN.md
+
06-REPOSITORY-AUDIT.md
+
MASTER-PROMPT.md
```

Nemotron audits everything.

### STAGE 2 — We establish the real content

You provide:

```text
Metabotics description
actual services/products
actual industries
actual research
actual contact information
actual social links
actual company information
```

### STAGE 3 — We source the visual assets

Only after the page structure is known:

```text
hero
industrial
applications
research
social
```

Then download the **specific** images required.

### STAGE 4 — Nemotron implements

It uses:

```text
real content
+
real brand assets
+
licensed imagery
+
custom technical diagrams
+
black/white design system
```

rather than inventing material.
