# FILE 03 — `03-PAGE-LAYOUTS.md`

Copy everything below into:

```text
docs/03-PAGE-LAYOUTS.md
```

This file turns the architecture + design system into **actual page compositions**.

```md
# METABOTICS
# PAGE LAYOUT SPECIFICATION

Version: 1.0
Status: Foundation
Purpose: Exact structural layout for the Metabotics website.

---

# 01. PURPOSE

This document defines:

    PAGE STRUCTURE
    SECTION ORDER
    RESPONSIVE COMPOSITION
    CONTENT HIERARCHY
    VISUAL PRIORITY
    CTA PLACEMENT
    DIAGRAM PLACEMENT
    IMAGE PLACEMENT
    MOBILE TRANSFORMATION


This document does NOT define:

    implementation framework
    database architecture
    backend architecture
    CMS implementation
    deployment


Those belong to separate specifications.

---

# 02. GLOBAL PAGE MODEL

Every major page follows this structural hierarchy:

    GLOBAL HEADER
          ↓
    PAGE INTRODUCTION
          ↓
    PRIMARY CONTENT
          ↓
    SUPPORTING SYSTEM / DATA
          ↓
    APPLICATION / EVIDENCE
          ↓
    CTA
          ↓
    GLOBAL FOOTER


Not every page needs every layer.

---

# 03. GLOBAL HEADER

Desktop:

```text
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  METABOTICS       TECHNOLOGY  APPLICATIONS  RESEARCH  ABOUT │
│                                                   CONTACT →  │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

Height:

    80–88px

Horizontal padding:

    48–64px

---

# 04. MOBILE HEADER

```text
┌──────────────────────────────────────┐
│                                      │
│  METABOTICS                    MENU  │
│                                      │
└──────────────────────────────────────┘
```

Height:

    72px

Horizontal padding:

    20px

No desktop navigation compression.

---

# 05. GLOBAL PAGE CONTAINER

All primary content sits inside:

```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│    CONTENT AREA                                             │
│                                                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

Desktop maximum:

    1440px

Primary content:

    1200px

Reading content:

    680–720px

---

# 06. HOMEPAGE

Route:

    /

Homepage purpose:

    Explain what Metabotics is.
    Explain the physical-world problem.
    Introduce the system.
    Demonstrate technological capability.
    Show industrial applications.
    Establish credibility.
    Create a path to partnership/contact.


Homepage sequence:

    01 HERO
    02 THE PHYSICAL WORLD
    03 THE SYSTEM
    04 PLATFORM
    05 INTELLIGENCE
    06 APPLICATIONS
    07 RESEARCH
    08 VISION
    09 CONTACT CTA
    10 FOOTER

---

# 07. HOMEPAGE HERO

The hero is the most important visual composition.

Desktop:

```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  METABOTICS                                                  │
│                                                             │
│  SOFTWARE FOR                                                │
│  THE PHYSICAL                                                │
│  WORLD.                                      SYSTEM 01       │
│                                                             │
│  Software infrastructure                                    │
│  for intelligent industrial                                  │
│  systems.                                    PHYSICAL         │
│                                              SYSTEM           │
│                                                 │             │
│  [ EXPLORE TECHNOLOGY → ]                        ↓             │
│                                              DATA             │
│                                                 │             │
│                                                 ↓             │
│                                           DIGITAL TWIN        │
│                                                 │             │
│                                                 ↓             │
│                                          INTELLIGENCE         │
│                                                 │             │
│                                                 ↓             │
│                                           OPTIMIZATION        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

# 08. HERO CONTENT

Technical label:

    METABOTICS / 01


Primary headline:

    SOFTWARE FOR
    THE PHYSICAL
    WORLD.


Supporting statement:

    Intelligent software infrastructure
    for industrial systems.


Primary CTA:

    EXPLORE TECHNOLOGY →


Secondary CTA:

    VIEW APPLICATIONS →


Secondary CTA may be text-only.

---

# 09. HERO GRID

Desktop:

    LEFT: 55%
    RIGHT: 45%


