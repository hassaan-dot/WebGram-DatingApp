import { StyleSheet } from "react-native";
import helpers from "../../utils/helpers";
import { PoppinsMedium, PoppinsRegular } from "../../Resources/fonts";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: helpers.normalize(20),
      paddingVertical: helpers.normalize(50),
      paddingBottom:helpers.normalize(20)
    },
    titleContainer:{
      flex:0.22

    },
    codeBlock:{
      flex:0.6
    },
    title: {
      fontSize: helpers.normalize(24),
      fontWeight: '700',
      marginBottom: helpers.normalize(10),
      textAlign: 'center',
    },
    subtitle: {
      fontSize: helpers.normalize(18),
      color: '#666',
      marginBottom: helpers.normalize(30),
      textAlign: 'center',
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: helpers.normalize(45),
    },
    input: {
      width: helpers.normalize(60),
      height: helpers.normalize(60),
      borderWidth: 1,
      borderRadius: helpers.normalize(10),
      textAlign: 'center',
      fontSize: helpers.normalize(32),
      lineHeight: helpers.normalize(40), // Match or slightly exceed fontSize
      textAlignVertical: 'center', // For Android vertical alignment
      fontFamily:PoppinsMedium
    },
    filledInput: {
      borderColor: '#F5169C',
      backgroundColor: '#FFEAF7',
    },
    emptyInput: {
      borderColor: '#ddd',
      backgroundColor: '#fff',
    },
    confirmButton: {
      backgroundColor: '#F5169C',
      paddingVertical: helpers.normalize(15),
      borderRadius: helpers.normalize(10),
      alignItems: 'center',
      marginBottom: helpers.normalize(20),
    },
    disabledButton: {
      backgroundColor: '#FFEAF7',
    },
    confirmButtonText: {
      color: '#fff',
      fontSize: helpers.normalize(16),
      fontFamily:PoppinsMedium
    },
    timerText: {
      fontSize: helpers.normalize(14),
      textAlign: 'center',
      marginBottom: helpers.normalize(10),
      fontFamily:PoppinsMedium

    },
    resendCode: {
      fontSize: helpers.normalize(14),
      color: '#3771C8',
      textAlign: 'center',
      marginBottom: helpers.normalize(20),
    },
    footer:{
      flex:0.18,
      justifyContent:'flex-end',
    },
   
    flexContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    signupText: {
      fontSize: helpers.normalize(14),
      fontFamily:PoppinsRegular,
      color: '#666',
    },
    signupLink: {
      fontSize: helpers.normalize(14),
      color: '#F5169C',
      fontFamily:PoppinsMedium
    },
    
  });
  export default styles