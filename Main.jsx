import { View, Text } from "react-native";
import React from "react";
import Home from "./src/layout/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/layout/Login";

const Stack = createNativeStackNavigator();
export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="home" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
