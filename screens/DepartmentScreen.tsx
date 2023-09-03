import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Department, RootNavigatorParamList } from "../types/Navigation";

// Import Department functions and types
import { getDepartments, createDepartment } from "../utils/department"; // Update with your actual API functions and paths

type Props = NativeStackScreenProps<RootNavigatorParamList, "Department">;

const DepartmentScreen = ({ navigation, route }: Props) => {
  const { departmentName } = route.params;

  // State to store department data
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    // Load department data when the component mounts
    loadDepartments();
  }, []);

  const loadDepartments = async () => {
    try {
      // Fetch departments from your API
      const response = await getDepartments();
      setDepartments(response.data); // Access 'data' property
    } catch (error) {
      console.error("Error loading departments:", error);
    }
  };

  const renderDepartmentButtons = () => {
    return departments.map((department) => (
      <Button
        key={department.id}
        title={department.name}
        onPress={() => {
          navigation.navigate("Quiz", {
            quizName: department.name,
            quizId: department.id,
          });
        }}
      />
    ));
  };

  const createNewDepartment = async () => {
    try {
      // Create a new department on the server
      await createDepartment("New Department"); // Pass the department name you want to create
      // Reload departments to reflect the changes
      loadDepartments();
    } catch (error) {
      console.error("Error creating department:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.departmentText}>Department: {departmentName}</Text>
      <View style={styles.departmentButtons}>{renderDepartmentButtons()}</View>
      <Button title="Create New Department" onPress={createNewDepartment} />
      <View style={styles.navigationButtons}>
        <Button
          title="Go Home"
          onPress={() => navigation.popToTop()}
          color="black"
        />
        <View style={styles.buttonSpacer} />
        <Button
          title="Go Back"
          onPress={() => navigation.goBack()}
          color="black"
        />
      </View>
    </View>
  );
};

export default DepartmentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  departmentText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  departmentButtons: {
    width: "75%",
    marginBottom: 20,
  },
  navigationButtons: {
    flexDirection: "row",
  },
  buttonSpacer: {
    width: 20,
  },
});
