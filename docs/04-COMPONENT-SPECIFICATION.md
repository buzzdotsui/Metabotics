# METABOTICS
# COMPONENT SPECIFICATION

**Version:** 1.0  
**Status:** Implementation Foundation  
**Purpose:** Define reusable frontend components and their contracts.

---

## 01. OBJECTIVE

Build a reusable component system for the Metabotics website.

Every component must have:

- A single, clearly defined responsibility.
- Explicit inputs and outputs.
- Consistent design tokens.
- Responsive behavior.
- Accessible semantics.
- Predictable interaction states.
- Reusable styling.
- Minimal unnecessary dependencies.

The component system must support the following identity:

**METABOTICS — SOFTWARE FOR THE PHYSICAL WORLD.**

Visual principles:

- Black and white first.
- Neutral grayscale for supporting information.
- Technical line work and geometric diagrams.
- Strong typography.
- Restrained animation.
- Structured grids.
- Industrial imagery.
- Minimal decorative effects.

Do not introduce colorful SaaS dashboards, generic gradients, oversized rounded cards, or decorative AI graphics.

## 02. TECHNOLOGY BOUNDARY

This specification defines frontend component contracts. It does not mandate a framework.

Before implementation, inspect the existing repository and identify its framework, routing system, styling solution, package manager, and established conventions.

Do not replace existing infrastructure without a documented reason.

Where TypeScript is available, use typed component interfaces.

Where another language or framework is already established, adapt the contracts without changing their responsibilities.

## 03. COMPONENT HIERARCHY

Organize components into four categories.

### A. Foundation

- Container
- Section
- SectionLabel
- Typography
- Button
- Link
- Divider
- Grid
- Icon

### B. Global layout

- SiteHeader
- MobileNavigation
- SiteFooter
- PageShell
- PageTransition

### C. Technical visualization

- SystemDiagram
- SystemNode
- ConnectionLine
- ProcessFlow
- DataVisualization
- TechnicalAnnotation
- TechnicalFrame

### D. Content and interaction

- Hero
- ApplicationRow
- ApplicationList
- ResearchRow
- ResearchList
- FeatureSection
- ContactForm
- CTASection
- NotFound

Components must be composed from these layers rather than implemented independently on every page.

## 04. RECOMMENDED DIRECTORY STRUCTURE

```text
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Link.tsx
│   │   ├── Container.tsx
│   │   ├── Section.tsx
│   │   ├── SectionLabel.tsx
│   │   ├── Divider.tsx
│   │   └── Grid.tsx
│   │
│   ├── layout/
│   │   ├── SiteHeader.tsx
│   │   ├── MobileNavigation.tsx
│   │   ├── SiteFooter.tsx
│   │   └── PageShell.tsx
│   │
│   ├── hero/
│   │   └── Hero.tsx
│   │
│   ├── diagrams/
│   │   ├── SystemDiagram.tsx
│   │   ├── SystemNode.tsx
│   │   ├── ProcessFlow.tsx
│   │   ├── DataVisualization.tsx
│   │   └── TechnicalAnnotation.tsx
│   │
│   ├── applications/
│   │   ├── ApplicationRow.tsx
│   │   └── ApplicationList.tsx
│   │
│   ├── research/
│   │   ├── ResearchRow.tsx
│   │   └── ResearchList.tsx
│   │
│   ├── contact/
│   │   └── ContactForm.tsx
│   │
│   └── sections/
│       ├── FeatureSection.tsx
│       └── CTASection.tsx
│
├── pages/
│   ├── HomePage.tsx
│   ├── TechnologyPage.tsx
│   ├── ApplicationsPage.tsx
│   ├── ApplicationDetailPage.tsx
│   ├── ResearchPage.tsx
│   ├── ResearchArticlePage.tsx
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   └── NotFoundPage.tsx
│
├── data/
│   ├── navigation.ts
│   ├── applications.ts
│   └── research.ts
│
├── styles/
│   ├── tokens.css
│   ├── global.css
│   ├── typography.css
│   └── utilities.css
│
├── assets/
│   ├── icons/
│   ├── diagrams/
│   └── images/
│
└── main.tsx
```

