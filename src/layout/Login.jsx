import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import SafeArea from "../components/SafeArea";

export default function Login() {
  const navigator = useNavigation();
  return (
    <SafeArea>
      <ScrollView>
        <Button
          mode="contained"
          style={{ margin: 10 }}
          onPress={() => {
            navigator.navigate("home");
          }}
        >
          Go to home
        </Button>
      </ScrollView>
    </SafeArea>
  );
}
