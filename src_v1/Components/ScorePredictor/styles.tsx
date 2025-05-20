import { StyleSheet } from "react-native";
import helpers from "../../utils/helpers";

export const styles = StyleSheet.create({
    card: {
    //   backgroundColor: "#FFE4E6",
      padding: 5,
      paddingVertical:helpers.normalize(0),
    //   borderRadius: 16,
      alignItems: "center",
    //   margin: 10,
    //   shadowColor: "#000",
    //   shadowOffset: { width: 0, height: 2 },
    //   shadowOpacity: 0.25,
    //   shadowRadius: 3.84,
    //   elevation: 5,
    },
    header: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#F5179C",
      marginBottom: 10,
    //   textAlign: "center",
    },
    TextContainer:{ marginHorizontal: helpers.normalize(10) },
    description: {
      fontSize: 16,
      color: "#4B5563",
      marginBottom: 20,
      textAlign: "center",
      marginHorizontal: helpers.normalize(5)
    },
    scoreContainer: {
      flexDirection: "row",
      alignItems: "baseline",
      marginVertical: 20,
    },
    score: {
      fontSize: 40,
      fontWeight: "bold",
      color: "#DB2777",
    },
    totalQuestions: {
      fontSize: 18,
      color: "#6B7280",
      marginLeft: 5,
    },
    nextRoundText: {
      fontSize: 16,
      color: "#4B5563",
      marginBottom: 20,
      marginVertical:helpers.normalize(15),
    //   marginHorizontal: helpers.normalize(5),
      textAlign: "center",
    },
customButton:{ width: "100%", marginVertical: 10 },
    titleStyle:{fontSize:15},
    buttonStyle:{height:helpers.normalize(37)},
    button: {
      backgroundColor: "#DB2777",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
    },
    buttonText: {
      color: "#FFFFFF",
      fontSize: 16,
      fontWeight: "bold",
    },
    TitleStyle:{
        color:'#F5179C',
        fontWeight:'bold'

    },
  });