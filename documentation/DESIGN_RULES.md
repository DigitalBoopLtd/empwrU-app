# 🎨 empwrU Design Rules

**Last Updated**: October 25, 2025  
**Status**: Active Guidelines

---

## 📐 Core Design Principles

### **1. Icons, Not Emojis**

✅ **Always use Lucide React icons**  
❌ **Never use emojis in production UI**

**Why?**
- Professional appearance
- Consistent styling
- Scalable and customizable
- Better accessibility
- Performance optimized

**Example:**
```jsx
// ✅ Good
import { Lock } from 'lucide-react';
<Lock className="w-5 h-5 text-primary" />

// ❌ Bad
<span>🔒</span>
```

**Exception**: Emojis are OK in documentation or internal notes.

---

### **2. Icon Usage Guidelines**

**Sizes:**
- Small badges: `w-5 h-5` (20px)
- Medium cards: `w-6 h-6` (24px)
- Large features: `w-8 h-8` or `w-10 h-10` (32-40px)

**Colors:**
- Primary actions: `text-primary` (brand purple)
- On gradient: `text-white`
- Muted/secondary: `text-foreground/70`

**Backgrounds:**
- Icon badges: `bg-gradient-sunrise` with rounded corners
- Standalone: No background, just colored icon

---

### **3. Lucide Icon Library**

**Approved Icons** (in use):

| Purpose | Icon | Import |
|---------|------|--------|
| Privacy | Lock | `<Lock />` |
| Speed | Zap | `<Zap />` |
| Payment | CreditCard | `<CreditCard />` |
| Empowerment | Sparkles | `<Sparkles />` |
| Belief | Heart | `<Heart />` |
| Connection | Users | `<Users />` |
| Innovation | Rocket | `<Rocket />` |
| Integrity | Shield | `<Shield />` |
| Inclusivity | Globe | `<Globe />` |
| Strength | Gem | `<Gem />` |
| Self-Awareness | Eye | `<Eye />` |
| Digital | Smartphone | `<Smartphone />` |
| Human | Handshake | `<Handshake />` |
| Navigation | ArrowRight | `<ArrowRight />` |
| Expand | ChevronDown | `<ChevronDown />` |
| Check | Check | `<Check />` |

**Finding More Icons:**
- Visit: https://lucide.dev
- Search for concept
- Import from 'lucide-react'

---

## 🎨 Brand Colors

**Primary Palette:**
```css
--primary: hsl(270 70% 50%)      /* Brand purple */
--foreground: hsl(270 50% 20%)   /* Text */
--border: hsl(270 30% 90%)       /* Borders */
```

**Gradient:**
```css
--gradient-sunrise: linear-gradient(135deg, 
  hsl(270 60% 45%) 0%,   /* Purple */
  hsl(320 70% 55%) 50%,  /* Pink */
  hsl(15 80% 65%) 100%   /* Orange */
)
```

**Pastels:**
```css
--pastel-purple: hsl(270 70% 85%)
--pastel-pink: hsl(320 70% 85%)
--pastel-peach: hsl(15 80% 85%)
--pastel-lavender: hsl(260 60% 90%)
```

---

## 📏 Spacing & Layout

**Container Max Widths:**
- Hero: `max-w-4xl`
- Content sections: `max-w-5xl`
- Wide sections: `max-w-6xl`
- Full-width grids: `max-w-7xl`

**Section Padding:**
- Standard: `py-32 px-6`
- Compact: `py-20 px-6`
- Minimal: `py-16 px-6`

**Rounded Corners:**
- Buttons: `rounded-lg` (8px)
- Cards: `rounded-2xl` (16px)
- Sections: `rounded-3xl` (24px)
- Icon badges: `rounded-full` (circle) or `rounded-lg`

---

## 🎭 Typography

**Headings:**
- H1 (Hero): `text-6xl md:text-8xl font-black`
- H2 (Sections): `text-5xl md:text-7xl font-black`
- H3 (Cards): `text-2xl md:text-3xl font-bold`
- H4 (Small): `text-xl font-bold`

**Body:**
- Large: `text-xl md:text-2xl`
- Standard: `text-lg`
- Small: `text-sm`

**Font Weight:**
- Headings: `font-black` (900) or `font-bold` (700)
- Body: `font-medium` (500) or normal (400)

---

## 🎨 Component Patterns

