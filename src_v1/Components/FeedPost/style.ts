import { StyleSheet } from "react-native";
import helpers from "../../utils/helpers";
import { MontserratRegular } from "../../Resources/fonts";
const styles = StyleSheet.create({
  card: {
    marginVertical: helpers.normalize(10),
    padding: helpers.normalize(10),
    borderRadius: helpers.normalize(15),
    backgroundColor: "#F5F5F5",
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
    flexDirection: "row",
    alignItems: "center",
    marginBottom: helpers.normalize(10),
  },
  profileImage: {
    width: helpers.normalize(35),
    height: helpers.normalize(35),
    borderRadius: helpers.normalize(25),
    marginRight: helpers.normalize(10),
  },
  userName: {
    color: "#181F32",
    fontFamily: MontserratRegular,
    fontSize: helpers.normalize(16),
  },
  userRole: {
    color: "#888",
    fontFamily: MontserratRegular,
    fontSize: helpers.normalize(12),
  },
  imagesContainer: {
    justifyContent: "space-between",
    marginTop: helpers.normalize(5),
    flex: helpers.normalize(0.8),
    // backgroundColor:'blue',
    // padding:5
  },
  leftImages: {
    padding: helpers.normalize(10),
    marginRight: helpers.normalize(5),
  },
  rightImages: {
    marginLeft: helpers.normalize(5),
    flexWrap: "wrap",
  },
  cardImage: {
    width: "60%",
    height: "60%",
    borderRadius: helpers.normalize(8),
    resizeMode: "cover",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor:'blue',
    flex: 0.1,
  },
  likesText: {
    fontWeight: "400",
    color: "#555",
    fontSize: helpers.normalize(15),
    marginTop: helpers.normalize(5),
  },
  iconButton: { marginHorizontal: helpers.normalize(5) },
  sendingButton: { marginRight: 0 },
  fullSizeImage: {
    alignSelf: "center",
    height: helpers.wp(100),
    width: helpers.wp(85),
    top: helpers.normalize(10),
    resizeMode: "cover",
    borderRadius: helpers.normalize(10),
  },

  twoImagesContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
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
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  bucketContainer: {
    position: "relative",
    width: "48%",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: helpers.normalize(10),
  },

  overlayText: {
    color: "white",
    fontSize: helpers.normalize(16),
    fontWeight: "bold",
  },
  remainingOverlay: {
    position: "relative",
  },
  dimmedImage: {
    opacity: 0.6, // Makes the image dim
  },
  overlayTextContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4S)",
  },
  remainingCountText: {
    color: "#FFFFFF",
    fontSize: helpers.normalize(18),
    fontWeight: "bold",
  },
  menuContainer: {
    position: "absolute",
    top: "30%",
    right: helpers.normalize(10),
    backgroundColor: "#fff",
    borderRadius: helpers.normalize(10),
    padding: helpers.normalize(10),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: helpers.normalize(5),
  },
  menuText: {
    marginLeft: helpers.normalize(10),
    fontSize: helpers.normalize(14),
    color: "#333",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderWidth: 1,
    borderColor: "#DEDEDE",
  },
  editIcon: {
    width: helpers.normalize(20),
    height: helpers.normalize(20),
    marginHorizontal: helpers.normalize(5),
  },
  deleteIcon: {
    width: helpers.normalize(20),
    height: helpers.normalize(20),
    marginHorizontal: helpers.normalize(5),
    tintColor: "#F32323",
  },
  reportIcon: {
    width: helpers.normalize(25),
    height: helpers.normalize(25),
  },
  reportMenuItem: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default styles;
