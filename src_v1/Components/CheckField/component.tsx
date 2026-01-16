import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { styles } from "./style";
import { icons } from "../../Resources";

interface CheckboxFieldProps {
  text: string;
  Correct?: boolean;
  textStyle?: any;
  icon?: boolean;
  onSelect: (selectedOption: string) => void;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  text,
  Correct = true,
  icon = true,
  textStyle = {},
  onSelect,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
    onSelect(text);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.option,
          isSelected ? styles.selectedOptionTrue : styles.unSelected,
        ]}
        onPress={handlePress}
      >
        <Text
          style={[
            styles.optionText,
            textStyle,
            isSelected && styles.selectedOptionText,
          ]}
        >
          {text}
        </Text>
        {/* <Text
          style={[
            styles.icon,
            isSelected ? styles.tick : styles.cross, 
          ]}
        >
          {isSelected ? "✓" : "✗"} 
        </Text> */}

        <View style={[styles.icon]}>
          <Image
            source={
              icon
                ? icons.SimpleoptionQuiz_Icon
                : Correct
                ? icons.TickQuestion_Icon
                : icons.CrossQuestion_Icon
            }
            style={[styles.icon, { tintColor: icon ? "#666" : "" }]}
          ></Image>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CheckboxField;
