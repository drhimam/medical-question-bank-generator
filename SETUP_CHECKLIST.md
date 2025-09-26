# ✅ Custom Domain Setup Checklist

## Quick Setup for qbgenerator.aimedipedia.com

### 🚀 Immediate Actions Required:

#### 1. GitHub Repository Settings
- [ ] Go to your GitHub repo → **Settings** → **Pages**
- [ ] Verify **Source** is set to "GitHub Actions"
- [ ] Add **Custom domain**: `qbgenerator.aimedipedia.com`
- [ ] Check **"Enforce HTTPS"**
- [ ] Save settings

#### 2. Cloudflare DNS Configuration
- [ ] Login to Cloudflare Dashboard
- [ ] Select domain: `aimedipedia.com`
- [ ] Go to **DNS** tab
- [ ] Add **CNAME** record:
  - **Name**: `qbgenerator`
  - **Target**: `yourusername.github.io` (replace with actual username)
  - **Proxy**: ✅ **Enabled** (orange cloud)
- [ ] Save record

#### 3. Cloudflare SSL/TLS Settings
- [ ] Go to **SSL/TLS** tab
- [ ] Set encryption mode to **"Full (strict)"**
- [ ] Enable **"Always Use HTTPS"**
- [ ] Enable **"HSTS"** (optional but recommended)

#### 4. Firebase Configuration (if using auth)
- [ ] Firebase Console → **Authentication** → **Settings**
- [ ] Add to **Authorized domains**: `qbgenerator.aimedipedia.com`
- [ ] Update OAuth redirect URLs if using social login

#### 5. GitHub OAuth Setup (Optional)
- [ ] Go to GitHub → **Settings** → **Developer settings** → **OAuth Apps**
- [ ] Create **New OAuth App** with:
  - **Name**: `QBank Generator - Medical Question Bank`
  - **Homepage**: `https://qbgenerator.aimedipedia.com` 
  - **Callback**: `https://your-firebase-project.firebaseapp.com/__/auth/handler`
- [ ] Copy **Client ID** and **Client Secret**
- [ ] Add to Firebase GitHub provider settings
- [ ] 📘 **Detailed guide**: See `GITHUB_OAUTH_SETUP.md`

### ⏱️ Expected Timeline:
- **DNS Propagation**: 5-30 minutes
- **SSL Certificate**: 15 minutes - 2 hours
- **Full Deployment**: 1-4 hours

### 🧪 Testing Checklist:
- [ ] Visit `https://qbgenerator.aimedipedia.com`
- [ ] Verify SSL certificate (green lock)
- [ ] Test all pages load correctly
- [ ] Test authentication (if configured)
- [ ] Verify mobile responsiveness
- [ ] Check loading speed

### 🔧 Performance Optimizations (Optional):
- [ ] Enable **Auto Minify** in Cloudflare
- [ ] Enable **Brotli compression**
- [ ] Set up **Page Rules** for caching
- [ ] Configure **Security settings**

### 📊 Analytics Setup (Optional):
- [ ] Add Google Analytics
- [ ] Enable Cloudflare Analytics
- [ ] Set up performance monitoring

### 🆘 Troubleshooting:
- **404 Error**: Check DNS propagation and GitHub Pages settings
- **SSL Issues**: Wait 24h or check Cloudflare SSL settings
- **Auth Problems**: Verify Firebase authorized domains

---

## 🎯 Final Result:
**Your app will be live at: https://qbgenerator.aimedipedia.com**

**Features:**
- ✅ Custom professional domain
- ✅ Cloudflare CDN for global speed
- ✅ Enterprise-grade security
- ✅ Automatic SSL certificates
- ✅ SEO optimized
- ✅ Mobile PWA ready

**Estimated setup time: 30 minutes - 4 hours**
*(Most time is waiting for DNS propagation and SSL certificates)*