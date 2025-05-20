import {StyleSheet} from 'react-native';
import helpers from '../../../utils/helpers';
import { PoppinsMedium, PoppinsRegular } from '../../../Resources/fonts';
export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dim background
  },
  modalContainer: {
    width: helpers.wp(80),
    padding: helpers.normalize(8),
    paddingVertical: helpers.normalize(30),
    backgroundColor: '#FFFFFF',
    borderRadius: helpers.normalize(10),
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: helpers.normalize(14),
    fontFamily: PoppinsMedium,
    color: '#000',
    textAlign: 'center',
    marginVertical: helpers.normalize(15),
  },
  modalBody: {
    fontSize: helpers.normalize(14),
    fontFamily: PoppinsRegular,
    color: '#444444',
    textAlign: 'center',
    marginBottom: helpers.normalize(20),
  },
  linkText: {
    color: '#F5169C',
    textDecorationLine: 'underline', // Underline the text
  },

  buttonPrimary: {
    width: '90%',
    marginTop: helpers.normalize(10),
    paddingVertical: helpers.normalize(10),
    paddingHorizontal: helpers.normalize(30),
    backgroundColor: '#F5169C',
    borderRadius: helpers.normalize(5),
  },
  buttonPrimaryText: {
    fontSize: helpers.normalize(13),
    fontFamily: PoppinsMedium,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  buttonSecondary: {
    width: '90%',
    marginTop: helpers.normalize(10),
    paddingVertical: helpers.normalize(10),
    paddingHorizontal: helpers.normalize(30),
    borderWidth: 1,
    borderColor: '#F5169C',
    borderRadius: helpers.normalize(5),
  },
  buttonSecondaryText: {
    fontSize: helpers.normalize(13),
    fontFamily: PoppinsMedium,
    color: '#F5169C',
    textAlign: 'center',
  },
});
