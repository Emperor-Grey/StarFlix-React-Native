import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { withLayoutContext } from "expo-router";
import { Setting2 } from "iconsax-react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import LibraryBooksOutlineIcon from "../../components/LibraryOutline";

import type {
  ParamListBase,
  TabNavigationState,
} from "@react-navigation/native";
import type {
  MaterialBottomTabNavigationEventMap,
  MaterialBottomTabNavigationOptions,
} from "react-native-paper/react-navigation";

const { Navigator } = createMaterialBottomTabNavigator();

export const MaterialBottomTabs = withLayoutContext<
  MaterialBottomTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialBottomTabNavigationEventMap
>(Navigator);

const BottomLayout = () => {
  return (
    <MaterialBottomTabs>
      <MaterialBottomTabs.Screen
        name="Home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "home" : "home-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />
      <MaterialBottomTabs.Screen
        name="discover"
        options={{
          tabBarLabel: "Discover",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "compass" : "compass-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />
      <MaterialBottomTabs.Screen
        name="MyList"
        options={{
          tabBarLabel: "My List",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <MaterialIcons name="library-books" size={26} color={color} />
            ) : (
              <LibraryBooksOutlineIcon size={26} color={color} />
            ),
        }}
      />
      <MaterialBottomTabs.Screen
        name="Settings"
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <Setting2
              variant={focused ? "Bold" : "Outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />
    </MaterialBottomTabs>
  );
};

export default BottomLayout;
