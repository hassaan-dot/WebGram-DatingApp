import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { icons, string } from "../../Resources";
import FilledButton from "../Buttons/FilledButton/FilledButton";
// import Entypo from 'react-native-vector-icons/Entypo';

interface ComponentProps {
  result: string[]; // Assuming result is an array of strings
  currentCaption?: (captionData: {
    captionIndex: number;
    selectedCaption: string;
  }) => void; // Optional function to update the caption
}

const Component: React.FC<ComponentProps> = ({ result, currentCaption }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [isSelected, setIsSelected] = useState<boolean>(false);
console.log('result', result)
  const updateCaption = () => {
    if (currentCaption) {
      currentCaption({
        captionIndex: currentIndex,
        selectedCaption: result[currentIndex],
      });
      setIsSelected(true);
      setSelectedIndex(currentIndex);
    }
  };

  const handleNext = () => {
    if (currentIndex < result.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsSelected(selectedIndex === currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsSelected(selectedIndex === currentIndex - 1);
    }
  };

  return (
    <View style={styles.aiAssistOuterContainer}>
      <View style={styles.aiAssistTitleContainer}>
        <Image source={icons.ai_logo} style={styles.aiIconImage} />
        <Text style={styles.aiAssistTitle}>{string.ai_asset_results}</Text>
      </View>

      <View style={styles.aiAssist}>
        <Text style={styles.aiAssistPlaceholder}>{result[currentIndex]}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonLeftContainer}>
          {result.length > 1 && (
            <View style={styles.navigationContainer}>
              <TouchableOpacity
                onPress={handlePrev}
                disabled={currentIndex === 0}
              >
                <Image
                  source={icons.left_arrow_icon}
                  style={styles.pagination_arrows}
                />
                {/* <Entypo name="chevron-small-left" size={40} color="#F5169C" /> */}
              </TouchableOpacity>

              <Text style={styles.pageIndicator}>
                {currentIndex + 1}/{result.length}
              </Text>

              <TouchableOpacity
                onPress={handleNext}
                disabled={currentIndex === result.length - 1}
              >
                <Image
                  source={icons.right_arrow_icon}
                  style={[
                    styles.pagination_arrows,
                    {
                      tintColor:
                        currentIndex === result.length - 1
                          ? "#AAAA"
                          : "#F5169C",
                    },
                  ]}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
        {result.length > 1 && (
          <View style={styles.buttonRightContainer}>
            <View style={styles.refreshIconButton}>
              <Image source={icons.refresh_icon} style={styles.refreshIcon} />
            </View>
            <FilledButton
              title={isSelected ? "Selected" : string.set_as_caption}
              leftIcon={isSelected ? "check" : ""}
              leftIconColor={isSelected ? "#F5169C" : undefined}
              buttonBackground={'#FFEAF7'}
              isUnSelected={isSelected}
              containerStyle={styles.captionButton}
              titleStyle={styles.captionText}
              onPress={ updateCaption}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Component;