### **Trust Badges**
```jsx
<div className="flex items-center gap-2">
  <Lock className="w-5 h-5 text-primary" />
  <span className="font-medium">100% Private</span>
</div>
```

### **Value Cards**
```jsx
<div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border-2">
  <div className="w-12 h-12 rounded-lg bg-gradient-sunrise flex items-center justify-center mb-3">
    <Sparkles className="w-6 h-6 text-white" />
  </div>
  <h3 className="text-xl font-bold mb-2">Title</h3>
  <p className="text-sm text-foreground/70">Description</p>
</div>
```

### **Feature Steps**
```jsx
<div className="flex gap-8 items-center">
  <div className="w-20 h-20 rounded-full bg-gradient-sunrise flex items-center justify-center">
    <Smartphone className="w-10 h-10 text-white" />
  </div>
  <div>
    <h3 className="text-3xl font-bold mb-3">Title</h3>
    <p className="text-xl text-foreground/70">Description</p>
  </div>
</div>
```

---

## 🚫 Don'ts

❌ Don't use emojis in production UI  
❌ Don't mix icon libraries (stick to Lucide)  
❌ Don't use bare icons without context  
❌ Don't make icons too large (>48px usually too big)  
❌ Don't use overly complex icons  
❌ Don't forget to import icons  
❌ Don't use icon fonts (use SVG components)  

---

## ✅ Do's

✅ Use Lucide React icons consistently  
✅ Size icons appropriately for context  
✅ Color icons to match brand  
✅ Pair icons with text labels  
✅ Use semantic icon choices  
✅ Test icons at different screen sizes  
✅ Ensure sufficient contrast  

---

## 🎯 Accessibility

**Icons Must:**
- Have descriptive text nearby (never icon-only buttons without labels)
- Be sized for easy recognition (minimum 16px)
- Have sufficient color contrast
- Work with screen readers (text labels handle this)

**Don't:**
- Rely solely on color to convey meaning
- Use decorative icons without `aria-hidden="true"`
- Make clickable icons too small (<44px touch target)

---

## 📱 Responsive

**Mobile-First Approach:**
- Icons scale down gracefully on mobile
- Touch targets: minimum 44x44px for clickable icons
- Reduce icon size in mobile badges: `w-4 h-4` on mobile, `w-5 h-5` on desktop

**Example:**
```jsx
<Lock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
```

---

## 🔄 Consistency Checklist

Before adding new icons:
- [ ] Is it from Lucide React?
- [ ] Is the size appropriate?
- [ ] Is the color on-brand?
- [ ] Does it match existing icon patterns?
- [ ] Is there text nearby for context?
- [ ] Does it work on mobile?

---

## 📚 Resources

**Icon Library:**
- Lucide: https://lucide.dev
- React docs: https://lucide.dev/guide/packages/lucide-react

**Installation:**
```bash
npm install lucide-react
```

**Import:**
```jsx
import { IconName } from 'lucide-react';
```

---

## 🎨 Examples in Our Codebase

**Components Using Icons:**
- `Hero.jsx` - Trust badges
- `Values.jsx` - 8 value cards with gradient icon badges
- `Approach.jsx` - 3 approach steps with circular icon containers
- `StickyCTA.jsx` - Arrow icon in button
- `FAQ.jsx` - Chevron down for expand/collapse
- `WhatHappensNext.jsx` - Check icon for reassurance
- `Navbar.jsx` - Logo (image) + text

---

## 🚀 Performance

**Why Icons > Emojis:**
- Emojis: ~2-8KB each (image/font)
- Lucide icons: <1KB per icon (inline SVG)
- All icons tree-shakeable (only import what you use)
- No emoji font loading needed

---

## 🎯 Brand Alignment

Icons should feel:
- **Modern** - Clean, simple, recognizable
- **Warm** - Not too corporate or cold
- **Confident** - Clear and direct
- **Accessible** - Easy to understand

**Voice of Icon Choices:**
- Heart > Brain (belief over logic)
- Users > Person (community over individual)
- Sparkles > Star (magic over achievement)
- Handshake > Hand (connection over action)

---

## ✨ Final Rule

> **"If it needs a visual symbol, use a Lucide icon. If it needs decoration, use CSS. Emojis are for docs, not UI."**

---

**Document Version**: 1.0  
**Date**: October 25, 2025  
**Enforced**: All landing page components ✅

