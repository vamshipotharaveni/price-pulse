# Grocery Price Comparison App - Design Guidelines

## Design Approach: Utility-First with E-commerce Polish

**Selected Framework**: Material Design 3 with inspiration from Google Shopping, Amazon, and modern price comparison platforms. This approach prioritizes speed, clarity, and data density while maintaining visual appeal.

**Core Principles**:
- Instant visual hierarchy for price comparison
- Trust signals through clean data presentation
- Quick scanning and decision-making
- Seamless platform integration

---

## Color System

### Light Mode
- **Background**: 0 0% 98%
- **Surface**: 0 0% 100%
- **Primary**: 220 90% 56% (trust-building blue)
- **Success/Lowest**: 142 76% 36%
- **Warning/Mid**: 45 93% 47%
- **Danger/High**: 0 72% 51%
- **Text Primary**: 220 13% 13%
- **Text Secondary**: 220 9% 46%

### Dark Mode
- **Background**: 220 13% 10%
- **Surface**: 220 13% 15%
- **Primary**: 220 90% 65%
- **Success/Lowest**: 142 70% 45%
- **Warning/Mid**: 45 90% 55%
- **Danger/High**: 0 65% 58%
- **Text Primary**: 0 0% 95%
- **Text Secondary**: 220 9% 65%

---

## Typography

**Font Stack**: Inter (primary), Roboto (fallback) via Google Fonts

- **Hero/Headers**: 700 weight, 2.5rem-4rem
- **Section Titles**: 600 weight, 1.75rem-2rem
- **Product Names**: 500 weight, 1rem-1.125rem
- **Prices**: 700 weight, 1.5rem-2rem, tabular numbers
- **Body Text**: 400 weight, 0.875rem-1rem
- **Price Difference**: 600 weight, 0.875rem
- **Platform Labels**: 500 weight, 0.75rem, uppercase tracking

---

## Layout System

**Spacing Units**: Tailwind units of 2, 4, 6, 8, 12, 16, 20

**Container Widths**:
- Max content width: max-w-7xl
- Search results: max-w-6xl
- Product cards: Fixed width responsive grid

**Grid Patterns**:
- Desktop: 3-4 column (grid-cols-3 lg:grid-cols-4)
- Tablet: 2 column (md:grid-cols-2)
- Mobile: Single column

---

## Component Library

### Header/Navigation
- Sticky top navigation with prominent search bar
- **Logo**: Double the standard size (h-16 on desktop, h-12 on mobile) for enhanced brand presence
- Location selector center-left, theme toggle and profile right
- Search bar: Full-width on mobile, 60% width on desktop with autocomplete
- Platform filter pills below header with active state indicators

### Product Comparison Cards
- Product image (square, aspect-square)
- Product name and quantity/weight
- Platform logo badges (24x24px)
- Price grid: 2x2 or 3x2 layout
- Lowest price highlighted with green badge
- Savings indicator: "Save ₹X compared to highest"
- Quick buy button for lowest price
- "Compare Details" expansion button

### Platform Price Cards
- Platform logo with name
- Large price display with currency symbol
- Original price struck through if discounted
- Delivery time estimate
- Stock status indicator
- Primary CTA: "Buy on [Platform]"

### Filter & Sort Panel
- Sidebar on desktop (collapsible), bottom sheet on mobile
- Filters: Price range slider, platform selection, category, delivery time, availability
- Sort: Lowest price, highest savings, fastest delivery, popularity
- Active filter badges with clear all option

---

## Images

**Hero Section**: 
- Full-width hero image showing fresh groceries/shopping basket with price tags overlay
- Dimensions: 60vh on desktop, 40vh on mobile
- Semi-transparent gradient overlay for text legibility
- Integrated search bar with text: "Compare. Save. Shop Smart."

**Product Images**:
- Square format (aspect-square)
- Clean white/transparent background
- Consistent padding
- Lazy loading for performance

**Platform Logos**:
- Small icons (24x24px) in cards
- Larger (48x48px) in detailed comparison
- SVG format for crisp rendering

**Empty State Illustrations**:
- Simple, friendly illustrations for no results, no location set
- Muted color palette matching theme

---

## Animations & Interactions

**Minimal, Purposeful Motion**:
- Price badge pulse on initial load (1 second)
- Smooth expansion for comparison details (300ms ease-in-out)
- Skeleton loading for async price fetching
- Hover states: Subtle elevation on cards (shadow-md to shadow-lg)
- Location confirmation: Checkmark fade-in
- Platform redirect: Brief "Redirecting..." overlay

---

## Responsive Behavior

**Mobile-First**:
- Bottom sheet for filters
- Sticky search bar with collapsed header on scroll
- Single column product cards
- Swipeable platform comparison
- Bottom navigation (Home, Favorites, History, Profile)

**Desktop**:
- Multi-column grid (3-4 products)
- Hover tooltips for additional info
- Side-by-side comparison view
- Keyboard shortcuts

---

## Accessibility & Dark Mode

- WCAG AA compliant contrast ratios
- Focus indicators on all interactive elements
- Screen reader labels for price comparisons
- Dark mode toggle with smooth transition (200ms)
- Persistent theme preference in local storage
- Form inputs maintain consistent styling in both modes