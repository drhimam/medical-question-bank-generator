# 🌐 Cloudflare Custom Domain Setup Guide

## Setting up qbgenerator.aimedipedia.com

This guide will help you deploy your Medical Question Bank Generator on your custom Cloudflare subdomain.

## 📋 Prerequisites

- ✅ **Cloudflare account** with `aimedipedia.com` domain
- ✅ **GitHub repository** with your QBank Generator code
- ✅ **GitHub Pages enabled** on your repository

## 🚀 Step-by-Step Setup

### 1. Configure GitHub Pages with Custom Domain

#### GitHub Repository Settings:
1. Go to your GitHub repository
2. Click **Settings** tab
3. Scroll to **Pages** section
4. Under **Source**, ensure **"GitHub Actions"** is selected
5. Under **Custom domain**, enter: `qbgenerator.aimedipedia.com`
6. Check **"Enforce HTTPS"** (important for security)
7. Click **Save**

### 2. Configure Cloudflare DNS

#### Add DNS Record:
1. Login to your **Cloudflare Dashboard**
2. Select your domain: `aimedipedia.com`
3. Go to **DNS** tab
4. Click **"Add record"**
5. Configure the record:
   - **Type**: `CNAME`
   - **Name**: `qbgenerator`
   - **Target**: `yourusername.github.io` (replace with your GitHub username)
   - **Proxy status**: 🟡 **Proxied** (orange cloud icon)
   - **TTL**: Auto
6. Click **Save**

#### SSL/TLS Configuration:
1. Go to **SSL/TLS** tab
2. Set **SSL/TLS encryption mode** to **"Full (strict)"**
3. Go to **Edge Certificates** subtab
4. Enable **"Always Use HTTPS"**
5. Enable **"HTTP Strict Transport Security (HSTS)"**

#### Page Rules (Optional but Recommended):
1. Go to **Rules** → **Page Rules**
2. Create rule: `qbgenerator.aimedipedia.com/*`
3. Add settings:
   - **Cache Level**: Standard
   - **Browser Cache TTL**: 4 hours
   - **Edge Cache TTL**: 2 hours
4. Save and Deploy

### 3. Update Firebase Configuration (If Using Firebase Auth)

#### Authorized Domains:
1. Go to **Firebase Console** → Your project
2. Navigate to **Authentication** → **Settings**
3. Scroll to **Authorized domains**
4. Click **"Add domain"**
5. Add: `qbgenerator.aimedipedia.com`
6. Save changes

#### Update OAuth Redirect URLs:
1. **Google OAuth** (if using):
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Navigate to **APIs & Services** → **Credentials**
   - Edit your OAuth 2.0 client
   - Add to **Authorized redirect URIs**: 
     `https://your-firebase-project.firebaseapp.com/__/auth/handler`

2. **GitHub OAuth** (if using):
   - Go to GitHub → **Settings** → **Developer settings** → **OAuth Apps**
   - Edit your app
   - Update **Authorization callback URL**:
     `https://your-firebase-project.firebaseapp.com/__/auth/handler`

### 4. Verify Domain Propagation

#### Check DNS Propagation:
```bash
# Test DNS resolution
nslookup qbgenerator.aimedipedia.com

# Test with dig (if available)
dig qbgenerator.aimedipedia.com
```

