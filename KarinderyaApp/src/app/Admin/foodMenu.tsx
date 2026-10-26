import { Text, View, StyleSheet } from "react-native";
import { createContext } from "react";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Food Menu Planning</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#1F1F1F",
  },
});
