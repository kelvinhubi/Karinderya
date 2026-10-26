import { Text, View, StyleSheet } from "react-native";
import { createContext } from "react";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>revenue statistics</Text>
      <Text style={styles.text}>orders statistics</Text>
      <Text style={styles.text}>order popularity stats thid day</Text>
      <Text style={styles.text}> order popularity stats this month</Text>
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
