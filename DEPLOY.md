# DEPLOYMENT INSTRUCTIONS - Logos7 Rebuild

## Quick Start (5 minutes)

### Step 1: Download and Extract
You should have downloaded these files. Extract them.

### Step 2: Replace Files in Your Project
Navigate to your existing `logos7-org` project folder on your computer.

Replace these three files:
- `src/app/page.tsx` → with the new `page.tsx`
- `src/app/globals.css` → with the new `globals.css`  
- `src/app/layout.tsx` → with the new `layout.tsx`

### Step 3: Push to GitHub
Open terminal/command prompt in your project folder and run:

```bash
git add .
git commit -m "Rebuild: Human-AI Cooperative model with video"
git push
```

### Step 4: Wait 2 Minutes
Vercel will automatically detect the changes and deploy.
Check https://logos7.org in 2-3 minutes. It should be live.

---

## If You Don't Have Git Set Up

### Option A: Use GitHub Desktop
1. Open GitHub Desktop
2. Select your `logos7-org` repository
3. It will show the changed files
4. Write commit message: "Rebuild: Cooperative model"
5. Click "Commit to main"
6. Click "Push origin"
7. Done! Wait 2 minutes and check the site.

### Option B: Use Vercel Dashboard
1. Go to vercel.com/dashboard
2. Find your `logos7-org` project
3. Click on it
4. Look for "Git" or "Deployments" tab
5. You can manually trigger a deploy from there

---

## After It's Live

### Things to Update (in page.tsx):

**Line 118** - Practitioner Application Form:
```
href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
```

**Line 139** - Donation Link:
```
href="https://donate.stripe.com/YOUR_STRIPE_LINK"
```

**Line 146** - GitHub Link (or remove):
```
href="https://github.com/logos7org"
```

### Contact Form
The contact form won't work yet - it needs a backend.
Quick fix: Use Formspree.io (free) or similar.

---

## Need Help?

If you get stuck:
1. Take a screenshot of the error
2. Ask me in chat
3. I'll walk you through it

The hardest part is done. You just need to get these files into your GitHub repo.

You got this. 🚀
