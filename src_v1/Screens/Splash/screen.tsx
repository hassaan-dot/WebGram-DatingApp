import React, { useEffect } from 'react';
import { Image, SafeAreaView, View } from 'react-native';
import { styles } from './style';
import { icons } from '../../../public/material/icons/icons';

interface ScreenProps {
  navigation: {
    replace: (screen: string) => void;
  };
}

const Screen: React.FC<ScreenProps> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login'); 
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={icons.splash_screen_logo}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

export default Screen;
