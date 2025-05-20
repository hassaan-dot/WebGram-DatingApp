import { StyleSheet } from "react-native";
import helpers from "../../../utils/helpers";
import { PoppinsMedium, PoppinsRegular, PoppinsSemiBold } from "../../../Resources/fonts";

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  titleStyle:{fontSize:15},
  buttonStyle:{height:helpers.normalize(37)},
  container: {
    backgroundColor: "#FFFFFF",
    padding: helpers.normalize(18),
    paddingTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  modalImageStyle: {
    width: helpers.normalize(150),
    height: helpers.normalize(150),
  },
  dragIcon: {
    width: helpers.normalize(100),
    height: helpers.normalize(4),
    borderRadius: helpers.normalize(2.5),
    backgroundColor: "#C4C4C4",
  },
  modalTitle: {
    fontSize: helpers.normalize(19),
    fontFamily: PoppinsSemiBold,
    color: "#000",
    textAlign: "center",
    marginVertical: helpers.normalize(16),
  },
  modalBody: {
    fontSize: helpers.normalize(14),
    fontFamily: PoppinsRegular,
    color: "#444444",
    fontWeight:'500',
    textAlign: "center",
    marginBottom: helpers.normalize(20),
  },
  buttonPrimary: {
    width: "90%",
    marginTop: helpers.normalize(10),
    paddingVertical: helpers.normalize(12),
    paddingHorizontal: helpers.normalize(30),
    backgroundColor: "#F5169C",
    borderRadius: helpers.normalize(8),
  },
  buttonPrimaryText: {
    fontSize: helpers.normalize(13),
    fontFamily: PoppinsMedium,
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default styles;