This is a proposed structure for a TypeScript-based React implementation. Adapt filenames and directories to the repository if its existing architecture differs.

Do not create every file as an empty placeholder. Build components incrementally and verify each one.

## 05. COMPONENT CONTRACTS

### 5.1 Container

**Responsibility:** Maintain consistent horizontal alignment and readable content widths.

Suggested interface:

```tsx
type ContainerProps = {
  children: React.ReactNode;
  size?: "default" | "wide" | "reading";
  className?: string;
};
```

Behavior:

- `default`: standard page content.
- `wide`: full-width technical diagrams and broad layouts.
- `reading`: long-form editorial content.
- Center content within the viewport.
- Preserve mobile gutters.
- Prevent horizontal overflow.

Reference widths:

- Default: approximately 1200px.
- Wide: approximately 1440px.
- Reading: approximately 720px.

These are design targets, not requirements to override the existing design system.

### 5.2 Section

**Responsibility:** Provide consistent vertical spacing and section structure.

```tsx
type SectionProps = {
  children: React.ReactNode;
  id?: string;
  label?: string;
  tone?: "dark" | "light";
  className?: string;
};
```

Requirements:

- Support dark and light backgrounds.
- Use semantic section elements.
- Keep spacing consistent.
- Allow sections to contain diagrams, text, lists, and forms.
- Avoid unnecessary nested containers.

### 5.3 SectionLabel

**Responsibility:** Display compact technical identifiers.

Example:

```text
PLATFORM / 01
```

```tsx
type SectionLabelProps = {
  children: React.ReactNode;
  index?: string;
  className?: string;
};
```

Appearance:

- Uppercase.
- Small typography.
- Increased letter spacing.
- Muted grayscale.
- Optional sequential identifier.

The label must remain readable against both backgrounds.

### 5.4 Button

**Responsibility:** Provide consistent interactive actions.

```tsx
type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "text";
  disabled?: boolean;
  className?: string;
};
```

Variants:

**Primary**
- High-contrast background.
- Clearly visible text.
- Appropriate hover and focus states.

**Secondary**
- Transparent or neutral background.
- Visible border where appropriate.

**Text**
- Minimal styling.
- Optional directional arrow.

Requirements:

- Use links for navigation.
- Use buttons for actions.
- Preserve native keyboard behavior.
- Display visible focus indicators.
- Prevent duplicate form submissions while submitting.
- Do not represent an unavailable action as functional.

### 5.5 Divider

**Responsibility:** Separate content without introducing visual clutter.

```tsx
type DividerProps = {
  orientation?: "horizontal" | "vertical";
  tone?: "subtle" | "default";
  className?: string;
};
```

Use thin neutral lines.

Do not use heavy borders between every nested element.

### 5.6 Grid

**Responsibility:** Establish repeatable responsive columns.

```tsx
type GridProps = {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: "small" | "default" | "large";
  className?: string;
};
```

Requirements:

- Collapse columns when content no longer fits.
- Preserve meaningful reading order.
- Avoid fixed-width columns that cause overflow.
- Support asymmetric compositions through CSS grid when needed.

## 06. GLOBAL LAYOUT COMPONENTS

### 6.1 SiteHeader

**Responsibility:** Provide global navigation and brand recognition.

Content:

- Metabotics mark.
- Wordmark.
- Primary navigation.
- Contact link.
- Mobile menu trigger.

Desktop reference:

```text
METABOTICS

TECHNOLOGY   APPLICATIONS   RESEARCH   ABOUT   CONTACT →
```

Reference dimensions:

- Height: 80–88px.
- Horizontal padding: 48–64px on larger screens.
- Mobile height: approximately 72px.
- Mobile padding: approximately 20px.

Props:

```tsx
type SiteHeaderProps = {
  activePath?: string;
  transparent?: boolean;
};
```

States:

