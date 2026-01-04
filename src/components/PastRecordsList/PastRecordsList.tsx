import { LegendList } from "@legendapp/list";
import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

type RecordItem = {
  id: string;
  durationMs: number;
  createdAt: number;
};

type Props = {
  records: RecordItem[];
};

export default function PastRecordsList({ records }: Props) {
  if (!records || records.length === 0) {
    return <Text style={styles.emptyText}>No records yet</Text>;
  }

  return (
    <LegendList
      data={records}
      keyExtractor={(item) => item.id}
      estimatedItemSize={68}
      renderItem={({ item }) => (
        <View style={styles.recordItem}>
          <Text style={styles.recordDate}>
            {formatDate(item.createdAt)}
          </Text>
          <Text style={styles.recordDuration}>
            {formatDuration(item.durationMs)}
          </Text>
        </View>
      )}
    />
  );
}

/* -----------------------------------------------------
 * Helpers
 * ---------------------------------------------------*/

const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);

  const day = date.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const formattedDate = date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return `${day} · ${formattedDate}`;
};

const formatDuration = (ms: number) => {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
};

/* -----------------------------------------------------
 * Styles (MATCHES YOUR UI)
 * ---------------------------------------------------*/

const styles = StyleSheet.create(() => ({
  recordItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 18,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#EDEDED",
  },

  recordDate: {
    fontSize: 15,
    color: "#141313",
  },

  recordDuration: {
    fontSize: 15,
    fontWeight: "500",
    color: "#141313",
  },

  emptyText: {
    fontSize: 14,
    color: "#8E8E8E",
  },
}));
