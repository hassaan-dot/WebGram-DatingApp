import {StyleSheet} from 'react-native';
import helpers from '../../utils/helpers';
import { MontserratBold, MontserratRegular, PoppinsRegular } from '../../Resources/fonts';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFBFF',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: helpers.wp(80),
    height: helpers.hp(40),
  },
  Card:{
    flex:0.4,
    borderTopLeftRadius:helpers.normalize(30),
    borderTopRightRadius:helpers.normalize(30),
    backgroundColor:'#F5169C',
    justifyContent:'space-around',
  },
  textContainer: {
    backgroundColor: '#F745B0',
    borderRadius: helpers.normalize(30),
    paddingVertical: helpers.normalize(30),
    paddingHorizontal: helpers.normalize(20),
    marginHorizontal: helpers.normalize(20),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    paddingBottom: helpers.normalize(45),
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: helpers.normalize(22),
    fontFamily: MontserratBold,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: helpers.normalize(10),
  },
  divider:{
    marginTop:helpers.normalize(20),
  },
  subHeading: {
    fontSize: helpers.normalize(14),
    fontFamily: MontserratRegular,
    color: '#FCC8E7',
    textAlign: 'center',
    lineHeight: helpers.normalize(18),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: helpers.normalize(10),
    paddingHorizontal: helpers.normalize(20),

  },
  skipText:{
    fontSize: helpers.normalize(14),
    fontFamily: PoppinsRegular,
    color: '#FCC8E7',
  },
  nextText:{
    fontSize: helpers.normalize(14),
    fontFamily: PoppinsRegular,
    color: '#FFFFFF',
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  dot: {
    width: helpers.normalize(6), 
    height: helpers.normalize(6),
    backgroundColor: '#F973C4',
    borderRadius: helpers.normalize(99),
    marginHorizontal: helpers.normalize(2),
  },
  activeDot: {
    width: helpers.normalize(14), 
    height: helpers.normalize(6),
    backgroundColor: '#FFFFFF',
    borderRadius: helpers.normalize(999),
  },
 


});
