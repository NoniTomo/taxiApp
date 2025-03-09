import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { AuthProvider, OrderProvider, UserProvider } from "@/contexts";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    InterRegular18: require("../assets/fonts/Inter_18pt-Regular.ttf"),
    InterThin18: require("../assets/fonts/Inter_18pt-Thin.ttf"),
    InterLight18: require("../assets/fonts/Inter_18pt-Light.ttf"),
    InterRegularBold18: require("../assets/fonts/Inter_18pt-Bold.ttf"),
    InterRegularBold24: require("../assets/fonts/Inter_24pt-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <UserProvider>
          <OrderProvider>
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found" />
              <Stack.Screen name="auth" options={{ headerShown: false }} />
              <Stack.Screen
                name="findAddress"
                options={{ headerShown: false }}
              />
              <Stack.Screen name="ride" options={{ headerShown: false }} />
            </Stack>
            <StatusBar style="auto" />
          </OrderProvider>
        </UserProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
