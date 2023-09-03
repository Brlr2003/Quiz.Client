import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootNavigatorParamList, Subject } from "../types/Navigation";

// Import Subject function
import { getSubjects, createSubject } from "../utils/subject"; // Update with your actual API functions and paths

type Props = NativeStackScreenProps<RootNavigatorParamList, "Department">;

const DepartmentScreen = ({ navigation, route }: Props) => {
  const { departmentName } = route.params;

  // State to store subject data
  const [subjects, setSubjects] = useState<Subject[]>([]);

  useEffect(() => {
    // Load subject data when the component mounts
    loadSubjects();
  }, []);

  const loadSubjects = async () => {
    try {
      // Fetch subjects from your API
      const response = await getSubjects();
      setSubjects(response); // Set subjects to the response data
    } catch (error) {
      console.error("Error loading subjects:", error);
    }
  };

  const renderSubjectButtons = () => {
    return subjects.map((subject) => (
      <Button
        key={subject.id}
        title={subject.name}
        onPress={() => {
          navigation.navigate("Quiz", {
            quizName: subject.name,
            quizId: subject.id,
          });
        }}
      />
    ));
  };

  const createNewSubject = async () => {
    try {
      // Create a new subject on the server
      await createSubject("New Subject", 1); // Pass the subject name and departmentId
      // Reload subjects to reflect the changes
      loadSubjects();
    } catch (error) {
      console.error("Error creating subject:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.departmentText}>Department: {departmentName}</Text>
      <View style={styles.subjectButtons}>{renderSubjectButtons()}</View>
      <Button title="Create New Subject" onPress={createNewSubject} />
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
  subjectButtons: {
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
