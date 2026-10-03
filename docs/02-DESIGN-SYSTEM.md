# FILE 02 — `02-DESIGN-SYSTEM.md`

This is the **visual foundation**. It locks the Metabotics identity before implementation so the website doesn't slowly turn into a generic SaaS/AI design.

Copy everything below into:

```text
docs/02-DESIGN-SYSTEM.md
```

```md
# METABOTICS
# DESIGN SYSTEM SPECIFICATION

Version: 1.0
Status: Foundation
Purpose: Master visual language for the Metabotics website.

---

# 01. DESIGN PHILOSOPHY

Metabotics represents:

    SOFTWARE FOR THE PHYSICAL WORLD.

The visual system must communicate:

    ENGINEERING
    INDUSTRIAL SYSTEMS
    COMPUTATION
    PRECISION
    INTELLIGENCE
    CONTROL
    RESEARCH
    OPTIMIZATION


The website must feel like:

    INDUSTRIAL ENGINEERING
            +
    SOFTWARE INFRASTRUCTURE
            +
    SCIENTIFIC COMPUTING
            +
    MODERN EDITORIAL DESIGN


It must NOT feel like:

    GENERIC AI STARTUP
    GENERIC SaaS
    CRYPTO STARTUP
    GAMING PRODUCT
    MARKETING TEMPLATE
    FUTURISTIC SCI-FI LANDING PAGE

---

# 02. CORE VISUAL IDEA

The entire design system is built around:

    PHYSICAL
       ↓
     DATA
       ↓
    DIGITAL
       ↓
 INTELLIGENCE
       ↓
 OPTIMIZATION


The LinkedIn banner already establishes this language.

The website extends it.

The visual system therefore uses:

    lines
    grids
    nodes
    coordinates
    diagrams
    data traces
    technical labels
    geometric forms
    system states
    monochrome contrast


---

# 03. BRAND CHARACTER

Metabotics should feel:

    PRECISE
    QUIET
    TECHNICAL
    CONFIDENT
    INTELLIGENT
    INDUSTRIAL
    RESEARCH-DRIVEN
    SERIOUS


Not:

    LOUD
    PLAYFUL
    COLORFUL
    CORPORATE-GENERIC
    OVER-POLISHED
    SCI-FI
    DECORATIVE

The design should communicate confidence through restraint.

---

# 04. PRIMARY COLOR SYSTEM

The primary brand system is monochrome.

## BLACK

```css
--color-black: #050505;
```

Primary page background.

Use for:

- hero
- technology sections
- system architecture
- major CTA sections
- footer
- dark visual panels

---

## DEEP BLACK

```css
--color-black-deep: #020202;
```

Use sparingly for:

- full-screen transitions
- overlays
- high-contrast hero states

---

## SURFACE

```css
--color-surface: #0A0A0A;
```

Used for:

- dark cards
- technical panels
- diagrams
- navigation surfaces

---

## GRAPHITE

```css
--color-graphite: #171717;
```

Used for:

- borders
- secondary surfaces
- dividers
- inactive system states

---

# 05. LIGHT COLOR SYSTEM

## WHITE

```css
--color-white: #F5F5F3;
```

Primary light-mode text/background.

Do not use pure #FFFFFF everywhere.

The slightly warm white creates a more engineered/editorial appearance.

---

## PURE WHITE

```css
--color-white-pure: #FFFFFF;
```

Reserved for:

- strong contrast
- buttons
- critical labels
- high-priority elements

---

## LIGHT GRAY

```css
--color-gray-100: #E8E8E6;
```

Use for:

- light borders
- subtle surfaces
- separators

---

## MID LIGHT GRAY

```css
--color-gray-300: #C8C8C6;
```

Use for:

- secondary text
- inactive controls
- metadata

---

## MID GRAY

```css
--color-gray-500: #888888;
```

Use for:

- secondary descriptions
- technical labels
- supporting text

---

## DARK GRAY

```css
--color-gray-700: #555555;
```

Use for:

- subtle text
- tertiary information

---

## NEAR BLACK

```css
--color-gray-900: #242424;
```

Use for:

- dark borders
- dividers
- inactive states

---

# 06. OPTIONAL SYSTEM ACCENT

The primary identity remains monochrome.

An accent may be introduced for system-state visualization.

Recommended:

```css
--color-system: #A8FF60;
```

This color is NOT a primary brand color.

Use only for:

    ACTIVE
    ONLINE
    SUCCESS
    LIVE DATA
    SYSTEM STATE
    DATA FLOW


Example:

    ● SYSTEM ONLINE

Do not use the accent for:

- large backgrounds
- hero typography
- major buttons
- decorative gradients
- general branding

The accent should feel like an instrument panel indicator.

---

# 07. COLOR RULE

Default ratio:

    70% BLACK / WHITE
    20% GRAYS
    10% SUPPORTING VISUAL STATES


Avoid colorful interfaces.

If a chart needs multiple data series, use:

- line weight
- pattern
- opacity
- labels
- different grayscale values

before introducing additional colors.

---

# 08. DARK MODE SYSTEM

The primary website visual mode is dark.

Dark sections should use:

```css
background: #050505;
color: #F5F5F3;
```

Borders:

```css
border-color: #242424;
```

Secondary text:

```css
color: #888888;
```

Technical text:

```css
color: #C8C8C6;
```

---

# 09. LIGHT MODE SYSTEM

Light sections use:

```css
background: #F5F5F3;
color: #050505;
```

Borders:

```css
border-color: #D8D8D5;
```

Secondary text:

```css
color: #555555;
```

Technical labels:

```css
color: #777777;
```

---

# 10. SECTION COLOR RHYTHM

Do not make the entire website one continuous black surface.

Use visual rhythm.

Recommended:

    DARK
    HERO

    LIGHT
    PROBLEM

    DARK
    PLATFORM

    LIGHT
    APPLICATIONS

    DARK
    TECHNOLOGY

    LIGHT
    RESEARCH

    LIGHT
    ABOUT

    DARK
    CONTACT

    BLACK
    FOOTER


This creates pacing.

---

# 11. TYPOGRAPHY PHILOSOPHY

Typography must carry much of the visual identity.

Do not rely on:

- gradients
- shadows
- illustrations
- decorative effects

to create visual hierarchy.

Typography does the work.

---

# 12. PRIMARY DISPLAY FONT

Recommended:

    SPACE GROTESK


Use for:

- hero headings
- major section headings
- page titles
- navigation
- major CTAs


Alternative if Space Grotesk is unavailable:

    INTER TIGHT

or:

    MANROPE


Do not mix multiple display fonts.

---

# 13. BODY FONT

Recommended:

    INTER


Use for:

- paragraphs
- descriptions
- forms
- navigation supporting text
- article body


Fallback:

    system-ui
    -apple-system
    BlinkMacSystemFont
    "Segoe UI"
    sans-serif

---

# 14. TECHNICAL FONT

Recommended:

    IBM PLEX MONO


Alternative:

    JETBRAINS MONO


Use for:

- system labels
- metadata
- numbers
- architecture labels
- status
- technical annotations
- research metadata
- code-like UI


Example:

    SYSTEM / 01
    STATUS: ACTIVE
    SENSOR: THERMAL-04
    SAMPLE RATE: 100 Hz

---

# 15. TYPE SCALE

Desktop:

```css
--text-xs: 0.6875rem;     /* 11px */
--text-sm: 0.8125rem;     /* 13px */
--text-base: 1rem;        /* 16px */
--text-lg: 1.125rem;      /* 18px */
--text-xl: 1.375rem;      /* 22px */
--text-2xl: 1.75rem;      /* 28px */
--text-3xl: 2.25rem;      /* 36px */
--text-4xl: 3rem;         /* 48px */
--text-5xl: 4rem;         /* 64px */
--text-6xl: 5rem;         /* 80px */
--text-7xl: 6rem;         /* 96px */
```

Do not use every size on every page.

---

# 16. HERO TYPOGRAPHY

Desktop hero:

```css
font-size: clamp(3.5rem, 7vw, 7rem);
line-height: 0.92;
letter-spacing: -0.055em;
font-weight: 600;
```

Example:

    SOFTWARE FOR
    THE PHYSICAL
    WORLD.


The hero should feel architectural.

---

# 17. PAGE TITLE

Recommended:

```css
font-size: clamp(3rem, 6vw, 6rem);
line-height: 0.95;
letter-spacing: -0.05em;
font-weight: 600;
```

Example:

    THE ENGINEERING
    BEHIND INTELLIGENT
    INDUSTRIAL AUTOMATION.


---

# 18. SECTION HEADING

Recommended:

```css
font-size: clamp(2rem, 4vw, 4rem);
line-height: 1;
letter-spacing: -0.04em;
font-weight: 600;
```

---

# 19. BODY TEXT

Large supporting text:

```css
font-size: 1.125rem;
line-height: 1.65;
```

Standard body:

```css
font-size: 1rem;
line-height: 1.65;
```

Maximum reading width:

```css
max-width: 680px;
```

Never stretch paragraphs across the entire screen.

---

# 20. TECHNICAL LABELS

Technical labels should use:

    IBM Plex Mono

Example:

    TECHNOLOGY / 01

Style:

```css
font-size: 0.6875rem;
font-weight: 500;
letter-spacing: 0.18em;
text-transform: uppercase;
```

Technical labels should feel like engineering documentation.

---

# 21. LETTER SPACING

Large headings:

    negative tracking

Body:

    neutral

Technical labels:

    wide tracking

Example:

```css
.label {
  letter-spacing: 0.18em;
}
```

Do not apply wide letter spacing to large headlines.

---

# 22. CONTAINER SYSTEM

Maximum page width:

```css
--container-max: 1440px;
```

Primary content width:

```css
--content-max: 1200px;
```

Reading width:

```css
--reading-max: 680px;
```

Technical diagram width:

```css
--diagram-max: 1280px;
```

---

# 23. PAGE PADDING

Desktop:

```css
padding-inline: 48px;
```

Large desktop:

```css
padding-inline: 64px;
```

Tablet:

```css
padding-inline: 32px;
```

Mobile:

```css
padding-inline: 20px;
```

Never allow content to touch the viewport edge.

---

# 24. GRID SYSTEM

Base grid:

    12 columns


Desktop:

```text
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
```

Typical layout:

    LABEL
    ├────── 3 columns

    CONTENT
    └────────────── 7 columns


Large hero:

    LEFT
    6 columns

    RIGHT
    6 columns


---

# 25. GRID GUTTER

Desktop:

```css
--grid-gap: 24px;
```

Large:

```css
--grid-gap: 32px;
```

Mobile:

```css
--grid-gap: 16px;
```

---

# 26. GRID LINES

Grid lines may appear visually.

Dark:

```css
--grid-line-dark: rgba(255,255,255,0.055);
```

Light:

```css
--grid-line-light: rgba(0,0,0,0.055);
```

The grid must remain subtle.

It should be noticed subconsciously.

---

# 27. BACKGROUND GRID

Preferred implementation:

    CSS linear-gradient


Example:

```css
background-image:
  linear-gradient(
    rgba(255,255,255,0.035) 1px,
    transparent 1px
  ),
  linear-gradient(
    90deg,
    rgba(255,255,255,0.035) 1px,
    transparent 1px
  );

