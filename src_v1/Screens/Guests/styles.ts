import {StyleSheet} from 'react-native';
import helpers from '../../utils/helpers';
const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor: '#FFFFFF'
  },
  flatListContainer:{
    padding: helpers.normalize(10), paddingHorizontal: helpers.normalize(15), marginBottom:helpers.normalize(10)
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
  },
  modalContent: {
    backgroundColor: '#FEEAF7',
    borderColor: '#F5169C',
    borderWidth: helpers.normalize(1.3),
    borderRadius: helpers.normalize(10),
    padding: helpers.normalize(8),
    alignItems: 'center',
    justifyContent: 'center',
    width: helpers.normalize(120),
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    // paddingRight: helpers.normalize(5),
  },
  modalText: {
    fontSize: helpers.normalize(14),
    color: '#F5169C',
    paddingVertical:8,
    marginLeft: helpers.normalize(6),
  },
  reportSignIcon:{
    height: helpers.normalize(20),
    width: helpers.normalize(20),
  },
});
export default styles;
