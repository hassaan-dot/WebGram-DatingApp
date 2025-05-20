import React from 'react';
import { View, Image, ImageSourcePropType } from 'react-native';
import { styles } from './style';

// Define types for the component's props
interface ComponentProps {
  status: string; // Add all possible status values
  icon: ImageSourcePropType; // ImageSourcePropType is used for image source
}

const Component: React.FC<ComponentProps> = ({ status, icon }) => {
  return (
    <View
      style={[
        styles.circle,
        { borderColor: status === 'done' ? '#F5169C' : '#C4C4C4' },
      ]}
    >
      <Image source={icon} style={styles.iconsStyle} resizeMode="contain" />
    </View>
  );
};

export default Component;
