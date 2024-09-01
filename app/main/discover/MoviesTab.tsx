import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

const MoviesTab = () => {
  const theme = useTheme();
  return (
    <View
      className="flex-1 justify-center items-center"
      style={{ backgroundColor: theme.colors.background }}
    >
      <Text>Welcome to Movies</Text>
    </View>
  );
};

export default MoviesTab;