- Default.
- Hover.
- Keyboard focus.
- Mobile menu closed.
- Mobile menu open.

Requirements:

- Use semantic navigation.
- Indicate the active route.
- Keep the logo linked to the homepage.
- Ensure mobile navigation can be opened and closed by keyboard.
- Close the menu after successful navigation.
- Prevent the open menu from becoming inaccessible behind page content.
- Do not introduce a sticky header unless it improves the actual browsing experience.

### 6.2 MobileNavigation

**Responsibility:** Present navigation on narrow screens.

Requirements:

- Provide a clear open/close control.
- Expose the expanded state accessibly.
- Keep focus behavior predictable.
- Close on Escape.
- Ensure links remain usable at small viewport sizes.
- Avoid unintended background scrolling when a full-screen menu is open.

### 6.3 SiteFooter

**Responsibility:** Provide secondary navigation, brand identity, and legal information.

Structure:

```text
METABOTICS
SOFTWARE FOR THE PHYSICAL WORLD.

COMPANY          TECHNOLOGY        CONNECT
About            Platform          LinkedIn
Research         Digital Twin      Email
Applications     Intelligence

────────────────────────────────────────

© METABOTICS
```

Requirements:

- Reuse shared navigation data where appropriate.
- Use real destinations.
- Do not invent social profiles or contact details.
- Use the current year dynamically when supported by the framework.
- Ensure sufficient contrast and visible link focus states.

### 6.4 PageShell

**Responsibility:** Compose shared page-level layout.

Responsibilities:

- Render the global header.
- Render the current page.
- Render the global footer.
- Establish minimum viewport height.
- Maintain consistent layout boundaries.

Do not put page-specific content or business logic into PageShell.

## 07. HERO COMPONENT

### Responsibility

Provide a reusable opening composition for major pages.

Interface:

```tsx
type HeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  visual?: React.ReactNode;
  tone?: "dark" | "light";
  alignment?: "left" | "center";
};
```

Homepage content:

```text
METABOTICS / 01

SOFTWARE FOR
THE PHYSICAL
WORLD.

Intelligent software infrastructure
for industrial systems.

EXPLORE TECHNOLOGY →
VIEW APPLICATIONS →
```

Layout:

- Text column: approximately 55%.
- Visual column: approximately 45%.
- Large, dominant headline.
- Supporting copy with a constrained reading width.
- Clearly differentiated primary and secondary actions.
- Optional technical visualization.

Responsive behavior:

Desktop:
- Two-column composition.
- Asymmetric alignment.
- Diagram occupies the visual column.

Mobile:
- Single-column composition.
- Headline appears first.
- Supporting text follows.
- Actions remain easy to reach.
- Diagram moves below the main message.

Do not force every page to use an identical hero. Reuse the component while allowing appropriate variation.

## 08. TECHNICAL VISUALIZATION COMPONENTS

### 8.1 SystemDiagram

**Responsibility:** Represent the Metabotics system as connected stages.

Canonical sequence:

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

Suggested interface:

```tsx
type SystemStage = {
  id: string;
  label: string;
  description?: string;
};

type SystemDiagramProps = {
  stages: SystemStage[];
  orientation?: "horizontal" | "vertical";
  activeStageId?: string;
  className?: string;
};
```

Requirements:

- Render stages from data.
- Use stable identifiers.
- Make connections visually understandable.
- Support horizontal desktop and vertical mobile arrangements.
- Keep text legible at every breakpoint.
- Expose essential diagram information to assistive technologies.
- Provide an accessible textual alternative when the diagram communicates important information.

Do not hardcode the same stage markup repeatedly.

### 8.2 SystemNode

**Responsibility:** Display one stage in a technical diagram.

```tsx
type SystemNodeProps = {
  index?: string;
  title: string;
  description?: string;
  status?: "default" | "active" | "complete";
};
```

Appearance:

- Fine border.
- Neutral background.
- Clear title.
- Optional technical index.
- Optional concise description.

Only make nodes interactive when there is a meaningful action associated with them.

