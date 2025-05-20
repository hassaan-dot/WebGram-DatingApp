import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  Pressable,
} from "react-native";
import { styles } from "./styles";
import helpers from "../../../utils/helpers";
import { string } from "../../../Resources";
import { icons } from "../../../../public/material/icons/icons";
interface Data {
  title: string;
  desc: string;
  footer: string;
}

interface ModalComponentProps {
  data: Data;
  visible: boolean;
  onClose: () => void;
}

const Component: React.FC<ModalComponentProps> = ({
  data,
  visible,
  onClose,
}) => {
  return (
    <>
      {visible && (
        <StatusBar
          backgroundColor="rgba(0, 0, 0, 0.5)"
          barStyle="light-content"
        />
      )}
      <Modal
        transparent
        animationType="fade"
        visible={visible}
        onRequestClose={onClose}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {/* <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Image
                source={icons.party_bumper}
                style={{
                  width: helpers.normalize(30),
                  height: helpers.normalize(30),
                  right: helpers.normalize(20),
                  top: helpers.normalize(5),
                  backgroundColor: 'transparent', // Add this line

                }}
              /> 
            </TouchableOpacity> */}
            {/* <Pressable style={styles.closeButton} onPress={onClose}> */}
            <Pressable onPress={onClose} style={styles.closeButton}>
              <Image
                source={icons.black_cross_icon}
                style={{
                  width: helpers.normalize(18),
                  height: helpers.normalize(18),
                  // elevation: 0,
                  shadowOffset: { height: 0, width: 0 },
                  shadowOpacity: 0,
                  shadowRadius: 0,
                }}
              />
            </Pressable>

            {/* </Pressable> */}
            <Text style={styles.modalTitle}>{data.title}</Text>
            <Text style={styles.modalBody}>{data.desc}</Text>
            <Text style={styles.modalFooter}>{data.footer}</Text>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>{string.close}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Component;