background-size: 48px 48px;
```

Use only on selected dark sections.

Do not place the grid behind every section.

---

# 28. SECTION SPACING

Desktop:

```css
--section-space: 160px;
```

Large sections:

```css
--section-space-large: 200px;
```

Medium:

```css
--section-space-medium: 120px;
```

Mobile:

```css
--section-space-mobile: 88px;
```

---

# 29. VERTICAL RHYTHM

Preferred spacing scale:

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
--space-9: 96px;
--space-10: 128px;
--space-11: 160px;
--space-12: 200px;
```

Use the spacing scale consistently.

---

# 30. BORDERS

Borders are a major part of the Metabotics identity.

Dark:

```css
border: 1px solid #242424;
```

Light:

```css
border: 1px solid #D8D8D5;
```

Primary system diagrams:

```css
border: 1px solid currentColor;
```

Avoid thick decorative borders.

---

# 31. BORDER RADIUS

Default:

```css
--radius-none: 0px;
```

Small:

```css
--radius-sm: 2px;
```

Standard:

```css
--radius-md: 4px;
```

Maximum:

```css
--radius-lg: 6px;
```

Do NOT use:

    16px
    20px
    24px
    32px


The interface should feel engineered.

---

# 32. SHADOWS

Default:

    NO SHADOW.


