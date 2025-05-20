import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "./style";
import LinearGradient from "react-native-web-linear-gradient";

import { CustomButton, ModalHeader, QuestionCard } from "../../Components";
import { Questions as Data } from "../../utils/props/QuestionsQuiz/props";
import { navigate } from "../../utils/NavigationService";
const Trivia = ({ handleFunction }) => {
  const HandleNextState = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleSelectOption = (selectedOption: string, text: string) => {
    console.log("userResponse is", selectedOption);
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(selectedOption)) {
        return prevSelectedOptions.filter(
          (option) => option !== selectedOption
        );
      } else {
        return [...prevSelectedOptions, selectedOption];
      }
    });
  };
  const handleClose = () => {
    return navigate("Feed");
  };

  const ShowBackIcon = currentQuestionIndex > 0;
  const ScorePredictor = currentQuestionIndex >= Data?.totalQuestions - 1;

  return (
    <LinearGradient
      colors={["#FFF4FC", "#FEEDF9", "#FDD0EC"]}
      style={styles.gradientColor}
    >
      <View style={styles.container}>
        <View>
          <ModalHeader
            title={"Trivia Time!"}
            handleFunction={handleClose}
            ShowBackIcon={ShowBackIcon}
          ></ModalHeader>
        </View>

        <View style={styles.HeaderContainer}>
          <View style={styles.topDescription}>
            <Text
              style={[
                styles.title,
                { color: ScorePredictor ? "#FDD1EB" : "#2D2234" },
              ]}
            >
              {ScorePredictor ? "" : "Join the fun!"}
            </Text>
            <Text
              style={[
                styles.subtitle,
                { color: ScorePredictor ? "#FDD1EB" : "#2D2234" },
              ]}
            >
              {ScorePredictor ? "" : "Discover more about Emma & John"}
            </Text>
          </View>
        </View>

        <View style={styles.QuestionContainer}>
          {!ScorePredictor && (
            <View style={styles.questionIndicator}>
              <Text style={styles.textStyleIndicator}>
                Question {`${currentQuestionIndex + 1}/${Data?.totalQuestions}`}
              </Text>
            </View>
          )}
          <ScrollView contentContainerStyle={{}}>
            {Data?.questions.map((question, index) =>
              index === currentQuestionIndex ? (
                <QuestionCard
                  ScorePredictor={ScorePredictor}
                  key={index}
                  Data={question}
                  handleSelectOption={handleSelectOption}
                  HandleNextState={HandleNextState}
                />
              ) : null
            )}
          </ScrollView>
        </View>
        <View style={{ flex: 0.15 }}>
          {selectedOptions.length > 0 && !ScorePredictor && (
            <>
              <View style={styles.Description}>
                <Text style={styles.DescriptionText}>
                  Bingo! You nailed it!
                </Text>
              </View>
              <View style={styles.ButtonContainer}>
                <CustomButton
                  textStyle={styles.titleStyle}
                  style={styles.buttonStyle}
                  text={true}
                  title="Woahoo!"
                  Color="#F5169C"
                  onPress={() => HandleNextState()}
                ></CustomButton>
              </View>
            </>
          )}
        </View>
      </View>
    </LinearGradient>
  );
};

export default Trivia;
