import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Title */}

   <Image
        source={require("../assets/images/momChild.webp")}
        style={styles.image}
        resizeMode="contain"
      />      <Text style={styles.title}>
        Daily Fetal Movement Tracker
      </Text>

      {/* Button */}
      <Pressable
        onPress={() => router.navigate("/Home")}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",

    // ✅ Unique system font
    fontFamily: "System",

    marginBottom: 32,
    color: "#111",
  },

  button: {
    width: "70%",          // ✅ Scalable
    paddingVertical: 14,
    borderRadius: 14,
    backgroundColor: "#ff5010ff",
    alignItems: "center",
  },

  buttonPressed: {
    transform: [{ scale: 0.97 }],
    opacity: 0.9,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
   image: {
    width: 150,
    height: 220,
  },
});
