import React from 'react';
import { ImageBackground, SafeAreaView, Text, View } from 'react-native';
import { styles } from './style';
// import  {images}  from "../../../public/Resources/index";
import {images} from '../../../public/material/Images/images'
import { FilledButton } from '../../Components';
import { NavigationProp } from '@react-navigation/native';
import { props } from '../../utils/props/welcome/props';
import { navigate } from '../../utils/NavigationService';

// Define a type for the navigation prop
type ScreenProps = {
  navigation: NavigationProp<any>; // You can replace 'any' with your specific navigation stack type
};

// Define a type for the props object (assuming the properties based on your usage)
interface WelcomeProps {
  welcomeText: string;
  coupleName: string;
  event: string;
  event_date: string;
  welcome_screen_button: string;
}

const Screen: React.FC<ScreenProps> = () => {
  // Type assertion to tell TypeScript the type of `props` if it's imported
  const { welcomeText, coupleName, event, event_date, welcome_screen_button }: WelcomeProps = props;
// console.log('images is',images.couple_photo)
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        style={styles.backgroundImage}
        source={images.couple_photo}
        // source={{uri:'../../../Resources/Images/couple.jpg'}}
        resizeMode="cover"
      >
        <View style={styles.imageOverLay} />

        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.welcomeText}>{welcomeText}</Text>
            <Text style={styles.coupleText}>{coupleName}</Text>
            <Text style={styles.eventText}>{event}</Text>
          </View>

          <View style={styles.footer}>
            <Text style={styles.dateText}>{event_date}</Text>
            <FilledButton
              title={welcome_screen_button}
              titleStyle={styles.buttonTextStyle}
              buttonBackground={'#F5169C'}
              containerStyle={styles.buttonContainerStyle}
              onPress={() => {
                navigate('CelebrateTogether', { eventId: '12345' });
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Screen;
