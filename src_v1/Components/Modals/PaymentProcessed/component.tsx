import React from 'react';
import {Modal, View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import {string} from '../../../Resources';
import {navigate} from '../../../utils/NavigationService';

// Defining types for the props
interface ModalComponentProps {
  visible: boolean;
  onClose: () => void;
  title?: string; // Optional prop for title
  image?: any; // Optional prop for image source
  description?: string; // Optional prop for description text
  buttonTextPrimary?: string; // Optional prop for primary button text
  buttonTextSecondary?: string; // Optional prop for secondary button text
  onSecondaryButtonPress?: () => void; // Optional callback for secondary button
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  visible,
  onClose,
  title = string.your_payment_is_being_processed,
  image = '',
  description = string.processed_payment_desc,
  buttonTextPrimary = string.close,
  buttonTextSecondary = string.view_contributions, // Default secondary button text
  onSecondaryButtonPress = () => navigate('YourContributions'), // Default secondary button press
}) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {/* Conditionally render image */}
          {image && <Image source={image} style={{width: 110, height: 110}} />}

          {/* Title */}
          <Text style={styles.modalTitle}>{title}</Text>

          <Text style={styles.modalBody}>
            {description}
            {title == string.your_payment_is_being_processed && (
              <Text style={styles.linkText}> {string.your_contributions}</Text>
            )}
            {title == string.your_payment_is_being_processed && (
              <Text style={styles.modalBody}>{string.page}</Text>
            )}
          </Text>

          {/* Secondary button */}
          <TouchableOpacity
            style={styles.buttonSecondary}
            onPress={onSecondaryButtonPress}>
            <Text style={styles.buttonSecondaryText}>
              {buttonTextSecondary}
            </Text>
          </TouchableOpacity>

          {/* Primary button */}
          <TouchableOpacity style={styles.buttonPrimary} onPress={onClose}>
            <Text style={styles.buttonPrimaryText}>{buttonTextPrimary}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;
