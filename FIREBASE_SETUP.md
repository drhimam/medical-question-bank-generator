# 🔐 Firebase Authentication Setup Guide

This guide will help you set up Firebase Authentication for your Medical Question Bank Generator.

## 🚀 Why Firebase?

- ✅ **Free tier** (up to 10,000 users)
- ✅ **Multiple login methods** (Email, Google, GitHub)
- ✅ **Secure & reliable** by Google
- ✅ **Works with GitHub Pages** (static hosting)
- ✅ **No backend required**

## 📋 Step-by-Step Setup

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Create a project"**
3. Enter project name: `qbank-generator` (or your choice)
4. Disable Google Analytics (optional)
5. Click **"Create project"**

### 2. Enable Authentication
1. In your Firebase project, click **"Authentication"** in the left sidebar
2. Click **"Get started"**
3. Go to **"Sign-in method"** tab
4. Enable the following providers:
   - ✅ **Email/Password** - Click "Enable" → Save
   - ✅ **Google** - Click "Enable" → Save
   - ✅ **GitHub** - Click "Enable" → Add your GitHub OAuth App credentials

### 3. Get Firebase Configuration
1. Click the **gear icon** → **"Project settings"**
2. Scroll down to **"Your apps"** section
3. Click **"Web"** button `</>`
4. Register app name: `qbank-generator`
5. **Copy the config object** - you'll need this!

npm install firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALM6LTcqUE7AXlyNmNPQSfW0Sxf2b9QB4",
  authDomain: "qbank-generator.firebaseapp.com",
  projectId: "qbank-generator",
  storageBucket: "qbank-generator.firebasestorage.app",
  messagingSenderId: "564130040089",
  appId: "1:564130040089:web:911850125c2be5af9d5d88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);







Example config:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "qbank-generator.firebaseapp.com",
  projectId: "qbank-generator",
  storageBucket: "qbank-generator.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdefghijklmnop"
};
```



### 4. Configure GitHub OAuth (Optional)
**📘 Detailed Guide:** See `GITHUB_OAUTH_SETUP.md` for complete step-by-step instructions.

**Quick Steps:**
1. Go to GitHub → **Settings** → **Developer settings** → **OAuth Apps**
2. Click **"New OAuth App"**
3. Fill in:
   - **Application name**: `QBank Generator - Medical Question Bank`
   - **Homepage URL**: `https://qbgenerator.aimedipedia.com`
   - **Authorization callback URL**: `https://qbank-generator.firebaseapp.com/__/auth/handler`
4. Copy **Client ID** and **Client Secret**
5. Add them to Firebase GitHub provider settings

**⚠️ Important:** Replace `your-firebase-project` with your actual Firebase project ID from step 3.

### 5. Update Your Code
1. Open `auth.html`
2. Find the Firebase configuration section:
```javascript
const firebaseConfig = {
    // Replace with your actual Firebase config
    apiKey: "your-api-key",
    authDomain: "your-project.firebaseapp.com",
    // ... rest of config
};
```
3. Replace with your actual Firebase config from Step 3

### 6. Add Domain to Firebase
1. In Firebase Console → **Authentication** → **Settings**
2. Scroll to **"Authorized domains"**
3. Add your custom domain: `qbgenerator.aimedipedia.com`
4. Also add your GitHub Pages domain: `yourusername.github.io`

## 🛠️ Implementation Features

### Authentication Methods
- ✅ **Email/Password signup and login**
- ✅ **Google OAuth** (one-click sign-in)
- ✅ **GitHub OAuth** (perfect for developers)
- ✅ **Guest mode** (no account required)

### Fallback System
- 🔄 **Automatic fallback** to localStorage if Firebase fails
- 🔄 **Works offline** with local data storage
- 🔄 **No external dependencies** in fallback mode

### Security Features
- 🔒 **Client-side validation**
- 🔒 **Password requirements** (min 6 characters)
- 🔒 **Email verification** available
- 🔒 **Secure token handling**

## 📱 User Experience

### Login Flow
1. User visits `auth.html`
2. Chooses login method:
   - Email/password
   - Google account
   - GitHub account
   - Guest mode
3. Successful authentication redirects to main app
4. User session persists across browser sessions

### Features Integration
- 👤 **User profile** displayed in main app
- 💾 **User-specific data storage** (coming soon)
- 🔄 **Sync across devices** (Firebase Firestore integration possible)
- 🚪 **Logout functionality** in main app

## 🔧 Alternative: Local Storage Only

If you prefer not to use Firebase, the auth system automatically falls back to:
- ✅ **Local browser storage** for user accounts
- ✅ **No external services** required
- ✅ **Instant setup** - just works
- ⚠️ **Less secure** - for development/demo use

## 🚀 Deployment Steps

### GitHub Pages
1. Update `auth.html` with your Firebase config
2. Commit and push to GitHub
3. Enable GitHub Pages in repository settings
4. Access authentication at: `https://yourusername.github.io/repo-name/auth.html`

### Link Integration
1. Update `index.html` to include login links
2. Add logout functionality to main app
3. Protect certain features for authenticated users

## 🎯 Next Steps

### Enhanced Features (Optional)
- 📊 **User analytics** with Firebase Analytics
- 💾 **Cloud data storage** with Firestore
- 📧 **Email verification** for new accounts
- 🔑 **Password reset** functionality
- 👥 **Team collaboration** features

### Advanced Security
- 🛡️ **reCAPTCHA** for signup forms
- 🔐 **Two-factor authentication**
- 🚫 **Account lockout** after failed attempts
- 📝 **Audit logging** for account activities

---

## 🆘 Troubleshooting

### Common Issues
1. **"Firebase not configured"** - Update config in auth.html
2. **"Unauthorized domain"** - Add your domain to Firebase settings
3. **"GitHub OAuth failed"** - Check OAuth app settings
4. **"Google sign-in blocked"** - Enable Google provider in Firebase

### Testing
- ✅ Test all authentication methods
- ✅ Verify redirects work correctly
- ✅ Check logout functionality
- ✅ Test guest mode access

---

**🎉 Your authentication system is now ready!**

Users can create accounts, sign in securely, and access their personalized question banks. The system works perfectly with GitHub Pages and provides a professional user experience.

*For any issues, check the browser console for detailed error messages.*