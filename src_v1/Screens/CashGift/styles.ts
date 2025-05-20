import {StyleSheet} from 'react-native';
import helpers from '../../utils/helpers';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBFF',
    padding: helpers.normalize(20),
  },
  inputContainer: {
    marginBottom: helpers.normalize(20),
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

  inputContainerStyle: {
    paddingTop:5  
  },
  sendButton: {
    backgroundColor: '#F5169C',
    borderRadius: helpers.normalize(8),
    paddingVertical:helpers.normalize(7),
    marginVertical: helpers.normalize(5),
   shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10, 
    // Elevation for Android
    elevation: 2,
  },
  sendButtonText: {
    marginLeft: helpers.normalize(10),
    fontSize: helpers.normalize(14),
    color: 'white',
  },
  sendGiftView: {flex: 0.3, justifyContent: 'flex-end'},
  InnerContainer: {flex: 0.9, marginVertical: helpers.normalize(80)},
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
  sectionHeader: {
    fontSize: helpers.normalize(18),
    fontWeight: 'bold',
    color: '#4E5D78',
    marginVertical: helpers.normalize(10),
    marginLeft: helpers.normalize(10),
  },
});
export default styles;
