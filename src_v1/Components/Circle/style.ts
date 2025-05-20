
import { StyleSheet } from 'react-native';
import helpers from '../../utils/helpers';
export const styles = StyleSheet.create({
    circle: {
      width: helpers.normalize(40),
      height: helpers.normalize(40),
      borderRadius: helpers.normalize(40),
      borderWidth: helpers.normalize(2),
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconsStyle:{
        width: helpers.normalize(28),
        height: helpers.normalize(28),
        tintColor:'#959595'
    }
  });