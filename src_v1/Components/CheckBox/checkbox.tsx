import React, { useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import styles from "./Styles";
import { icons } from "../../Resources";

// Define the types for props
interface CustomCheckboxFieldProps {
  field: {
    required?: boolean; // Assuming field can have a required property
  };
  isRequired?: boolean; // Whether the field is required or not
  isReadOnly?: boolean; // Whether the checkbox is read-only
  bgColor?: string;
  value?: boolean; // Whether the field is required or not

  handleInputChange?: (
    event: { target: { value: boolean } },
    field?: any
  ) => void; // Input change handler
}

const CustomCheckboxField: React.FC<CustomCheckboxFieldProps> = ({
  field,
  isRequired,
  isReadOnly,
  bgColor,
  value,
  handleInputChange,
}) => {
  // Managing checked state as a local state
  const [isChecked, setIsChecked] = useState<boolean>(value || false);

  const handleToggle = () => {
    if (!isReadOnly && handleInputChange) {
      const newCheckedValue = !isChecked;
      setIsChecked(newCheckedValue); // Update the local state
      handleInputChange({ target: { value: newCheckedValue } }, field);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <TouchableOpacity
          onPress={handleToggle}
          // style={[
          //   styles.checkbox,
          //   isChecked && styles.checked,
          //   isRequired && field.required && !isChecked && styles.errorCheckbox,
          //   bgColor && bgColor !== "" ? { backgroundColor: bgColor } : {},
          // ]}
        >
          <Image
            source={isChecked ? icons.check_Mark_Icon : icons.uncheck_Mark_Icon}
            style={isChecked ? styles.checkbox : styles.uncheckbox}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomCheckboxField;
