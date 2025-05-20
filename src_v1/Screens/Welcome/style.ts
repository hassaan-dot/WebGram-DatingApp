import {StyleSheet} from 'react-native';
import helpers from '../../utils/helpers';
import { MontserratMedium, MontserratRegular, PoppinsRegular, RochesterRegular } from '../../Resources/fonts';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backgroundImage: {
    flex: 1,
  },
  imageOverLay:{
    ...StyleSheet.absoluteFillObject, 
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop:helpers.normalize(40),
  },
  welcomeText: {
    marginTop: helpers.normalize(60),
    fontSize: helpers.normalize(16),
    fontFamily: MontserratMedium,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  coupleText: {
    fontFamily:  RochesterRegular,
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: helpers.normalize(42),
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20, 
  },
  eventText: {
    fontSize: helpers.normalize(18),
    fontFamily:  MontserratRegular,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  dateText: {
    fontSize: helpers.normalize(20),
    fontFamily: RochesterRegular,
    color: '#FFFFFF',
    marginBottom: helpers.normalize(20),
  },
  buttonTextStyle: {
    fontSize: helpers.normalize(13),
    fontFamily: PoppinsRegular,
    color: '#FFFFFF',
  },
  buttonContainerStyle: {
    backgroundColor: '#F5169C',
    borderRadius: helpers.normalize(8),
    margin: helpers.normalize(10),
    width: helpers.wp(90),
    height: helpers.normalize(50),
    justifyContent: 'center',
  },
});
