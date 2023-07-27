import { Text, View, Button } from "react-native";
import React from "react";
import { RootNavigatorParamList } from "../types/Navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootNavigatorParamList, "Home">;

export function HomeScreen({ navigation }: Props) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Text style={{ fontWeight: "900", fontSize: 16 }}>
        Choose one of the following
      </Text>
      <View style={{ width: "70%" }}>
        <View style={{ marginVertical: 5 }}>
          <Button
            title="Science"
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              navigation.navigate("Department", {
                departmentId: 1,
                departmentName: "Science",
              });
            }}
          />
        </View>

        <View style={{ marginVertical: 5 }}>
          <Button
            title="Literary"
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              navigation.navigate("Department", {
                departmentId: 2,
                departmentName: "Literary",
              });
            }}
          />
        </View>

        <View style={{ marginVertical: 5 }}>
          <Button
            title="Mixed"
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              navigation.navigate("Department", {
                departmentId: 3,
                departmentName: "Mixed",
              });
            }}
          />
        </View>
      </View>
    </View>
  );
}
