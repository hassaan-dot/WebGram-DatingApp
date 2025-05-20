import { Platform, StyleSheet } from 'react-native';
import helpers from '../../utils/helpers';
import { RobotoMedium } from '../../Resources/fonts';

const styles = StyleSheet.create({
  BottomTab: {
    backgroundColor: '#FFEAF8',
    height: Platform.OS == 'android' ? helpers.normalize(58) : helpers.normalize(65),
    borderTopRightRadius: helpers.normalize(25),
    borderTopLeftRadius: helpers.normalize(25),
    shadowColor: '#FFEAF8',
    shadowOpacity: 0.4,
    elevation: 5,
  },
  BottomTabText: {
    fontSize:helpers.normalize (10),
    fontFamily:RobotoMedium,
    marginBottom: helpers.normalize(8),
    color: '#4E5D78',
  },
  image:{
    width: helpers.normalize(40),
    height: helpers.normalize(35),
    marginTop: helpers.normalize(10),
    marginLeft: 2,
  }
});
export default styles;