### 8.3 ProcessFlow

**Responsibility:** Represent a sequence of operations.

Example:

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
```

Use for industrial processes and application-detail pages.

Requirements:

- Maintain a meaningful sequence.
- Support vertical and horizontal orientations.
- Preserve ordering on mobile.
- Avoid implying that a conceptual flow is a verified implementation architecture.

### 8.4 DataVisualization

**Responsibility:** Display actual or clearly illustrative data.

Supported visualization types may include:

- Time series.
- Signal curves.
- Process metrics.
- Network relationships.
- Comparative measurements.

Requirements:

- Label axes and units.
- Include legends when necessary.
- Use readable line weights.
- Avoid excessive visual decoration.
- Distinguish illustrative values from real operational data.
- Never present fabricated values as measurements from a deployed system.

If no real data is available, render an explicitly illustrative visualization or a static conceptual diagram.

### 8.5 TechnicalAnnotation

**Responsibility:** Label meaningful features of diagrams and industrial imagery.

```tsx
type TechnicalAnnotationProps = {
  label: string;
  detail?: string;
  position?: "top" | "right" | "bottom" | "left";
};
```

Use restrained typography, thin connector lines, and neutral colors.

On mobile, reposition annotations to prevent collisions and unreadable text.

## 09. APPLICATION COMPONENTS

### 9.1 ApplicationRow

**Responsibility:** Represent an industrial application in an editorial list.

```tsx
type Application = {
  slug: string;
  number: string;
  title: string;
  description: string;
  href: string;
};

type ApplicationRowProps = {
  application: Application;
};
```

Example:

```text
01

STEEL & FOUNDRIES

Industrial intelligence for complex
materials-processing systems.

VIEW APPLICATION →
────────────────────────────────
```

Requirements:

- Make the destination clear.
- Use the application's real title and description.
- Use subtle hover transitions.
- Maintain consistent row alignment.
- Support keyboard navigation.
- Avoid excessive card borders and rounded corners.

### 9.2 ApplicationList

**Responsibility:** Render an ordered collection of applications.

```tsx
type ApplicationListProps = {
  applications: Application[];
};
```

Requirements:

- Render rows from shared data.
- Use stable keys.
- Handle an empty list deliberately.
- Preserve the same data ordering on desktop and mobile.
- Avoid duplicating application content across pages.

### 9.3 Application Detail Composition

The detail page should compose existing components:

```text
Hero
  ↓
Industrial Visual
  ↓
Challenge
  ↓
ProcessFlow
  ↓
SystemDiagram
  ↓
Supported Capabilities
  ↓
Related Applications
  ↓
CTASection
```

Do not create an entirely separate design language for each industrial sector.

Do not claim verified outcomes, performance improvements, or deployed capabilities without supporting evidence.

## 10. RESEARCH COMPONENTS

### 10.1 ResearchRow

**Responsibility:** Display research as an editorial entry.

```tsx
type ResearchItem = {
  slug: string;
  category: string;
  title: string;
  description: string;
  publishedAt?: string;
  readingTime?: number;
  href: string;
};

type ResearchRowProps = {
  item: ResearchItem;
};
```

Display:

- Research category.
- Title.
- Brief description.
- Publication date when available.
- Reading time when known.
- Link to the full item.

Do not invent publication dates, authors, or reading times.

### 10.2 ResearchList

**Responsibility:** Render research entries in a consistent editorial layout.

Requirements:

- Support an empty state.
- Preserve chronological or editorial ordering from the data source.
- Maintain readable titles and descriptions.
- Use real destinations.
- Avoid generic blog-card styling.

### 10.3 Research Article Composition

Recommended structure:

```text
ARTICLE CATEGORY

TITLE

ABSTRACT

AUTHOR / DATE / READING TIME

ARTICLE BODY

FIGURES AND DIAGRAMS

CONCLUSION

