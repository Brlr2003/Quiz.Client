import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./screens/Home";
import { QuizScreen } from "./screens/QuizScreen";
import { ScoreScreen } from "./screens/ScoreScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootNavigatorParamList } from "./types/Navigation";
import DepartmentScreen from "./screens/DepartmentScreen";

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Department" component={DepartmentScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Score" component={ScoreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
