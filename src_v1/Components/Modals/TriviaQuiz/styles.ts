import { StyleSheet } from "react-native";
import helpers from "../../../utils/helpers";
import {
  MontserratBold,
  PoppinsBold,
  PoppinsSemiBold,
  RobotoRegular,
  TangerineBold,
} from "../../../Resources/fonts";

const styles = StyleSheet.create({
  modalContainer: {
    width: "100%",
    borderWidth: 1.5,
    borderColor: "#F5179C",
    backgroundColor: "#FFEAF7",
    borderRadius: helpers.normalize(10),
    padding: helpers.normalize(15),
    flexDirection: "column",
    marginTop: helpers.normalize(10),
  },
  QuestionCARDIMAGE: { marginVertical: helpers.normalize(15) },
  closeButtonView: {
    alignSelf: "flex-end",
    zIndex: 99999999,
    top: helpers.normalize(-8),
  },
  closeButton: {
    position: "absolute",
  },
  closeText: {
    fontSize: helpers.normalize(16),
    color: "white",
  },
  iconContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  ModalChild: { flex: 1 },
  iconText: {
    color: "#F51796",
    fontWeight: "bold",
    fontSize: helpers.normalize(20),
  },
  title: {
    fontSize: helpers.normalize(16),
    fontWeight: "bold",
    color: "#F51598",
    marginLeft: helpers.normalize(5),
    fontFamily: PoppinsSemiBold,
  },
  description: {
    fontSize: helpers.normalize(12),
    fontFamily: RobotoRegular,
    color: "#181F32",
    marginTop: helpers.normalize(10),
    marginBottom: helpers.normalize(20),
    lineHeight: helpers.normalize(20),
  },
  uploadButton: {
    backgroundColor: "#F51796",
    paddingVertical: helpers.normalize(12),
    paddingHorizontal: helpers.normalize(20),
    borderRadius: helpers.normalize(10),
    alignItems: "center",
    width: "100%",
  },
  uploadButtonText: {
    color: "#FFFFFF",
    fontSize: helpers.normalize(13),
    // fontFamily:PoppinsSemiBold,
    fontWeight: "400",
  },
  imageContainer: {
    width: helpers.normalize(33),
    height: helpers.normalize(33),
    right: helpers.normalize(18),
    top: helpers.normalize(2),
  },
  imagetitleStyle: {
    width: helpers.normalize(24),
    height: helpers.normalize(24),
    tintColor: "#F51796",
  },
});
export default styles;
