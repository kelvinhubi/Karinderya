import { Text, View, StyleSheet } from "react-native";
import { createContext } from "react";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Admin Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
