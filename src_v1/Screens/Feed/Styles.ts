import {StyleSheet} from 'react-native';
import helpers from '../../utils/helpers';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFBFF',
    flex:1
  },
  flatListContainer: {
    flex:1,

  },
  forALL:{
    padding: helpers.normalize(0),
    // marginBottom: helpers.normalize(10),
  },
  forModal:{
    padding: helpers.normalize(0),
    paddingHorizontal: helpers.normalize(15),top:helpers.normalize(5)
  }
});
export default styles;
