import { Stack } from "expo-router";
import "../../global.css";

export default function RootLayout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="Admin" options={{ headerShown: false }} />
      <Stack.Screen name="Customer" options={{ headerShown: false }} />
    </Stack>
  );
}
