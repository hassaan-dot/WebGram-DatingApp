import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from './style';
import { icons } from '../../../public/material/icons/icons'
import { goBack } from '../../utils/NavigationService';

// Define types for the headerDetails prop
interface HeaderDetails {
  event_name: string;
  service: string;
  time: string;
  souceImage?: string;
}

// Define component props type
interface HeaderComponentProps {
  headerDetails: HeaderDetails;
  souceImage?: {uri:string};
}

const Component: React.FC<HeaderComponentProps> = ({ headerDetails,souceImage }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.circle, styles.leftCircle]} />

      <View style={[styles.circle, styles.rightCircle]} />

      <View style={[styles.bottomCircle, styles.bottomLeftCircle]} />

      <View style={[styles.bottomCircle, styles.bottomRightCircle]} />

      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton} onPress={goBack}>
          <Image source={icons.back} style={styles.icon} />
        </TouchableOpacity>

        <View style={styles.centerContent}>
          <Image
            source={icons.heart_logo_icon}
            style={styles.heartIcon}
            resizeMode="contain"
          />
          <Text style={styles.eventName}>{headerDetails?.event_name}</Text>
          <View style={styles.subtitleContainer}>
            <Image source={icons.clock} style={styles.clockIcon} />
            <Text style={styles.subtitle}>
              {headerDetails?.service}{' '}
              <Text style={styles.highlight}>{headerDetails?.time}</Text>
            </Text>
          </View>
        </View>

      {souceImage &&(
        <TouchableOpacity style={styles.iconButton}>
          <Image source={souceImage || icons.group.uri} style={styles.groupIcon} />
        </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Component;
