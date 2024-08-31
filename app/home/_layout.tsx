import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Setting2 } from 'iconsax-react-native';
import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import LibraryBooksOutlineIcon from '../../components/LibraryOutline';
import Discover from './Discover';
import Home from './Home';
import MyList from './MyList';
import Settings from './Settings';
interface FocussedIconProps {
  size: number | number;
  color: string | undefined;
}

interface UnFocussedIconProps {
  size: number | undefined;
  color: string | undefined;
}

const BottomLayout = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'home',
      title: 'Home',
      focusedIcon: ({ size, color }: FocussedIconProps) => (
        <MaterialCommunityIcons name="home" size={size} color={color} />
      ),
      unfocusedIcon: ({ size, color }: UnFocussedIconProps) => (
        <MaterialCommunityIcons name="home-outline" size={size} color={color} />
      ),
    },
    {
      key: 'discover',
      title: 'Discover',
      focusedIcon: ({ size, color }: FocussedIconProps) => (
        <MaterialCommunityIcons name="compass" size={size} color={color} />
      ),
      unfocusedIcon: ({ size, color }: UnFocussedIconProps) => (
        <MaterialCommunityIcons
          name="compass-outline"
          size={size}
          color={color}
        />
      ),
    },
    {
      key: 'my_list',
      title: 'My List',
      focusedIcon: ({ size, color }: FocussedIconProps) => (
        <MaterialIcons name="library-books" size={size} color={color} />
      ),
      unfocusedIcon: ({ size, color }: UnFocussedIconProps) => (
        <LibraryBooksOutlineIcon size={size} color={color} />
      ),
    },
    {
      key: 'settings',
      title: 'Settings',
      focusedIcon: ({ size, color }: FocussedIconProps) => (
        <Setting2 variant="Bold" color={color} size={size} />
      ),
      unfocusedIcon: ({ size, color }: UnFocussedIconProps) => (
        <Setting2 color={color} size={size} />
      ),
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: () => <Home />,
    discover: () => <Discover />,
    my_list: () => <MyList />,
    settings: () => <Settings />,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomLayout;
