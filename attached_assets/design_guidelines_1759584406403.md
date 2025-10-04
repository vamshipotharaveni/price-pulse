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
- **Background**: 0 0% 98% (neutral, clean)
- **Surface**: 0 0% 100% (cards, product containers)
- **Primary**: 220 90% 56% (trust-building blue, CTA buttons)
- **Success/Lowest**: 142 76% 36% (lowest price indicators)
- **Warning/Mid**: 45 93% 47% (mid-range prices)
- **Danger/High**: 0 72% 51% (higher prices)
- **Text Primary**: 220 13% 13%
- **Text Secondary**: 220 9% 46%

### Dark Mode
- **Background**: 220 13% 10%
- **Surface**: 220 13% 15% (elevated cards)
- **Primary**: 220 90% 65% (brighter for dark backgrounds)
- **Success/Lowest**: 142 70% 45%
- **Warning/Mid**: 45 90% 55%
- **Danger/High**: 0 65% 58%
- **Text Primary**: 0 0% 95%
- **Text Secondary**: 220 9% 65%

---

## Typography

**Font Stack**: Inter (primary), Roboto (fallback) via Google Fonts

- **Hero/Headers**: 700 weight, 2.5rem-4rem (40px-64px)
- **Section Titles**: 600 weight, 1.75rem-2rem (28px-32px)
- **Product Names**: 500 weight, 1rem-1.125rem (16px-18px)
- **Prices**: 700 weight, 1.5rem-2rem (24px-32px), tabular numbers
- **Body Text**: 400 weight, 0.875rem-1rem (14px-16px)
- **Price Difference**: 600 weight, 0.875rem (14px)
- **Platform Labels**: 500 weight, 0.75rem (12px), uppercase tracking

---

## Layout System

**Spacing Units**: Tailwind units of 2, 4, 6, 8, 12, 16, 20 (p-2, m-4, gap-6, py-8, etc.)

**Container Widths**:
- Max content width: max-w-7xl (1280px)
- Search results: max-w-6xl (1152px)
- Product cards: Fixed width responsive grid

**Grid Patterns**:
- Desktop: 3-4 column product grid (grid-cols-3 lg:grid-cols-4)
- Tablet: 2 column (md:grid-cols-2)
- Mobile: Single column stacked

---

## Component Library

### Header/Navigation
- Sticky top navigation with search bar prominence
- Logo left, location selector center-left, theme toggle and profile right
- Search bar: Full-width on mobile, 60% width on desktop with autocomplete dropdown
- Platform filter pills below header (Zepto, Blinkit, BigBasket, etc.) with active state indicators

### Location Selector
- Modal trigger button showing current pincode/area
- Modal with pincode input, detect location button, recent searches
- Visual confirmation with subtle success animation

### Search Experience
- Large, prominent search bar with search icon and clear button
- Autocomplete suggestions with category tags (Staples, Vegetables, Dairy)
- Recent searches and trending items below empty search
- Voice search icon (future enhancement placeholder)

### Product Comparison Cards
**Primary View**: Grid of comparison cards, each showing:
- Product image (square, 200x200px or aspect-square)
- Product name and quantity/weight
- Platform logo badges (small, 24x24px)
- Price grid: 2x2 or 3x2 layout showing all platform prices
- Lowest price highlighted with green badge and "Lowest Price" tag
- Savings indicator: "Save ₹X compared to highest"
- Quick buy button for lowest price option
- "Compare Details" expansion button

**Expanded View**: Detailed comparison showing:
- Larger product image
- Full platform comparison table with delivery time, availability
- Price history graph (future enhancement)
- Per-unit price comparison (₹/kg, ₹/L)
- Platform-specific offers or promotions

### Platform Price Cards (within comparison)
- Platform logo with name
- Large price display with currency symbol
- Original price (if discounted) struck through
- Delivery time estimate
- Stock status indicator (In Stock/Low Stock/Out of Stock)
- Primary CTA button: "Buy on [Platform]"

### Filter & Sort Panel
- Sidebar on desktop (left-aligned, collapsible), bottom sheet on mobile
- Filters: Price range slider, platform selection, category, delivery time, availability
- Sort options: Lowest price, highest savings, fastest delivery, popularity
- Active filter badges with clear all option

### Results Summary Bar
- Shows count: "Found 47 products matching 'sugar'"
- Active filters display
- Sort dropdown (right-aligned)
- View toggle: Grid/List view

### Empty States
- No results: Illustration + suggestions for similar products
- No location: Prompt to set delivery location
- Loading: Skeleton cards matching product card layout

### Price Badges & Indicators
- "Lowest Price" badge: Green with checkmark icon
- Savings badge: Shows percentage saved (e.g., "25% off")
- Platform exclusive badges for special deals
- Out of stock overlay: Semi-transparent with "Check other platforms" CTA

### Footer
- Platform links and social media
- About, Contact, Privacy Policy, Terms
- Newsletter signup for price alerts (with email input)
- Platform logos with "We compare" label

---

## Animations & Interactions

**Minimal, Purposeful Motion**:
- Price badge pulse on initial load (1 second)
- Smooth expansion for comparison details (300ms ease-in-out)
- Skeleton loading for async price fetching
- Hover states: Subtle elevation on cards (shadow-md to shadow-lg)
- Location confirmation: Checkmark fade-in
- Platform redirect: Brief "Redirecting..." overlay

**Critical**: Avoid distracting animations; prioritize speed and clarity

---

## Images

**Hero Section**: 
- Hero image showing fresh groceries/shopping basket with price tags overlay
- Dimensions: Full-width, 60vh on desktop, 40vh on mobile
- Overlay: Semi-transparent gradient (dark at bottom) for text legibility
- Text: "Compare. Save. Shop Smart." with search bar integrated

**Product Images**:
- Square format (aspect-square)
- Clean white/transparent background
- Consistent padding within image bounds
- Lazy loading for performance

**Platform Logos**:
- Small icons (24x24px) in cards
- Larger (48x48px) in detailed comparison
- SVG format for crisp rendering

**Empty State Illustrations**:
- Simple, friendly illustrations for no results, no location set
- Muted color palette matching theme

---

## Responsive Behavior

**Mobile-First Priorities**:
- Bottom sheet for filters instead of sidebar
- Sticky search bar with collapsed header on scroll
- Single column product cards
- Swipeable platform comparison within cards
- Bottom navigation for quick access (Home, Favorites, History, Profile)

**Desktop Enhancements**:
- Multi-column grid (3-4 products)
- Hover tooltips for additional info
- Side-by-side comparison view option
- Keyboard shortcuts for power users

---

## Accessibility & Dark Mode

- WCAG AA compliant contrast ratios in both modes
- Focus indicators on all interactive elements
- Screen reader labels for price comparisons
- Dark mode toggle: Smooth transition (200ms), persisted to local storage
- Form inputs maintain consistent styling in both modes (dark surface with proper contrast)
- Keyboard navigation for all comparison actions