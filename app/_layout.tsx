import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as Font from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";

SplashScreen.preventAutoHideAsync();

const _layout = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          "Salsa-Regular": require("../assets/fonts/Salsa-Regular.ttf"),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error("Error loading fonts", error);
      }
    };
    loadFonts();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <ActivityIndicator size={"large"} />;
  }

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
    },
  };

  const queryClient = new QueryClient();

  return (
    <PaperProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={{
            headerShown: false,
            headerTitle: "Intro",
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="main" />
        </Stack>
      </QueryClientProvider>
    </PaperProvider>
  );
};

export default _layout;
