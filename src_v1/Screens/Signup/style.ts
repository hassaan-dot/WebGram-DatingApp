import { PoppinsMedium, PoppinsRegular } from '../../Resources/fonts';
import helpers from '../../utils/helpers';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: helpers.normalize(15),
    backgroundColor: '#FFFBFF',
  },
  
  login_desc: {
    flex: 0.2,
    justifyContent: 'flex-start',
  },

  login_desc_container: {
    marginTop: helpers.normalize(60),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  leftIcon:{
    width: helpers.normalize(30),
    height: helpers.normalize(30),
    marginTop: helpers.normalize(-5),
  },
  headerTitle: {
    color: '#181F2',
     fontWeight: 'bold',
    fontSize: helpers.normalize(25),
    fontFamily:PoppinsMedium,
    marginLeft: helpers.normalize(4),
  },
  loginBox: {
    padding: helpers.normalize(20),
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  title: {
    fontSize: helpers.normalize(24),
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: helpers.normalize(12),
    color: '#666',
    fontFamily:PoppinsRegular,
    marginVertical: helpers.normalize(10),
  },
  loginSubtitleCont: {
    paddingHorizontal: helpers.normalize(5),
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: helpers.normalize(10),
    marginVertical: helpers.normalize(10),
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    borderRadius: 8,
    elevation: 5,
  },
  input: {
    // fontSize: 14,
    // color: '#333',
  },
  signUpButton: {
    backgroundColor: '#F5169C',
    height: helpers.normalize(45),
    borderRadius: helpers.normalize(8),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: helpers.normalize(25),
    marginBottom: helpers.normalize(10),
  },
  signUpButtonText: {
    color: 'white',
    fontSize: helpers.normalize(14),
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: helpers.normalize(10),
  },
  rightLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
    marginRight: helpers.normalize(40),
  },
  leftLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
    marginLeft: helpers.normalize(40),
  },
  dividerText: {
    marginHorizontal: helpers.normalize(10),
    fontFamily:PoppinsMedium,
    color: '#999',
  },
  socialButton: {
    backgroundColor: 'white',
    borderRadius: helpers.normalize(8),
    paddingVertical: helpers.normalize(8),
    marginVertical: helpers.normalize(5),
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    // Elevation for Android
    elevation: 1,
  },
  socialIcon: {
    width: helpers.normalize(20),
    height: helpers.normalize(20),
  },
  socialButtonText: {
    marginLeft: helpers.normalize(10),
    fontSize: helpers.normalize(13),
    fontFamily:PoppinsMedium,
    color: '#787878',
  },
  alreadyHaveAccountContainer: {
    flex: 0.1,
    justifyContent: 'flex-end',
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  alreadyHaveAccountText: {textAlign: 'center',color:'#787878',fontFamily:PoppinsRegular},
  signupText: {color: '#FF007A', fontFamily:PoppinsMedium},
});
export default styles;
