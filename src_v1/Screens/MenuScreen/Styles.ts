import { StyleSheet } from "react-native";
import helpers from "../../utils/helpers";
import { PoppinsMedium, PoppinsRegular } from "../../Resources/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBFF",
  },
  ImageStyleIcon: {
    width: helpers.normalize(35),
    height: helpers.normalize(30),
    tintColor:'#ff3b30'
  },
  containerButton: {
    marginBottom: helpers.normalize(5),
  },
  flatListStyle: {
    backgroundColor: "#FFFbFF",
    padding: helpers.normalize(20),
    marginTop: helpers.normalize(0),
  },
  headerComponentStyle: {
    flexDirection: "row",
    // flex: 1,
    paddingBottom:helpers.normalize(5), 
    justifyContent: "flex-end",
  },
  logoutButtonStyle: { flexDirection: "row", alignItems: "center" },
  logoutInnerView: { paddingHorizontal: helpers.normalize(20) },
  innerContainer: { flex: 0.9, flexDirection: "column" },
  logoutView: {
    flex: 0.1,
    justifyContent: "flex-end",
    marginBottom: helpers.normalize(10),
  },
  option: {
    flexDirection: "row",
    paddingVertical: helpers.normalize(11),
    paddingHorizontal: helpers.normalize(8),
    borderRadius: helpers.normalize(8),
    backgroundColor: "#FFFBFF",
    // alignItems:'center'
  },
  iconContainer: {
    marginRight: helpers.normalize(15),
    top: helpers.normalize(-5),
  },
  textContainer: {
    flex: 1,
  },
  imageStyle: {
    height: helpers.normalize(45),
    width: helpers.normalize(45),
    // tintColor: "black",
  },
  title: {
    fontSize: helpers.normalize(17),
    fontFamily: PoppinsRegular,
    color: "#333",
    // paddingVertical: helpers.normalize(5),
    fontWeight: "500",
  },
  description: {
    fontSize: helpers.normalize(11),
    fontFamily: PoppinsMedium,
    color: "#333",
    fontWeight:'100'
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: helpers.normalize(20),
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: helpers.normalize(16),
  },
  logoutText: {
    marginLeft: helpers.normalize(3),
    fontSize: helpers.normalize(16),
    fontWeight: "500",
    color: "#ff3b30",
  },
});
