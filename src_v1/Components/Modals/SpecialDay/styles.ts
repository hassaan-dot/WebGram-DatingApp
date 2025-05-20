import { StyleSheet } from 'react-native';
import helpers from '../../../utils/helpers';
export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dimmed background
  },
  modalContainer: {
    width: '85%',
    padding: helpers.normalize(20),
    backgroundColor: '#FFFFFF',
    borderRadius: helpers.normalize(10),
    alignItems: 'center',
  },
  // closeButton: {
  //   // position: 'absolute',
  //   // top: 2,
  //   // right: 10,
  //   backgroundColor: 'white', // Ensure no background color
  //   // backgroundColor: 'transparent',
  //   borderWidth: 0, // Remove border
  //   elevation: 0,   // Remove shadow
  // },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
  },
  modalTitle: {
    fontSize: helpers.normalize(16),
    fontWeight: '500',
    color: '#F5169C',
    textAlign: 'center',
    marginTop: helpers.normalize(10),
    marginBottom: helpers.normalize(15),
  },
  modalBody: {
    fontSize: helpers.normalize(14),
    color: '#444444',
    textAlign: 'center',
    marginBottom: helpers.normalize(10),
  },
  modalFooter: {
    fontSize: helpers.normalize(14),
    fontWeight: 'bold',
    color: '#444444',
    textAlign: 'center',
  },
  button: {
    marginTop: helpers.normalize(20),
    paddingVertical: helpers.normalize(7),
    paddingHorizontal: helpers.normalize(40),
    backgroundColor: '#F5169C',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: helpers.normalize(14),
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
