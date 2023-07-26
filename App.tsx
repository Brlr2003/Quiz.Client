import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./screens/Home";
import { ScienceScreen } from "./screens/ScienceScreen";
import { LiteraryScreen } from "./screens/LiteraryScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Science"
          component={ScienceScreen}
          initialParams={{ itemId: 42 }}
        />
        <Stack.Screen name="Literary" component={LiteraryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
