# Grocery Price Comparison App

## Overview

This is a grocery price comparison platform that allows users to search for grocery items and compare real-time prices across multiple Indian e-commerce platforms including Zepto, Blinkit, BigBasket, Swiggy Instamart, and Reliance. The application helps users find the lowest prices and save money on grocery shopping by providing instant price comparisons and savings calculations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized builds
- Wouter for lightweight client-side routing

**UI/Design System:**
- shadcn/ui component library (New York style variant) built on Radix UI primitives
- Tailwind CSS with custom configuration for utility-first styling
- Material Design 3 inspired design with e-commerce aesthetics (Google Shopping, Amazon)
- Custom color system optimized for price comparison with semantic colors:
  - Success/Lowest prices (green)
  - Warning/Mid prices (amber)
  - Danger/High prices (red)
- Light/dark theme support via CSS variables and theme context
- Inter and Roboto font stack loaded from Google Fonts
- Responsive, mobile-first design approach

**State Management:**
- TanStack Query (React Query) for server state management and data fetching
- React Context API for theme management (ThemeProvider)
- Local component state with React hooks (useState, useEffect)
- Custom toast notification system via useToast hook

**Key Features:**
- Real-time product search with debouncing capability
- Location-based filtering via pincode and geolocation detection
- Platform-specific filtering (all platforms, Zepto, Blinkit, etc.)
- Quantity selector supporting multiple units (kg, liters, pieces, dozen)
- Price comparison visualization with savings calculations
- External platform purchase redirects via deep links

### Backend Architecture

**Technology Stack:**
- Node.js with Express.js for REST API server
- TypeScript with ES modules (ESM)
- Development server using tsx for TypeScript execution

**Application Structure:**
- Monorepo structure with shared types between client and server
- `/server` - Express backend with route registration pattern
- `/client` - React frontend
- `/shared` - Shared TypeScript schemas and types
- Vite middleware integration for development with HMR

**Data Storage:**
- In-memory storage implementation (MemStorage class) for development
- Storage interface pattern (IStorage) for easy swapping to persistent storage
- Drizzle ORM configured for PostgreSQL (ready for production database)
- Schema-first approach with Drizzle Zod for type-safe validation

**API Design:**
- RESTful API with `/api` prefix for all backend routes
- Request/response logging middleware with duration tracking
- JSON request/response handling
- Credential-based authentication support (cookies)
- Error handling middleware with proper HTTP status codes

### Database Schema

**Current Schema (Users table):**
- Users table with UUID primary keys (auto-generated)
- Username (unique) and password fields
- Drizzle ORM schema defined in `/shared/schema.ts`
- Migration configuration points to PostgreSQL dialect
- Schema validation using Drizzle Zod

**Database Configuration:**
- PostgreSQL as the target database (via Neon serverless driver)
- Connection via DATABASE_URL environment variable
- Migration files stored in `/migrations` directory
- Push-based schema deployment via `db:push` script

### External Dependencies

**Third-party UI Libraries:**
- Radix UI primitives (accordion, alert-dialog, avatar, checkbox, collapsible, context-menu, dialog, dropdown-menu, hover-card, label, menubar, navigation-menu, popover, progress, radio-group, scroll-area, select, separator, slider, switch, tabs, toast, toggle, tooltip)
- shadcn/ui component system
- Embla Carousel for carousels
- cmdk for command palette
- class-variance-authority for variant-based styling
- Lucide React for icons

**State Management & Data Fetching:**
- TanStack Query for server state
- React Hook Form with Hookform Resolvers for form handling

**Database & ORM:**
- Drizzle ORM for type-safe database queries
- Drizzle Zod for schema validation
- Neon Serverless for PostgreSQL connection
- connect-pg-simple for PostgreSQL session store

**Utilities:**
- date-fns for date manipulation
- clsx and tailwind-merge for className utilities
- nanoid for unique ID generation

**Development Tools:**
- Replit-specific Vite plugins (runtime error modal, cartographer, dev banner)
- PostCSS with Tailwind CSS and Autoprefixer
- esbuild for production server bundling

**Font Loading:**
- Google Fonts (Inter and Roboto families)
- Loaded via CDN in HTML head

**Build & Development:**
- Vite for frontend bundling and dev server
- esbuild for backend bundling in production
- TypeScript compilation checking without emit
- Path aliases configured (@/, @shared/, @assets/)