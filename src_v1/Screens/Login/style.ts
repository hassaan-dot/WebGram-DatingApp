import helpers from "../../utils/helpers";
import {PoppinsMedium} from '../../Resources/fonts';
const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: helpers.normalize(15),
    backgroundColor: "#FFFBFF",
  },
  login_desc: {
    flex: 0.3,
    justifyContent: "flex-start",
    marginTop: helpers.normalize(20),

  },
  login_desc_container: {
    marginTop: helpers.normalize(60),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
  },
  // headerTitle: {
  //   color: "white",
  //   fontSize: helpers.normalize(16),
  //   marginLeft: helpers.normalize(8),
  // },
  headerTitle: {
    color: '#181F2',
    fontSize: helpers.normalize(25),
    fontFamily:PoppinsMedium,
    marginLeft: helpers.normalize(4),
  },
  loginBox: {
    padding: helpers.normalize(20),
    backgroundColor: "white",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  title: {
    fontSize: helpers.normalize(24),
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: helpers.normalize(12),
    color: "#666",
    marginVertical: helpers.normalize(10),
  },
  loginSubtitleCont: {
    paddingHorizontal: helpers.normalize(5),
  },
  inputContainer: {
    flexDirection: "row",
    paddingHorizontal: helpers.normalize(10),
    marginVertical: helpers.normalize(10),
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.2,
    borderRadius: 8,
    elevation: 5,
  },
  input: {
    // fontSize: 14,
    // color: '#333',
  },
  loginButton: {
    backgroundColor: '#F5169C',
    marginTop: helpers.normalize(20),
    marginBottom: helpers.normalize(10),
  },
  loginButtonText: {
    color: "white",
    fontSize: helpers.normalize(13),
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: helpers.normalize(10),
  },
  rightLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E0E0E0",
    marginRight: helpers.normalize(40),
  },
  leftLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E0E0E0",
    marginLeft: helpers.normalize(40),
  },
  dividerText: {
    marginHorizontal: helpers.normalize(10),
    fontSize: helpers.normalize(13),
    color: "#999",
  },
  socialButton: {
    backgroundColor: "white",
    marginTop: helpers.normalize(20),
    paddingVertical: helpers.normalize(8),
    marginVertical: helpers.normalize(5),
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 2,
  },
  socialIcon: {
    width: helpers.normalize(20),
    height: helpers.normalize(20),
  },
  socialButtonText: {
    marginLeft: helpers.normalize(10),
    fontSize: helpers.normalize(13),
    color: "#787878",
    fontFamily:PoppinsMedium
  },
  donthaveAccountContainer: {
    flex: 0.1,
    justifyContent: "flex-end",
  },
  flexContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dontHaveAccountText: { textAlign: "center", color: "#666666",fontFamily:PoppinsMedium},
  signupText: {
    marginLeft: helpers.normalize(5),
    color: "#FF007A",
    fontWeight: "400",
  },
});
export default styles;
