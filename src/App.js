import * as React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Soma de Valores</Text>
      <TextInput keybordType="numeric" />
      <TextInput keybordType="" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  titulo: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },

  input: {
    backgroundColor: "#000",
    borderRadius: 15,
    margin: 30,
    padding: 10,
    fontSize: 30
  },
  input2: {
    backgroundColor: "#000",
    borderRadius: 15,
    margin: 30,
    padding: 10,
    fontSize: 30
  }
});
