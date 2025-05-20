import {StyleSheet} from 'react-native';
import helpers from '../../../utils/helpers';
import { PoppinsSemiBold, RobotoRegular } from '../../../Resources/fonts';

const styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    
    backgroundColor: '#FFEAF7', 
    borderRadius: helpers.normalize(10),
    padding: helpers.normalize(15),
    flexDirection: 'column',
    marginTop: helpers.normalize(10),

  },
  closeButtonView: {
    alignSelf: 'flex-end',
    top: helpers.normalize(-25),
  },
  closeButton: {
    position: 'absolute',
  },
  closeText: {
    fontSize: helpers.normalize(16),
    color: 'white',
  },
  iconContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconText: {
    color: '#F51796',
    fontWeight: 'bold',
    fontSize: helpers.normalize(20),
  },
  title: {
    fontSize: helpers.normalize(16),
    fontWeight: 'bold',
    color: '#F51796',
  },
  description: {
    fontSize: helpers.normalize(12),
    fontFamily:RobotoRegular,
    color: '#181F32',
    marginTop: helpers.normalize(10),
    marginBottom: helpers.normalize(20),
    lineHeight: helpers.normalize(20),
  },
  uploadButton: {
    backgroundColor: '#F51796',
    paddingVertical: helpers.normalize(12),
    paddingHorizontal: helpers.normalize(20),
    borderRadius: helpers.normalize(10),
    alignItems: 'center',
    width: '100%',
  },
  uploadButtonText: {
    color: '#FFFFFF',
    fontSize: helpers.normalize(13),
    fontFamily:PoppinsSemiBold,
  },
});
export default styles;
