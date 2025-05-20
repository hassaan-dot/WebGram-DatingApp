import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import Ionicon_com from '../Ionicons/Ionicon';

// Define types for the component's props
interface CustomButtonProps {
  text?: boolean;
  title: string;
  style?: ViewStyle; // For custom button styles
  textStyle?: TextStyle; // For custom text styles
  onPress: () => void;
  Color?: string;
  disabled?: boolean;
  icon?: boolean;
  iconType?: string;
  iconName?: string;
  iconColor?: string;
  iconSize?: number;
  iconStyle?: ViewStyle; // For custom icon styles
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text = false,
  title,
  style,
  textStyle,
  onPress,
  Color = '#FFF',
  disabled = false,
  icon = true,
  iconType,
  iconName,
  iconColor,
  iconSize,
  iconStyle
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, { backgroundColor: Color }]}
      onPress={onPress}
      disabled={disabled}>
      {icon && iconName ? (
        <Ionicon_com
          style={iconStyle}
          type={iconType}
          name={iconName}
          size={iconSize}
          color={iconColor}
        />
      ) : null}
      {text && (
        <>
          <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 15,
    // fontWeight: '',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
});

export default CustomButton;
