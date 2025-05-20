import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Modal, Image } from 'react-native';
import style from './style';
import { string } from '../../../Resources';
import {icons} from '../../../../public/material/icons/icons';
import HorizontalLine from '../../HorizontalLine/HorizontalLine';

interface Option {
  Text: string;
  Amount: string;
}

interface ActionSheetProps {
  options: Option[];
  buttonText: string;
  dragHandlePress?: () => void;
  onButtonPress?: () => void;
}

const ActionSheet: React.FC<ActionSheetProps> = ({
  options,
  buttonText,
  dragHandlePress,
  onButtonPress,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const styles = style.getSheet();

  // Hide the modal
  const hide = useCallback(() => {
    setIsVisible(false);
  }, []);

  // Handle the last button press
  const lastButtonPressed = useCallback(() => {
    console.log("Pay")
    if (onButtonPress) {
      onButtonPress();
    }
    hide();
  }, [onButtonPress, hide]);

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={hide}
    >
      <TouchableOpacity style={styles.overlay} onPress={dragHandlePress}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.dragHandle}
            onPress={dragHandlePress}
          />
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Confirm Amount</Text>
          </View>
          {options.map((option, index) => (
            <View key={index}>
              <View style={styles.optionRow}>
                <Text
                  style={[
                    styles.optionText,
                    index === options.length - 1 && styles.boldText,
                  ]}
                >
                  {option.Text}
                </Text>
                <Text
                  style={[
                    styles.optionAmount,
                    index === options.length - 1 && styles.highlightedAmount,
                  ]}
                >
                  {`${index === options.length - 2 ? ' + ' : ' '}$${
                    option.Amount
                  }`}
                </Text>
              </View>
              {index === options.length - 2 && <HorizontalLine color="#737373" />}
            </View>
          ))}
          <View style={styles.infoContainer}>
            <Image source={icons.modal_dollar_icon} style={styles.icon} />
            <Text style={styles.infoText}>
              {string.Modal_Text_1}
              <Text style={styles.highlightedText}>{string.Stripe}</Text>
              {string.Modal_Text_2}
            </Text>
          </View>
          <View style={styles.aiAssistContainer}>
            <Image
              source={icons.modal_desc_icon}
              style={styles.aiIconImage}
            />
            <Text style={styles.aiAssistTitle}>{string.Modal_desc}</Text>
          </View>
          <TouchableOpacity
            style={styles.lastButton}
            onPress={lastButtonPressed}
          >
            <View style={styles.buttonTextStyle}>
              <Text style={styles.buttonText}>{buttonText}</Text>
              <Image
                source={icons.action_sheet_icon}
                style={styles.buttonIcon}
              />
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default ActionSheet;
