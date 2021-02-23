import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../Colors";

export default function CloseButton({ handler }) {
  return (
    <TouchableOpacity
      onPress={handler}
      style={{ position: "absolute", top: 64, right: 32 }}
    >
      <AntDesign name="close" size={24} color={colors.black} />
    </TouchableOpacity>
  );
}
