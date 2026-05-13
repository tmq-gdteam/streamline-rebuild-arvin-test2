# Streamline - Design System

## 1. Global Constraints & Philosophy
- **Responsive Architecture**: Mobile-first Tailwind structural wrapping (`flex-col md:flex-row`).
- **Interactive Navigation**: Navbar MUST collapse into a functional Hamburger menu on small screens.
- **Fluid Typography**: CSS `clamp()` combined with fluid spacing to scale gracefully up to 4K viewports.
- **Container Safeguard**: 85% global container width limit (`w-[85%] max-w-[1180px]`) for ultra-wide desktop monitors, falling back to `w-[calc(100%-48px)]` on smaller screens.
- **Font Family**: 'Inter', sans-serif

## 2. Color Tokens (Tailwind v4 Variables)

### Brand Colors
- **Ink (Primary Text/Dark)**: `#081a44`
- **Ink Soft (Secondary Text)**: `#425173`
- **Muted**: `#6f7d9b`
- **Line (Borders/Dividers)**: `#e7edf8`
- **Surface**: `#ffffff`
- **Surface Blue**: `#f5f8ff`
- **Blue (Primary Brand)**: `#2563eb`
- **Blue-2 (Hover/Active)**: `#1848d7`
- **Cyan (Accent)**: `#16c7d7`
- **Green (Success/CTA)**: `#28d69b`
- **Purple (Accent)**: `#8c6cff`

### Semantic Gradients
- **Primary Button**: `linear-gradient(135deg, #23d89a, #10b981)`
- **Hero/Gradient Panel**: `linear-gradient(135deg, #1337b8 0%, #1555e8 48%, #266bff 100%)`
- **Soft Blob Gradient**: `linear-gradient(145deg, rgba(232,239,255,.92), rgba(246,249,255,.92))`

## 3. Typography Scale (Fluid `clamp()`)
- **Display 1 (Hero `h1`)**: `clamp(3.25rem, 8vw, 5.75rem)` | line-height: `0.95` | tracking: `-0.07em` | weight: `900`
- **Heading 2 (`h2`)**: `clamp(2.125rem, 4vw, 3.25rem)` | line-height: `1.08` | tracking: `-0.045em` | weight: `900`
- **Heading 3 (`h3`)**: `1.3125rem` (21px) | line-height: `1.2` | tracking: `-0.02em` | weight: `800`
- **Body Large (Subtitle)**: `1.1875rem` (19px) | line-height: `1.75` | weight: `400`
- **Body Base**: `1rem` (16px) | line-height: `1.6` | weight: `400`
- **Body Small (Nav/Btn)**: `0.875rem` (14px) | weight: `700/800`
- **Eyebrow/Kicker**: `0.75rem` (12px) | weight: `900` | uppercase | tracking: `0.12em`

## 4. Spacing & Layout Tokens
- **Section Padding**: `clamp(4rem, 8vw, 6rem)` top and bottom.
- **Radius**: `24px` (cards), `14px` (buttons), `18px` (icons/features)
- **Shadows**:
  - `shadow-sm`: `0 12px 30px rgba(18, 47, 105, 0.08)`
  - `shadow-md`: `0 24px 70px rgba(18, 47, 105, 0.14)`

## 5. UI Components Guidelines
- **Buttons**: Min-height `52px` (regular) or `40px` (small), padding `0 24px`, rounded-xl, scaling transform on hover.
- **Glassmorphism Nav**: `bg-white/78` with `backdrop-blur-[18px]`. Shell uses `bg-white/90` and `shadow-[0_16px_48px_rgba(8,26,68,0.06)]`.
- **Containers**: Base `max-w-[1180px]`. Nav shell `max-w-[1320px]`. Narrow container `max-w-[720px]`.
