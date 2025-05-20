import {StyleSheet} from 'react-native';
import helpers from '../../utils/helpers';
import { PoppinsRegular, PoppinsSemiBold } from '../../Resources/fonts';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFBFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    // padding: helpers.normalize(20),
    // alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: helpers.normalize(20),
  },
  description:{
    fontSize:helpers.normalize(12),
    fontFamily:PoppinsRegular,
    color:'#666666',
    textAlign:'center',
  } ,

  sectionHeader: {
    fontSize: helpers.normalize(14),
    fontFamily: PoppinsSemiBold,
    color: '#4E5D78',
    marginVertical: helpers.normalize(15),
    marginLeft: helpers.normalize(10),
  },
});
