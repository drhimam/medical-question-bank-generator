# 🔗 Quick GitHub OAuth Registration

## Visual Step-by-Step Guide for QBank Generator

### 📋 Registration Form Details

When creating your GitHub OAuth App, use these **exact values**:

#### 🏷️ **Application Name:**
```
QBank Generator - Medical Question Bank
```

#### 🏠 **Homepage URL:**
```
https://qbgenerator.aimedipedia.com
```

#### 📝 **Application Description:**
```
A comprehensive web application for creating, managing, and exporting medical question banks with AI-powered features. Perfect for medical students, educators, and healthcare professionals.
```

#### 🔄 **Authorization Callback URL:**
```
https://YOUR_FIREBASE_PROJECT_ID.firebaseapp.com/__/auth/handler
```
*Replace `YOUR_FIREBASE_PROJECT_ID` with your actual Firebase project ID*

---

## 🔍 Finding Your Firebase Project ID

### Method 1: Firebase Console
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click the **gear icon** → **Project settings**
4. Your **Project ID** is displayed at the top

### Method 2: Firebase Config
Look at your Firebase config object:
```javascript
const firebaseConfig = {
  projectId: "qbank-generator-medical-12345", // This is your Project ID
  // ... other config
};
```

---

## 📊 Complete Example

If your Firebase project ID is `qbank-generator-medical-12345`:

**Authorization Callback URL:**
```
https://qbank-generator-medical-12345.firebaseapp.com/__/auth/handler
```

---

## ✅ Verification Checklist

Before saving your GitHub OAuth App:

- [ ] **Application name** matches exactly: `QBank Generator - Medical Question Bank`
- [ ] **Homepage URL** is: `https://qbgenerator.aimedipedia.com`
- [ ] **Callback URL** uses your actual Firebase project ID
- [ ] **Description** is professional and descriptive
- [ ] All URLs use **HTTPS** (not HTTP)

---

## 🚨 Common Mistakes to Avoid

### ❌ **Wrong Callback URL Format:**
```
# DON'T USE:
https://qbgenerator.aimedipedia.com/auth-callback
https://firebase.google.com/auth/callback
https://your-project.firebaseapp.com/auth

# USE THIS:
https://your-actual-project-id.firebaseapp.com/__/auth/handler
```

### ❌ **Incorrect Domain:**
```
# DON'T USE:
https://yourusername.github.io
https://github.io/yourrepo

# USE THIS:
https://qbgenerator.aimedipedia.com
```

### ❌ **Missing HTTPS:**
```
# DON'T USE:
http://qbgenerator.aimedipedia.com

# USE THIS:
https://qbgenerator.aimedipedia.com
```

---

## 🔐 Security Notes

- ✅ **Never share** your Client Secret publicly
- ✅ **Don't commit** secrets to your repository
- ✅ **Use specific URLs** - avoid wildcards
- ✅ **Enable two-factor auth** on your GitHub account

---

## 🎯 Next Steps After Registration

1. **Copy Client ID and Secret** from GitHub
2. **Add to Firebase** Authentication → Sign-in method → GitHub
3. **Copy Firebase callback URL** to GitHub OAuth App settings
4. **Test authentication** on your live site
5. **Monitor usage** in GitHub OAuth App insights

---

**🎉 Your GitHub OAuth App will be ready for professional authentication!**

*Users can then sign in with their GitHub accounts at `https://qbgenerator.aimedipedia.com/auth.html`*