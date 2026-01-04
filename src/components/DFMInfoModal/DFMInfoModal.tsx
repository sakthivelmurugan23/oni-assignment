import { GlassView } from "expo-glass-effect";
import React from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { StyleSheet } from "react-native-unistyles";

type Props = {
  visible: boolean;
  onClose: () => void;
};

export default function DFMInfoModal({ visible, onClose }: Props) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      {/* BACKGROUND GLASS OVERLAY */}
      <GlassView
        style={StyleSheet.absoluteFill}
        tint="dark"
        intensity={70}
      />

      <View style={styles.centered}>
          <Pressable style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeText}>✕</Text>
        </Pressable>
        {/* GLASS CONTAINER */}
        <GlassView style={styles.glassCard} tint="light" intensity={60}>
          {/* HEADER (SOLID WHITE) */}
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Text style={styles.icon}>👣</Text>
              <Text style={styles.title}>
                Steps to count fetal kicks
              </Text>
            </View>
          </View>

          {/* CONTENT */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.steps}
          >
            <Step
              number={1}
              text="Choose a time when you are least distracted or when you typically feel the fetus move."
            />
            <Step
              number={2}
              text="Get comfortable. Lie on your left side or sit with your feet propped up."
            />
            <Step number={3} text="Place your hands on your belly." />
            <Step number={4} text="Start a timer or watch the clock." />
            <Step
              number={5}
              text="Count each kick. Keep counting until you get to 10 kicks / flutters / swishes / rolls."
            />
            <Step
              number={6}
              text="Once you reach 10 kicks, jot down how many minutes it took."
            />
          </ScrollView>
        </GlassView>

        {/* FLOATING CLOSE BUTTON (SOLID) */}
      
      </View>
    </Modal>
  );
}

function Step({ number, text }: { number: number; text: string }) {
  return (
    <View style={styles.step}>
      <Text style={styles.stepNumber}>{number}.</Text>
      <Text style={styles.stepText}>{text}</Text>
    </View>
  );
}
const styles = StyleSheet.create(() => ({
  centered: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  glassCard: {
    borderRadius: 28,
    padding: 16,
    maxHeight: "78%",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.35)",
  },

  header: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 18,
    marginBottom: 14,
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  icon: {
    fontSize: 18,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },

  steps: {
    gap: 12,
    paddingBottom: 10,
  },

  step: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#FFFFFF", // 👈 SOLID WHITE (KEY)
    padding: 14,
    borderRadius: 16,
  },

  stepNumber: {
    fontWeight: "600",
    color: "#111",
  },

  stepText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    color: "#111",
  },

  closeButton: {
    alignSelf: "flex-end",
    marginTop: 16,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom:10,

    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },

  closeText: {
    fontSize: 18,
    fontWeight: "600",
  },
}));


