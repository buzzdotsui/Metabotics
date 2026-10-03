# FILE 05 — `05-IMPLEMENTATION-PLAN.md`

Copy and paste this into:

```text
docs/05-IMPLEMENTATION-PLAN.md
```

```md
# METABOTICS
# IMPLEMENTATION PLAN

Version: 1.0
Status: Development Blueprint
Purpose: Convert the architecture, design system, page layouts, and component specification into an executable implementation sequence.

---

# 01. PURPOSE

This document defines HOW the Metabotics website should be built.

It establishes:

    repository inspection
    implementation phases
    file creation order
    dependency decisions
    development gates
    testing requirements
    responsive validation
    accessibility validation
    security validation
    content integration
    production readiness


This document does NOT replace:

    01-SITE-ARCHITECTURE.md
    02-DESIGN-SYSTEM.md
    03-PAGE-LAYOUTS.md
    04-COMPONENT-SPECIFICATION.md


Those documents define WHAT the system should be.

This document defines HOW to execute it.

---

# 02. NON-NEGOTIABLE IMPLEMENTATION PRINCIPLE

DO NOT START BY BUILDING RANDOM PAGES.

The implementation must follow:

    INSPECT
        ↓
    UNDERSTAND
        ↓
    PLAN
        ↓
    BUILD FOUNDATIONS
        ↓
    BUILD COMPONENTS
        ↓
    BUILD HOMEPAGE
        ↓
    VALIDATE
        ↓
    BUILD REMAINING PAGES
        ↓
    HARDEN
        ↓
    SHIP


Do not skip directly from:

    design → page implementation


without establishing the underlying system.

---

# 03. FIRST ACTION — REPOSITORY INSPECTION

Before changing any source file, inspect the repository.

Determine:

    framework
    language
    package manager
    build system
    routing system
    styling system
    existing component system
    existing assets
    existing pages
    environment configuration
    testing framework
    linting
    formatting
    deployment configuration


Typical files to inspect include:

    package.json
    package-lock.json
    pnpm-lock.yaml
    yarn.lock
    tsconfig.json
    vite.config.*
    next.config.*
    astro.config.*
    src/
    app/
    pages/
    components/
    public/
    README.md


Do not assume the project uses React.

Do not assume the project uses Next.js.

Do not assume the project uses Tailwind.

Use the repository as the source of truth.

---

# 04. REPOSITORY INSPECTION CHECKLIST

Before implementation:

[ ] Identify framework.

[ ] Identify language.

[ ] Identify package manager.

[ ] Identify entry point.

[ ] Identify routing architecture.

[ ] Identify styling architecture.

[ ] Identify existing reusable components.

[ ] Identify existing layout components.

[ ] Identify existing assets.

[ ] Identify existing fonts.

[ ] Identify environment variables.

[ ] Identify API integrations.

[ ] Identify tests.

[ ] Identify linting.

[ ] Identify formatting.

[ ] Identify build command.

[ ] Identify development command.

[ ] Identify production build command.

[ ] Identify deployment target.

[ ] Identify existing authentication if present.

[ ] Identify analytics if present.

[ ] Identify forms/backend integrations.

[ ] Identify existing SEO implementation.

---

# 05. DO NOT DESTROY EXISTING WORK

Before modifying an existing project:

    understand it first.


Do not:

    delete components because they look unnecessary
    replace the router without reason
    replace the CSS system without reason
    upgrade every dependency automatically
    rewrite configuration files unnecessarily
    remove existing environment variables
    replace existing working integrations
    rename large portions of the project without justification


If an existing implementation conflicts with this specification:

    document the conflict
    determine whether it should be adapted
    make the smallest safe change


Prefer incremental modification over wholesale replacement.

---

# 06. IMPLEMENTATION PHASES

The project will be built in the following phases:

```text
PHASE 0
Repository Audit

        ↓

PHASE 1
Foundation

        ↓

PHASE 2
Global Layout

        ↓

PHASE 3
Core Components

        ↓

PHASE 4
Technical Visualization

        ↓

PHASE 5
Homepage

        ↓