Avoid conventional SaaS shadows.

Do not use:

```css
box-shadow:
  0 20px 40px rgba(...);
```

unless there is a clear functional reason.

Depth should come from:

    contrast
    borders
    spacing
    typography
    layering

---

# 33. CARDS

Cards are not the primary visual primitive.

Use cards only when information needs grouping.

Preferred:

```text
01
────────────────────────

SMART MONITORING

Industrial-grade sensing
and real-time process data.

TEMPERATURE
VIBRATION
ATMOSPHERE
```

Not:

```text
╭──────────────────────────╮
│      ICON                │
│                          │
│  Smart Monitoring        │
│                          │
│  description             │
│                          │
│       LEARN MORE         │
╰──────────────────────────╯
```

The first is the Metabotics language.

---

# 34. TECHNICAL PANELS

Technical panels may use:

```css
background: #0A0A0A;
border: 1px solid #242424;
```

Inside:

    technical label
    system name
    data
    diagram
    status

Example:

    SYSTEM / THERMAL-01

    TEMPERATURE

    1,248°C

    ─────────────────────
          DATA STREAM
    ─────────────────────

    STATUS: ACTIVE

---

# 35. BUTTON SYSTEM

Primary dark-section button:

```text
[ EXPLORE TECHNOLOGY → ]
```

