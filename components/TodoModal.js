import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import colors from "../Colors";
import tempData from "../tempData";

const TodoItem = ({ item }) => {
  return (
    <View style={styles.todoContainer}>
      <TouchableOpacity onPress={() => (item.completed = !item.completed)}>
        <Ionicons
          name={item.completed ? "ios-square" : "ios-square-outline"}
          size={24}
          color={colors.grey}
          style={{ width: 24 }}
        ></Ionicons>
      </TouchableOpacity>
      <Text
        style={[
          styles.todo,
          {
            textDecorationLine: item.completed ? "line-through" : "none",
            color: item.completed ? colors.grey : colors.black,
          },
        ]}
      >
        {item.title}
      </Text>
    </View>
  );
};

export default function TodoModal({ list, closeModal }) {
  const [name, setName] = useState(list.name);
  const [color, setColor] = useState(list.color);
  const [todos, setTodos] = useState(list.todos);

  const completedCount = todos.filter((item) => item.completed).length;
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={closeModal}
        style={{ position: "absolute", top: 64, right: 32 }}
      >
        <AntDesign name="close" size={24} color={colors.black} />
      </TouchableOpacity>
      <View
        style={[styles.section, styles.header, { borderBottomColor: color }]}
      >
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.taskCount}>
            {completedCount} of {todos.length} tasks
          </Text>
        </View>
      </View>
      <View style={[styles.section, { flex: 3 }]}>
        <FlatList
          data={todos}
          renderItem={({ item }) => <TodoItem item={item} />}
          keyExtractor={(item) => item.title}
          contentContainerStyle={{ paddingHorizontal: 32, paddingVertical: 64 }}
          showsVerticalScrollIndicator={false}
        ></FlatList>
      </View>
      <KeyboardAvoidingView
        style={[styles.section, styles.footer]}
        behavior="padding"
      >
        <TextInput style={[styles.input, { borderColor: color }]}></TextInput>
        <TouchableOpacity style={[styles.addTodo, { backgroundColor: color }]}>
          <AntDesign name="plus" size={16} color={colors.white}></AntDesign>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    flex: 1,
    alignSelf: "stretch",
  },
  header: {
    justifyContent: "flex-end",
    marginLeft: 64,
    borderBottomWidth: 3,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: colors.black,
  },
  taskCount: {
    marginTop: 4,
    marginBottom: 16,
    color: colors.gray,
    fontWeight: "600",
  },
  footer: {
    paddingHorizontal: 32,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 48,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    marginRight: 8,
    paddingHorizontal: 8,
  },
  addTodo: {
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  todoContainer: {
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  todo: {
    color: colors.black,
    fontWeight: "700",
    fontSize: 16,
    paddingLeft: 10,
  },
});
