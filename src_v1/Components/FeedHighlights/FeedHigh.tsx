import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { styles } from './style';
import CircleAvatar from '../FeedHighlightAvatar/component';
import avatarData from '../../utils/props/feed_highlight/props';
import { navigate } from '../../utils/NavigationService';

// Update the AvatarItem interface
interface AvatarItem {
  id: string;
  image?:{ uri: string }; // Handle both types
  name: string;
  isProfile?: boolean; // Allow isProfile to be undefined
}

// Define the component prop types (optional if you're passing props)
interface FeedHighProps {
  avatarData?: AvatarItem[];
}


const FeedHigh: React.FC<FeedHighProps> = () => {
  const handlePress = (itemName: string) => {
    console.log('Item Name:', itemName);
    if (itemName == 'Itinerary') {
      navigate('HomeScreen_Iternity');
    }else if (itemName == 'Profile') {
      navigate('Profile');
    }else if (itemName == 'Create') {
      navigate('CreatePost');
    }else if (itemName == 'Love Story') {
      navigate('OurStory');
    }
    else {
      navigate('Gift');
    }
  };
  const renderItem = ({ item }: { item: AvatarItem }) => (
    <CircleAvatar
      imageSource={item?.image}
      label={item?.name}
      isProfile={item?.isProfile}
      onPress={handlePress}
    />
  );

  // Handle empty data case
  if (!avatarData || avatarData.length === 0) {
    return (
      <View style={styles.row}>
        <Text>No Avatars Available</Text>
      </View>
    );
  }

  return (
    <View style={styles.row}>
      <FlatList
        data={avatarData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default FeedHigh;
