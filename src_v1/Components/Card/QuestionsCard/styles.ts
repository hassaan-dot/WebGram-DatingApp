import { StyleSheet } from "react-native";
import helpers from "../../../utils/helpers";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: "#fff0f6",
      padding:10,
    },
    title: {
      fontSize: 24,
      color: "#d63384",
      textAlign: "center",
      marginBottom: 8,
      fontWeight: "700",
   
    },
    QuestionCard:{
// marginTop:helpers.normalize(10)
paddingHorizontal:helpers.normalize(3)
    },
    subtitle: {
      fontSize: 16,
      color: "#6c757d",
      textAlign: "center",
      marginBottom: 20,
    },
    card: {
      boxShadow: '0px 3px 4px 3px rgba(255, 100, 180, 0.1)',
      backgroundColor: "#FFFCFF",
      borderRadius: 18,
      padding: 14,
      paddingTop:18,
      paddingBottom:5,
      paddingHorizontal:13,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 6,
    },
    Imagecard: {
        
        backgroundColor: "#ffffff",
        borderRadius: 20,
        // padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 6,
      },
    question: {
      fontSize: 18,
      color: "white",
    //   marginBottom: 16,
      textAlign: "center",
      fontWeight: "bold",
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
    backgroundImage: {
        width: "100%", 
        height: 130, // Adjust height as needed
        borderRadius:20,
        paddingHorizontal:50,
        padding:50,
        justifyContent:'center'
      },


      checkboxContainer: {
        flexDirection: "row",
        // justifyContent:'space-between',
        // marginBottom: helpers.normalize(8),
        // backgroundColor:'pink',
        borderRadius:20
      },
      checkboxLabel: {
        fontSize: helpers.normalize(12),
        color: "#000",
        fontWeight: "300",
        // paddingLeft: helpers.normalize(8),
      },
      container2:{
        marginTop:helpers.normalize(30),
        paddingHorizontal:helpers.normalize(3)
 
      }
  });