Style:

```css
background: #F5F5F3;
color: #050505;
border: 1px solid #F5F5F3;
```

No rounded pill.

---

# 36. SECONDARY BUTTON

```text
[ VIEW RESEARCH → ]
```

Style:

```css
background: transparent;
color: #F5F5F3;
border: 1px solid #555555;
```

---

# 37. LIGHT BUTTON

```text
[ CONTACT METABOTICS → ]
```

Style:

```css
background: #050505;
color: #F5F5F3;
border: 1px solid #050505;
```

---

# 38. BUTTON DIMENSIONS

Desktop:

```css
min-height: 48px;
padding-inline: 20px;
```

Large CTA:

```css
min-height: 56px;
padding-inline: 24px;
```

Mobile:

```css
min-height: 52px;
```

Buttons must remain easy to tap.

---

# 39. BUTTON TYPOGRAPHY

Use:

    IBM Plex Mono

or:

    Inter


Style:

```css
font-size: 0.75rem;
font-weight: 500;
letter-spacing: 0.08em;
text-transform: uppercase;
```

---

# 40. BUTTON MOTION

Default:

    no dramatic animation


Hover:

    background changes
    arrow shifts slightly


Example:

    EXPLORE TECHNOLOGY →

becomes:

    EXPLORE TECHNOLOGY  →


Arrow movement:

```css
transform: translateX(4px);
```

Transition:

```css
180ms ease;
```

---

# 41. LINKS

Text links should use an understated technical style.

Example:

    Read Research →

On hover:

    underline
    arrow movement
    subtle opacity change


Do not use glowing link effects.

---

# 42. NAVIGATION

Desktop header height:

```css
height: 80px;
```

Large desktop:

```css
height: 88px;
```

Mobile:

```css
height: 72px;
```

Header should feel light and architectural.

---

# 43. NAVIGATION STRUCTURE

```text
METABOTICS

Technology
Applications
Research
About

                         Contact →
```

Logo stays left.

Navigation stays centered/right.

Contact stays visually distinct.

---

# 44. NAVIGATION BORDER

Dark:

```css
border-bottom: 1px solid rgba(255,255,255,0.08);
```

Light:

```css
border-bottom: 1px solid rgba(0,0,0,0.08);
```

The header should not look like a heavy app toolbar.

---

# 45. MOBILE NAVIGATION

Mobile:

```text
METABOTICS                         MENU
```

Menu opens into:

```text
TECHNOLOGY

APPLICATIONS
    Steel & Foundries
    Heat Treatment
    Mining & Materials
    Energy

RESEARCH

ABOUT

CONTACT
```

Use full-screen or near-full-screen navigation.

Avoid tiny dropdowns on mobile.

---

# 46. LOGO USAGE

Primary wordmark:

    METABOTICS


Do not modify:

- letter spacing
- proportions
- geometry
- logo mark
- wordmark structure

without an explicit brand decision.

The provided logo should remain the canonical identity asset.

---

# 47. LOGO ON DARK

Preferred:

    WHITE / LIGHT GRAY

Avoid:

    gray-on-gray

The logo must remain clearly visible.

---

# 48. LOGO ON LIGHT

Preferred:

    BLACK

Avoid:

    light gray

The logo should retain strong contrast.

---

# 49. ICON SYSTEM

