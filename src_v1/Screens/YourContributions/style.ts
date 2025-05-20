import {StyleSheet} from 'react-native';
import helpers from '../../utils/helpers';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFBFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFBFF',
    justifyContent: 'center',
    // padding: helpers.normalize(20),
paddingRight:0
  // marginHorizontal: helpers.normalize(10),
    // alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: helpers.normalize(20),
  },
  description:{
    fontSize:helpers.normalize(14),
    color:'#666666',
    textAlign:'center',
  } ,

  sectionHeader: {
    fontSize: 18,
    fontWeight:'400',
    color: '#4E5D78',
    marginVertical: 10,
    marginLeft: 10,
  },
});
