import React, { useState } from "react";
import {
  Text,
  View,
  Modal,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../Colors";
import tempData from "../tempData";

const AddListModel = ({ closeModal }) => {
  const backgroundColors = [
    "#5CD859",
    "#24A6D9",
    "#595BD9",
    "#8022D9",
    "#D159D8",
    "#D85963",
    "#D88559",
  ];
  const [name, setName] = useState("");
  const [color, setColor] = useState(backgroundColors[0]);

  const createTodo = () => {
    tempData.push({ name, color, todos: [] });
    setName("");
    closeModal();
  };

  const RenderColors = ({ backgroundColors }) => {
    return backgroundColors.map((color) => {
      return (
        <TouchableOpacity
          key={color}
          style={[styles.colorSelect, { backgroundColor: color }]}
          onPress={() => setColor(color)}
        />
      );
    });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableOpacity
        onPress={closeModal}
        style={{ position: "absolute", top: 64, right: 32 }}
      >
        <AntDesign name="close" size={24} color={colors.black} />
      </TouchableOpacity>
      <View style={{ alignItems: "stretch", marginHorizontal: 32 }}>
        <Text style={styles.title}>Create Todo List</Text>
        <TextInput
          style={styles.input}
          placeholder="List Name?"
          onChangeText={(text) => setName(text)}
        ></TextInput>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <RenderColors backgroundColors={backgroundColors} />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: color,
            marginTop: 24,
            height: 50,
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{ color: colors.white, fontWeight: "600" }}
            onPress={createTodo}
          >
            Create
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.black,
    alignSelf: "center",
    marginBottom: 16,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.blue,
    borderRadius: 6,
    height: 50,
    marginTop: 8,
    paddingHorizontal: 16,
    fontSize: 18,
  },
  create: {
    marginTop: 24,
    height: 50,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  colorSelect: {
    width: 30,
    height: 30,
    borderRadius: 4,
  },
});

export default AddListModel;
