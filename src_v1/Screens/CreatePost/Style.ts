import {StyleSheet} from 'react-native';
import helpers from '../../utils/helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBFF',
    padding: helpers.normalize(15),
  },
  textContainer: {
    flex: 0.1,
    marginBottom:helpers.normalize(20),
  },
  mainSection: {
    // justifyContent:"center",
    flex: 0.8,
    // shadowColor:'#000',
    // elevation:20,
    // shadowOpacity:20

  },
  image:{
   width:helpers.normalize(60),
   height:helpers.normalize(50),
  },
  aiAssistOuterContainer:{
    marginTop:helpers.normalize(25),
  },
  aiAssistTitleContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:helpers.normalize(8),
  },
  aiIconImage:{
    width:helpers.normalize(20),
    height:helpers.normalize(20),
    marginRight:helpers.normalize(8),
  },
  aiAssist: {
    backgroundColor: '#FEEEF4',
    paddingVertical:helpers.normalize(15),
    padding: helpers.normalize(15),
    borderRadius: helpers.normalize(10),
  },
  aiAssistTitle: {
    fontSize: helpers.normalize(14),
    color: '#F5169C',
    marginBottom: helpers.normalize(5),
  },
  aiAssistPlaceholder: {
    fontSize: helpers.normalize(12),
    color: '#999',
  },
  Buttonflex: {
    flex: 0.1,
    justifyContent: 'flex-end',
  },
    publishButton: {
    backgroundColor: '#F5169C',
    borderRadius: helpers.normalize(10),
    padding: helpers.normalize(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  publishButtonText: {
    color: '#FFF',
    fontSize: helpers.normalize(16),
    fontWeight: 'bold',
  },
});
export default styles;
