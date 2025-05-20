import {StyleSheet} from 'react-native';
import helpers from '../../utils/helpers';
const styles = StyleSheet.create({
  card: {
    marginVertical: helpers.normalize(10),
    padding: helpers.normalize(10),
    borderRadius: helpers.normalize(15),
    backgroundColor: '#F5F5F5',
    flex: 1,
  },
  heartIcon: {
    width: helpers.normalize(30),
    height: helpers.normalize(35),
  },
  SendingIcon: {
    width: helpers.normalize(40),
    height: helpers.normalize(45),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: helpers.normalize(10),
  },
  profileImage: {
    width: helpers.normalize(50),
    height: helpers.normalize(50),
    borderRadius: helpers.normalize(25),
    marginRight: helpers.normalize(10),
  },
  userName: {
    fontWeight: 'bold',
    fontSize: helpers.normalize(17),
  },
  userRole: {
    color: '#888',
    fontSize: helpers.normalize(14),
  },
  imagesContainer: {
    justifyContent: 'space-between',
    marginVertical: helpers.normalize(5),
    flex: 0.8,
  },
  leftImages: {
    padding: helpers.normalize(10),
    marginRight: helpers.normalize(5),
  },
  rightImages: {
    marginLeft: helpers.normalize(5),
    flexWrap: 'wrap',
  },
  cardImage: {
    width: '60%',
    height: '60%',
    borderRadius: helpers.normalize(8),
    resizeMode: 'cover',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 0.1,
  },
  likesText: {
    fontWeight: '400',
    color: '#555',
    fontSize: helpers.normalize(15),
    marginTop: helpers.normalize(5),
  },
  iconButton: {marginHorizontal: helpers.normalize(5)},
  sendingButton: {marginRight:0},
  fullSizeImage: {
    height: helpers.wp(100),
    width: helpers.wp(88),
    resizeMode: 'cover',
    borderRadius: 10,
  },

  twoImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  halfSizeImage: {
    height: helpers.wp(100),
    width: helpers.wp(42),
    borderRadius: helpers.normalize(10),
  },
  quaterSize: {
    height: helpers.wp(49),
    width: helpers.wp(42),
    borderRadius: helpers.normalize(10),
  },

  multipleImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  bucketContainer: {
    position: 'relative',
    width: '48%',
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: helpers.normalize(10),
  },

  overlayText: {
    color: 'white',
    fontSize:helpers.normalize(16),
    fontWeight: 'bold',
  },
});
export default styles;
