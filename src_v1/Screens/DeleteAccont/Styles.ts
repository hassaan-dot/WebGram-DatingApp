import {StyleSheet} from 'react-native';
import helpers from '../../utils/helpers';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: helpers.normalize(16),
        backgroundColor: "#FFFBFF",
      },
      heading: {
        fontSize: helpers.normalize(24),
        fontWeight: "bold",
        color: "#000",
        textAlign: "center",
        marginBottom: helpers.normalize(8),
      },
      subHeading: {
        fontSize: helpers.normalize(20),
        fontWeight:'bold',
            color: "#F5169C",
      },
      inputFieldContainer: {
        height: helpers.hp(7),
        borderRadius: helpers.normalize(5),
        shadowColor: '#000',  // The shadow color
        shadowOffset: { width: 0, height: 2 },  // The shadow offset (horizontal, vertical)
        shadowOpacity: 0.3,  // The opacity of the shadow
        shadowRadius: 4,  // The blur radius of the shadow
      },
      description: {
        fontSize: helpers.normalize(12),
        color: "#888",
        lineHeight: helpers.normalize(24),
        marginVertical: helpers.normalize(10),
      },
      section: {
        marginBottom: helpers.normalize(16),
        marginTop:helpers.normalize(23)
      },
      sectionHeading: {
        fontSize: helpers.normalize(15),
        fontWeight: "bold",
        color: "#000",
        marginBottom: helpers.normalize(4),
      },
      sectionDescription: {
        fontSize: helpers.normalize(12),
        color: "#888",
        lineHeight: helpers.normalize(24),
      },
      checkboxContainer: {
        flexDirection: "row",
        justifyContent:'space-between',
        marginBottom: helpers.normalize(8),
      },
        checkboxLabel: {
        fontSize: helpers.normalize(12),
        color: "#000",
        fontWeight: "300",
        // paddingLeft: helpers.normalize(8),
      },
      reasonHeading: {
        fontSize: helpers.normalize(14),
        fontWeight: "bold",
        color: "#000",
        marginBottom: helpers.normalize(20),
      },
      otherReasonContainer: {
        marginTop: helpers.normalize(10),
        marginBottom: helpers.normalize(16),
      },
      textInput: {
        backgroundColor: "#FFFFFF",
        borderRadius: helpers.normalize(8),
        padding: helpers.normalize(8),
        fontSize: helpers.normalize(14),
        color: "#000",
        elevation: 4, // Android elevation
        shadowColor: "#000", // iOS shadow color
        shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
        shadowOpacity: 0.25, // iOS shadow opacity
        shadowRadius: 4, // iOS shadow blur radius
      },
    
      deleteButton: {
        backgroundColor: "#F5169C",
        padding: helpers.normalize(12),
        borderRadius: helpers.normalize(8),
        alignItems: "center",
        marginTop: helpers.normalize(50),
        marginBottom:helpers.normalize(20)
      },
      deleteButtonText: {
        fontSize: helpers.normalize(16),
        fontWeight: "bold",
        color: "#fff",
      },
});
export default styles;
