import messaging from "@react-native-firebase/messaging";
import { Alert, PermissionsAndroid, Platform } from "react-native";

export async function registerForPush() {
  try {
  if (Platform.OS === "android" && Platform.Version >= 33) {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
    );
  }

  const permissions = await messaging().requestPermission();
  console.log('Permissions:', {permissions});
  const fcmToken = await messaging().getToken();
  console.log('FCM Token:', {fcmToken});
  return fcmToken;
  } catch (error) {
    Alert.alert('Error registering for push notifications:', (error as Error).message);
    console.log('Error registering for push notifications:', error);
  }
}
