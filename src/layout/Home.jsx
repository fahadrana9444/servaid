import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { Button, Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import SafeArea from "../components/SafeArea";

export default function Home() {
  const navigator = useNavigation();
  return (
    <SafeArea>
      <ScrollView>
        <Button
          mode="contained"
          style={{ margin: 10 }}
          onPress={() => {
            navigator.navigate("login");
          }}
        >
          Go to Login
        </Button>
      </ScrollView>
    </SafeArea>
  );
}