#### Online Tools:
- [DNSChecker.org](https://dnschecker.org/) - Check global DNS propagation
- [WhatsMyDNS.net](https://whatsmydns.net/) - Verify DNS records worldwide

### 5. Test Your Setup

#### Verification Checklist:
- ✅ Visit `https://qbgenerator.aimedipedia.com`
- ✅ Verify SSL certificate (green lock icon)
- ✅ Test authentication (if Firebase is configured)
- ✅ Check all features work correctly
- ✅ Test mobile responsiveness
- ✅ Verify redirects work properly

## ⚡ Cloudflare Performance Optimizations

### Speed Optimizations:
1. **Auto Minify**: CSS, JavaScript, HTML
2. **Brotli Compression**: Enable for better compression
3. **HTTP/2**: Automatically enabled
4. **Rocket Loader™**: Optimize JavaScript loading

### Configuration in Cloudflare:
1. Go to **Speed** tab
2. **Optimization**:
   - Auto Minify: ✅ HTML, CSS, JavaScript
   - Brotli: ✅ Enable
   - Enhanced HTTP/2 Prioritization: ✅ Enable
3. **Polish**: Enable (optimize images)
4. **Mirage**: Enable (optimize for mobile)

## 🛡️ Security Enhancements

### Cloudflare Security Features:
1. **Security Level**: Medium (recommended)
2. **Bot Fight Mode**: Enable basic protection
3. **Browser Integrity Check**: Enable
4. **Hotlink Protection**: Enable (optional)

### Security Headers:
1. Go to **Rules** → **Transform Rules** → **HTTP Response Header Modification**
2. Add security headers:
   ```
   X-Frame-Options: DENY
   X-Content-Type-Options: nosniff
   Referrer-Policy: strict-origin-when-cross-origin
   X-XSS-Protection: 1; mode=block
   ```

## 📊 Analytics & Monitoring

### Cloudflare Analytics:
1. **Traffic Analytics**: Monitor visitor stats
2. **Performance Analytics**: Track Core Web Vitals
3. **Security Analytics**: Monitor threats blocked

### Google Analytics Integration:
- Add Google Analytics tracking code to your app
- Monitor user engagement and feature usage
- Track conversion rates for signup/login

## 🔧 Troubleshooting Common Issues

### Issue 1: "404 - File not found"
**Solution**: 
- Verify CNAME record points to correct GitHub Pages URL
- Ensure GitHub Pages is enabled and deployed
- Check that custom domain is saved in GitHub settings

### Issue 2: "SSL Certificate Error"
**Solution**:
- Wait 24-48 hours for certificate provisioning
- Ensure "Enforce HTTPS" is checked in GitHub
- Verify SSL/TLS mode is "Full (strict)" in Cloudflare

### Issue 3: "Authentication not working"
**Solution**:
- Add custom domain to Firebase authorized domains
- Update OAuth app redirect URLs
- Clear browser cache and cookies

### Issue 4: "Site loads slowly"
**Solution**:
- Enable Cloudflare optimizations (Auto Minify, Brotli)
- Check Page Rules configuration
- Verify proxy status is enabled (orange cloud)

## 📱 Mobile Optimization

### PWA Configuration (Optional):
1. Add `manifest.json` to your site
2. Configure service worker for offline functionality
3. Enable "Add to Home Screen" capability

## 🚀 Deployment Automation

### GitHub Actions Workflow:
- Your existing `.github/workflows/deploy.yml` will work automatically
- Deployments trigger on push to main branch
- Custom domain configuration persists

## 📈 Future Enhancements

### Advanced Features:
- **Cloudflare Workers**: Add server-side functionality
- **Analytics**: Detailed user behavior tracking
- **A/B Testing**: Test different UI variations
- **Edge Computing**: Reduce latency globally

## 🎯 Expected Timeline

- **DNS Propagation**: 5-30 minutes
- **SSL Certificate**: 15 minutes - 24 hours
- **Full Deployment**: 1-4 hours
- **Global Cache**: 24-48 hours

---

## 🆘 Support Resources

### Documentation:
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [GitHub Pages Custom Domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Firebase Hosting Custom Domains](https://firebase.google.com/docs/hosting/custom-domain)

### Community:
- Cloudflare Community Forum
- GitHub Pages Support
- Firebase Support Community

---

**🎉 Your Medical Question Bank Generator will be live at:**
**`https://qbgenerator.aimedipedia.com`**

*With Cloudflare's global CDN, your users worldwide will experience blazing-fast loading times and enterprise-grade security!*