Icons should be:

    geometric
    line-based
    monochrome
    minimal


Stroke:

```css
stroke-width: 1.25px;
```

or:

```css
stroke-width: 1.5px;
```

Avoid:

- colorful icons
- emoji
- glossy icons
- cartoon icons
- excessive filled iconography

---

# 50. ICON LANGUAGE

Icons should resemble:

    engineering symbols
    schematic diagrams
    technical instrumentation


Examples:

    sensor
    furnace
    graph
    cube
    network
    control loop
    database
    signal
    optimization curve

---

# 51. SYSTEM DIAGRAM LANGUAGE

System diagrams are a primary visual component.

Example:

```text
┌─────────────┐
│   SENSORS   │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│    EDGE     │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│    DATA     │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  AI ENGINE  │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   CONTROL   │
└─────────────┘
```

---

# 52. DIAGRAM VISUAL RULES

Use:

    1px lines
    circles
    squares
    thin arrows
    labels
    nodes
    coordinate lines


Avoid:

    3D glossy diagrams
    gradients
    thick arrows
    excessive color
    decorative illustrations

---

# 53. DATA VISUALIZATION

Data should look like instrumentation.

Preferred:

    time-series
    line graphs
    signal traces
    scatter plots
    heatmaps
    process curves
    system states


Example:

```text
TEMPERATURE

1800 ┤                 ╭────
1600 ┤             ╭───╯
1400 ┤         ╭───╯
1200 ┤     ╭───╯
1000 ┤─────╯
     └────────────────────
        TIME →
```

The chart itself becomes part of the brand language.

---

# 54. CHART COLORS

Default charts should remain monochrome.

Use:

    white
    gray
    light gray
    opacity


Use the system accent only for:

    selected series
    active threshold
    alert
    live signal

---

# 55. IMAGE TREATMENT

Photography should not dominate the brand.

Images should feel:

    documentary
    industrial
    authentic
    technical


Recommended treatment:

```css
filter:
  grayscale(100%)
  contrast(105%);
```

Optional subtle dark overlay on hero imagery.

---

# 56. IMAGE RATIO

Preferred:

    16:9
    3:2
    4:3


Avoid excessive portrait stock imagery.

Founder photography may use portrait ratio.

---

# 57. IMAGE OVERLAY

Dark image:

```text
IMAGE
+
BLACK OVERLAY
+
TECHNICAL LABEL
```

Example:

    INDUSTRIAL SYSTEM / 01

    THERMAL PROCESSING


Avoid putting paragraphs over busy images.

---

# 58. VIDEO

Video should only be used if it communicates something meaningful.

Good:

    furnace process
    machinery
    sensor deployment
    industrial operation
    digital twin simulation


Bad:

    abstract particles
    generic AI animation
    stock "technology" footage

---

# 59. HERO VISUAL LANGUAGE

Hero should contain one of:

    system diagram
    data visualization
    industrial image
    technical grid
    animated architecture


Do not use all five simultaneously.

The hero needs restraint.

---

# 60. HOMEPAGE HERO

Preferred composition:

```text
┌─────────────────────────────────────────────────────┐
│                                                     │
│  METABOTICS                                         │
│                                                     │
│  SOFTWARE FOR                                       │
│  THE PHYSICAL                                       │
│  WORLD.                                             │
│                                                     │
│  Intelligent software infrastructure                │
│  for industrial systems.                            │
│                                                     │
│  [ EXPLORE TECHNOLOGY → ]                           │
│                                                     │
│                                      SYSTEM         │
│                              ─────────────────      │
│                              PHYSICAL SYSTEM        │
│                                      ↓              │
│                                    DATA             │
│                                      ↓              │
│                               DIGITAL TWIN          │
│                                      ↓              │
│                               INTELLIGENCE          │
│                                      ↓              │
│                               OPTIMIZATION          │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

# 61. PAGE LABELS

Every major page should begin with a technical label.

Examples:

```text
TECHNOLOGY / 01

APPLICATIONS / 02

RESEARCH / 03

ABOUT / 04

CONTACT / 05
```

This reinforces the engineering-document aesthetic.

---

# 62. SECTION LABELS

Use:

```text
THE PROBLEM
THE SYSTEM
THE TECHNOLOGY
APPLICATIONS
RESEARCH
THE VISION
PARTNERSHIPS
```

Technical label above headline.

Example:

```text
THE SYSTEM

