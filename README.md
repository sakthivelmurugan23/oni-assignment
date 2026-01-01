# 🚀 Expo Build Template

A **production-ready Expo + React Native starter template** designed for scalable, secure, and real-world mobile applications.

---

## ✨ Features

- Expo + React Native (New Architecture)
- Expo Router
- Notifee (Advanced Notifications)
- Firebase (Android & iOS)
- Sentry Error Tracking
- SSL Pinning
- React Native Unistyles (Theming)
- MMKV (High-performance local storage)
- Localization support
- Modern Android & iOS build setup

---

## 📦 Prerequisites

Install the following tools before starting:

### Node.js
- Node.js (LTS recommended)

### Package Manager
- npm or yarn or pnpm

### Expo CLI
```bash
npm install -g expo-cli
```

### Platform Tools
- Android Studio (for Android)
- Xcode (for iOS – macOS only)

---

## ⚠️ Required: Sentry Setup

Before running the project for the first time, initialize Sentry.

```bash
npx @sentry/wizard@latest -i reactNative --saas --org <project-name> --project react-native-um
```

**Why this is required**
- Enables native crash reporting  
- Tracks JavaScript and native errors  
- Automatically configures platform files  

Replace `<project-name>` with your actual Sentry organization name.

---

## 🔥 Firebase Setup (REQUIRED)

Firebase is used for push notifications and messaging.

Add the following files:

**Android**
```
assets/google-services.json
```

**iOS**
```
assets/GoogleService-Info.plist
```

⚠️ The app **will not build or run** without these files.

---

## 🔔 Notifee (Notifications)

Used for:
- Foreground notifications
- Background notifications
- Notification channels
- Rich notifications (actions, images)

**Requirements**
- Firebase must be configured first
- Native rebuild is required

---

## 🔐 SSL Pinning

SSL Pinning is enabled to improve network security.

**Important**
- Certificates or public keys must be configured correctly
- Backend certificate changes require an app update

⚠️ Incorrect configuration will block all network requests.

---

## 🎨 React Native Unistyles

Used for theme management and styling.

**Benefits**
- Light & dark mode support
- Centralized design tokens
- High-performance styling

---

## ⚡ MMKV Storage

Used for:
- Secure token storage
- App preferences
- Local caching

**Why MMKV**
- Much faster than AsyncStorage
- Native-backed
- Production proven

---

## 🛠 Build & Run the App

Generate native code:
```bash
expo prebuild
```

Run on Android:
```bash
expo run:android
```

Run on iOS:
```bash
expo run:ios
```

Optional (Metro only):
```bash
expo start
```

---

## 🧪 Useful Commands

| Command | Description |
|------|------------|
| expo start | Start Metro bundler |
| expo prebuild | Generate native projects |
| expo run:android | Run Android app |
| expo run:ios | Run iOS app |
| expo doctor | Diagnose issues |

---

## 🗂 Project Structure

```
.
├── app/                  # Screens (Expo Router)
├── assets/               # Images, icons, Firebase files
├── plugins/              # Custom Expo plugins
├── theme/                # Unistyles themes
├── storage/              # MMKV setup
├── app.config.ts         # Expo configuration
└── README.md
```

---

## 🛠 Common Issues

App crashes on startup?
- Sentry wizard not executed
- Firebase files missing
- SSL pinning misconfigured
- expo prebuild not run

Fix:
```bash
expo prebuild --clean
```

---

## 🌱 Notes

- Uses the New React Native Architecture
- Optimized for production builds
- EAS can be added later if needed
- Intended as a reusable template

---

## 📄 License

Internal / template usage.  
Free to modify and extend.

Happy building 🚀
