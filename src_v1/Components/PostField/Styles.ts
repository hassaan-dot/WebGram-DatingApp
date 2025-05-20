import {StyleSheet} from 'react-native';
import helpers from '../../utils/helpers';
import { PoppinsRegular } from '../../Resources/fonts';

const styles = StyleSheet.create({
  container: {
    padding: helpers.normalize(15),
    paddingHorizontal:helpers.normalize(10),
    backgroundColor: 'white',
    borderRadius: helpers.normalize(10),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 5, // Android
    overflow: "hidden",
  },
  input: {
    height: helpers.hp(15),
    textAlignVertical:'top'
  },
  galleryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: helpers.normalize(4),
    alignItems: 'center',
  },
  galleryIcon: {
    width: helpers.normalize(25),
    height: helpers.normalize(25),
  },
  galleryVideoIcon: {
    width: helpers.normalize(25),
    height: helpers.normalize(25),
    marginLeft: helpers.normalize(15),
  },
  makeBetterBtn:{
    backgroundColor:'#FFEAF7',
    paddingHorizontal:helpers.normalize(10),
    paddingVertical:helpers.normalize(5), 
    borderWidth:1,
    borderColor:'#F5169C',
    borderRadius:helpers.normalize(10),
    marginTop:helpers.normalize(10),
  },
  makeBetterNonActive:{
    backgroundColor: "#F5F5F5",
    borderWidth: 0,
  },

  makeBetterText:{
    color:'#979797',
    fontFamily:PoppinsRegular,
    fontSize:helpers.normalize(10),
    paddingRight:2,
  },
  aiIcon:{
    width:helpers.normalize(20),
    height:helpers.normalize(20),
    tintColor:'#979797',
    // paddingLeft:20,
    
  },
 
  imageListContainer: {
    alignItems: 'flex-start',
    marginTop: helpers.normalize(0),
  },
  image: {
    width: helpers.normalize(50),
    height: helpers.normalize(50),
    borderRadius: helpers.normalize(10),
    borderWidth: 0.3,
  },
  removeImage: {
    position: 'absolute',
    top: helpers.normalize(-5),
    right: helpers.normalize(-5),
    width: helpers.normalize(30),
    height: helpers.normalize(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeText: {
    color: '#FFF',
    fontSize: helpers.normalize(12),
    fontWeight: 'bold',
  },
  removeImageIcon: {
    width: helpers.normalize(15),
    height: helpers.normalize(15),
  },
});
export default styles;
