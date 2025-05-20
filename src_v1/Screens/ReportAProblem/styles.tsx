import {StyleSheet} from 'react-native';
import helpers from '../../utils/helpers';
import { MontserratBold, PoppinsMedium, PoppinsRegular } from '../../Resources/fonts';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: helpers.normalize(20),
  },
  TitleStyle:{
    fontSize:helpers.normalize(13),
    fontWeight:'bold',
    color:'black',
    paddingBottom:helpers.normalize(10)
  },
  InnerContainer: {flex: 0.8},
  headerText: {
    fontSize: helpers.normalize(22),
    fontFamily: MontserratBold,
    color: '#F5169C',
    // marginRight:20,
    textAlign:'left',
    // flexDirection:'column',
    marginVertical: helpers.normalize(30),
    marginBottom:helpers.normalize(45)
  },
  inputContainer: {
    marginTop: helpers.normalize(30),
  },
  modalImageStyle: {
    marginTop: helpers.normalize(20),
    width: helpers.normalize(70),
    height: helpers.normalize(70),
  },
  modalDescTextColor: {
    color: '#979797',
  },
  label: {
    fontSize: helpers.normalize(16),
    fontWeight: '600',
    color: '#333',
    marginBottom: helpers.normalize(8),
  },
  inputHeight: {
    height: helpers.hp(30),
  },
  inputFieldContainer:{
    height: helpers.hp(13),
    borderRadius: helpers.normalize(5),
  },
  sendButton: {
    backgroundColor: '#F5169C',
    borderRadius: helpers.normalize(8),
    paddingVertical: helpers.normalize(7),
    marginVertical: helpers.normalize(5),
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    // Elevation for Android
    elevation: 2,
  },
  sendButtonText: {
    fontFamily: PoppinsMedium,
    marginLeft: helpers.normalize(10),
    fontSize: helpers.normalize(13),
    color: 'white',
  },
  sendGiftView: {flex: 0.3, justifyContent: 'flex-end'},
  giftInput: {
    borderRadius: helpers.normalize(10),
    fontSize: helpers.normalize(16),
  },
  textArea: {
    height: helpers.normalize(100),
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#F51796',
    borderRadius: helpers.normalize(10),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: helpers.normalize(15),
  },
  buttonText: {
    fontSize: helpers.normalize(18),
    fontWeight: '600',
    color: '#fff',
  },
  dropDownTitle:{
    fontSize: helpers.normalize(16),
    marginBottom: helpers.normalize(8),
    fontWeight: 'bold',
  },
  tellMoreDescText: {
    fontSize: helpers.normalize(12),
    fontFamily: PoppinsRegular,
    color: '#979797',
    lineHeight:helpers.normalize(15),
    marginVertical: helpers.normalize(10),
  },
});
export default styles;
