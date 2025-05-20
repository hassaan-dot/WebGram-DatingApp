import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  TextStyle,
  ImageStyle,
} from "react-native";
import styles from "./style";
import CustomButton from "../../Buttons/CustomButton/Button";
// Type annotations for the props
interface ActionSheetProps {
  modalTitle: string;
  modalImage: any; // This can be an image source, could be a string or object
  modalDesc: string;
  modalDesc2: string;
  buttonText: string;
  TitleStyle: TitleStyle;
  descTextColor?: TextStyle; // Optional text style for description
  imageStyle?: ImageStyle; // Optional image style
  visible?: boolean;
  Button?: boolean;
  dragHandlePress?: () => void;
  onButtonPress: () => void;
}

const ActionSheet: React.FC<ActionSheetProps> = ({
  modalTitle,
  modalImage,
  modalDesc,
  TitleStyle,
  modalDesc2,
  buttonText,
  Button = false,
  descTextColor = {}, // Default empty style if not passed
  imageStyle = {}, // Default empty style if not passed
  visible,
  dragHandlePress,
  onButtonPress,
}) => {
  const [isVisible, setIsVisible] = useState(visible); // Set the initial state to false, so it doesn't show initially
  // Hide modal on button press
  const handleButtonPress = useCallback(() => {
    onButtonPress();
    setIsVisible(false); // Optionally hide the modal when the button is pressed
  }, [onButtonPress]);

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={handleButtonPress}
    >
      <TouchableOpacity style={styles.overlay} onPress={dragHandlePress}>
        <View style={styles.container}>
          <Text style={[styles.modalTitle, TitleStyle]}>{modalTitle}</Text>
          <Text style={[styles.modalBody, descTextColor]}>{modalDesc}</Text>
          <Text style={[styles.modalBody, descTextColor]}>{modalDesc2}</Text>

          {Button && (
            <View style={{ width: "100%", marginVertical: 5 }}>
              <CustomButton
                textStyle={styles.titleStyle}
                style={styles.buttonStyle}
                text={true}
                title="Cant Wait!"
                Color="#F5179C"
                  onPress={onButtonPress}
              ></CustomButton>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
export default ActionSheet;
