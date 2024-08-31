import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Appbar, useTheme } from 'react-native-paper';

import type {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import type {
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import { withLayoutContext } from 'expo-router';

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function TopTabsLayout() {
  const theme = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Discover" />
      </Appbar.Header>
      <MaterialTopTabs
        tabBarPosition="top"
        screenOptions={{
          tabBarContentContainerStyle: {
            marginTop: 0,
          },
          tabBarIndicatorStyle: {
            backgroundColor: theme.colors.primary,
          },
          tabBarStyle: { backgroundColor: theme.colors.background },
        }}
      >
        <MaterialTopTabs.Screen
          name="MoviesTab"
          options={{ title: 'Movies' }}
        />
        <MaterialTopTabs.Screen
          name="TvShowsTab"
          options={{ title: 'Tv Shows' }}
        />
      </MaterialTopTabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
