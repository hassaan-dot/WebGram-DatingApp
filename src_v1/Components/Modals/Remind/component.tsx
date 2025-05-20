import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  StatusBar,
} from "react-native";
import { icons, string } from "../../../Resources";
import styles from "./styles";
import helpers from "../../../utils/helpers";
import Trivia from "../../../Screens/Trivia/screen";
import { Questions as Props } from "../../../utils/props/QuestionsQuiz/props";

interface ModalProps {
  ButtonTitle?: string;
  ImageSource?: any; 
  ModalTitle?: string;
}

const Component: React.FC<ModalProps> = ({
  ButtonTitle,
  ImageSource,
  ModalTitle,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  // const handleFunction = () => {
  //   return setModalVisible(false);
  // };
  return (
    <View style={styles.modalContainer}>
      <View style={styles.closeButtonView}>
        <TouchableOpacity style={styles.closeButton}>
          <Image
            source={icons.SpotLightDelete_Icon}
            style={{
              width: helpers.normalize(30),
              height: helpers.normalize(30),
              right: 5,
              top: -3,
            }}
          />
          {ModalTitle && <Text>{ModalTitle}</Text>}
        </TouchableOpacity>
      </View>

      <View style={styles.iconContainer}>
        <Image
          source={ImageSource ? ImageSource : icons.modal_sign}
          style={{
            width: helpers.normalize(24),
            height: helpers.normalize(24),
            tintColor: "#F51796",
          }}
        />
        <Text style={styles.title}>{string.Modal_title}</Text>
      </View>

      <Text style={styles.description}>{string.modal_desc}</Text>

      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() => {
          // setModalVisible(true);
        }}
      >
        <Text style={styles.uploadButtonText}>
          {ButtonTitle ? ButtonTitle : string.upload_my_photo}
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default Component;
