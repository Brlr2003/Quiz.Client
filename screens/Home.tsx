import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Department, RootNavigatorParamList } from "../types/Navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { getDepartments } from "../utils/department";

type Props = NativeStackScreenProps<RootNavigatorParamList, "Home">;

export function HomeScreen({ navigation }: Props) {
  const [departments, setDepartments] = useState<Department[]>([]);
  // sss
  useEffect(() => {
    loadDepartments();
  }, []);

  const loadDepartments = async () => {
    try {
      const response = await getDepartments();
      setDepartments(response.data);
    } catch (error) {
      console.error("Error loading departments:", error);
    }
  };

  const renderDepartmentButtons = () => {
    return departments.map((department) => (
      <View style={{ marginVertical: 5 }} key={department.id}>
        <Button
          title={department.name}
          onPress={() => {
            navigation.navigate("Department", {
              departmentId: department.id,
              departmentName: department.name,
            });
          }}
        />
      </View>
    ));
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Text style={{ fontWeight: "900", fontSize: 16 }}>
        Choose one of the following departments
      </Text>
      <View style={{ width: "70%" }}>{renderDepartmentButtons()}</View>
    </View>
  );
}
