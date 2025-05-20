
import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import QuestionCardImage from "../QuestionImageCard/component";
import CheckboxField from "../../CheckField/component";
import ScorePredictorCom from "../../ScorePredictor/component";
import helpers from "../../../utils/helpers";

const QuestionCard = ({
  options=[],
  handleSelectOption,
  Data,
  ScorePredictor,
}) => {
  return (
    <View
      style={[
        styles.container,
        { paddingHorizontal: ScorePredictor ? 18 : 10 },
      ]}
    >
      <View
        style={[
          styles.card,
          {
            marginVertical: ScorePredictor
              ? helpers.normalize(30)
              : helpers.normalize(0),
          },
        ]}
      >
        {ScorePredictor ? (
          <>
            <ScorePredictorCom/>
          </>
        ) : (
          <>
            <View style={styles.QuestionCard}>
              <QuestionCardImage Data={Data?.questionText} />
            </View>
            <View style={styles.container2}>
              {Data?.options?.map((option, optionIndex) => (
                <CheckboxField
                  key={optionIndex}
                  text={option.text}
                  onSelect={() => handleSelectOption(option, optionIndex)}
                />
              ))}
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default QuestionCard;
