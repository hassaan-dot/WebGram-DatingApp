import {StyleSheet} from 'react-native';
import helpers from '../../utils/helpers';
import { MontserratMedium, PoppinsSemiBold } from '../../Resources/fonts';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEEAF5',
    paddingTop: helpers.normalize(10),
    borderBottomLeftRadius: helpers.normalize(20),
    borderBottomRightRadius: helpers.normalize(20),
    shadowColor: '#EBEBEB',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    overflow: 'hidden'

  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: helpers.normalize(15),
  },
  iconButton: {
    width: helpers.normalize(60),
    height: helpers.normalize(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: helpers.normalize(50),
    backgroundColor: '#FFD7EF',
  },
  icon: {
    width: helpers.normalize(18),
    height: helpers.normalize(18),
    tintColor: '#FF629F',
  },
  groupIcon: {
    width: helpers.normalize(25),
    height: helpers.normalize(25),
    tintColor: '#FF629F',
  },
  centerContent: {
    alignItems: 'center',
  },
  heartIcon: {
    width: helpers.normalize(30),
    height: helpers.normalize(30),
    marginBottom: helpers.normalize(5),
  },
  clockIcon: {
    width: helpers.normalize(15),
    height: helpers.normalize(15),
    marginRight: helpers.normalize(3),
  },
  eventName: {
    fontSize: helpers.normalize(16),
    fontFamily: PoppinsSemiBold,
    color: '#3C3C3C',
  },
  subtitle: {
    fontSize: helpers.normalize(10),
    fontFamily:MontserratMedium,
    color: '#3C3C3C',
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: helpers.normalize(5),
  },
  highlight: {
    fontSize: helpers.normalize(12),
    fontFamily:MontserratMedium,
    color: '#FF629F',
  },
  circle: {
    position: 'absolute',
    width: helpers.normalize(60), // Adjust circle size
    height: helpers.normalize(60),
    borderRadius: helpers.normalize(60), // Makes it a perfect circle
    backgroundColor: '#FFD7EF', 

  },
  bottomCircle: {
    position: 'absolute',
    width: helpers.normalize(80), // Adjust circle size
    height: helpers.normalize(80),
    borderRadius: helpers.normalize(60), // Makes it a perfect circle
    backgroundColor: '#FFD7EF', 

  },

  leftCircle: {
    bottom: helpers.normalize(-10), // Adjust position
    left: helpers.normalize(-26),
  },

  rightCircle: {
    bottom: helpers.normalize(-10),
    right: helpers.normalize(-26),
  },
  bottomLeftCircle:{
    bottom: helpers.normalize(-67), // Adjust position
    left: helpers.normalize(15),
  },
  bottomRightCircle:{
    bottom: helpers.normalize(-67), // Adjust position
    right: helpers.normalize(15),
  }
});
