import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  TextStyle,
  ImageStyle,
} from 'react-native';
import styles from './style';
// Type annotations for the props
interface ActionSheetProps {
  modalTitle: string;
  modalImage: any; // This can be an image source, could be a string or object
  modalDesc: string;
  buttonText: string;
  descTextColor?: TextStyle; // Optional text style for description
  imageStyle?: ImageStyle; // Optional image style
  visible?:boolean;
  dragHandlePress?: () => void;
  onButtonPress: () => void;
}

const ActionSheet: React.FC<ActionSheetProps> = ({
  modalTitle,
  modalImage,
  modalDesc,
  buttonText,
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
      onRequestClose={handleButtonPress}>
      <TouchableOpacity style={styles.overlay} onPress={dragHandlePress}>
        <View style={styles.container}>
          {dragHandlePress && (
            <TouchableOpacity
              style={styles.dragIcon}
              onPress={dragHandlePress}
            />
          )}
          <Image
            source={modalImage}
            style={[styles.modalImageStyle, imageStyle]}
          />
          <Text style={styles.modalTitle}>{modalTitle}</Text>
          <Text style={[styles.modalBody, descTextColor]}>{modalDesc}</Text>
          <TouchableOpacity
            style={styles.buttonPrimary}
            onPress={handleButtonPress}>
            <Text style={styles.buttonPrimaryText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
export default ActionSheet;
