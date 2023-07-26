import { Text, View, Button } from "react-native";
import React from "react";

export function HomeScreen({ navigation }: any) {
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
              navigation.navigate("Science");
            }}
          />
        </View>

        <View style={{ marginVertical: 5 }}>
          <Button
            title="Literary"
            onPress={() => navigation.navigate("Literary")}
          />
        </View>

        <View style={{ marginVertical: 5 }}>
          <Button
            title="Mixed"
            onPress={() => navigation.navigate("Literary")}
          />
        </View>
      </View>
    </View>
  );
}
