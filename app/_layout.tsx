import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

SplashScreen.preventAutoHideAsync();

const _layout = () => {
  const [fontsLoaded, error] = useFonts({
    'Salsa-Regular': require('../assets/fonts/Salsa-Regular.ttf'),
  });

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
    },
  };

  const queryClient = new QueryClient();

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return <ActivityIndicator size={'large'} />;
  }

  return (
    <PaperProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={{
            headerShown: false,
            headerTitle: 'Intro',
          }}
        />
      </QueryClientProvider>
    </PaperProvider>
  );
};

export default _layout;
