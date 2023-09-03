import { Text, View, Button } from "react-native";
import React, { useEffect } from "react";
import { RootNavigatorParamList } from "../types/Navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import axios from "axios";
import { useURL } from "expo-linking";

type Props = NativeStackScreenProps<RootNavigatorParamList, "Home">;

export function HomeScreen({ navigation }: Props) {
  useEffect(() => {
    const apiUrl = "http://192.168.1.44:5222/api/Questions"; // Example URL

    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the response data here
        console.log(response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });
  }, []);
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