RELATED RESEARCH
```

Long-form content should use the reading-width container.

Figures must have appropriate captions and alternative text.

## 11. FEATURE SECTION

**Responsibility:** Compose a content section with text and an optional visual.

```tsx
type FeatureSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  visual?: React.ReactNode;
  visualPosition?: "left" | "right";
  tone?: "dark" | "light";
};
```

Use for:

- The physical world.
- Platform explanations.
- Intelligence.
- Vision.
- Technical capabilities.

Requirements:

- Support both image-left and image-right compositions.
- Avoid repeating the same composition in every section.
- Keep headings and descriptions semantically meaningful.
- Collapse to a single column on mobile.

## 12. CTA SECTION

**Responsibility:** Provide a clear next step at the end of a relevant page.

```tsx
type CTASectionProps = {
  title: string;
  description?: string;
  actionLabel: string;
  actionHref: string;
  tone?: "dark" | "light";
};
```

Default contact message:

```text
LET'S BUILD INTELLIGENT
SYSTEMS FOR THE PHYSICAL
WORLD.

Partnerships. Industrial systems. Research.

CONTACT METABOTICS →
```

Requirements:

- One dominant action.
- Optional supporting text.
- Consistent button styling.
- Real navigation destination.
- No competing collection of unrelated buttons.

## 13. CONTACT FORM

**Responsibility:** Collect contact inquiries with accessible validation.

Suggested interface:

```tsx
type ContactFormValues = {
  name: string;
  company: string;
  email: string;
  interest: string;
  message: string;
};

type ContactFormProps = {
  onSubmit: (
    values: ContactFormValues
  ) => Promise<void>;
};
```

Fields:

- Name — required.
- Company — optional unless business requirements specify otherwise.
- Email — required.
- Interest — optional.
- Message — required.

Interest options may include:

- Industrial partnership.
- Technology.
- Research.
- Investment.
- Other.

Only include categories that match the actual business strategy.

### Required states

**Idle**
- Fields are editable.
- Submit action is available.

**Invalid**
- Invalid fields display clear messages.
- Error messages are associated with their inputs.

**Submitting**
- Duplicate submissions are prevented.
- Progress is communicated to the user.

**Success**
- Confirmation appears only after successful submission.

**Failure**
- Explain that submission failed.
- Preserve entered information when safe.
- Allow the user to retry.

### Security requirements

- Validate submitted data on the server.
- Do not rely exclusively on frontend validation.
- Protect the submission endpoint against abuse.
- Use appropriate CSRF protection when applicable to the application's authentication and request architecture.
- Apply rate limiting where appropriate.
- Do not expose API keys or server credentials in frontend code.
- Do not store sensitive form submissions in browser storage.
- Do not claim a message was sent when no working backend integration exists.

## 14. NOT FOUND COMPONENT

**Responsibility:** Provide a consistent experience for unknown routes.

Content:

```text
404 / SYSTEM NOT FOUND

The requested route does not exist.

