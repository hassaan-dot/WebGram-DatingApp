// import React, { useState } from "react";
// import { View, Text } from "react-native";
// import { styles } from "./styles";
// import CustomAvatar from "../ScoreAvatar/component";
// import CustomButton from "../Buttons/CustomButton/Button";
// import TriviaResponse from "../ActionSheet/TrivaResponse/component";
// type TriviaCardProps = {
//   score: number;
//   totalQuestions: number;
//   nextRoundTime: string;
//   onNextRound: () => void;
// };
// let totalScore = 5;
// let myscore = 3;

// const ScorePredictorCom: React.FC<TriviaCardProps> = ({
//   score,
//   totalQuestions,
//   nextRoundTime,
//   onNextRound,
// }) => {
//   const[open,setOpen]=useState(false)
//   setOpen :()=>{true}
//   return (
//     <View style={styles.card}>
//       <Text style={styles.header}>Trivia Master in the House!</Text>
//       <View style={styles.TextContainer}>
//         <Text style={styles.description}>
//           You crushed this round! Your trivia skills are on fire
//         </Text>
//       </View>

//       <View style={styles.scoreContainer}>
//         <CustomAvatar totalScore={totalScore} myscore={myscore}></CustomAvatar>
//       </View>
//       <Text style={styles.nextRoundText}>
//         More questions coming your way in 1 hour —- stay sharp!
//       </Text>
//       <View style={styles.customButton}>
//         <CustomButton
//           textStyle={styles.titleStyle}
//           style={styles.buttonStyle}
//           text={true}
//           title="Cant Wait!"
//           Color="#F5179C"
//           onPress={()=>setOpen(true)}
//         ></CustomButton>
//       </View>
//       <TriviaResponse
//         visible={open}
//         TitleStyle={styles.TitleStyle}
//         modalDesc={"You crushed this round! Your trivia skills are on fire"}
//         modalDesc2={"More questions coming your way in 1 hour --stay sharp!"}
//         modalTitle={"Trivia Master in the House!"}
//         Button={true}
//       ></TriviaResponse>
//     </View>
//   );
// };

// export default ScorePredictorCom;
// import React, { useState } from "react";
// import { View, Text } from "react-native";
// import { styles } from "./styles";
// import CustomAvatar from "../ScoreAvatar/component";
// import CustomButton from "../Buttons/CustomButton/Button";
// import TriviaResponse from "../ActionSheet/TrivaResponse/component";

// type TriviaCardProps = {
//   score: number;
//   totalQuestions: number;
//   nextRoundTime: string;
//   onNextRound: () => void;
// };
// const [openActionSheet, setopenActionSheet] = useState(false);
// console.log('open is',openActionSheet)
// const ScorePredictorCom: React.FC<TriviaCardProps> = ({
//   score,
//   totalQuestions,
//   nextRoundTime,
//   onNextRound,
// }) => {
//   const handleOpen = () => {
//     setopenActionSheet(true);
//   };

//   let totalScore = 5;
//   let myscore = 3;
//   return (
//     <View style={styles.card}>
//       <Text style={styles.header}>Trivia Master in the House!</Text>
//       <View style={styles.TextContainer}>
//         <Text style={styles.description}>
//           You crushed this round! Your trivia skills are on fire
//         </Text>
//       </View>

//       <View style={styles.scoreContainer}>
//         <CustomAvatar totalScore={totalScore} myscore={myscore} />
//       </View>
//       <Text style={styles.nextRoundText}>
//         More questions coming your way in {nextRoundTime} — stay sharp!
//       </Text>
//       <View style={styles.customButton}>
//         <CustomButton
//           textStyle={styles.titleStyle}
//           style={styles.buttonStyle}
//           text={true}
//           title="Can't Wait!"
//           Color="#F5179C"
//           onPress={() => handleOpen}
//         />
//       </View>
//       {openActionSheet && (
//         <TriviaResponse
//           visible={true}
//           TitleStyle={styles.TitleStyle}
//           modalDesc="You crushed this round! Your trivia skills are on fire"
//           modalDesc2={`More questions coming your way in ${nextRoundTime} — stay sharp!`}
//           modalTitle="Trivia Master in the House!"
//           Button={true}
//         />
//       )}
//     </View>
//   );
// };

// export default ScorePredictorCom;
import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import CustomAvatar from "../ScoreAvatar/component";
import CustomButton from "../Buttons/CustomButton/Button";
import TriviaResponse from "../ActionSheet/TrivaResponse/component";

type TriviaCardProps = {
  score?: number;
  totalQuestions?: number;
  nextRoundTime?: string;
  onNextRound?: () => void;
};

const ScorePredictorCom: React.FC<TriviaCardProps> = ({
  score,
  totalQuestions,
  nextRoundTime,
  onNextRound,
}) => {
  const [openActionSheet, setopenActionSheet] = useState(false);

  const handleOpen = () => {
    setopenActionSheet(true);
  };

  const handleClose = () => {
    setopenActionSheet(false);
  };

  let totalScore = 5;
  let myscore = 3;

  return (
    <View style={styles.card}>
      <Text style={styles.header}>Trivia Master in the House!</Text>
      <View style={styles.TextContainer}>
        <Text style={styles.description}>
          You crushed this round! Your trivia skills are on fire
        </Text>
      </View>

      <View style={styles.scoreContainer}>
        <CustomAvatar totalScore={totalScore} myscore={myscore} />
      </View>
      <Text style={styles.nextRoundText}>
        More questions coming your way in {nextRoundTime} — stay sharp!
      </Text>
      <View style={styles.customButton}>
        <CustomButton
          textStyle={styles.titleStyle}
          style={styles.buttonStyle}
          text={true}
          title="Can't Wait!"
          Color="#F5179C"
          onPress={handleOpen} // ✅ Corrected
        />
      </View>
      {openActionSheet && (
        <TriviaResponse
          visible={true}
          TitleStyle={styles.TitleStyle}
          modalDesc="You crushed this round! Your trivia skills are on fire"
          modalDesc2={`More questions coming your way in ${nextRoundTime} — stay sharp!`}
          modalTitle="Trivia Master in the House!"
          Button={true}
          onButtonPress={handleClose}
        />
      )}
    </View>
  );
};

export default ScorePredictorCom;
