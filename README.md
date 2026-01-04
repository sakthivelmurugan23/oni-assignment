# Daily Fetal Movement Tracker (React Native + Expo)

This project is built as part of the **React Native Developer Intern Assignment**.

The application allows users to track daily fetal movements using a timer and save each session locally.  
All data is stored on the device without using any backend service and persists even after the app restarts.

---

## 📱 Features

### Home Screen
- Displays a list of previously saved fetal movement sessions
- Shows:
  - Date of the session
  - Time taken to complete 10 fetal movements
- Records are persisted locally and loaded on app startup
- Sessions are sorted by most recent first
- Article/bookmark section is kept static as per assignment

### Counter Screen
- Timer starts from `00:00`
- User can:
  - Save the current session
  - Go back without saving
- Saved sessions immediately appear on the Home Screen

### Information Sheet
- Accessible via the **“i” (info) button**
- Opens a bottom sheet / modal
- Contains bullet-point instructions
- Content matches the text provided in the Figma design

---

## 🧠 Local Data Storage

- All sessions are stored locally on the device
- No backend or cloud services are used
- Data is serialized and parsed properly
- Sessions persist across app restarts

### Data Structure
Each fetal movement session is stored as:

```ts
{
  id: string;
  date: string;        // ISO date string
  duration: number;    // Time taken in seconds
}
