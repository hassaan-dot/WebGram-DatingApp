import {StyleSheet} from 'react-native';
import helpers from '../../../utils/helpers';
import { PoppinsBold, PoppinsRegular } from '../../../Resources/fonts';

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: helpers.normalize(10),
    elevation: 3,
    padding: helpers.normalize(10),
    shadowColor: '#000',  // The shadow color
    shadowOffset: { width: 0, height: 2 },  // The shadow offset (horizontal, vertical)
    shadowOpacity: 0.3,  // The opacity of the shadow
    shadowRadius: 4,  // The blur radius of the shadow
    },
  imageView: {
    justifyContent: 'center',
  },
  cardImage: {
    width: helpers.normalize(80),
    height: helpers.normalize(80),
    borderRadius: helpers.normalize(8),
  },
  dot: {
    position: 'absolute',
    top: helpers.normalize(26),
    width: helpers.normalize(16),
    height: helpers.normalize(16),
    borderRadius: helpers.normalize(20),
    backgroundColor: '#F624A1',
    borderWidth: 2,
    borderColor: '#fff',
  },
  Bar: {
    marginRight: helpers.normalize(5),
    justifyContent: 'center',
    borderRadius: helpers.normalize(3),
    backgroundColor: '#F590CD',
  },
  cardContent: {
    flex: 1,
    marginLeft: helpers.normalize(10),
    flexDirection: 'column',
  },
  cardTitle: {
    fontSize: helpers.normalize(14),
    fontFamily:PoppinsRegular,
    color: '#F624A1',
  },
  cardDescription: {
    fontSize: helpers.normalize(12),
    fontFamily:PoppinsRegular,
    color: '#4E5D78',
    marginTop: helpers.normalize(5),
  },
  progressContainer: {
    // marginTop: helpers.normalize(10),
  },
  goalText: {
    marginVertical: helpers.normalize(5),
    fontSize: helpers.normalize(14),
    fontFamily:PoppinsRegular,
    color: '#4E5D78',
  },
  boldGoal: {
    fontFamily:PoppinsBold,
  },
  contributeButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#F5169C',
    padding: helpers.normalize(13),
    borderRadius: helpers.normalize(6),
    marginTop: helpers.normalize(10),
  },
  buttonText: {
    color: '#fff',
    fontSize: helpers.normalize(12),
    fontFamily:PoppinsRegular,
  },
});
