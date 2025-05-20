import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import Select, { SingleValue } from "react-select"; // Import SingleValue for typing
import { components } from "react-select";
import styles from "./Styles";
import { customStyles } from "./Styles";
import { icons } from "../../../public/material/icons/icons";

// Define the type for items
type Item = {
  label: string;
  value: string;
};

const CustomDropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <Image source={icons.Drop_Down_Icon_Down} style={styles.arrowIconStyle} />
    </components.DropdownIndicator>
  );
};

const DropDownTitleView: React.FC = () => {
  const [value, setValue] = useState<string | null>(null);

  const items: Item[] = [
    { label: "Don't like any more", value: "option1" },
    { label: "Request a Refund 2", value: "option2" },
    { label: "Request a Refund 3", value: "option3" },
    { label: "Other", value: "option4" },
  ];

  console.log("Selected value:", value);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{"I`d like to..."}</Text>
      </View>
      <View>
        <Select
          options={items}
          placeholder="Request a Refund"
          styles={customStyles}
          onChange={(selectedOption: SingleValue<Item>) =>
            setValue(selectedOption ? selectedOption.value : null)
          }
          isSearchable={true}
          components={{
            DropdownIndicator: CustomDropdownIndicator,
          }}
          menuPortalTarget={document.body} // Web-specific
        />
      </View>
    </View>
  );
};

export default DropDownTitleView;
