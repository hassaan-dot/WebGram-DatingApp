import { StyleSheet } from "react-native";
import helpers from "../../utils/helpers";
import { PoppinsMedium } from "../../Resources/fonts";

export const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      borderRadius: helpers.normalize(5),
      overflow: "hidden",
      backgroundColor: "#F590CD",
    },
    progress: {
      borderRadius: helpers.normalize(20),
    },
    dot: {
      position: "absolute",
      width: helpers.normalize(12), 
      height: helpers.normalize(12), 
      borderColor: "#FFFFFF",
      borderWidth: helpers.normalize(1),
      borderRadius: helpers.normalize(6), 
      backgroundColor: "#F5169C",
      top: helpers.normalize(-4), 
    },
    textContainer: {
      position: "absolute",
      top: helpers.normalize(8),
      alignItems: "center",
    },
    textStyle:{
      marginTop: helpers.normalize(2), 
      fontSize: helpers.normalize(8),
      textAlign: "center", 
      fontFamily:PoppinsMedium
    }
  });