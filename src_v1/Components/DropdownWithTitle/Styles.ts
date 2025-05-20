import { StyleSheet } from "react-native";
import helpers from "../../utils/helpers";
import { PoppinsRegular } from "../../Resources/fonts";
import { StylesConfig } from "react-select"; // Use react-select for web picker
interface Item {
  label: string;
  value: string;
}
export const customStyles: StylesConfig<Item, false> = {
  container: (provided) => ({
    ...provided,
  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#F5F5F5",
    borderColor: state.isFocused ? "#F5F5F5" : "#ccc",
    borderWidth: state.isFocused ? 0 : 0,
    padding: 2,
  }),
  placeholder: (provided, state) => ({
    ...provided,
    borderWidth: 0,
    borderColor: state.isFocused ? "#F5F5F5" : "#ccc",
    color: "#000",
    fontFamily: PoppinsRegular,
    fontSize: helpers.normalize(14),
  }),
  valueContainer: (provided) => ({
    ...provided,
    borderWidth: 0,
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#333",
    fontSize:helpers.normalize (16),
    fontFamily: PoppinsRegular,
    borderWidth: 0,
    backgroundColor: "#F5F5F5",
  }),
  input: (provided) => ({
    ...provided,
    borderWidth: 0,
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    color: "#F5F5F5",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.2s",
    color: "#F5F5F5",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: 2,
    borderRadius: 8,
    borderWidth: 0,
    zIndex: 9999999,
  }),
  menuList: (provided) => ({
    ...provided,
    backgroundColor: "#F5F5F5",
    zIndex: 9999999,
  }),
  option: (provided, state) => ({
    ...provided,
    borderWidth: 0,
    backgroundColor: "#F5F5F5",
    zIndex: 9999999999999,
    color: state.isFocused ? "black" : "black",
    padding: 10,
    fontSize: helpers.normalize(14),
    fontFamily: PoppinsRegular,
    borderRadius: 20,

  }),
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: helpers.normalize(0),
    paddingTop:helpers.normalize(5),
    borderRadius: helpers.normalize(8),
    backgroundColor: "#F5F5F5",
    zIndex: 999999,

  },
  iconBottom: {
    bottom: helpers.normalize(7),
  },
  iconTop: {},
  title: {
    fontSize: helpers.normalize(12),
    color: "#979797",
    fontFamily: PoppinsRegular,
    paddingHorizontal: helpers.normalize(10),
  },
  placeholderStyle: {
    color: "#333333",
    fontFamily: PoppinsRegular,
    fontSize: helpers.normalize(14),
  },

  dropDownPickerStyle: {
    backgroundColor: "#F5F5F5",
    borderWidth: 0, // Remove border of the dropdown button
    borderRadius: helpers.normalize(8),
  },

  dropDownContainerStyle: {
    backgroundColor: "#F5F5F5",
    zIndex: 999999,
    borderWidth: 0, // Remove border of the dropdown container
    borderRadius: helpers.normalize(8),

  },
  arrowIconStyle: {
    width: 40,
    height: 30,
    right: helpers.normalize(-8),
    top: helpers.normalize(-8),
  },
});
export default styles;
