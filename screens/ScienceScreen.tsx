import { Text, View, Button, Pressable, StyleSheet } from "react-native";
import React from "react";

export function ScienceScreen({ route, navigation }: any) {
  const { itemId, otherParam } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{ flexDirection: "column", marginVertical: 50, width: "75%" }}>
        <Button
          title="Mathematics"
          onPress={() => navigation.navigate("Quiz")}
        />
        <View style={{ height: 5 }}></View>
        <Button title="Biology" onPress={() => navigation.navigate("Quiz")} />
        <View style={{ height: 5 }}></View>
        <Button title="Chemistry" onPress={() => navigation.navigate("Quiz")} />
        <View style={{ height: 5 }}></View>
        <Button title="Physics" onPress={() => navigation.navigate("Quiz")} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.text}>Go Home</Text>
        </Pressable>
        <View style={{ width: 20 }}></View>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Home")}>
          <Text style={styles.text}>Go Back</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
