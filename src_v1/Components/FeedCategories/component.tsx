import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import helpers from '../../utils/helpers';

interface Props {
  categories: string[];
}

const FeedCategorySelector: React.FC<Props> = ({ categories }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0); 

  const handleTabPress = (index: number) => {
    setSelectedIndex(index); 
  };

  return (
    <View style={[styles.container,{marginHorizontal:categories?.length==2?helpers.wp(20):helpers.wp(5)}]}>
      {categories.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tabButton,
            selectedIndex === index && styles.activeTab,
          ]}
          onPress={() => handleTabPress(index)}>
          <Text
            style={[
              styles.tabText,
              selectedIndex === index && styles.activeTabText,
            ]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FeedCategorySelector;
