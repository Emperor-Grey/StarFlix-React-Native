import * as NavigationBar from 'expo-navigation-bar';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { ImageBackground, View } from 'react-native';
import { Button, Text, TouchableRipple } from 'react-native-paper';

export default function App() {
  const router = useRouter();

  const handleNavigation = () => {
    router.replace('/home');
  };

  useEffect(() => {
    const setNav = async () => {
      try {
        await NavigationBar.setVisibilityAsync('hidden');
        await NavigationBar.setBehaviorAsync('overlay-swipe');
      } catch (error) {
        console.error('Error setting navigation bar:', error);
      }
    };
    setNav();
  }, []);

  return (
    <View className="flex-1">
      <ImageBackground
        className="flex-1 justify-end items-center"
        source={require('../assets/images/intro.png')}
        style={{ width: '100%', height: '100%' }}
      >
        <View className="bg-white opacity-[0.88] rounded-lg overflow-hidden mb-5 px-1.5 py-2">
          <Text variant="headlineLarge" className="text-center font-salsa">
            Unlimited Entertainment Movie Magic
          </Text>
          <Text
            variant="bodyLarge"
            className="font-salsa text-center pt-2 pb-2 text-lg"
          >
            Discover and bookmark your favorite movies. Curate the ultimate
            bucket list for endless entertainment!
          </Text>
          <TouchableRipple>
            <Button
              className="font-salsa rounded-2xl h-16 mb-2"
              contentStyle={{ height: 65 }}
              mode="contained"
              onPress={handleNavigation}
            >
              Start Your Journey...
            </Button>
          </TouchableRipple>
        </View>
      </ImageBackground>
    </View>
  );
}
