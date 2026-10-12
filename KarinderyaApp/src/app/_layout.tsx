import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="Admin" options={{ headerShown: false }} />
      <Stack.Screen name="Customer" options={{ headerShown: false }} />
    </Stack>
  );
}
