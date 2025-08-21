# Breath-Again Website Deployment Guide

## 🚀 **Phase 1: GitHub Setup & Vercel Deployment**

### Step 1: Initialize Git Repository

First, let's initialize Git in your project directory:

```bash
# Navigate to your project directory
cd "D:\AI applications\breathe-again"

# Initialize git repository
git init

# Create .gitignore file (if not exists)
echo "node_modules/
.env.local
.env
.next/
out/
build/
.DS_Store
*.log
.vercel" > .gitignore

# Add all files to git
git add .

# Make initial commit
git commit -m "Initial commit: Breath-Again biophilic design website with animations and dark mode"
```

### Step 2: Create GitHub Repository

1. **Go to GitHub**: Visit [github.com](https://github.com) and sign in
2. **Create New Repository**:
   - Click the "+" icon → "New repository"
   - Repository name: `breathe-again-website` (or your preferred name)
   - Description: "Professional biophilic design website with modern animations and dark mode"
   - Set to **Public** (recommended for portfolio) or **Private**
   - **Don't** initialize with README (since we already have files)
   - Click "Create repository"

### Step 3: Connect Local Repository to GitHub

```bash
# Add GitHub remote (replace with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/breathe-again-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Deploy to Vercel

#### Option A: Vercel CLI (Recommended)
```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - Project name: breathe-again (or preferred name)
# - Directory: ./ (current directory)
# - Override settings? N
```

#### Option B: Vercel Dashboard
1. **Visit Vercel**: Go to [vercel.com](https://vercel.com)
2. **Sign up/Login**: Use GitHub account for easy integration
3. **Import Project**: Click "New Project" → "Import Git Repository"
4. **Select Repository**: Choose your `breathe-again-website` repository
5. **Configure**:
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
6. **Deploy**: Click "Deploy"

### Step 5: Configure Environment Variables (if needed)

If you have environment variables:

1. **In Vercel Dashboard**: Go to Project → Settings → Environment Variables
2. **Add variables**:
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=your_formspree_endpoint
   NEXT_PUBLIC_PROJECT_INQUIRY_ENDPOINT=your_inquiry_endpoint
   NEXT_PUBLIC_NEWSLETTER_ENDPOINT=your_newsletter_endpoint
   ```

### Step 6: Custom Domain (Optional)

1. **In Vercel Dashboard**: Go to Project → Settings → Domains
2. **Add Domain**: Enter your custom domain (e.g., `breatheagain.design`)
3. **Configure DNS**: Follow Vercel's DNS configuration instructions

---

## 📈 **Phase 2: SEO & Performance Optimization**

Now I'll implement comprehensive optimizations for perfect Lighthouse scores and professional SEO.

### Performance Optimization Checklist:
- ✅ Next.js Image optimization
- ✅ Lazy loading implementation  
- ✅ Loading states and skeletons
- ✅ Meta tags and Open Graph
- ✅ Structured data markup
- ✅ Dynamic sitemap generation
- ✅ Custom 404 page
- ✅ Canonical URLs
- ✅ Perfect accessibility

### Expected Results:
- **Performance**: 95-100
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

---

## 🔄 **Continuous Deployment Workflow**

Once set up, your workflow will be:

```bash
# Make changes to your code
# Save and test locally

# Commit changes
git add .
git commit -m "Description of changes"

# Push to GitHub
git push origin main

# Vercel automatically deploys! 🚀
```

### Auto-Deploy Features:
- **Preview Deployments**: Every pull request gets a preview URL
- **Production Deployments**: Every push to main deploys to production
- **Rollback**: Easy rollback to previous deployments
- **Analytics**: Built-in performance and usage analytics

---

## 🌐 **Live URLs**

After deployment, you'll have:
- **Production URL**: `https://your-project.vercel.app`
- **Custom Domain** (if configured): `https://your-domain.com`
- **Preview URLs**: For each branch/PR

---

## 🛠️ **Troubleshooting Common Issues**

### Build Errors:
```bash
# Check build locally first
npm run build

# Fix any TypeScript errors
npm run type-check

# Fix any linting errors  
npm run lint
```

### Environment Variables:
- Ensure all `NEXT_PUBLIC_` variables are set in Vercel
- Check variable names match exactly

### Domain Configuration:
- DNS changes can take 24-48 hours
- Use Vercel's DNS checker tool
- Ensure SSL certificate is issued

---

## 📊 **Post-Deployment Monitoring**

### Analytics Setup:
1. **Vercel Analytics**: Enable in project settings
2. **Google Analytics**: Add GA4 tracking code
3. **Search Console**: Verify domain ownership
4. **Performance Monitoring**: Use Vercel's built-in tools

### SEO Monitoring:
1. **Submit sitemap** to Google Search Console
2. **Monitor Core Web Vitals** in Vercel dashboard
3. **Test mobile performance** regularly
4. **Check structured data** with Google's Rich Results Test

---

## 🎯 **Next Steps After Deployment**

1. **Test thoroughly**: Check all pages and functionality
2. **Performance audit**: Run Lighthouse tests
3. **SEO verification**: Submit to search engines
4. **Social media**: Test Open Graph sharing
5. **Client review**: Share live URLs for feedback
6. **Documentation**: Update client with live URLs and admin access

Your website will be live and performing at professional standards! 🚀