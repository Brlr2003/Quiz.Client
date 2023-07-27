import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootNavigatorParamList } from "../types/Navigation";

type Props = NativeStackScreenProps<RootNavigatorParamList, "Department">;

const DepartmentScreen = ({ navigation, route }: Props) => {
  const { departmentId, departmentName } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Department: {departmentName}</Text>
      <View
        style={{ flexDirection: "column", marginVertical: 50, width: "75%" }}>
        <Button
          title="Mathematics"
          onPress={() =>
            navigation.navigate("Quiz", {
              quizeName: "Mathematics",
              quizId: 1,
            })
          }
        />
        <View style={{ height: 5 }}></View>
        <Button
          title="Biology"
          onPress={() =>
            navigation.navigate("Quiz", {
              quizeName: "Biology",
              quizId: 1,
            })
          }
        />
        <View style={{ height: 5 }}></View>
        <Button
          title="Chemistry"
          onPress={() =>
            navigation.navigate("Quiz", {
              quizeName: "Chemistry",
              quizId: 1,
            })
          }
        />
        <View style={{ height: 5 }}></View>
        <Button
          title="Physics"
          onPress={() =>
            navigation.navigate("Quiz", {
              quizeName: "Physics",
              quizId: 1,
            })
          }
        />
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
};

export default DepartmentScreen;

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
