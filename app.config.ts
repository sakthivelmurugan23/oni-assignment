import { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,

  /* ---------- App Identity ---------- */
  name: "expo-build-template",
  slug: "expo-build-template",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "expobuildtemplate",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,

  /* ---------- iOS ---------- */
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.agmac24.expobuildtemplate",

    entitlements: {
      "aps-environment": "production",
    },

    infoPlist: {
      NSAppTransportSecurity: {
        NSAllowsArbitraryLoads: true,
      },
      UIBackgroundModes: ["remote-notification"],
    },

    // googleServicesFile: "./assets/GoogleService-Info.plist",
  },

  /* ---------- Android ---------- */
  android: {
    package: "com.expobuildtemplate.mobile",
    // googleServicesFile: "./assets/google-services.json",

    adaptiveIcon: {
      backgroundColor: "#E6F4FE",
      foregroundImage: "./assets/images/android-icon-foreground.png",
      backgroundImage: "./assets/images/android-icon-background.png",
      monochromeImage: "./assets/images/android-icon-monochrome.png",
    },

    edgeToEdgeEnabled: true,
    predictiveBackGestureEnabled: false,
  },

  /* ---------- Web ---------- */
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },

  /* ---------- Plugins ---------- */
  plugins: [
    "./plugins/withNotifeePlugin",
    "@react-native-firebase/app",
    "@react-native-firebase/messaging",

    [
      "react-native-edge-to-edge",
      {
        android: {
          parentTheme: "Default",
          enforceNavigationBarContrast: false,
        },
      },
    ],

    "expo-router",

    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
        dark: {
          backgroundColor: "#000000",
        },
      },
    ],

    "expo-localization",

    [
      "expo-secure-store",
      {
        configureAndroidBackup: true,
        faceIDPermission:
          "Allow $(PRODUCT_NAME) to access your Face ID biometric data.",
      },
    ],

    "expo-web-browser",

    [
      "expo-build-properties",
      {
        android: {
          compileSdkVersion: 35,
          targetSdkVersion: 35,
          buildToolsVersion: "35.0.0",
          usesCleartextTraffic: false,
        },
        ios: {
          deploymentTarget: "16.0",
          useFrameworks: "static",
          networkInspector: false,
          buildReactNativeFromSource: true,
        },
      },
    ],
  ],

  /* ---------- Experiments ---------- */
  experiments: {
    typedRoutes: true,
    reactCompiler: true,
  },
});
