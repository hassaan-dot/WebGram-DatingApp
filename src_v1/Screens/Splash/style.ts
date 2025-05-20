import {StyleSheet} from 'react-native';
import helpers from '../../utils/helpers';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFEEF4',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: helpers.wp(50),
    height: helpers.hp(20),
  },  
});
