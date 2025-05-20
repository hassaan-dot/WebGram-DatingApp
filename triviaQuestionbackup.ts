import React, { useState } from "react";
import {
  Image,
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import PagerView from "react-native-pager-view";
import LinearGradient from "react-native-linear-gradient";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { TriviaCheck, TriviaClose } from "../../util/image";
import { PoppinsMedium, PoppinsRegular } from "../../util/fonts";
import { useQuery } from "@tanstack/react-query";
import { getAllTriviaQuestions } from "../../api/triviaQuestionApi";
type Question = {
  question: string;
  options: string[];
  correctOption: string;
  stats: string[]; // percentages
};

interface TriviaQuestionsProps {
  pagerViewRefs: any;
}

const TriviaQuestions: React.FC<TriviaQuestionsProps> = ({ pagerViewRefs }) => {
  // const {
  //   data: triviaQuestions,
  //   error,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["TriviaQuestions"],
  //   queryFn: getAllTriviaQuestions,
  // });

  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});
  const [isAnswerRevealed, setIsAnswerRevealed] = useState<{
    [key: number]: boolean;
  }>({});
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const questions: Question[] = [
    {
      question: "What is Emma and John's favorite traditional Afghan dish?",
      options: ["come", "comes", "are coming", "came"],
      correctOption: "come",
      stats: ["70%", "0%", "10%", "20%"],
    },
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      correctOption: "Paris",
      stats: ["90%", "5%", "2%", "3%"],
    },
    {
      question: "What is the largest planet in the solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctOption: "Jupiter",
      stats: ["15%", "10%", "65%", "10%"],
    },
  ];

  const handleOptionSelect = (
    selectedOption: string,
    questionIndex: number
  ) => {
    setSelectedAnswers((prev: any) => ({
      ...prev,
      [questionIndex]: selectedOption,
    }));
    setIsAnswerRevealed((prev: any) => ({
      ...prev,
      [questionIndex]: true, // Reveal the percentages for this question
    }));
  };

  const getFillPercentage = (percentage: string) => {
    return parseInt(percentage, 10);
  };

  return (
    <View style={styles.screen}>
      {/* PagerView Questions */}
      <PagerView
        ref={pagerViewRefs}
        style={styles.pagerView}
        initialPage={0}
        onPageSelected={(e) => setCurrentIndex(e.nativeEvent.position)}
      >
        {questions.map((question, index) => (
          <View key={index} style={styles.container}>
            <View style={styles.questionContainer}>
              <View style={$triviaQuestionContainer}>
                <Text style={$triviaTitle}>Trivia Question</Text>
                <Text style={$triviaSubTitle}>{question.question}</Text>
              </View>
              {question.options.map((option, optionIndex) => {
                const isSelected = selectedAnswers[index] === option;
                const isCorrect = option === question.correctOption;
                const percentage = question.stats[optionIndex];
                const fillPercentage = getFillPercentage(percentage);

                return (
                  <TouchableOpacity
                    key={optionIndex}
                    style={[
                      styles.optionButton,
                      isAnswerRevealed[index] && {
                        backgroundColor: isSelected ? "#e0e0e0" : "#fff",
                        borderColor: isSelected
                          ? isCorrect
                            ? "#F5169C"
                            : "red"
                          : "#ccc",
                      },
                    ]}
                    onPress={() => handleOptionSelect(option, index)}
                    disabled={!!selectedAnswers[index]} // Disable after selection
                  >
                    <LinearGradient
                      colors={["#FFEAF7", "#FFCBEA"]}
                      start={{ x: 0, y: 0 }} // Start at the left
                      end={{ x: 1, y: 0 }} // End at the right
                      style={[
                        styles.fillOverlay,
                        {
                          width: isAnswerRevealed[index]
                            ? `${fillPercentage}%`
                            : 0,
                        },
                      ]}
                    />
                    <View style={styles.optionContent}>
                      <Text
                        style={[
                          styles.optionText,
                          {
                            color: selectedAnswers[index] ? "#333" : "black",
                            fontWeight: selectedAnswers[index] ? "bold" : "600",
                          },
                        ]}
                      >
                        {option}
                      </Text>
                      {/* Show percentage only after an option is selected */}
                      {isAnswerRevealed[index] && (
                        <Text style={styles.percentageText}>{percentage}</Text>
                      )}
                    </View>
                    {/* Feedback for all options once one is selected */}
                    {selectedAnswers[index] && (
                      <View style={styles.feedback}>
                        {isCorrect ? (
                          <Image
                            style={{
                              width: 20,
                              height: 20,
                              resizeMode: "cover",
                            }}
                            source={TriviaCheck}
                          />
                        ) : (
                          <Image
                            style={{
                              width: 20,
                              height: 20,
                              resizeMode: "cover",
                            }}
                            source={TriviaClose}
                          />
                        )}
                      </View>
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        ))}
      </PagerView>

      {/* Pagination Dots */}
      <View style={styles.paginationContainer}>
        {questions.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              {
                backgroundColor: index === currentIndex ? "#F5169C" : "#ccc",
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const $triviaQuestionContainer: StyleProp<ViewStyle> = {
  backgroundColor: "#F2F2F2",
  padding: 10,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
  marginBottom: 10,
};

const $triviaTitle: StyleProp<TextStyle> = {
  color: "#F5169C",
  fontFamily: PoppinsMedium,
  fontSize: heightPercentageToDP(2.4),
  textAlign: "center",
  marginBottom: 15,
};
const $triviaSubTitle: StyleProp<TextStyle> = {
  color: "#181F32",
  fontFamily: PoppinsRegular,
  fontSize: heightPercentageToDP(2.1),
  textAlign: "center",
};

export default TriviaQuestions;

const styles = StyleSheet.create({
  screen: {
    height:
      Platform.OS === "android"
        ? heightPercentageToDP(60)
        : heightPercentageToDP(50),
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  pagerView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  questionContainer: {
    padding: 20,
  },
  optionButton: {
    marginTop: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    borderColor: "#ccc",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  optionContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  percentageText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 10,
  },
  feedback: {
    marginLeft: 10,
  },
  fillOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: heightPercentageToDP(100),
    backgroundColor: "#F5169C",
    zIndex: -1,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 20, // Keep some space at the bottom
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