Left contains:

    headline
    description
    CTA


Right contains:

    system diagram


Do not vertically center everything perfectly.

The composition should feel slightly asymmetric.

---

# 10. HERO SYSTEM DIAGRAM

The diagram represents:

    PHYSICAL SYSTEM
          ↓
        DATA
          ↓
     DIGITAL TWIN
          ↓
     INTELLIGENCE
          ↓
     OPTIMIZATION


Each node should be visually distinct.

Example:

```text
PHYSICAL SYSTEM
───────────────
industrial process
       │
       ↓
DATA
───────────────
sensors / telemetry
       │
       ↓
DIGITAL TWIN
───────────────
model / simulation
       │
       ↓
INTELLIGENCE
───────────────
prediction / reasoning
       │
       ↓
OPTIMIZATION
───────────────
decision / control
```

---

# 11. HERO ANIMATION

On initial page load:

    grid appears
          ↓
    label appears
          ↓
    headline appears
          ↓
    diagram nodes activate sequentially


Maximum animation duration:

    approximately 1.5 seconds


After the initial sequence:

    system remains visually stable.


No continuous distracting animation.

---

# 12. HERO MOBILE

Mobile:

```text
METABOTICS / 01


SOFTWARE FOR
THE PHYSICAL
WORLD.


Intelligent software
infrastructure for
industrial systems.


[ EXPLORE TECHNOLOGY → ]


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

Hero should remain substantial.

Do not reduce it to a generic mobile banner.

---

# 13. HOMEPAGE SECTION 02

## THE PHYSICAL WORLD

Purpose:

    Establish the problem.


Layout:

```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  THE PHYSICAL WORLD                                         │
│                                                             │
│  Industry is built on                                       │
│  physical processes.                                        │
│                                                             │
│                          [ INDUSTRIAL VISUAL ]              │
│                                                             │
│  Machines. Materials. Heat.                                 │
│  Energy. Motion.                                           │
│                                                             │
│  The complexity of these                                    │
│  systems creates enormous                                   │
│  amounts of data.                                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

# 14. PHYSICAL WORLD COPY

Section label:

    THE PHYSICAL WORLD


Headline:

    INDUSTRY RUNS ON
    PHYSICAL SYSTEMS.


Supporting text:

    Machines, materials, energy, heat and motion
    interact continuously.

    Understanding these systems requires software
    that can operate at the intersection of physical
    processes and computation.


Avoid making unsupported quantitative claims.

---

# 15. PHYSICAL WORLD VISUAL

Use one strong visual.

Possible:

    furnace
    industrial plant
    manufacturing process
    material processing
    machine
    sensor deployment


Preferred treatment:

    monochrome
    high contrast
    subtle grid
    technical annotations


Do not use a generic office photograph.

---

# 16. PHYSICAL WORLD MOBILE

Order:

    LABEL
    HEADLINE
    DESCRIPTION
    IMAGE
    SUPPORTING STATEMENT


Image becomes full-width within page margins.

---

# 17. HOMEPAGE SECTION 03

# THE SYSTEM

Purpose:

Explain the transformation from physical process to software intelligence.

Desktop:

```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  THE SYSTEM                                                  │
│                                                             │
│  FROM PHYSICAL PROCESS                                      │
│  TO INTELLIGENT CONTROL.                                   │
│                                                             │
│                                                             │
│  01                 02                  03                  │
│  OBSERVE            MODEL               UNDERSTAND            │
│                                                             │
│  Sensors            Digital Twin       Intelligence         │
│  Data               Simulation         Prediction            │
│                                                             │
│                  ─────────────────────                      │
│                                                             │
│                         04                                  │
│                      OPTIMIZE                                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

# 18. SYSTEM FOUR-STAGE MODEL

Stage 01:

    OBSERVE

    Capture signals from
    physical systems.


Stage 02:

    MODEL

    Represent processes
    digitally.


Stage 03:

    UNDERSTAND

    Extract patterns,
    relationships and
    predictive signals.


Stage 04:

    OPTIMIZE

    Turn intelligence into
    better operational decisions.

---

# 19. SYSTEM VISUALIZATION

Each stage should have:

    number
    label
    short description
    technical icon
    connection line


Connections are visually important.

They communicate:

    continuity
    data flow
    system architecture

---

# 20. SYSTEM MOBILE

Transform:

```text
OBSERVE → MODEL → UNDERSTAND → OPTIMIZE
```

into:

```text
01

