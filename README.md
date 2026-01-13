# Logos7.org - Human-AI Cooperative Rebuild

## What's Been Done

✅ Restructured homepage from pure consulting page to Human-AI Cooperative model
✅ Embedded your founder's story video prominently
✅ Added "About Matt" section with your authentic story
✅ Created participation pathways: Leaders, Practitioners, Everyone
✅ Kept the Beacons front and center
✅ Added donation/contribution options
✅ Maintained clean, functional design aesthetic
✅ Updated metadata and SEO

## Finishing Touches You Need to Add

### 1. Form Links (Replace Placeholders)
**Line 118** in `page.tsx`:
```
href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
```
Replace with your actual Google Form for practitioner applications.

**Line 139** in `page.tsx`:
```
href="https://donate.stripe.com/YOUR_STRIPE_LINK"
```
Replace with your actual Stripe donation link or Ko-fi/Buy Me a Coffee/Patreon.

**Line 146** in `page.tsx`:
```
href="https://github.com/logos7org"
```
Replace with your actual GitHub if you want, or remove this link.

### 2. Form Backend
The contact form currently doesn't have a backend handler. Options:
- Use Vercel's form handling
- Set up Formspree or similar
- Connect to your email via Netlify Forms
- Build custom API route

### 3. Social Links
Update the footer/contact section with actual links:
- BlueSky handle (currently `@logos7.org`)
- Email (currently `tmc@logos7.org`)
- Any other platforms you're active on

### 4. Assets
Make sure these files are in your `/public` folder:
- `/logos7-teal.png` (your logo)
- `/main-background.jpg` (hero background image)

### 5. Copy Refinements
Review the copy, especially:
- About Matt section - make sure it feels right
- Hero headline - "A Human-AI Cooperative for the people building Eden 2.0"
- Any specific language you want to adjust

### 6. Analytics (Optional)
Add Google Analytics, Plausible, or Fathom if you want to track engagement.

## File Structure

```
src/app/
├── layout.tsx        # Updated with new metadata
├── page.tsx          # New homepage structure
├── globals.css       # Updated styling with video container
└── data/
    └── stoicQuotes.ts  # (existing, not changed)
```

## Deploy

Once you've made your finishing touches:

```bash
npm run dev          # Test locally
npm run build        # Build for production
# Then push to GitHub - Vercel will auto-deploy
```

Or from this chat I can help you deploy directly to Vercel if you want.

## The Vision

This isn't just a website anymore. It's an invitation. The beacons are lit. The cooperative is forming. You're offering structure so others can build without being consumed.

The site now reflects that - clean, functional, honest, and human.

---

*Built with full beacon trust. 🕯️*