From physical process
to intelligent control.
```

---

# 63. NUMBERING SYSTEM

Use numbered sections selectively.

Example:

```text
01 / OBSERVE

02 / UNDERSTAND

03 / ACT
```

This is especially effective for:

- platform architecture
- technology
- research
- applications

Do not number every paragraph.

---

# 64. STATUS LANGUAGE

System states:

    ACTIVE
    CONNECTED
    PROCESSING
    MONITORING
    OPTIMIZING
    OFFLINE
    DEGRADED
    ALERT


Status should be displayed as technical information.

Example:

```text
● SYSTEM ACTIVE
```

---

# 65. MOTION PRINCIPLE

Animation represents:

    INFORMATION MOVING
    THROUGH A SYSTEM


Examples:

    sensor → edge
    edge → data
    data → model
    model → decision
    decision → control


Motion should never exist only because "the page needs animation."

---

# 66. MOTION SPEED

Micro interaction:

```css
120ms - 180ms
```

Normal transition:

```css
200ms - 350ms
```

System animation:

```css
500ms - 1200ms
```

Hero sequence:

```css
800ms - 1800ms
```

Avoid excessively slow animations.

---

# 67. EASING

Default:

```css
cubic-bezier(0.22, 1, 0.36, 1)
```

Use for:

- reveals
- movement
- page transitions

Micro interactions may use:

```css
ease-out
```

---

# 68. REDUCED MOTION

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

When enabled:

    disable decorative motion
    reduce transitions
    stop looping animations
    keep diagrams readable


No information may depend on animation.

---

# 69. SCROLL BEHAVIOR

Scroll should reveal architecture progressively.

Example:

    SECTION ENTERS
          ↓
    LABEL APPEARS
          ↓
    HEADLINE APPEARS
          ↓
    SYSTEM DIAGRAM DRAWS
          ↓
    DATA FLOWS
          ↓
    DETAILS APPEAR


Do not animate every element independently.

---

# 70. PAGE TRANSITIONS

Page transitions should be subtle.

Preferred:

    opacity
    slight vertical movement
    line expansion


Avoid:

    full-screen morphing
    excessive 3D transitions
    long loading animations

---

# 71. RESEARCH DESIGN

Research should feel closer to:

    technical publication
    engineering journal
    research laboratory


than:

    marketing blog


Research index:

```text
RESEARCH / 001

THE FUTURE OF INDUSTRY 4.0
IN AFRICAN METALLURGY

Industry 4.0
October 2026
8 MIN READ

READ →
```

---

# 72. RESEARCH ARTICLE DESIGN

Article layout:

```text
CATEGORY

TITLE

DESCRIPTION

AUTHOR
DATE
READING TIME

────────────────────

ABSTRACT

────────────────────

ARTICLE

────────────────────

FIGURE

────────────────────

ARTICLE

────────────────────

CONCLUSION

────────────────────

RELATED RESEARCH
```

Maximum article reading width:

```css
max-width: 720px;
```

---

# 73. APPLICATION DESIGN

Applications should feel like industrial case studies.

Example:

```text
APPLICATION / 01

STEEL & FOUNDRIES

Real-time intelligence
for high-temperature
materials processing.
```

Then:

    PROCESS

    DATA

    INTELLIGENCE

    CONTROL

    VALUE

---

# 74. APPLICATION HOVER

Desktop application item:

```text
STEEL & FOUNDRIES
────────────────────────────

Optimize furnace operations,
reduce process instability,
and improve quality.

                            →
```

Hover:

    image shifts slightly
    technical metadata appears
    arrow moves
    border becomes stronger


No huge card animation.

---

# 75. FORMS

Forms must look like technical interfaces.

Input:

```css
background: transparent;
border: 1px solid #555555;
border-radius: 2px;
```

Focus:

```css
border-color: #F5F5F3;
```

Labels:

    IBM Plex Mono
    uppercase
    small
    tracked


Example:

```text
NAME

[________________________________]

COMPANY

[________________________________]

EMAIL

[________________________________]
```

---

# 76. FORM STATES

Must have:

    DEFAULT
    FOCUS
    FILLED
    ERROR
    SUCCESS
    DISABLED


Errors must be readable.

Do not rely solely on color.

---

# 77. ERROR DESIGN

Example:

```text
EMAIL