OBSERVE

Capture signals from
physical systems.

        ↓

02

MODEL

Represent processes
digitally.

        ↓

03

UNDERSTAND

Extract patterns
and predictions.

        ↓

04

OPTIMIZE

Improve operational
decisions.
```

---

# 21. HOMEPAGE SECTION 04

# PLATFORM

Purpose:

Introduce the underlying software architecture.

Layout:

```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│ PLATFORM / 01                                               │
│                                                             │
│ SOFTWARE THAT CONNECTS                                      │
│ THE PHYSICAL AND                                           │
│ DIGITAL WORLDS.                                            │
│                                                             │
│                                                             │
│ ┌────────────┐     ┌────────────┐                           │
│ │ PHYSICAL   │────▶│ DATA       │                           │
│ └────────────┘     └─────┬──────┘                           │
│                          ↓                                  │
│                    ┌────────────┐                           │
│                    │ DIGITAL    │                           │
│                    │ TWIN       │                           │
│                    └─────┬──────┘                           │
│                          ↓                                  │
│                    ┌────────────┐                           │
│                    │ INTELLIGENCE│                          │
│                    └─────┬──────┘                           │
│                          ↓                                  │
│                    ┌────────────┐                           │
│                    │ OPTIMIZE   │                           │
│                    └────────────┘                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

# 22. PLATFORM COMPONENTS

Primary layers:

    PHYSICAL SYSTEM

    DATA

    DIGITAL TWIN

    INTELLIGENCE

    OPTIMIZATION


Each layer should have a concise explanation.

---

# 23. PLATFORM CONTENT

## PHYSICAL SYSTEM

    Sensors, machines, materials and processes
    generate the signals that describe the real world.


## DATA

    Operational data is collected, structured
    and transformed into usable information.


## DIGITAL TWIN

    Physical processes are represented as
    computational models.


## INTELLIGENCE

    Models identify patterns, predict behavior
    and support operational reasoning.


## OPTIMIZATION

    Insights become decisions that can improve
    how systems operate.

---

# 24. PLATFORM DESIGN

This section should feel more technical than marketing.

Use:

    diagrams
    lines
    labels
    system states
    data traces


Avoid:

    six SaaS feature cards
    giant icon grid
    generic AI graphics

---

# 25. HOMEPAGE SECTION 05

# INTELLIGENCE

Purpose:

Explain what intelligence means in the Metabotics context.

Layout:

```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│ INTELLIGENCE / 01                                           │
│                                                             │
│ UNDERSTAND WHAT                                             │
│ THE SYSTEM IS DOING.                                       │
│                                                             │
│                           DATA STREAM                        │
│                    ╱╲      ╱╲                               │
│              ╱╲   ╱  ╲____╱  ╲___                          │
│         _____╱                       ╲_____                  │
│                                                             │
│    PREDICTION        DETECTION        REASONING              │
│                                                             │
│    Identify         Detect          Understand              │
│    patterns.        anomalies.      relationships.           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

# 26. INTELLIGENCE CONTENT

Possible capability categories:

    PREDICTION
    ANOMALY DETECTION
    PROCESS UNDERSTANDING
    SIMULATION
    DECISION SUPPORT
    OPTIMIZATION


Only include capabilities actually supported by
the product or technical roadmap.

---

# 27. INTELLIGENCE VISUAL

Use:

    time series
    process curves
    network relationships
    signal analysis


Avoid:

    brain illustrations
    humanoid AI
    glowing neural networks
    generic chatbot imagery

---

# 28. HOMEPAGE SECTION 06

# APPLICATIONS

Purpose:

Show where the system is applied.

Desktop:

```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│ APPLICATIONS                                                │
│                                                             │
│ SOFTWARE FOR INDUSTRIES                                     │
│ WHERE PHYSICAL SYSTEMS MATTER.                              │
│                                                             │
│                                                             │
│ 01  STEEL & FOUNDRIES                         →             │
│ ─────────────────────────────────────────────────────────── │
│                                                             │
│ 02  HEAT TREATMENT                            →             │
│ ─────────────────────────────────────────────────────────── │
│                                                             │
│ 03  MINING & MATERIALS                        →             │
│ ─────────────────────────────────────────────────────────── │
│                                                             │
│ 04  ENERGY                                    →             │
│ ─────────────────────────────────────────────────────────── │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

