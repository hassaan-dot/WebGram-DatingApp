
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';
import helpers from '../../utils/helpers';

interface ComponentProps {
  imageSource?: object; 
  icon?: string; 
  label: string;
  onPress: (label: string) => void; // Accepts a string parameter
  isProfile?: boolean;
}

const Component: React.FC<ComponentProps> = ({
  imageSource,
  icon,
  label,
  onPress,
  isProfile,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(label)}>
      <View style={[styles.circle, isProfile && styles.profileBorder]}>
        {imageSource && (
          <Image
            source={imageSource} 
            style={
              {
                height:
                  label !== 'Profile'
                    ? helpers.normalize(24)
                    : helpers.normalize(60),
                width:
                label !== 'Profile'
                ? helpers.normalize(24)
                : helpers.normalize(60),
                tintColor: !isProfile ? '#F714AF' : undefined, 
                borderRadius: label == 'Profile' ? helpers.normalize(50) :0,
              }
            }
          />
        )}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Component);
