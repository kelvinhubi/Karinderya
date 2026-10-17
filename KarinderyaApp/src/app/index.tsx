import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Link, router } from "expo-router";
import { createContext, useState } from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
  let [isContinue, setContinue] = useState(false);

  return (
    <SafeAreaView className="bg-orange-500">
      <View className="flex-row items-center justify-between px-4 py-3 border-b border-slate-700">
        {/* Brand / Logo */}
        <Text className="text-white text-xl font-bold">Karinderya App</Text>

        {/* Navigation Links */}
        <View className="flex-row space-x-4">
          <TouchableOpacity className="px-3 py-1.5 rounded-lg">
            <Text className="text-white font-medium">Home</Text>
          </TouchableOpacity>

          <TouchableOpacity className="px-3 py-1.5 rounded-lg">
            <Text className="text-white font-medium">Explore</Text>
          </TouchableOpacity>

          <TouchableOpacity className="px-3 py-1.5 rounded-lg">
            <Text className="text-white font-medium">Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>

    // <View style={styles.container}>
    //   <Text style={styles.linkText}>Home screen</Text>

    //   <Pressable
    //     onPress={() => router.push("/login")}
    //     style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
    //   >
    //     {({ pressed }) => (
    //       <>
    //         <Text>If you are a Admin</Text>
    //         <Text style={[styles.text, pressed && styles.linkText]}>
    //           Click Here
    //         </Text>
    //       </>
    //     )}
    //   </Pressable>
    //   <Pressable
    //     onPress={() => router.push("/Customer/customer")}
    //     style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
    //   >
    //     {({ pressed }) => (
    //       <>
    //         <Text>If you are a Customer</Text>
    //         <Text style={[styles.text, pressed && styles.linkText]}>
    //           Click Here
    //         </Text>
    //       </>
    //     )}
    //   </Pressable>

    //   {/* <Link href="/admin">Go to Admin</Link>
    //   <Link href="/customer">Go to Customer</Link>
    //   <Link href="/Modules/menu" style={styles.link}>
    //     Open Menu Tabs
    //   </Link> */}
    // </View>
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
