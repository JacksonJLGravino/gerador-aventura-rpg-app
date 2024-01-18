import React from "react";
import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function BorderlessButton({ onPress, btnName, color, size }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Entypo name={btnName} size={size} color={color} />
    </TouchableOpacity>
  );
}
