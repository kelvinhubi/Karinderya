import { Text, View, StyleSheet, Pressable } from "react-native";
import { Link, router } from "expo-router";
import { createContext } from "react";
import { useRouter } from "expo-router";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.linkText}>Home screen</Text>

      <Pressable
        onPress={() => router.push("/login")}
        style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
      >
        {({ pressed }) => (
          <>
            <Text>If you are a Admin</Text>
            <Text style={[styles.text, pressed && styles.linkText]}>
              Click Here
            </Text>
          </>
        )}
      </Pressable>
      <Pressable
        onPress={() => router.push("/Customer/customer")}
        style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
      >
        {({ pressed }) => (
          <>
            <Text>If you are a Customer</Text>
            <Text style={[styles.text, pressed && styles.linkText]}>
              Click Here
            </Text>
          </>
        )}
      </Pressable>

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
    textAlign: "center",
  },
  linkText: {
    color: "#0066cc", // Classic link blue color
    textDecorationLine: "underline", // Creates the bottom line (underline)
    fontSize: 12,
  },
});