RETURN TO METABOTICS →
```

Requirements:

- Use a clear heading.
- Provide a working route to the homepage.
- Preserve the global visual identity.
- Avoid displaying internal errors or stack traces.

## 15. INTERACTION STATES

All interactive components must define their relevant states.

| State | Requirement |
|---|---|
| Default | Normal appearance |
| Hover | Subtle visual feedback |
| Focus | Clearly visible keyboard indicator |
| Active | Appropriate pressed or selected appearance |
| Disabled | Clearly unavailable and non-interactive |
| Loading | Communicate ongoing work |
| Error | Explain the problem where relevant |
| Success | Confirm a completed action |

Not every component requires every state.

Do not make static decorative elements appear interactive.

## 16. RESPONSIVE BEHAVIOR

### Desktop

- Use the full grid.
- Allow asymmetric compositions.
- Keep diagrams readable.
- Preserve generous whitespace.
- Use horizontal navigation.

### Tablet

- Reduce column count where necessary.
- Preserve typography hierarchy.
- Reposition diagrams when horizontal space is insufficient.
- Avoid cramped navigation.

### Mobile

- Use a single primary content column.
- Stack major visual and text elements.
- Convert horizontal flows to vertical flows when needed.
- Keep actions easy to tap.
- Preserve diagram labels and explanatory content.
- Prevent horizontal overflow.

Use responsive CSS rather than creating separate copies of the same component for each device.

## 17. ACCESSIBILITY REQUIREMENTS

Every production component must follow appropriate accessibility practices.

- Use semantic HTML elements.
- Maintain logical heading order.
- Support keyboard navigation.
- Provide visible focus indicators.
- Associate form labels with inputs.
- Communicate validation errors accessibly.
- Provide useful alternative text for meaningful images.
- Hide purely decorative graphics from assistive technology.
- Respect reduced-motion preferences.
- Maintain sufficient text and control contrast.
- Do not use color alone to communicate state.
- Avoid inaccessible custom controls when native elements are sufficient.

## 18. MOTION SPECIFICATION

Animation should explain relationships or provide feedback.

Suitable examples:

- Subtle line drawing in the system diagram.
- Brief entrance transitions.
- Small arrow movement on hover.
- Controlled activation of diagram stages.

Requirements:

- Keep transitions restrained.
- Avoid unnecessary continuous animation.
- Avoid delaying access to content.
- Respect reduced-motion preferences.
- Do not rely on animation to reveal essential information.

## 19. COMPONENT TESTING

Test reusable components before assembling all pages.

### Foundation

- [ ] Container widths are correct.
- [ ] Sections align consistently.
- [ ] Typography remains readable.
- [ ] Buttons use the correct semantic element.
- [ ] Focus indicators are visible.

### Layout

- [ ] Header navigation works.
- [ ] Mobile menu opens and closes.
- [ ] Active navigation is identified.
- [ ] Footer links resolve correctly.

### Technical diagrams

- [ ] Stage ordering is correct.
- [ ] Connections are understandable.
- [ ] Mobile diagrams remain readable.
- [ ] Illustrative data is not mistaken for real measurements.

### Content

- [ ] Application rows navigate correctly.
- [ ] Research entries use real content.
- [ ] Empty states are handled.
- [ ] No placeholder links remain in production.

### Contact form

- [ ] Required fields are validated.
- [ ] Invalid submissions are rejected.
- [ ] Loading state prevents duplicate submissions.
- [ ] Success is shown only after confirmation.
- [ ] Failure allows a reasonable retry.

### Accessibility

- [ ] Keyboard-only navigation works.
- [ ] Inputs have accessible labels.
- [ ] Meaningful images have appropriate alternative text.
- [ ] Reduced-motion preferences are respected.
- [ ] Layout remains usable at narrow viewport widths.

## 20. IMPLEMENTATION ORDER

Build in this order:

1. Container and global styles.
2. Typography and design tokens.
3. Section, SectionLabel, and Divider.
4. Button and Link.
5. SiteHeader.
6. MobileNavigation.
7. SiteFooter.
8. Hero.
9. SystemNode and SystemDiagram.
10. ProcessFlow and TechnicalAnnotation.
11. FeatureSection.
12. ApplicationRow and ApplicationList.
13. ResearchRow and ResearchList.
14. CTASection.
15. ContactForm.
16. NotFound.
17. Compose the homepage.
18. Validate the homepage before building the remaining pages.

Do not implement all page layouts before testing the shared components.

## 21. DEFINITION OF DONE

A component is complete when:

- Its responsibility is clearly defined.
- Its interface is documented.
- It follows the design system.
- It works at supported screen widths.
- It has appropriate accessibility behavior.
- Interactive states work as intended.
- It contains no unnecessary duplicated logic.
- It passes relevant tests.
- It uses real content or explicitly identified placeholders.
- It integrates with the existing repository without breaking unrelated features.

## 22. FINAL PRINCIPLE

The component system must express one coherent visual and technical identity.

Every page should feel like another view of the same underlying system.

Build for reuse without making every section look identical.

Build for technical credibility without sacrificing readability.

Build for visual precision without compromising accessibility.

**Metabotics — Software for the Physical World.**