import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { createContext } from "react";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>

      <Link href="/Admin/dashboard">Go to Admin</Link>
      {/* <Link href="/admin">Go to Admin</Link>
      <Link href="/customer">Go to Customer</Link>
      <Link href="/Modules/menu" style={styles.link}>
        Open Menu Tabs
      </Link> */}
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
