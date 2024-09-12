import React from 'react';
import { SafeAreaView } from 'react-native';
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
    <SafeAreaView className={'flex-1'}>
      <Appbar.Header>
        <Appbar.Content
          title="Discover"
          titleStyle={{ fontFamily: 'Salsa-Regular' }}
        />
        <Appbar.Action icon={'magnify'} onPress={() => {}} />
        <Appbar.Action icon={'filter-variant'} onPress={() => {}} />
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
          tabBarLabelStyle: {
            fontFamily: 'Salsa-Regular',
            textTransform: 'none',
            fontSize: theme.fonts.titleMedium.fontSize,
          },
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