PHASE 6
Technology

        ↓

PHASE 7
Applications

        ↓

PHASE 8
Research

        ↓

PHASE 9
About + Contact

        ↓

PHASE 10
Accessibility + Security

        ↓

PHASE 11
Performance + SEO

        ↓

PHASE 12
Production Validation
```

---

# 07. PHASE 0 — REPOSITORY AUDIT

Goal:

Understand the existing application before writing implementation code.

Tasks:

    inspect repository
    identify framework
    inspect package.json
    inspect source tree
    inspect current routes
    inspect existing styles
    inspect existing components
    inspect assets
    inspect build configuration


Output:

    implementation notes


Create:

```text
docs/
└── 06-REPOSITORY-AUDIT.md
```

This document should record:

    current architecture
    existing strengths
    existing conflicts
    files that can be reused
    files that need modification
    files that need creation
    dependency gaps
    technical risks


Do not proceed to large-scale implementation
until the repository architecture is understood.

---

# 08. PHASE 1 — FOUNDATION

Build the smallest design foundation required
for every page.

Order:

    design tokens
    global CSS
    typography
    container
    grid
    section
    divider
    button
    link


Recommended structure:

```text
src/
├── styles/
│   ├── tokens.css
│   ├── typography.css
│   ├── global.css
│   └── utilities.css
│
└── components/
    └── ui/
        ├── Container.*
        ├── Section.*
        ├── Divider.*
        ├── Button.*
        └── Link.*
```

Adapt extensions to the existing project.

---

# 09. FOUNDATION ACCEPTANCE GATE

Do not continue until:

[ ] Global background is correct.

[ ] Primary text color is correct.

[ ] Secondary text color is correct.

[ ] Typography hierarchy exists.

[ ] Container works.

[ ] Desktop spacing works.

[ ] Mobile spacing works.

[ ] Buttons have correct states.

[ ] Focus states exist.

[ ] No horizontal overflow exists.

[ ] Existing application functionality remains intact.

---

# 10. PHASE 2 — GLOBAL LAYOUT

Build:

    SiteHeader
    MobileNavigation
    SiteFooter
    PageShell


Desktop navigation:

```text
METABOTICS

TECHNOLOGY
APPLICATIONS
RESEARCH
ABOUT
CONTACT →
```

Mobile:

```text
METABOTICS                         MENU
```

---

# 11. HEADER IMPLEMENTATION

Requirements:

    semantic navigation
    accessible mobile menu
    active route
    keyboard navigation
    visible focus
    responsive behavior


Do not:

    hardcode separate desktop and mobile
    duplicate navigation data
    create inaccessible custom controls


Navigation should be data-driven where practical.

Example conceptual data:

```ts
const navigation = [
  {
    label: "Technology",
    href: "/technology",
  },
  {
    label: "Applications",
    href: "/applications",
  },
  {
    label: "Research",
    href: "/research",
  },
  {
    label: "About",
    href: "/about",
  },
];
```

Contact may be treated as a primary action.

Adapt this structure to the actual routing system.

---

# 12. FOOTER IMPLEMENTATION

Footer must reuse valid navigation destinations.

Do not create links to pages that do not exist.

During development, incomplete destinations may be visibly marked as TODOs internally, but must not ship as fake production links.

Required footer areas:

    company
    technology
    connect


Final legal information must use the actual company information
available to the project.

Do not invent:

    legal entities
    addresses
    registration numbers
    social profiles
    email addresses

---

# 13. PHASE 3 — CORE COMPONENTS

Implement:

    SectionLabel
    Hero
    FeatureSection
    CTASection
    ApplicationRow
    ApplicationList
    ResearchRow
    ResearchList


At this stage, components should be rendered with
static development data.

Do not connect CMS or backend systems prematurely.

---

# 14. COMPONENT DEVELOPMENT RULE

Every component should be built in this sequence:

```text
STRUCTURE
    ↓
STYLING
    ↓
RESPONSIVE BEHAVIOR
    ↓
INTERACTION
    ↓
ACCESSIBILITY
    ↓