# 29. APPLICATION LIST

Initial categories:

    STEEL & FOUNDRIES

    HEAT TREATMENT

    MINING & MATERIALS

    ENERGY


Additional industries must only be added when there
is a genuine Metabotics application or strategic reason.

---

# 30. APPLICATION ROW

Each row contains:

    number
    industry
    short description
    arrow
    optional image


Example:

```text
01

STEEL & FOUNDRIES

Industrial intelligence
for complex materials processes.

                                            →
```

---

# 31. APPLICATION HOVER

Desktop:

    image appears
    row shifts minimally
    arrow moves
    metadata becomes visible


Movement should remain restrained.

---

# 32. APPLICATION MOBILE

Convert list to stacked sections:

```text
01

STEEL & FOUNDRIES

Industrial intelligence
for complex materials processes.

VIEW APPLICATION →
────────────────────

02

HEAT TREATMENT

...

────────────────────
```

---

# 33. HOMEPAGE SECTION 07

# RESEARCH

Purpose:

Establish technical credibility.

Layout:

```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│ RESEARCH                                                    │
│                                                             │
│ BUILDING THE SOFTWARE                                       │
│ FOR INDUSTRIAL INTELLIGENCE.                                │
│                                                             │
│                                                             │
│ RESEARCH / 001                                              │
│                                                             │
│ DIGITAL TWINS FOR                                           │
│ COMPLEX INDUSTRIAL SYSTEMS                                   │
│                                                             │
│ 2026                         READ RESEARCH →                 │
│                                                             │
│ ─────────────────────────────────────────────────────────── │
│                                                             │
│ RESEARCH / 002                                              │
│                                                             │
│ DATA-DRIVEN PROCESS                                         │
│ OPTIMIZATION                                                │
│                                                             │
│ 2026                         READ RESEARCH →                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

# 34. RESEARCH CARD

Research should NOT look like a blog card.

Use editorial rows.

Information:

    CATEGORY
    TITLE
    DATE
    READING TIME
    LINK


Optional:

    author
    abstract
    research area

---

# 35. HOMEPAGE SECTION 08

# VISION

Purpose:

Explain the larger direction of Metabotics.

Layout:

```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│ THE VISION                                                  │
│                                                             │
│ THE NEXT GENERATION OF                                      │
│ INDUSTRIAL SOFTWARE                                         │
│ WILL UNDERSTAND THE                                         │
│ PHYSICAL WORLD.                                             │
│                                                             │
│                                                             │
│ Software is moving beyond                                   │
│ screens and databases.                                      │
│                                                             │
│ It is becoming part of the                                  │
│ systems that produce, move,                                  │
│ transform and control                                       │
│ physical things.                                            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

# 36. VISION DESIGN

This section should be quieter.

Large typography.

Large whitespace.

Minimal graphics.

No feature grid.

No aggressive CTA.

The purpose is:

    meaning
    positioning
    long-term narrative

---

# 37. HOMEPAGE SECTION 09

# CONTACT CTA

Final CTA:

```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│ LET'S BUILD INTELLIGENT                                     │
│ SYSTEMS FOR THE PHYSICAL                                    │
│ WORLD.                                                      │
│                                                             │
│ Partnerships.                                              │
│ Industrial systems.                                        │
│ Research.                                                   │
│                                                             │
│ [ CONTACT METABOTICS → ]                                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

# 38. HOMEPAGE FOOTER

```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│ METABOTICS                                                   │
│ SOFTWARE FOR THE PHYSICAL WORLD.                            │
│                                                             │
│                                                             │
│ COMPANY              TECHNOLOGY        CONNECT               │
│ About                Platform         LinkedIn               │
│ Research             Digital Twin     Email                  │
│ Applications         Intelligence                            │
│                                                             │
│                                                             │
│ ─────────────────────────────────────────────────────────── │
│                                                             │
│ © 2026 METABOTICS                         ALL RIGHTS RESERVED│
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

# 39. TECHNOLOGY PAGE

Route:

    /technology


Purpose:

Provide a deeper technical explanation of
the Metabotics platform.

Sequence:

    HERO
    SYSTEM OVERVIEW
    DATA
    DIGITAL TWIN
    INTELLIGENCE
    OPTIMIZATION
    ARCHITECTURE
    RESEARCH
    CTA

---

# 40. TECHNOLOGY HERO

```text
TECHNOLOGY / 01

SOFTWARE FOR
COMPLEX PHYSICAL
SYSTEMS.

A software architecture that connects
real-world processes with data,
models and intelligence.
```

Visual:

    technical architecture diagram


CTA:

    EXPLORE THE PLATFORM →

---

# 41. TECHNOLOGY SYSTEM OVERVIEW

Main diagram:

```text
┌────────────────┐
│ PHYSICAL WORLD │
└───────┬────────┘
        │
        ▼
┌────────────────┐
│ DATA           │
└───────┬────────┘
        │
        ▼
┌────────────────┐
│ DIGITAL TWIN   │
└───────┬────────┘
        │
        ▼
┌────────────────┐
│ INTELLIGENCE   │
└───────┬────────┘
        │
        ▼
┌────────────────┐
│ OPTIMIZATION   │
└────────────────┘
```

---

# 42. TECHNOLOGY DETAIL SECTIONS

Each major technology gets:

    label
    title
    explanation
    diagram
    technical metadata


Example:

```text
DIGITAL TWIN / 03

MODEL THE SYSTEM.

Computational representations of
physical processes allow teams to
understand system behavior and
evaluate possible interventions.
```

---

# 43. TECHNOLOGY PAGE MOBILE

Every technology layer becomes a vertical block.

Do not preserve wide diagrams by shrinking
them until they become unreadable.

Instead:

    restructure


---

# 44. APPLICATIONS PAGE

Route:

    /applications


Purpose:

Show specific industrial applications.

Hero:

```text
APPLICATIONS / 01

INTELLIGENCE FOR
THE SYSTEMS THAT
POWER INDUSTRY.
```

Then:

    application index
    industry detail
    system examples
    outcomes
    CTA

---

# 45. APPLICATION DETAIL PAGE

Example route:

    /applications/steel-foundries


Structure:

```text
APPLICATION / STEEL & FOUNDRIES


STEEL & FOUNDRIES

Intelligence for complex
materials processing.


[ INDUSTRIAL IMAGE ]


THE CHALLENGE

THE SYSTEM

THE DATA

THE INTELLIGENCE

THE OPTIMIZATION


RELATED APPLICATIONS


CONTACT METABOTICS →
```

---

# 46. APPLICATION DETAIL HERO

Hero should contain:

    industry
    concise value proposition
    industrial visual
    technical label


Avoid:

    marketing superlatives
    unsupported performance numbers
    generic claims

---

# 47. APPLICATION DETAIL SYSTEM

Use a process flow:

```text
INPUT
  ↓
PROCESS
  ↓
SENSING
  ↓
DATA
  ↓
MODEL
  ↓
DECISION
  ↓
CONTROL
```

This visually explains how Metabotics
interacts with the industrial process.

---

# 48. RESEARCH PAGE

Route:

    /research


Hero:

```text
RESEARCH / 01

BUILDING THE COMPUTATIONAL
FOUNDATIONS FOR INDUSTRIAL
INTELLIGENCE.
```

