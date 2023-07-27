import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootNavigatorParamList } from "../types/Navigation";

type Props = NativeStackScreenProps<RootNavigatorParamList, "Score">;

export function ScoreScreen({ route, navigation }: Props) {
  const { score } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>Your Final Score:</Text>
      <Text style={styles.score}>{score} / 10</Text>
      <View style={{ width: "70%", paddingTop: 20 }}>
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scoreText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  score: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#007AFF",
  },
});
