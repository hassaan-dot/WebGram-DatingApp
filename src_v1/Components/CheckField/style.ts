import { StyleSheet } from "react-native";
import helpers from "../../utils/helpers";

export const styles = StyleSheet.create({
  container: {},
  option: {
    backgroundColor: "#FCE4EC",
    borderRadius: 14,
    padding: 13,
    paddingVertical: 20,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  selectedOptionTrue: {
    backgroundColor: "#D3ECCF",

    borderColor: "#5EA35B",
    borderWidth: 2,
  },
  selectedOptionFalse: {
    backgroundColor: "#FFEBF8",

    borderColor: "#F51796",
    borderWidth: 2,
  },
  optionText: {
    lineHeight: 22,
    fontSize: 16,
    // textAlign:'center',
    textAlignVertical: "top",
    color: "#2D2234",
    fontWeight: "500",
  },
  selectedOptionText: {
    lineHeight: 22,
    color: "#2D2234",
  },
  unSelected: {
    backgroundColor: "#FFEBF8",
    // borderColor: "#F48FB1",
  },
  icon: {
    width: helpers.normalize(20),
    height: helpers.normalize(20),
  },
  tick: {
    color: "green", 
  },
  cross: {
    color: "red",
  },
});
