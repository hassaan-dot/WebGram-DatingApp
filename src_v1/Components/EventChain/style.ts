import {StyleSheet} from 'react-native';
import helpers from '../../utils/helpers';
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    margin: helpers.normalize(20),
  },
  chainTitleContainer: {
    margin:helpers.normalize(15)
  },
  eventChainContainer:{
    paddingLeft:helpers.normalize(40),
    paddingRight:helpers.normalize(60),
  },
  chainTitleText: {
    fontSize: helpers.normalize(20),
    fontWeight: 'bold',
    color:"#181F32",
    textAlign: 'center',
  },
  eventContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  timelineContainer: {
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: helpers.normalize(15),
  },
  eventTitle: {
    fontSize: helpers.normalize(13),
    fontWeight: '400',
  },
 
  description: {
    fontSize: helpers.normalize(12),
    color: '#3C3C3C',
  },
  verticalLine: {
    width: helpers.normalize(3),
    height: helpers.normalize(35), 
    marginTop: helpers.normalize(-2), 
  },
});