TESTING
```

Do not implement complicated animation
before the static component is correct.

---

# 15. PHASE 4 — TECHNICAL VISUALIZATION

Build:

    SystemDiagram
    SystemNode
    ProcessFlow
    TechnicalAnnotation
    DataVisualization


Canonical system:

```text
PHYSICAL SYSTEM
       ↓
DATA
       ↓
DIGITAL TWIN
       ↓
INTELLIGENCE
       ↓
OPTIMIZATION
```

---

# 16. DIAGRAM IMPLEMENTATION RULE

Prefer HTML/CSS/SVG for diagrams where appropriate.

Use raster images only when the visual itself
requires photographic or raster content.

For interactive diagrams:

    keep semantic data separate from rendering.


Example:

```ts
const systemStages = [
  {
    id: "physical-system",
    label: "PHYSICAL SYSTEM",
    description: "Machines, processes and physical signals.",
  },
  {
    id: "data",
    label: "DATA",
    description: "Operational signals and measurements.",
  },
  {
    id: "digital-twin",
    label: "DIGITAL TWIN",
    description: "Computational representation of the system.",
  },
  {
    id: "intelligence",
    label: "INTELLIGENCE",
    description: "Prediction, understanding and reasoning.",
  },
  {
    id: "optimization",
    label: "OPTIMIZATION",
    description: "Operational decisions and control.",
  },
];
```

This data should drive the visual component.

---

# 17. DIAGRAM ACCESSIBILITY

Every important diagram must have an understandable
textual representation.

Example:

```text
The Metabotics system connects physical systems
to data, digital twins, intelligence and optimization.
```

If the visual communicates additional essential information,
provide that information accessibly.

Do not make critical information available only
through animation.

---

# 18. PHASE 5 — HOMEPAGE

Only after the foundation and reusable components
are working should the homepage be assembled.

Homepage:

```text
HEADER

HERO

THE PHYSICAL WORLD

THE SYSTEM

PLATFORM

INTELLIGENCE

APPLICATIONS

RESEARCH

VISION

CONTACT CTA

FOOTER
```

---

# 19. HOMEPAGE BUILD ORDER

Build sections individually.

Order:

    01 Hero
    02 Physical World
    03 System
    04 Platform
    05 Intelligence
    06 Applications
    07 Research
    08 Vision
    09 Contact CTA


After every major section:

    render
    inspect
    test
    correct


Do not build all nine sections and then
discover that the spacing system is wrong.

---

# 20. HOMEPAGE FIRST VISUAL MILESTONE

The first major milestone is:

```text
HEADER
    +
HERO
    +
SYSTEM DIAGRAM
    +
ONE LIGHT SECTION
    +
APPLICATION LIST
    +
FOOTER
```

This should be visually reviewed before
implementing every other section.

---

# 21. HOMEPAGE ACCEPTANCE GATE

[ ] Header is correct.

[ ] Hero is visually dominant.

[ ] Physical-world positioning is immediately understandable.

[ ] System diagram is readable.

[ ] Black/white identity is preserved.

[ ] Typography hierarchy is correct.

[ ] Application list feels industrial.

[ ] CTA is visible.

[ ] Footer works.

[ ] Mobile composition is intentional.

[ ] No section creates horizontal overflow.

---

# 22. PHASE 6 — TECHNOLOGY PAGE

Route:

    /technology


Build:

    TechnologyHero
    SystemOverview
    TechnologyLayer
    ArchitectureDiagram
    CTASection


Primary story:

```text
PHYSICAL WORLD
        ↓
DATA
        ↓
DIGITAL TWIN
        ↓
INTELLIGENCE
        ↓
