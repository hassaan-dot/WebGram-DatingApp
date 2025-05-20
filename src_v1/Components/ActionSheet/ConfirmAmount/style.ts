import {StyleSheet} from 'react-native';
import {PoppinsMedium, PoppinsRegular, PoppinsSemiBold} from '../../../Resources/fonts';
import helpers from '../../../utils/helpers';
const getSheet = () => {
  return StyleSheet.create({
    overlay: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
      backgroundColor: '#FFFFFF',
      padding: helpers.normalize(20),
      paddingTop: helpers.normalize(15),
      borderTopLeftRadius: helpers.normalize(30),
      borderTopRightRadius: helpers.normalize(30),
    },
    dragHandle: {
      alignItems: 'center',
      marginHorizontal: helpers.normalize(130),
      paddingVertical: helpers.normalize(2),
      borderRadius: helpers.normalize(5),
      backgroundColor: '#D3D3D3',
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingVertical: helpers.normalize(20),
    },
    headerText: {
      textAlign: 'center',
      fontFamily: PoppinsSemiBold,
      fontSize: helpers.normalize(19),
    },
    optionRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: helpers.normalize(10),
    },
    optionText: {
      fontSize: helpers.normalize(16),
      fontFamily: PoppinsRegular,
      color: '#33333',
    },
    boldText: {
      fontWeight: 'bold',
    },
    optionAmount: {
      fontSize: helpers.normalize(16),
      fontFamily: PoppinsSemiBold,
      color: '#33333',
    },
    highlightedAmount: {
      color: '#F5169C',
    },
    infoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: helpers.normalize(10),
    },
    icon: {
      width: 35,
      height: 40,
      marginRight: helpers.normalize(10),
    },
    infoText: {
      color: '#333',
      fontFamily: PoppinsRegular,
      fontSize: helpers.normalize(12),
      marginRight: helpers.normalize(20),
    },
    highlightedText: {
      fontSize: helpers.normalize(12),
      fontFamily: PoppinsMedium,
      color: '#635BFF',
    },
    aiAssistContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      backgroundColor: '#F0F0F0',
      marginVertical: helpers.normalize(8),
      padding: helpers.normalize(10),
      borderRadius: helpers.normalize(10),
    },
    aiIconImage: {
      width: helpers.normalize(20),
      height: helpers.normalize(20),
      marginTop: helpers.normalize(-5),
    },
    aiAssistTitle: {
      fontSize: helpers.normalize(10),
      fontFamily:PoppinsRegular,
      color: '#979797',
      lineHeight: helpers.normalize(15),  
    },
    lastButton: {
      marginTop: helpers.normalize(20),
      paddingVertical: helpers.normalize(15),
      backgroundColor: '#F51796',
      borderRadius: helpers.normalize(10),
      alignItems: 'center',
    },
    buttonTextStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: helpers.normalize(15),
      fontFamily:PoppinsSemiBold,
      marginHorizontal: helpers.normalize(10),
    },
    buttonIcon: {
      width: helpers.normalize(35),
      height: helpers.normalize(30),
    },
  });
};

export default {getSheet};


// import { StyleSheet } from 'react-native';
// import helpers from '../../../utils/helpers';

// const getSheet = () => {
//   return StyleSheet.create({
//     overlay: {
//       flex: 1,
//       justifyContent: 'flex-end',
//       backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     },
//     container: {
//       backgroundColor: '#FFFFFF', 
//       padding: helpers.normalize(20),
//       paddingTop: helpers.normalize(15),
//       borderTopLeftRadius: helpers.normalize(30),
//       borderTopRightRadius: helpers.normalize(30),
//     },
//     dragHandle: {
//       alignItems: 'center',
//       marginHorizontal: helpers.normalize(130),
//       paddingVertical: helpers.normalize(2),
//       borderRadius: helpers.normalize(5),
//       backgroundColor: '#D3D3D3',  
//     },
//     option: {
//       paddingVertical: helpers.normalize(15),
//       borderBottomWidth: 1,
//       borderBottomColor: '#D3D3D3', 
//     },
//     optionText: {
//       marginLeft: helpers.normalize(20),
//       color: '#000000',
//       fontSize: 16,
//     },
//     buttonTextStyle: {
//       flexDirection: 'row',
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     optionContent: {
//       flexDirection: 'row',
//       alignItems: 'center',
//     },
//     lastButton: {
//       marginTop: 20,
//       paddingVertical: 15,
//       backgroundColor: '#F51796',  
//       borderRadius: 10,
//       alignItems: 'center',
//     },
//     aiIconImage: {
//       width: 30,
//       height: 30,
//       marginRight: 8,
//     },
//     aiAssistTitle: {
//       fontSize: 13,
//       fontWeight: '500',
//       color: '#979797',
//       marginRight:15,
//       lineHeight: 19,

//     },
//     aiAssistTitleContainer: {
//       flexDirection: 'row',
//       justifyContent:'space-around',
//         backgroundColor:'#F0F0F0',
//       marginVertical: 8,
//       padding:10,
//       borderRadius:10
//     },
//     checkIcon: {
//       marginLeft: 'auto',
//     },
//     buttonText: {
//       color: 'black',
//       fontWeight:'bold',  
//       fontSize: helpers.normalize(15),
//     },
//   });
// };

// export default { getSheet };
