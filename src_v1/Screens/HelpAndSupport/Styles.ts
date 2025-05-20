import { StyleSheet } from "react-native";
import helpers from "../../utils/helpers";
import { MontserratBold, MontserratRegular, PoppinsSemiBold } from "../../Resources/fonts";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FFFBFF",
    padding: helpers.normalize(15),
  },
  image: {
    width: helpers.normalize(30),
    height: helpers.normalize(30),
    marginBottom: helpers.normalize(10),
    paddingHorizontal: helpers.normalize(5),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: helpers.normalize(16),
  },
  inputHeight: {
    height: helpers.hp(30),
  },
  inputFieldContainer: {
    height: helpers.hp(7),
    borderRadius: helpers.normalize(5),
    shadowColor: '#000',  // The shadow color
    shadowOffset: { width: 0, height: 2 },  // The shadow offset (horizontal, vertical)
    shadowOpacity: 0.3,  // The opacity of the shadow
    shadowRadius: 4,  // The blur radius of the shadow
  },
  headerTitle: {
    fontSize: helpers.normalize(18),
    fontWeight: "bold",
    marginLeft: helpers.normalize(8),
  },
  section: {
    marginBottom: helpers.normalize(24),
  },
  sectionTitle: {
    fontSize: helpers.normalize(16),
    fontFamily:MontserratBold,
    top: helpers.normalize(-4),
  },
  sectionDescription: {
    fontSize: helpers.normalize(11),
    fontFamily: MontserratRegular,
    color: "##CCC",
    top: helpers.normalize(0),
    lineHeight: helpers.normalize(20),
    // paddingHorizontal: helpers.normalize(5),
    marginBottom: helpers.normalize(16),
  },
  input: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: helpers.normalize(8),
    padding: helpers.normalize(12),
    marginBottom: helpers.normalize(16),
    backgroundColor: "#FFF",
  },
  button: {
    backgroundColor: "#F5179C",
    padding: helpers.normalize(1),
    paddingHorizontal: helpers.normalize(25),
    borderRadius: helpers.normalize(8),
    height: helpers.normalize(37),
    alignItems: "center",
  },
  ButtonView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop:helpers.normalize(20)
  },
  buttonText: {
    color: "#FFF",
    fontSize: helpers.normalize(12),
    fontWeight: "bold",
  },
  faqHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: helpers.normalize(12),
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  faqText: {
    paddingVertical: helpers.normalize(12),
    fontSize: helpers.normalize(16),
    fontFamily:MontserratBold,
    color: "#333",
  },
  faqContent: {
    fontSize: helpers.normalize(14),
    color: "#6B6B6B",
    paddingVertical: helpers.normalize(8),
    paddingLeft: helpers.normalize(16),
  },
  contactSection: {
    marginTop: helpers.normalize(16),
    alignItems: "center",
  },
  contactText: {
    fontSize: helpers.normalize(22),
    fontFamily: PoppinsSemiBold,
    top: helpers.normalize(-10),
    marginBottom: helpers.normalize(5),
    color: "#F51796",
  },
  contactDescription: {
    fontSize: helpers.normalize(14),
    color: "#6B6B6B",
    textAlign: "center",
    marginBottom: helpers.normalize(16),
  },
  publishButton: {
    backgroundColor: "#FF006A",
    borderRadius: helpers.normalize(10),
    padding: helpers.normalize(5),
    justifyContent: "center",
    alignItems: "center",
  },
  publishButtonText: {
    color: "#FFF",
    fontSize: helpers.normalize(16),
    fontWeight: "bold",
  },
});
export default styles;