[ invalid@example ]

ERROR / Please enter a valid email address.
```

Technical but human-readable.

---

# 78. SUCCESS DESIGN

After contact form submission:

```text
MESSAGE RECEIVED

Your inquiry has been submitted.

METABOTICS / CONTACT / 01

We will review your message and respond.
```

Do not use a generic:

    "Thanks! 😊"

---

# 79. FOOTER DESIGN

Footer should be visually heavy.

Background:

```css
#050505
```

Large wordmark.

Then:

    COMPANY
    SOLUTIONS
    RESEARCH
    CONNECT


Bottom:

    © 2026 METABOTICS


The footer can include a subtle technical grid.

---

# 80. MOBILE DESIGN PRINCIPLE

Mobile is not a compressed desktop.

It is a deliberate vertical engineering document.

Desktop:

    PHYSICAL → DATA → DIGITAL TWIN → INTELLIGENCE → OPTIMIZATION


Mobile:

    PHYSICAL
       ↓
     DATA
       ↓
   DIGITAL TWIN
       ↓
  INTELLIGENCE
       ↓
  OPTIMIZATION

---

# 81. MOBILE TYPOGRAPHY

Hero:

```css
font-size: clamp(3rem, 15vw, 4.5rem);
line-height: 0.92;
```

Section title:

```css
font-size: clamp(2rem, 10vw, 3rem);
```

Body:

```css
font-size: 1rem;
line-height: 1.65;
```

Do not make body text smaller than necessary.

---

# 82. MOBILE SPACING

Horizontal:

```css
padding-inline: 20px;
```

Section:

```css
padding-block: 88px;
```

Large hero:

```css
padding-block:
  120px 96px;
```

---

# 83. MOBILE DIAGRAMS

Horizontal diagrams should transform into vertical diagrams.

Desktop:

```text
SENSOR → EDGE → DATA → AI → CONTROL
```

Mobile:

```text
SENSOR
  ↓
EDGE
  ↓
DATA
  ↓
AI
  ↓
CONTROL
```

---

# 84. RESPONSIVE BREAKPOINTS

Recommended:

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

Do not create breakpoints for individual components unless necessary.

---

# 85. ACCESSIBILITY

Minimum requirements:

    WCAG AA contrast
    keyboard navigation
    focus indicators
    semantic headings
    semantic buttons
    semantic links
    form labels
    alt text
    reduced motion


Do not sacrifice accessibility for aesthetics.

---

# 86. FOCUS STATE

Focus must be obvious.

Example:

```css
outline:
  2px solid #F5F5F3;

outline-offset:
  3px;
```

Never remove focus outlines without replacing them.

---

# 87. CURSOR

Custom cursor is NOT required.

If introduced later:

    simple
    monochrome
    subtle


Do not use:

    oversized circles
    trailing particles
    glowing cursors

The website should work perfectly without a custom cursor.

---

# 88. LOADING STATE

Preferred:

```text
METABOTICS

SYSTEM INITIALIZING
───────────────
██████████░░░░░

01 / LOADING
02 / CONNECTING
03 / READY
```

However, this should only be used where actual loading exists.

Do not create artificial loading screens that slow the user down.

---

# 89. EMPTY STATES

Technical:

```text
NO DATA AVAILABLE

The requested system data
is currently unavailable.
```

Not:

```text
Oops! Nothing here 😅
```

---

# 90. 404 PAGE

Suggested:

```text
404 / SYSTEM NOT FOUND

The requested route does not exist.

[ RETURN TO METABOTICS → ]
```

Minimal.

---

# 91. DESIGN TOKENS

Canonical CSS variables:

```css
:root {
  /* Colors */
  --black: #050505;
  --black-deep: #020202;
  --surface: #0A0A0A;
  --graphite: #171717;

  --white: #F5F5F3;
  --white-pure: #FFFFFF;

  --gray-100: #E8E8E6;
  --gray-300: #C8C8C6;
  --gray-500: #888888;
  --gray-700: #555555;
  --gray-900: #242424;

  --border-light: #D8D8D5;
  --border-dark: #242424;

  --system: #A8FF60;

  /* Typography */
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --font-mono: "IBM Plex Mono", monospace;

  /* Layout */
  --container-max: 1440px;
  --content-max: 1200px;
  --reading-max: 680px;
  --diagram-max: 1280px;

  /* Radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 6px;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
  --space-10: 128px;
  --space-11: 160px;
  --space-12: 200px;

  /* Grid */
  --grid-gap: 24px;

  /* Motion */
  --ease-standard:
    cubic-bezier(0.22, 1, 0.36, 1);

  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 600ms;
}
```

---

# 92. GLOBAL CSS FOUNDATION

Base:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--black);
  color: var(--white);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

img,
svg,
video {
  display: block;
  max-width: 100%;
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
```