Then:

    research index
    featured research
    technical areas
    publications
    CTA

---

# 49. RESEARCH INDEX

Use a vertical editorial list.

```text
RESEARCH / 001

TITLE

DESCRIPTION

2026
8 MIN READ

READ →


────────────────────────


RESEARCH / 002

TITLE

DESCRIPTION

2026
12 MIN READ

READ →
```

---

# 50. RESEARCH ARTICLE PAGE

Desktop:

```text
CATEGORY

TITLE

DESCRIPTION

AUTHOR / DATE / READING TIME


────────────────────────────


ABSTRACT


ARTICLE BODY


FIGURE


ARTICLE BODY


FIGURE / DATA


CONCLUSION


────────────────────────────


RELATED RESEARCH
```

---

# 51. ABOUT PAGE

Route:

    /about


Purpose:

Explain:

    who Metabotics is
    what it believes
    what it builds
    why physical systems matter


Hero:

```text
ABOUT / 01

BUILDING SOFTWARE
FOR THE PHYSICAL WORLD.
```

---

# 52. ABOUT PAGE STRUCTURE

    HERO

    WHY WE EXIST

    WHAT WE BUILD

    HOW WE THINK

    TEAM

    RESEARCH / ENGINEERING

    CONTACT


---

# 53. WHY WE EXIST

Large editorial statement.

Example:

```text
THE PHYSICAL WORLD
IS COMPLEX.

The systems that shape industry
are dynamic, interconnected and
difficult to model.

We build software to make those
systems more observable,
understandable and optimizable.
```

---

# 54. TEAM SECTION

Team members should be displayed editorially.

Not:

    circular avatars
    colorful cards


Preferred:

```text
NAME

ROLE

SHORT BIO

────────────────────

NAME

ROLE

SHORT BIO
```

Optional monochrome portrait.

---

# 55. CONTACT PAGE

Route:

    /contact


Hero:

```text
CONTACT / 01

LET'S WORK ON
THE PHYSICAL WORLD.
```

Supporting text:

    Industrial partnerships.
    Research.
    Technology.
    Collaboration.


---

# 56. CONTACT LAYOUT

Desktop:

```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│ CONTACT / 01                                                │
│                                                             │
│ LET'S WORK ON                                               │
│ THE PHYSICAL WORLD.                                        │
│                                                             │
│ ┌────────────────────────┐  ┌─────────────────────────────┐ │
│ │ NAME                   │  │ COMPANY                     │ │
│ │                        │  │                             │ │
│ ├────────────────────────┤  ├─────────────────────────────┤ │
│ │ EMAIL                  │  │ INTEREST                    │ │
│ │                        │  │                             │ │
│ └────────────────────────┘  └─────────────────────────────┘ │
│                                                             │
│ MESSAGE                                                     │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │                                                         │ │
│ │                                                         │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ [ SEND MESSAGE → ]                                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

# 57. CONTACT FORM FIELDS

Required:

    NAME
    COMPANY
    EMAIL
    MESSAGE


Optional:

    INTEREST


Interest options:

    INDUSTRIAL PARTNERSHIP
    TECHNOLOGY
    RESEARCH
    INVESTMENT
    OTHER

Only include options relevant to the actual
business strategy.

---

# 58. CONTACT MOBILE

Stack fields:

```text
NAME

[________________]


COMPANY

[________________]


EMAIL

[________________]


INTEREST

[________________]


MESSAGE

[________________
________________
________________]


[ SEND MESSAGE → ]
```

---

# 59. 404 PAGE

Route:

    *


Unknown route:

```text
404 / SYSTEM NOT FOUND


The requested route does not exist.


