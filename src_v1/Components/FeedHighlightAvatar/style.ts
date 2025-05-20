import {StyleSheet} from 'react-native';
import helpers from '../../utils/helpers';
import { RobotoRegular } from '../../Resources/fonts';
export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: helpers.normalize(5),
  },
  circle: {
    width: helpers.normalize(64),
    height: helpers.normalize(64),
    borderRadius: helpers.normalize(80),
    backgroundColor: '#FFEAF8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileBorder: {
    borderWidth: 2,
    borderColor: '#F5169C',
  },
  image: {
    // borderRadius: helpers.normalize(80),
  },
  iconTintColor:{
    tintColor:'#F714AF'
  },
  label: {
    marginTop: helpers.normalize(8),
    fontSize: helpers.normalize(10),
    fontFamily: RobotoRegular,
    color: '#4E5D78',
    textAlign: 'center',
  },
});
