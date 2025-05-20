import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { styles } from './style';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { icons } from '../../../public/material/icons/icons'

// Functional component does not take props, so no interface is needed
const ProfileIcon: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileIcon}>
        <View style={styles.avatar}>
          {/* Optional: Placeholder for a profile picture */}
          <Image
            source={icons.profile_no_image} // Replace with your image source
            style={styles.image}
          />
        </View>
        <TouchableOpacity style={styles.addIcon}>
            {/* <Ionicons name="add-circle" size={25} color="#F1569C" /> */}
            <Image source={icons.add_filled_icon} style={styles.addIconImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileIcon;
