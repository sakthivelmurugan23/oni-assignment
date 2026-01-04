import { RootState } from "@/redux/store";
import PastRecordsList from "@/src/components/PastRecordsList/PastRecordsList";
import ScalableButton from "@/src/components/ScalableButton/ScalableButton";
import { ThemedSVG } from "@/ThemedSVG";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { useSelector } from "react-redux";

export default function Index() {
  const records = useSelector(
    (state: RootState) => state.record?.records ?? []
  );

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* ---------------- HEADER ---------------- */}
      <View style={styles.header}>
        <View style={{ width: 40 }} /> 

        <Text style={styles.headerTitle}>DFM (Kick counter)</Text>

        <View style={styles.profileBadge}>
          <ThemedSVG variants="Baby"  stroke={"none"} fill={"none"}/>
          <Text style={styles.profileCount}>0</Text>
        </View>
      </View>

      {/* ---------------- ARTICLE CARD ---------------- */}
      <View style={styles.articleCard}>
        <Image
          source={{
            uri: "https://images.ctfassets.net/2ql69mthp94m/20kpY7DMOU1LUUVKHIKvcL/96764d419222cb2f3c4fef22d4e00405/wrong-sleeping-positions-in-pregnancy.jpg",
          }}
          style={styles.articleImage}
        />

        {/* Gradient Overlay */}
        <LinearGradient
          colors={["transparent", "rgba(151, 145, 145, 0.65)",]}
          style={styles.gradient}
        />

        {/* Text Overlay */}
        <View style={styles.articleOverlay}>
          <Text style={styles.articleTag}>leap Articles</Text>
          <Text style={styles.articleTitle}>DFM (fetal movement)</Text>
        </View>

        {/* Save Badge */}
        <View style={styles.saveBadge}>
          <ThemedSVG variants="Bookmark" themedStroke="black"  strokeWidth={0.2}/>
          <Text style={styles.saveText}>Save</Text>
        </View>
      </View>

      {/* ---------------- CTA ---------------- */}
      <View style={styles.buttonContainer}>
        <ScalableButton
          label="Record fetal movement"
          variants="outlined"
          onPress={() => router.navigate("/RecordDFMScreen")}
        />
      </View>

      {/* ---------------- PAST RECORDS ---------------- */}
      <View style={styles.recordsSection}>
        <Text style={styles.recordsTitle}>Past records</Text>

        {records.length === 0 ? (
          <Text style={styles.emptyText}>No records yet</Text>
        ) : (
          <PastRecordsList records={records} />
        )}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create(() => ({
  container: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 48,
    flex:1
  },

  /* Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#141313",
  },

  profileBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: "#F2F2F2",
  },

  profileCount: {
    fontSize: 14,
    fontWeight: "500",
  },

  /* Article */
  articleCard: {
    borderRadius: 18,
    overflow: "hidden",
    marginBottom: 24,
  },

  articleImage: {
    width: "100%",
    height: 180,
  },

  gradient: {
    position: "absolute",
    bottom: 0,
    height: "60%",
    width: "100%",
  },

  articleOverlay: {
    position: "absolute",
    bottom: 14,
    left: 14,
  },

  articleTag: {
    fontSize: 12,
    color: "#FFFFFF",
    opacity: 0.9,
  },

  articleTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFFFFF",
    marginTop: 4,
  },

  saveBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  saveText: {
    fontSize: 13,
    fontWeight: "500",
  },

  /* Button */
  buttonContainer: {
    marginBottom: 24,
  },

  recordsSection: {
    marginTop: 8,
  },

  recordsTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },

  emptyText: {
    fontSize: 14,
    color: "#8E8E8E",
  },
}));
