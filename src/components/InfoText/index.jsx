import React from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../../misc/colors";

export default function InfoText({ title, desc }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  title: {
    fontWeight: "bold",
    color: colors.PRIMARY,
  },
  desc: {
    color: colors.DARK,
  },
});
