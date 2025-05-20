import {StyleSheet} from 'react-native';
import helpers from '../../utils/helpers';
import { MontserratRegular, PoppinsSemiBold } from '../../Resources/fonts';

const styles = StyleSheet.create({
  Container: {
    padding: helpers.normalize(20),
    paddingHorizontal: helpers.normalize(30),
    backgroundColor: '#FFFBFF',
    flex: 1,
  },
  card: {
    padding: helpers.normalize(20),
    paddingHorizontal: helpers.normalize(25),
    justifyContent: 'flex-start',
    borderRadius: helpers.normalize(30),
    backgroundColor: '#F5F5F5',
    shadowColor: '#000000',
    elevation: 5,
  },
  TextSection: {
    borderRadius: helpers.normalize(20),
    padding: helpers.normalize(15),
    paddingHorizontal: helpers.normalize(20),
    backgroundColor: 'white',
  },
  TextStyle: {
    lineHeight: helpers.normalize(22),
    fontSize: helpers.normalize(12),
    fontFamily:MontserratRegular,
  },
  titleStyle: {
    fontSize: helpers.normalize(16),
    color: '#F51796',
    fontFamily:PoppinsSemiBold,
    // padding:5
  },
});
export default styles;
