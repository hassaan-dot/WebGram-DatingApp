import { StyleSheet } from 'react-native';
import helpers from '../../utils/helpers';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    width: helpers.normalize(100),
    height: helpers.normalize(100),
    borderRadius: helpers.normalize(60),
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#F1569C',
    shadowOpacity: 0.6,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 10,
    elevation: 5,
    borderWidth: 2,
    borderColor: '#F1569C',
  },
  avatar: {
    // width: helpers.normalize(90),
    // height: helpers.normalize(100),
    borderRadius: helpers.normalize(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: helpers.normalize(90),
    height: helpers.normalize(90),
    borderRadius: helpers.normalize(40),
    tintColor: '#FCEAF7',

  },
  addIcon: {
    position: 'absolute',
    bottom: -1,
    right: -1,
    width: 30,
    height: 30,
    borderRadius: helpers.normalize(15),
    borderColor: '#F1569C',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    backgroundColor:'#FFFBFF'
  },
  addIconImage:{
    width: helpers.normalize(20),
    height: helpers.normalize(20),
  }
});
