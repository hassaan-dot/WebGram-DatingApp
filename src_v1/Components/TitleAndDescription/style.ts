import {StyleSheet} from 'react-native';
import helpers from '../../utils/helpers';
import { PoppinsBold, PoppinsMedium } from '../../Resources/fonts';
export const styles = StyleSheet.create({
  descContainer: {

  },
  title: {
    fontSize: helpers.normalize(26),
    fontFamily:PoppinsBold,
  },
  subtitleCont: {
    paddingHorizontal: helpers.normalize(5),
  },
  subtitle: {
    fontSize: helpers.normalize(12),
    fontFamily:PoppinsMedium,
    color: '#797979',
  },
});
