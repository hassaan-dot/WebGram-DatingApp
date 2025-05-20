import { StyleSheet } from "react-native";
import helpers from "../../utils/helpers";
import { PoppinsMedium } from "../../Resources/fonts";

export const styles = StyleSheet.create({
    container: {
    flex: 1,
    // backgroundColor: "#FDD1EB",
    //   padding: 20,
    paddingHorizontal: 5,
    // justifyContent: "space-between"
    //   paddingHorizontal:helpers.normalize(30)
  },
  gradientColor:{flex:1},
  title: {
    fontSize: 16,
    color: "#8D8491",
    textAlign: "center",
    fontFamily:PoppinsMedium,
    fontWeight: "500",
  },
  HeaderContainer:{ flex: 0.2},
  topDescription: {
    // flex:0.2,
    // marginTop: helpers.normalize(13),
  },
  subtitle: {
    fontSize: 16,  
      // fontFamily:PoppinsSemiBold,
    color: "#8D8491",
    textAlign: "center",
    fontFamily:PoppinsMedium,
    //   marginBottom: 20,
    fontWeight: "500",
  },
  Description: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 15,
  },
  QuestionContainer: {
    marginTop: helpers.normalize(35),
    // flex:0.7
  },
  DescriptionText: {
    color: "#232323",
    fontSize: 16,
    fontWeight: 500,
    // fontFamily:PoppinsSemiBold
  },
  questionIndicator: {
    paddingHorizontal: 10,
  },
  textStyleIndicator: {
    fontSize: 16,
    fontFamily:PoppinsMedium,
    color: "#707580",
    marginLeft: helpers.normalize(4),
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 6,
  },
  question: {
    fontSize: 18,
    color: "#212529",
    marginBottom: 16,
    textAlign: "center",
    fontWeight: "500",
  },
  buttonStyle: {
    alignSelf: "center",
    height: 45,
  },
  titleStyle: {
    paddingHorizontal: helpers.normalize(30),
    paddingVertical: helpers.normalize(10),
  },
  ButtonContainer: {
bottom:helpers.normalize(10)
  },
  option: {
    backgroundColor: "#ffe3ec",
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#f8d7da",
  },
  optionText: {
    fontSize: 16,
    color: "#495057",
  },
  BottomContainer:{
    marginTop:'auto',
    backgroundColor:'red',
    justifyContent:'flex-end'
  },
});
