import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from './style';
import { IntroScreen } from '../../Components';
import { props } from '../../utils/props/intro/props';
import { StackNavigationProp } from '@react-navigation/stack';
import { navigate, RootStackParamList } from '../../utils/NavigationService'; // Define this type as per your navigation setup

type NavigationProp = StackNavigationProp<RootStackParamList, 'IntroScreen'>;

interface ScreenProps {
  navigation: NavigationProp;
}

const Screen: React.FC<ScreenProps> = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    if (currentIndex < props.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate('Feed');
    }
  };

  const handleSkip = () => {
   navigate('Feed');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <IntroScreen
        img={props[currentIndex].img}
        cardTitle={props[currentIndex].cardTitle}
        cardDescription={props[currentIndex].cardDescription}
        totalSteps={props.length}
        activeStep={currentIndex}
        onNext={handleNext}
        onSkip={handleSkip}
      />
    </SafeAreaView>
  );
};

export default Screen;
