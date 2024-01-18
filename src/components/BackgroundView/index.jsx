import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function BackgroundView({ text }) {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.emptyHeadingContainer]}>
      <Text style={styles.emptyHeading}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyHeadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
  },
  emptyHeading: {
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "bold",
    opacity: 0.2,
  },
});