[ RETURN TO METABOTICS → ]
```

Visual:

    subtle grid
    system coordinates
    minimal diagnostic text

---

# 60. GLOBAL CTA STRATEGY

Primary CTA:

    CONTACT METABOTICS →


Secondary:

    EXPLORE TECHNOLOGY →


Supporting:

    VIEW APPLICATIONS →
    READ RESEARCH →
    LEARN MORE →


Do not create ten competing CTAs.

---

# 61. CTA PLACEMENT

Homepage:

    Hero
    Final section


Technology:

    Hero
    Final section


Applications:

    Hero
    After application overview
    Final section


Research:

    Final section


About:

    Final section


Contact:

    Form is the CTA.

---

# 62. SECTION TRANSITIONS

Transitions between sections should use:

    whitespace
    borders
    grid changes
    background changes


Example:

```text
DARK SECTION
──────────────
          ↓
     160px SPACE
          ↓
LIGHT SECTION
```

Avoid ornamental separators.

---

# 63. DARK/LIGHT RHYTHM

Recommended homepage:

```text
01 HERO
DARK

02 PHYSICAL WORLD
LIGHT

03 THE SYSTEM
DARK

04 PLATFORM
DARK

05 INTELLIGENCE
LIGHT

06 APPLICATIONS
LIGHT

07 RESEARCH
LIGHT

08 VISION
DARK

09 CONTACT
DARK

10 FOOTER
BLACK
```

The exact sequence can change during implementation
if visual testing demonstrates a better rhythm.

---

# 64. VISUAL HIERARCHY

Every section must have exactly one dominant element.

Examples:

Hero:

    headline


Physical world:

    industrial image


System:

    architecture diagram


Intelligence:

    data visualization


Applications:

    application list


Research:

    editorial list


Vision:

    statement


Contact:

    form


Do not give every element equal visual weight.

---

# 65. DESKTOP RULE

Desktop layouts should use horizontal space.

Prefer:

    2-column
    3-column
    12-column grid
    asymmetric compositions


Avoid:

    centered single-column page everywhere

---

# 66. TABLET RULE

At tablet width:

    reduce columns
    preserve hierarchy
    reduce spacing
    maintain diagrams


Do not force desktop layouts below
their minimum readable width.

---

# 67. MOBILE RULE

At mobile:

    one primary column

Secondary information becomes:

    stacked


Wide diagrams become:

    vertical


Navigation becomes:

    menu


Application rows become:

    editorial blocks


Research rows remain:

    editorial blocks


---

# 68. MOBILE CONTENT PRIORITY

When space is limited:

    01 HEADLINE
    02 CORE EXPLANATION
    03 PRIMARY VISUAL
    04 PRIMARY CTA
    05 SUPPORTING INFORMATION


Do not hide essential meaning behind tabs.

---

# 69. ABOVE-THE-FOLD RULE

Every page must communicate within the first viewport:

    WHAT PAGE IS THIS?
    WHY DOES IT MATTER?
    WHAT IS THE PRIMARY ACTION?


The user should not need to scroll
to understand the page's purpose.

---

# 70. PAGE DENSITY

Metabotics should feel substantial.

But:

    density ≠ clutter


Use:

    large typography
    whitespace
    technical metadata
    diagrams
    borders
    measured information


Avoid:

    empty luxury layouts with no substance
    dense dashboard-like walls of information

---

# 71. CONTENT WIDTH RULE

Headlines:

    approximately 8–10 words per line


Paragraphs:

    50–80 characters per line where practical


Technical labels:

    unrestricted


Never allow a paragraph to become
an extremely wide horizontal line.

---

# 72. IMAGE + TEXT BALANCE

For major sections:

    40–50% visual
    50–60% text


or:

    60% visual
    40% text


depending on content.

Do not make every section:

    text left
    image right


Reverse compositions.

---

# 73. ASYMMETRY

Intentional asymmetry is encouraged.

Example:

```text
LABEL
          HEADLINE
          DESCRIPTION
          CTA

                    DIAGRAM
```

This is preferable to:

```text
              LABEL
              HEADLINE
              DESCRIPTION
              CTA
```

for every section.

---

# 74. TECHNICAL ANNOTATIONS

Use annotations around visuals.

Example:

```text
                 SENSOR ARRAY
                      │
                      │
                      ▼
              ┌──────────────┐
              │ PROCESS UNIT │
              └──────────────┘
                   /     \
                  /       \
          TEMP /            \ PRESSURE
              /               \
             ▼                 ▼
         DATA STREAM       DATA STREAM
