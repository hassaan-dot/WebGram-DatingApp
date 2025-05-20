import {StyleSheet} from 'react-native';
import helpers from '../../utils/helpers';
import { MontserratMedium, OpenSansSemiCondensedMedium, StyleScriptRegular } from '../../Resources/fonts';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor:'#FFFBFF'
  },
  imageView: {
    alignItems: 'center',
  },
  imageWrapper: {
    position: 'relative',
    width: helpers.wp(100),
    height: helpers.hp(70),
  },
  imageStyle: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  rowFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textOverlay: {
    position: 'absolute',
    zIndex: 2,
    alignItems: 'center',
    bottom: helpers.normalize(20),
  },
  nameText: {
    fontSize: helpers.normalize(48),
    marginBottom: helpers.normalize(-30),
    color: '#fff',
    fontFamily: StyleScriptRegular,
  },
  dateText: {
    fontSize: helpers.normalize(18),
    fontFamily:OpenSansSemiCondensedMedium,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    paddingVertical: helpers.normalize(6),
    paddingHorizontal: helpers.wp(3),
    borderTopColor: '#fff',
    borderBottomColor: '#fff',
    color: '#fff',
  },
  
  monthAndYear:{
    justifyContent:'flex-end',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    paddingHorizontal: helpers.wp(4),
    borderTopColor: '#fff',
    borderBottomColor: '#fff',

  },
  monthText: {
    textAlign: 'right',
    fontFamily:OpenSansSemiCondensedMedium,
    fontSize: helpers.normalize(16),
    color: '#fff',
  },
  yearText: {
    textAlign: 'right',
    fontSize: helpers.normalize(12),
    fontFamily:OpenSansSemiCondensedMedium,
    color: '#fff',
  },
  dayText: {
    margin: helpers.normalize(5),
    fontSize: helpers.normalize(52),
    fontFamily: MontserratMedium,
    color: '#D91589',
  },
  TextView: {
    // flex: 0.4,
    // backgroundColor:'red',
    // padding:10
    backgroundColor:'#FFFBFF'
  },
  iconStyle:{
    width: helpers.normalize(85),
    height: helpers.normalize(70),
  }
});