---

# 93. TYPOGRAPHY FOUNDATION

```css
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-family: var(--font-display);
  font-weight: 600;
  letter-spacing: -0.04em;
}

p {
  margin: 0;
}

code,
pre,
.mono {
  font-family: var(--font-mono);
}
```

---

# 94. CONTAINER FOUNDATION

```css
.container {
  width: min(
    calc(100% - 96px),
    var(--container-max)
  );

  margin-inline: auto;
}

.content {
  width: min(
    100%,
    var(--content-max)
  );

  margin-inline: auto;
}
```

Mobile:

```css
@media (max-width: 767px) {
  .container {
    width: min(
      calc(100% - 40px),
      var(--container-max)
    );
  }
}
```

---

# 95. SECTION FOUNDATION

```css
.section {
  padding-block:
    var(--space-11);
}

.section--large {
  padding-block:
    var(--space-12);
}
```

Mobile:

```css
@media (max-width: 767px) {
  .section {
    padding-block:
      var(--space-9);
  }

  .section--large {
    padding-block:
      var(--space-10);
  }
}
```

---

# 96. DARK GRID BACKGROUND

```css
.technical-grid {
  background-color: var(--black);

  background-image:
    linear-gradient(
      rgba(255,255,255,0.035) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(255,255,255,0.035) 1px,
      transparent 1px
    );

  background-size: 48px 48px;
}
```

---

# 97. LIGHT GRID BACKGROUND

```css
.technical-grid-light {
  background-color: var(--white);

  background-image:
    linear-gradient(
      rgba(0,0,0,0.035) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(0,0,0,0.035) 1px,
      transparent 1px
    );

  background-size: 48px 48px;
}
```

---

# 98. DESIGN RULES

RULE 01:

    When in doubt, remove something.


RULE 02:

    Typography beats decoration.


RULE 03:

    Systems beat cards.


RULE 04:

    Lines beat shadows.


RULE 05:

    Data beats generic illustration.


RULE 06:

    Engineering beats "AI aesthetics."


RULE 07:

    Black and white remain the default.


RULE 08:

    Animation must communicate something.


RULE 09:

    Every visual should support the physical-world narrative.


RULE 10:

    Never make a claim visually stronger than the evidence behind it.

---

# 99. ANTI-PATTERNS

Never introduce:

    purple AI gradients
    blue glowing interfaces
    glassmorphism everywhere
    giant rounded cards
    excessive shadows
    floating blobs
    generic robot illustrations
    AI brain imagery
    cryptocurrency aesthetics
    rainbow gradients
    emoji-based UI
    fake terminal windows
    excessive 3D
    decorative particles
    generic stock-office photography


If a component looks like it could belong to any
modern SaaS startup, redesign it.

---

# 100. VISUAL QUALITY TEST

Before accepting any section, ask:

    Does it look industrial?

    Does it look intelligent?

    Does it feel engineered?

    Is the hierarchy immediately clear?

    Does the design work without decoration?

    Does it reinforce physical → digital → intelligence?

    Is the page visually quiet enough to feel premium?

    Could this section belong to a generic SaaS template?

If the answer to the last question is YES:

    REDESIGN IT.

---

# 101. FINAL DESIGN STATEMENT

Metabotics is:

    MONOCHROME
    INDUSTRIAL
    TECHNICAL
    EDITORIAL
    DATA-DRIVEN
    ENGINEERED
    RESEARCH-ORIENTED


The visual identity is not based on making
technology look futuristic.

It is based on making complex industrial
technology look understandable.

The website should therefore feel like:

    AN ENGINEERING SYSTEM
    THAT HAPPENS TO BE A WEBSITE.
```

## Current file sequence

We now have:

```text
docs/
├── 01-SITE-ARCHITECTURE.md   ✅
└── 02-DESIGN-SYSTEM.md       ✅
```