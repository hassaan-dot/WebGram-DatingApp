import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,

} from "react-native";
import { icons, string } from "../../../Resources";
import styles from "./styles";
import Trivia from "../../../Screens/Trivia/screen";
import { Questions as Props } from "../../../utils/props/QuestionsQuiz/props";
import QuestionCardImage from "../../Card/QuestionImageCard/component";
import { navigate } from "../../../utils/NavigationService";

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
  const handleFunction = () => {
    return setModalVisible(false);
  };
  return (
    <>
      <View style={styles.closeButtonView}>
        <TouchableOpacity style={styles.closeButton}>
          <Image
            source={icons.CrossQuestion_Icon}
            style={styles.imageContainer}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.modalContainer}>
        <View style={styles.iconContainer}>
          <Image
            source={ImageSource ? ImageSource : icons.TrivaiQuizModal}
            style={styles.imagetitleStyle}
          />
          <Text style={styles.title}>{ModalTitle}</Text>
        </View>
        <View style={styles.QuestionCARDIMAGE}>
          <QuestionCardImage
            Data={Props.questions[0].questionText}
          ></QuestionCardImage>
        </View>

        <TouchableOpacity
          style={styles.uploadButton}
          onPress={() => {
            navigate('Trivia')
          }}
        >
          <Text style={styles.uploadButtonText}>
            {ButtonTitle ? ButtonTitle : string.upload_my_photo}
          </Text>
        </TouchableOpacity>

        {/* <Modal visible={modalVisible} transparent animationType="slide">
          <View style={styles.ModalChild}>
            <Trivia Data={Props} handleFunction={handleFunction} />
          </View>
        </Modal> */}.
      </View>
    </>
  );
};

export default Component;
