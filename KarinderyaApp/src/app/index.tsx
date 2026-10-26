import { HomeContent } from "@/app/HomeComponents/Content";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const index = () => {
  let [isContinue, setContinue] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-row items-center justify-between border-b border-surface px-4 py-3">
        {/* Brand / Logo */}
        <Text className="text-xl font-bold text-primaryText">
          Karinderya App
        </Text>

        {/* Navigation Links */}
        <View className="flex-row space-x-4">
          <Link href="/">
            <TouchableOpacity className="px-3 py-1.5 rounded-lg">
              <Text className="font-medium text-accent">Home</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/login">
            <TouchableOpacity className="px-3 py-1.5 rounded-lg">
              <Text className="font-medium text-accent">Explore</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/Admin/dashboard">
            <TouchableOpacity className="px-3 py-1.5 rounded-lg">
              <Text className="font-medium text-accent ">Admin</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
      <Pressable></Pressable>
      {/* Content */}
      <HomeContent />
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
};
/* Create a component that create a callback */

interface sampleprops {
  status: string;
  isLoading: string;
}
const destructurefunc = ({ status, isLoading }: sampleprops): boolean => {
  console.log(status);
  console.log(isLoading);
  return true;
};
interface componentProps {
  onStatusPress: (result: sampleprops) => void;
  name: string;
  age: number;
  ishidden: boolean;
}

const UseComponent = ({
  onStatusPress,
  name,
  age,
  ishidden,
}: componentProps) => {
  useEffect(() => {
    let result: sampleprops = {
      status: "false",
      isLoading: "true",
    };

    // This now safely runs *after* the component mounts
    onStatusPress(result);
  }, [onStatusPress]); // Dependency array ensures it only runs when needed

  if (ishidden) {
    return null;
  }

  return (
    <View>
      <Text>
        {name} {age}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#1F1F1F",
    textAlign: "center",
  },
  linkText: {
    color: "#0066cc", // Classic link blue color
    textDecorationLine: "underline", // Creates the bottom line (underline)
    fontSize: 12,
  },
});
export default index;