OPTIMIZATION
```

---

# 23. TECHNOLOGY PAGE RULE

Do not simply duplicate the homepage.

The homepage:

    introduces


The technology page:

    explains


The technology page should contain
more technical information and deeper diagrams.

---

# 24. PHASE 7 — APPLICATIONS

Build:

    ApplicationsPage
    ApplicationList
    ApplicationRow
    ApplicationDetailPage
    ProcessFlow
    RelatedApplications


Initial categories:

    Steel & Foundries
    Heat Treatment
    Mining & Materials
    Energy


Only use categories that reflect the actual
product/application strategy.

---

# 25. APPLICATION DATA

Keep application content separate from components.

Example:

```ts
const applications = [
  {
    slug: "steel-foundries",
    number: "01",
    title: "STEEL & FOUNDRIES",
    description:
      "Industrial intelligence for complex materials-processing systems.",
    href: "/applications/steel-foundries",
  },
];
```

Do not embed this content repeatedly
inside JSX/template files.

---

# 26. APPLICATION DETAIL RULE

Every application detail page must answer:

    What system is being addressed?

    What makes the system difficult?

    What data is available?

    What does the software model?

    What intelligence is produced?

    What operational decision is supported?


Do not make unsupported claims about:

    savings
    accuracy
    production improvements
    uptime
    emissions
    ROI
    customer results

unless those claims are backed by verified data.

---

# 27. PHASE 8 — RESEARCH

Build:

    ResearchPage
    ResearchList
    ResearchRow
    ResearchArticlePage


Research data should be separated from
the presentation layer.

Example:

```ts
const researchItems = [
  {
    slug: "example-research",
    category: "DIGITAL TWINS",
    title: "Example Research Title",
    description: "Short research description.",
    publishedAt: "2026-01-01",
    readingTime: 8,
    href: "/research/example-research",
  },
];
```

Replace development content with verified
real content before production.

---

# 28. RESEARCH CONTENT RULE

Never fabricate:

    publications
    papers
    researchers
    institutions
    dates
    citations
    research results


If content is not available:

    use clearly marked placeholder content during development
    or omit the entry


Do not make fictional research appear real.

---

# 29. PHASE 9 — ABOUT + CONTACT

Build:

    AboutPage
    ContactPage
    ContactForm


About:

```text
HERO
WHY WE EXIST
WHAT WE BUILD
HOW WE THINK
TEAM
RESEARCH / ENGINEERING
CTA
```

Contact:

```text
HERO
CONTACT FORM
CONTACT INFORMATION
CTA / SUPPORTING INFORMATION
FOOTER
```

---

# 30. CONTACT FORM IMPLEMENTATION

Development stage:

    validate client-side
    validate server-side
    handle loading
    handle success
    handle failure


Production stage:

    server-side validation
    rate limiting
    abuse prevention
    secure transport
    logging without unnecessary sensitive data


Never trust client-side validation as the
security boundary.

---

# 31. FORM DATA

Minimum:

```text
name
email
message
```

Optional:

```text
company
interest
```

Do not collect information that the business
does not actually need.

Data minimization is preferred.

---

# 32. PHASE 10 — ACCESSIBILITY HARDENING

Perform an accessibility pass after
all pages exist.

Check:

    headings
    landmarks
    navigation
    keyboard controls
    focus
    forms
    error messages
    images
    diagrams
    reduced motion
    contrast
    mobile controls


---

# 33. ACCESSIBILITY TEST MATRIX

### Keyboard

Test:

    Tab
    Shift + Tab
    Enter
    Space
    Escape
    arrow keys where applicable


### Screen reader

Verify:

    page title
    navigation
    headings
    form labels
    error messages
    links
    buttons
    diagrams


### Responsive

Test at:

    320px
    375px
    390px
    768px
    1024px
    1280px
    1440px
    large desktop widths


Do not treat these values as the only
supported widths.

---

# 34. PHASE 11 — SECURITY HARDENING

The website must not rely on visual security.

Review:

    form endpoints
    API routes
    environment variables
    server-side authorization
    input validation
    output encoding
    rate limiting
    CSRF protection where applicable
    CORS configuration
    dependency vulnerabilities
    error exposure
    secrets


---

# 35. CLIENT STORAGE RULE

Never store sensitive authentication/session
tokens in LocalStorage.

If authentication is introduced:

    prefer secure server-managed sessions
    or appropriately configured secure cookies


Authentication architecture must be evaluated
independently from the marketing website.

---

# 36. SERVER-SIDE AUTHORIZATION

If administrative functionality exists:

    authorization must be enforced server-side.


Never trust:

    hidden buttons
    disabled UI
    frontend route guards
    client-side role values


The frontend is not the security boundary.

---

# 37. SECRET MANAGEMENT

Never place:

    API keys
    private tokens
    service credentials
    database credentials


inside publicly served frontend code.

Use environment/server-side configuration
appropriate to the project's deployment architecture.

---

# 38. ERROR HANDLING

Production responses must not expose:

    stack traces
    internal filesystem paths
    database queries
    secrets
    environment variables
    internal service details


Detailed errors belong in secure server-side logs.

---

# 39. PHASE 12 — PERFORMANCE

Optimize only after correctness.

Review:

    image sizes
    image formats
    font loading
    JavaScript bundles
    CSS size
    route-level code
    lazy loading
    rendering strategy
    caching


Do not sacrifice accessibility or clarity
for arbitrary performance numbers.

---

# 40. IMAGE RULES

Industrial images should:

    have meaningful filenames
    use appropriate dimensions
    use modern formats where supported
    include alternative text when meaningful
    avoid unnecessary oversized downloads


Decorative images:

    use empty alt text or equivalent
    where appropriate.


Do not use huge source images when a smaller
asset provides the same visual quality.

---

# 41. FONT LOADING

Use the actual project font strategy.

Requirements:

    avoid unnecessary font families
    avoid loading unused weights
    avoid render-blocking font behavior where possible
    preserve fallback typography


Do not introduce five different typefaces.

The visual system should remain disciplined.

---

# 42. SEO IMPLEMENTATION

Each public page should have:

    unique title
    useful description
    canonical URL where appropriate
    correct heading hierarchy
    social metadata where required
    meaningful URL
    appropriate structured metadata where justified


Do not stuff keywords.

Do not create duplicate metadata across every page.

---

# 43. PAGE SEO EXAMPLES

Homepage title concept:

    Metabotics — Software for the Physical World


Technology:

    Metabotics Technology — Software for Industrial Systems


Applications:

    Metabotics Applications — Industrial Intelligence


Research:

    Metabotics Research


About:

    About Metabotics


Contact:

    Contact Metabotics


Final wording should be validated against
the actual brand/content strategy.

---

# 44. ROUTE VALIDATION

Verify every route.

Expected routes:

```text
/
 /technology
 /applications
 /applications/[slug]
 /research
 /research/[slug]
 /about
 /contact
