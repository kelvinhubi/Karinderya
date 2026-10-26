import { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    if (!email.trim() || !password) {
      setErrorMessage("Enter your email and password to continue.");
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    // Replace this demo transition with your authentication request.
    setTimeout(() => {
      setIsSubmitting(false);
      router.replace("/Admin/dashboard");
    }, 700);
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          className="flex-1"
          contentContainerClassName="flex-grow justify-center px-6 py-10"
          keyboardShouldPersistTaps="handled"
        >
          <View className="mb-10">
            <View className="mb-6 h-16 w-16 items-center justify-center rounded-2xl bg-accent shadow-sm">
              <Text className="text-3xl">🍲</Text>
            </View>
            <Text className="text-sm font-semibold uppercase tracking-widest text-accent">
              Karinderya
            </Text>
            <Text className="mt-2 text-4xl font-bold leading-tight text-primaryText">
              Welcome back
            </Text>
            <Text className="mt-3 text-base leading-6 text-secondaryText">
              Sign in to manage your meals and keep your day moving.
            </Text>
          </View>

          <View className="rounded-3xl bg-surface p-6 shadow-sm">
            <Text className="mb-2 text-sm font-semibold text-primaryText">
              Email address
            </Text>
            <TextInput
              value={email}
              onChangeText={(value) => {
                setEmail(value);
                setErrorMessage("");
              }}
              autoCapitalize="none"
              autoComplete="email"
              keyboardType="email-address"
              placeholder="you@example.com"
              placeholderTextColor="#707070"
              className="mb-5 rounded-2xl border border-background bg-background px-4 py-4 text-base text-primaryText"
              returnKeyType="next"
            />

            <View className="mb-2 flex-row items-center justify-between">
              <Text className="text-sm font-semibold text-primaryText">
                Password
              </Text>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Toggle password visibility"
                onPress={() => setShowPassword((visible) => !visible)}
                hitSlop={8}
              >
                <Text className="text-sm font-semibold text-accent">
                  {showPassword ? "Hide" : "Show"}
                </Text>
              </Pressable>
            </View>
            <TextInput
              value={password}
              onChangeText={(value) => {
                setPassword(value);
                setErrorMessage("");
              }}
              autoCapitalize="none"
              autoComplete="password"
              placeholder="Enter your password"
              placeholderTextColor="#707070"
              secureTextEntry={!showPassword}
              className="rounded-2xl border border-background bg-background px-4 py-4 text-base text-primaryText"
              returnKeyType="done"
              onSubmitEditing={handleLogin}
            />

            {errorMessage ? (
              <Text
                accessibilityRole="alert"
                className="mt-3 text-sm leading-5 text-accent"
              >
                {errorMessage}
              </Text>
            ) : null}

            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Sign in"
              accessibilityState={{ disabled: isSubmitting }}
              className={`mt-6 min-h-14 items-center justify-center rounded-2xl bg-accent px-4 ${
                isSubmitting ? "opacity-60" : "active:bg-accent"
              }`}
              disabled={isSubmitting}
              onPress={handleLogin}
            >
              {isSubmitting ? (
                <ActivityIndicator color="#ffffff" />
              ) : (
                <Text className="text-base font-bold text-white">Sign in</Text>
              )}
            </Pressable>

            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Forgot password"
              className="mt-5 items-center"
              onPress={() =>
                setErrorMessage("Password reset is not available yet.")
              }
            >
              <Text className="text-sm font-semibold text-accent">
                Forgot password?
              </Text>
            </Pressable>
          </View>

          <Text className="mt-8 text-center text-sm text-secondaryText">
            By continuing, you agree to our Terms and Privacy Policy.
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
