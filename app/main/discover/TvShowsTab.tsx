import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "react-native-paper";

const TvShowsTab = () => {
  const theme = useTheme();
  return (
    <View
      className="flex-1 items-center justify-center"
      style={{ backgroundColor: theme.colors.background }}
    >
      <Text>Welcome to tv shows</Text>
    </View>
  );
};

export default TvShowsTab;