```

And:

```text
/*
```

for the not-found experience.

Exact route syntax depends on the framework.

---

# 45. LINK VALIDATION

Every internal link must:

    point to a real route
    use the correct path
    work on direct navigation
    work after refresh
    work on mobile


Every external link must:

    point to a real destination
    use appropriate security attributes when needed
    not be fabricated


Do not ship:

    #
    javascript:void(0)
    fake LinkedIn URLs
    placeholder emails
    placeholder company links

unless they are explicitly temporary
and removed before production.

---

# 46. CONTENT VALIDATION

Before launch, review every text block.

Check:

[ ] Brand name is consistent.

[ ] Technical terminology is consistent.

[ ] Product capabilities are accurate.

[ ] Industry claims are supported.

[ ] Research claims are supported.

[ ] No placeholder text remains.

[ ] No Lorem Ipsum remains.

[ ] No fake statistics remain.

[ ] No fictional customers remain.

[ ] No fictional partnerships remain.

[ ] No fabricated publications remain.

---

# 47. VISUAL QA

Perform a visual review of:

    homepage
    technology
    applications
    application detail
    research
    research article
    about
    contact
    404


For every page inspect:

    typography
    spacing
    alignment
    imagery
    diagrams
    borders
    CTA placement
    responsive behavior
    footer


---

# 48. VISUAL QA QUESTIONS

Ask:

    Does this look like Metabotics?

    Does the page communicate its purpose immediately?

    Is the hierarchy obvious?

    Is anything unnecessarily decorative?

    Is anything too small?

    Is there too much empty space?

    Is there too little empty space?

    Are technical visuals understandable?

    Are sections visually connected?

    Does mobile still feel intentional?

---

# 49. BROWSER TEST MATRIX

Test at minimum:

    Chromium-based browser
    Firefox
    Safari where available


Test:

    desktop
    tablet
    mobile


Check:

    navigation
    animations
    forms
    images
    fonts
    layout
    scrolling
    focus
    error states

---

# 50. REDUCED MOTION

When the user prefers reduced motion:

    minimize transitions
    disable decorative animations
    preserve content
    preserve functionality


The site must remain understandable
without animation.

---

# 51. NO-HORIZONTAL-OVERFLOW RULE

At every breakpoint:

    body must not unexpectedly overflow horizontally.


Common causes to inspect:

    oversized diagrams
    fixed-width images
    long URLs
    navigation rows
    large headings
    absolute-positioned annotations
    code blocks
    tables


Fix the underlying component rather than
adding arbitrary global overflow hiding.

Do not blindly use:

```css
overflow-x: hidden;
```

as a substitute for fixing layout problems.

---

# 52. COMPONENT REUSE RULE

Before creating a new component ask:

    Does an existing component already solve this?

If yes:

    reuse it
    extend it if necessary


If no:

    create a new component with a clearly
    defined responsibility.


Do not create:

    Hero2
    HeroNew
    HeroFinal
    HeroFinal2


because the component architecture became unclear.

---

# 53. DATA SEPARATION

Keep content separate from presentation.

Prefer:

```text
data/
    applications
    research
    navigation
```

over:

```text
ApplicationPage.tsx
    ├── hardcoded application 01
    ├── hardcoded application 02
    ├── hardcoded application 03
```

This improves:

    maintainability
    consistency
    testing
    content updates

---

# 54. ANIMATION IMPLEMENTATION ORDER

Animations are the final visual layer.

Correct order:

```text
STATIC LAYOUT
    ↓
RESPONSIVE LAYOUT
    ↓
INTERACTION
    ↓
ACCESSIBILITY
    ↓
ANIMATION
```

Never use animation to hide broken layout.

---

# 55. DEVELOPMENT DATA

During implementation, placeholder data may be used.

Every placeholder must be obvious internally.

Example:

```ts
const developmentResearchItem = {
  title: "PLACEHOLDER — REPLACE BEFORE PRODUCTION",
};
```

Before release:

[ ] Remove all development labels.

[ ] Replace placeholder images.

[ ] Replace placeholder text.

[ ] Replace placeholder links.

[ ] Remove test data.

---

# 56. ENVIRONMENT CONFIGURATION

Separate:

    development
    staging
    production


Never commit secrets.

Review:

    .env
    .env.local
    .env.production
    deployment environment variables


Only public values intended for the browser
may be exposed to client-side code.

---

# 57. GIT / CHANGE MANAGEMENT

Use focused changes.

Prefer:

```text
feat: add system diagram
feat: add homepage hero
feat: add application list
fix: correct mobile navigation
fix: prevent diagram overflow
```

Avoid giant commits containing:

    unrelated refactors
    dependency upgrades
    formatting changes
    page implementation
    backend changes


all at once.

---

# 58. IMPLEMENTATION CHECKPOINTS

Checkpoint 01:

    Repository understood.


Checkpoint 02:

    Foundation works.


Checkpoint 03:

    Header and footer work.


Checkpoint 04:

    Core components work.


Checkpoint 05:

    Technical diagram works.


Checkpoint 06:

    Homepage works.


Checkpoint 07:

    All routes work.


Checkpoint 08:

    Accessibility pass complete.


Checkpoint 09:

    Security pass complete.


Checkpoint 10:

    Performance + SEO pass complete.


Checkpoint 11:

    Production validation complete.

---

# 59. FAILURE RULE

If a checkpoint fails:

    stop advancing
    identify root cause
    fix foundation
    rerun validation


Do not continue building additional pages
on top of a broken foundation.

---

# 60. FINAL PRODUCTION CHECKLIST

## Architecture

[ ] Routes are correct.

[ ] Components are reusable.

[ ] Content is separated from presentation.

[ ] No unnecessary duplication exists.

[ ] Existing repository conventions are respected.

## Design

[ ] Black/white identity is consistent.

[ ] Typography is consistent.

[ ] Grid is consistent.

[ ] Spacing is consistent.

[ ] Technical diagrams are coherent.

[ ] Industrial imagery is appropriate.

## Responsive

[ ] Mobile works.

[ ] Tablet works.

[ ] Desktop works.

[ ] No unexpected horizontal overflow.

[ ] Navigation works at every supported width.

## Accessibility

[ ] Keyboard navigation works.

[ ] Focus states exist.

[ ] Forms are labelled.

[ ] Errors are accessible.

[ ] Images have appropriate alt text.

[ ] Diagrams have accessible descriptions.

[ ] Reduced motion is supported.

## Security

[ ] Secrets are not exposed.

[ ] Server-side validation exists where needed.

[ ] Authorization is server-side where applicable.

[ ] Form endpoints are protected.

[ ] Sensitive tokens are not stored insecurely.

[ ] Production errors do not expose internals.

## Content

[ ] No placeholder content.

[ ] No fake statistics.

[ ] No fabricated customers.

[ ] No fabricated research.

[ ] No fake links.

[ ] No broken routes.

## Performance

[ ] Images optimized.

[ ] Fonts optimized.

[ ] Unnecessary dependencies removed.

[ ] JavaScript is appropriately split.

[ ] No unnecessary animations.

## SEO

[ ] Titles exist.

[ ] Descriptions exist.

[ ] Canonicals handled where appropriate.

[ ] Social metadata handled.

[ ] Heading hierarchy is correct.

[ ] URLs are meaningful.

---

# 61. FINAL IMPLEMENTATION SEQUENCE

The actual development sequence is:

```text
01
AUDIT REPOSITORY

02
DOCUMENT CURRENT ARCHITECTURE

03
ESTABLISH DESIGN TOKENS

04
BUILD CONTAINER / GRID / TYPOGRAPHY

05
BUILD BUTTONS / LINKS / DIVIDERS

06
BUILD HEADER

07
BUILD MOBILE NAVIGATION

08
BUILD FOOTER

09
BUILD HERO

10
BUILD TECHNICAL DIAGRAMS

11
BUILD APPLICATION COMPONENTS

12
BUILD RESEARCH COMPONENTS

13
BUILD CTA

14
BUILD CONTACT FORM

15
BUILD HOMEPAGE

16
VISUAL QA HOMEPAGE

17
BUILD TECHNOLOGY

18
BUILD APPLICATIONS

19
BUILD APPLICATION DETAILS

20
BUILD RESEARCH

21
BUILD RESEARCH ARTICLES

22
BUILD ABOUT

23
BUILD CONTACT

24
BUILD 404

25
ACCESSIBILITY AUDIT

26
SECURITY AUDIT

27
PERFORMANCE AUDIT

28
SEO AUDIT

29
CROSS-BROWSER QA

30
PRODUCTION BUILD

31
FINAL ACCEPTANCE
```

---

# 62. FINAL RULE

The implementation is complete only when:

    THE ARCHITECTURE
        +
    THE DESIGN SYSTEM
        +
    THE PAGE LAYOUTS
        +
    THE COMPONENT SYSTEM
        +
    THE IMPLEMENTATION
        +
    THE SECURITY
        +
    THE ACCESSIBILITY
        +
    THE CONTENT
        +
    THE PRODUCTION BUILD


all agree with one another.

The objective is not simply:

    "make the website look like the design."

The objective is:

    BUILD A COHERENT,
    MAINTAINABLE,
    ACCESSIBLE,
    SECURE,
    RESPONSIVE,
    TECHNICALLY CREDIBLE
    METABOTICS SYSTEM.

```

### Documentation is now

```text
docs/
├── 01-SITE-ARCHITECTURE.md
├── 02-DESIGN-SYSTEM.md
├── 03-PAGE-LAYOUTS.md
├── 04-COMPONENT-SPECIFICATION.md
└── 05-IMPLEMENTATION-PLAN.md
```