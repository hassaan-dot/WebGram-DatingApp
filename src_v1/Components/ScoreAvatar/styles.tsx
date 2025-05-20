import { StyleSheet } from "react-native";
import helpers from "../../utils/helpers";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#fff",
    width: helpers.normalize(135),
    height: helpers.normalize(135),
    borderRadius: helpers.normalize(135) / 2,
    borderWidth: 9,
    borderColor: "#F3189C",
  },
  yougot:{
    fontSize:12,
    top:helpers.normalize(-5)
  },
  Questions:{
    bottom:helpers.normalize(-5),
    fontSize:12,
  },
  image: {
    borderRadius: 50,
    resizeMode: "cover",
  },
  myscore: {
    color: "#EF1690",
    // fontSize:18
  },
  initialsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  initialsText: {
    color: "black",
    fontWeight: "bold",
    fontSize:37
  },
});
