import { StyleSheet } from "react-native";
import helpers from "../../utils/helpers";
import { PoppinsSemiBold } from "../../Resources/fonts";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFBFF",
  },
  imageIcon: {
    width: helpers.normalize(20),
    height: helpers.normalize(20),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: helpers.normalize(16),
  },
  headerTitle: {
    fontSize: helpers.normalize(18),
    fontWeight: "bold",
    marginLeft: helpers.normalize(8),
  },
  imageStyle: {
    width: helpers.normalize(30),
    height: helpers.normalize(30),
    marginBottom: helpers.normalize(6),
    marginLeft: 0,
    tintColor: "#333",
  },
  section: {
    marginBottom: helpers.normalize(24),
  },
  sectionTitle: {
    fontSize: helpers.normalize(16),
    fontFamily: PoppinsSemiBold,
    marginLeft: helpers.normalize(0),
    marginBottom: helpers.normalize(8),
  },
  sectionDescription: {
    fontSize: helpers.normalize(14),
    color: "#6B6B6B",
    marginBottom: helpers.normalize(16),
  },

  button: {
    backgroundColor: "#F5619C",
    padding: helpers.normalize(14),
    borderRadius: helpers.normalize(8),
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: helpers.normalize(16),
    fontWeight: "bold",
  },
  faqHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center',

    borderBottomColor: "#E0E0E0",
  },
  ViewfaqHeader: {
    paddingVertical: helpers.normalize(12),
  },
  faqText: {
    fontSize: helpers.normalize(13),
    color: "#000",
    fontWeight: "500",
    // paddingRight:2
  },
  faqContent: {
    fontSize: helpers.normalize(12),
    color: "#6B6B6B",
    paddingVertical: helpers.normalize(8),
    paddingLeft: helpers.normalize(5),
  },
  contactSection: {
    marginTop: helpers.normalize(16),
    alignItems: "center",
  },
  contactText: {
    fontSize: helpers.normalize(16),
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: helpers.normalize(8),
  },
  contactDescription: {
    fontSize: helpers.normalize(14),
    color: "#6B6B6B",
    textAlign: "center",
    marginBottom: helpers.normalize(16),
  },
});

export default styles;
