import { SafeAreaView } from "react-native-safe-area-context";
import { createContext, useState } from "react";
import { Link, router } from "expo-router";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";

export const HomeContent = () => {
  return (
    <SafeAreaView
      className="flex flex-row justify-center"
      style={style.content}
    >
      <View className="flex">
        <Text>Hi</Text>
      </View>

      <View>
        <Text>hello</Text>
      </View>
      <View>
        <Text>hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeContent;

const style = StyleSheet.create({
  content: {
    marginTop: 12,
    borderWidth: 2, // Accepting numbers only (no 'px' strings)
    borderColor: "#07110b", // Supporting hex, rgb, rgba, and named colors

    // 2. Optional visual settings
    borderStyle: "solid", // Options: 'solid', 'dashed', 'dotted'
    borderRadius: 8,
  },
});
