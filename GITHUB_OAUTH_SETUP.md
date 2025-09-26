# 🔐 GitHub OAuth Setup Guide

## Setting up GitHub OAuth for QBank Generator

This guide will walk you through creating a GitHub OAuth App for your Medical Question Bank Generator authentication system.

## 🚀 Why GitHub OAuth?

- ✅ **Developer-friendly** - Perfect for medical professionals who use GitHub
- ✅ **One-click sign-in** - No password required
- ✅ **Secure** - Uses GitHub's robust authentication
- ✅ **Free** - No cost for public repositories
- ✅ **Professional** - Trusted by developers worldwide

## 📋 Step-by-Step GitHub OAuth Setup

### 1. Create GitHub OAuth Application

#### Navigate to GitHub Settings:
1. Go to [GitHub.com](https://github.com)
2. Click your **profile picture** (top right)
3. Select **"Settings"** from dropdown
4. Scroll down and click **"Developer settings"** (left sidebar)
5. Click **"OAuth Apps"** in the left sidebar
6. Click **"New OAuth App"** button

#### Configure OAuth Application:
Fill in the following information:

**Application name:**
```
QBank Generator - Medical Question Bank
```

**Homepage URL:**
```
https://qbgenerator.aimedipedia.com
```

**Application description:**
```
A comprehensive web application for creating, managing, and exporting medical question banks with AI-powered features. Perfect for medical students, educators, and healthcare professionals.
```

**Authorization callback URL:**
```
https://your-firebase-project.firebaseapp.com/__/auth/handler
```
*Note: Replace `your-firebase-project` with your actual Firebase project ID*

#### Alternative callback URLs (if not using Firebase):
If you're using local storage only:
```
https://qbgenerator.aimedipedia.com/auth-callback.html
```

### 2. Get OAuth Credentials

After creating the app, you'll see:

1. **Client ID** - Copy this (you'll need it for Firebase)
2. **Client Secret** - Click "Generate a new client secret" and copy it

**⚠️ Important:** Keep your Client Secret secure and never commit it to your repository!

### 3. Configure Firebase with GitHub OAuth

#### Add GitHub Provider to Firebase:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Navigate to **Authentication** → **Sign-in method**
4. Find **GitHub** in the providers list
5. Click **GitHub** to configure

#### Enter GitHub OAuth Credentials:
1. **Enable** the GitHub provider
2. Enter your **Client ID** from Step 2
3. Enter your **Client Secret** from Step 2
4. Copy the **OAuth redirect URI** from Firebase
5. Click **Save**

#### Update GitHub OAuth App:
1. Go back to GitHub OAuth App settings
2. Update **Authorization callback URL** with the Firebase URL you copied
3. Save changes

### 4. Update Your Code Configuration

#### Find Firebase Config in auth.html:
Look for this section in your `auth.html`:
```javascript
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
};
```

#### Complete Example Configuration:
```javascript
const firebaseConfig = {
    apiKey: "AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "qbank-generator-12345.firebaseapp.com",
    projectId: "qbank-generator-12345",
    storageBucket: "qbank-generator-12345.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdefghijklmnop"
};
```

### 5. Test GitHub Authentication

#### Testing Steps:
1. Deploy your app to `https://qbgenerator.aimedipedia.com`
2. Navigate to the authentication page
3. Click **"Continue with GitHub"**
4. Authorize the application
5. Verify successful login and redirect

## 🛠️ Advanced OAuth Configuration

### Scope Configuration
GitHub OAuth can request different permissions. For your app, the default scopes are sufficient:
- `user:email` - Access to user's email address
- `read:user` - Access to user's public profile

### Organization Restrictions (Optional)
If you want to restrict access to specific GitHub organizations:
1. In GitHub OAuth App settings
2. Enable **"Organization approval"**
3. Configure allowed organizations

## 🔒 Security Best Practices

### Client Secret Security:
- ✅ **Never commit** Client Secret to your repository
- ✅ **Use environment variables** in Firebase configuration
- ✅ **Regenerate secrets** if compromised
- ✅ **Monitor usage** in GitHub OAuth App insights

### Domain Validation:
- ✅ **Exact domain matching** - Use precise callback URLs
- ✅ **HTTPS only** - Never use HTTP for production
- ✅ **Subdomain specificity** - Don't use wildcards unnecessarily

## 📱 User Experience Flow

### GitHub Login Process:
1. **User clicks** "Continue with GitHub"
2. **Redirected** to GitHub authorization
3. **User authorizes** your application
4. **GitHub redirects** back with authorization code
5. **Firebase exchanges** code for access token
6. **User logged in** to your application

### User Data Available:
- ✅ **Username** - GitHub username
- ✅ **Display Name** - User's full name
- ✅ **Email** - Primary email address
- ✅ **Avatar** - Profile picture URL
- ✅ **Profile URL** - GitHub profile link

## 🧪 Testing & Troubleshooting

### Common Issues:

#### 1. "Application not found" Error
**Cause:** Incorrect Client ID or app not properly configured
**Solution:** 
- Verify Client ID matches exactly
- Ensure OAuth app is not suspended
- Check Firebase GitHub provider configuration

#### 2. "Redirect URI Mismatch" Error
**Cause:** Callback URL doesn't match registered URL
**Solution:**
- Copy exact Firebase callback URL
- Update GitHub OAuth app settings
- Ensure no trailing slashes or extra parameters

#### 3. "Access Denied" Error
**Cause:** User declined authorization or app restrictions
**Solution:**
- Check if organization approval is required
- Verify app permissions are not excessive
- Ensure user has access to authorize apps

#### 4. "Invalid Client Secret" Error
**Cause:** Client secret mismatch or expired
**Solution:**
- Regenerate client secret in GitHub
- Update Firebase configuration
- Clear browser cache and retry

### Debug Mode:
Enable Firebase debug mode to see detailed error messages:
```javascript
import { getAuth } from 'firebase/auth';
const auth = getAuth();
auth.useDeviceLanguage(); // Optional: Use user's device language
```

## 📊 Analytics & Monitoring

### GitHub OAuth App Insights:
1. Go to your GitHub OAuth App settings
2. Check **"Insights"** tab for:
   - Authorization requests
   - Success/failure rates
   - User demographics
   - Usage patterns

### Firebase Authentication Monitoring:
1. Firebase Console → **Authentication** → **Users**
2. Monitor sign-in methods and user activity
3. Set up alerts for unusual activity

## 🚀 Production Deployment

### Pre-deployment Checklist:
- ✅ **Firebase project** configured with production settings
- ✅ **GitHub OAuth app** configured with production URLs
- ✅ **Custom domain** added to Firebase authorized domains
- ✅ **SSL certificate** properly configured
- ✅ **Error handling** implemented for auth failures

### Post-deployment Testing:
- ✅ **Test GitHub login** from different browsers
- ✅ **Verify user data** is properly stored
- ✅ **Check logout functionality**
- ✅ **Test error scenarios** (declined auth, network issues)

## 🎯 Example URLs for Your Setup

### Your Specific Configuration:
Replace these with your actual values:

**GitHub OAuth App:**
- **Homepage URL:** `https://qbgenerator.aimedipedia.com`
- **Callback URL:** `https://qbank-generator-12345.firebaseapp.com/__/auth/handler`

**Firebase Authorized Domains:**
- `qbgenerator.aimedipedia.com`
- `qbank-generator-12345.firebaseapp.com`
- `localhost` (for testing)

## 🔄 Maintenance & Updates

### Regular Maintenance:
- 📊 **Monitor usage** monthly
- 🔑 **Rotate secrets** annually
- 🔍 **Review permissions** quarterly
- 📈 **Analyze user feedback** continuously

### Scaling Considerations:
- **Rate Limits:** GitHub OAuth has rate limits for requests
- **User Growth:** Monitor authentication performance
- **Security Updates:** Keep Firebase SDK updated
- **Feature Requests:** Consider additional OAuth providers

---

## 🎉 Completion Verification

Your GitHub OAuth setup is complete when:
- ✅ GitHub OAuth App created and configured
- ✅ Firebase GitHub provider enabled with credentials
- ✅ Callback URLs properly matched
- ✅ Custom domain authorized in Firebase
- ✅ Test authentication successful

**Your users can now sign in with their GitHub accounts at:**
**`https://qbgenerator.aimedipedia.com/auth.html`**

*This provides a professional, secure, and developer-friendly authentication experience for your Medical Question Bank Generator!*