```

Annotations should explain the visual.

They should not exist purely as decoration.

---

# 75. SCROLL STORY

The homepage should tell this story:

```text
THE WORLD
    ↓
THE PROBLEM
    ↓
THE SYSTEM
    ↓
THE SOFTWARE
    ↓
THE INTELLIGENCE
    ↓
THE APPLICATIONS
    ↓
THE RESEARCH
    ↓
THE FUTURE
    ↓
THE PARTNERSHIP
```

This is the core narrative architecture.

---

# 76. HOMEPAGE CONTENT SUMMARY

Final homepage:

```text
HEADER

HERO
"SOFTWARE FOR THE PHYSICAL WORLD."

↓

THE PHYSICAL WORLD
"INDUSTRY RUNS ON PHYSICAL SYSTEMS."

↓

THE SYSTEM
"FROM PHYSICAL PROCESS TO INTELLIGENT CONTROL."

↓

PLATFORM
"SOFTWARE THAT CONNECTS THE PHYSICAL AND DIGITAL WORLDS."

↓

INTELLIGENCE
"UNDERSTAND WHAT THE SYSTEM IS DOING."

↓

APPLICATIONS
"INTELLIGENCE FOR THE SYSTEMS THAT POWER INDUSTRY."

↓

RESEARCH
"BUILDING THE SOFTWARE FOR INDUSTRIAL INTELLIGENCE."

↓

VISION
"THE NEXT GENERATION OF INDUSTRIAL SOFTWARE WILL UNDERSTAND THE PHYSICAL WORLD."

↓

CONTACT
"LET'S BUILD INTELLIGENT SYSTEMS FOR THE PHYSICAL WORLD."

↓

FOOTER
```

---

# 77. DESIGN IMPLEMENTATION ORDER

Build pages in this order:

    01 GLOBAL HEADER
    02 GLOBAL FOOTER
    03 TYPOGRAPHY
    04 CONTAINER / GRID
    05 BUTTONS
    06 HERO SYSTEM
    07 TECHNICAL DIAGRAM SYSTEM
    08 HOMEPAGE
    09 TECHNOLOGY
    10 APPLICATIONS
    11 APPLICATION DETAIL
    12 RESEARCH
    13 RESEARCH ARTICLE
    14 ABOUT
    15 CONTACT
    16 404


Do not build every page simultaneously.

---

# 78. FIRST IMPLEMENTATION MILESTONE

The first working visual milestone is:

    HEADER
        +
    HERO
        +
    SYSTEM DIAGRAM
        +
    ONE LIGHT SECTION
        +
    ONE APPLICATION SECTION
        +
    FOOTER


This must be visually coherent before the rest
of the site is implemented.

---

# 79. ACCEPTANCE TEST

The layout passes when:

[ ] Metabotics is recognizable immediately.

[ ] Hero communicates the physical-world positioning.

[ ] Desktop layout uses the grid correctly.

[ ] Mobile layout feels intentional.

[ ] System diagram is understandable.

[ ] Typography hierarchy is obvious.

[ ] Black/white identity remains dominant.

[ ] Sections do not look like generic SaaS cards.

[ ] Applications feel industrial.

[ ] Research feels credible.

[ ] CTAs are clear but restrained.

[ ] No section feels visually disconnected
    from the rest of the site.

[ ] Page flow tells a coherent story.

---

# 80. FINAL LAYOUT PRINCIPLE

The website should not feel like:

    a collection of pages.

It should feel like:

    ONE SYSTEM.

Every page should use the same:

    grid
    typography
    technical language
    spacing
    visual restraint
    diagram language
    monochrome identity


The user should feel that they are moving
through different views of the same underlying
Metabotics system.
```

### File sequence now

```text
docs/
├── 01-SITE-ARCHITECTURE.md
├── 02-DESIGN-SYSTEM.md
└── 03-PAGE-LAYOUTS.md
```