import { addRecord } from "@/redux/Record/RecordSlice";
import DFMInfoModal from "@/src/components/DFMInfoModal/DFMInfoModal";
import ScalableButton from "@/src/components/ScalableButton/ScalableButton";
import { ThemedSVG } from "@/ThemedSVG";
import { router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native-unistyles";
import { useDispatch } from "react-redux";

export default function RecordDFMScreen() {
  const [infoVisible, setInfoVisible] = useState(false);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* ---------------- TIMER LOGIC ---------------- */

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const dispatch = useDispatch();

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };
  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };
  const handleSave = () => {
    if (time === 0) return;

    dispatch(
      addRecord({
        id: Date.now().toString(),
        durationMs: time,
        createdAt: Date.now(),
      })
    );

    setIsRunning(false);
    setTime(0);
    router.back();
  };
  /* ---------------- UI ---------------- */

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text onPress={() => router.back()} style={styles.icon}>
          ←
        </Text>
        <Text style={styles.headerTitle}>Record DFM</Text>
        <Text onPress={() => setInfoVisible(true)} style={styles.icon}>
          ⓘ
        </Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Tooltip */}
        <View style={styles.tooltip}>
          <Text style={styles.tooltipText}>
            Stop recording after{"\n"}
            <Text style={styles.tooltipBold}>10 kicks</Text>
          </Text>
          <View style={styles.tooltipArrow} />
        </View>

        {/* Timer */}
        <View style={styles.timer1Outer}>
          <View style={styles.timerOuter}>
            <View style={styles.timerInner}>
              <Text style={styles.timerText}>{formatTime(time)}</Text>
            </View>
          </View>
        </View>

        {/* Start / Stop */}
        <TouchableOpacity onPress={handleStartStop} style={styles.stopButton}>
          <ThemedSVG variants={isRunning ? "pause" : "startSvg"} />
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <ScalableButton
          label="Save"
          variants="outlined"
          onPress={handleSave}
          style={{ marginBottom: 40 }}
        />

        <Text style={styles.helpText} onPress={()=>{alert("Oops, The Option is still under Development!!")}}>
          
          What if I am not getting{"\n"}enough kicks?
        </Text>
      </View>

      {/* Info Modal */}
      <DFMInfoModal
        visible={infoVisible}
        onClose={() => setInfoVisible(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create(() => ({
  container: {
    flex: 1,
  },

  /* Header */
  header: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ffffffff",
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
  },

  icon: {
    fontSize: 22,
  },

  /* Content */
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#F8F1F6",
  },

  /* Tooltip */
  tooltip: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 24,
  },

  tooltipText: {
    fontSize: 24,
    textAlign: "center",
  },

  tooltipBold: {
    fontWeight: "600",
  },

  tooltipArrow: {
    position: "absolute",
    bottom: -8,
    width: 16,
    height: 16,
    backgroundColor: "#FFFFFF",
    transform: [{ rotate: "45deg" }],
  },

  /* Timer */
  timerOuter: {
    width: 220,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  timer1Outer: {
    width: 230,
    height: 140,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
  },

  timerInner: {
    width: 200,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  timerText: {
    fontSize: 36,
    fontWeight: "600",
    color: "#E65B45",
  },

  /* Stop Button */
  stopButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  stopSquare: {
    width: 24,
    height: 24,
    backgroundColor: "#2B2B2B",
    borderRadius: 4,
  },

  /* Footer */
  footer: {
    padding: 20,
    backgroundColor: "#F8F1F6",
  },

  saveButton: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 28,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 16,
  },

  saveText: {
    fontSize: 16,
    fontWeight: "500",
  },

  helpText: {
    textAlign: "center",
    fontSize: 14,
    textDecorationLine: "underline",
  },
}));
