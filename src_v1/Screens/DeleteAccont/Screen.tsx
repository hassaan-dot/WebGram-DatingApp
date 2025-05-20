import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { InputField, PaymentProcessed, TitleAndDescription } from "../../Components";
import { icons } from "../../Resources";
import ConfirmDeleteOption from "../../Components/ReminerBox/ReminderBox";
import CustomCheckboxField from "../../Components/CheckBox/checkbox";
import styles from "./Styles";
const reasons = [
  { label: "I no longer need this account", checked: false },
  { label: "I want to change my contact information", checked: false },
  { label: "I had privacy or security concerns", checked: false },
  { label: "I found the app difficult to use", checked: false },
  {
    label: "I no longer attend events where this app is used",
    checked: false,
  },
  { label: "I receive too many notifications", checked: false },
  { label: "I had a bad experience with the app", checked: false },
  { label: "Others :", checked: false },
];

const DeleteAccountScreen: React.FC = () => {
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [otherReason, setOtherReason] = useState<string>("");
  const [isChecked, setIsChecked] = useState(false);
  const [IS_FAQ_checked, setIS_FAQ_checked] = useState(false);
  const handleToggle = () => {
    setIsChecked(!isChecked);
    setIS_FAQ_checked(!IS_FAQ_checked); // Toggle the checkbox state
  };
  const handleFAQToggle = () => {
    setIS_FAQ_checked(!IS_FAQ_checked); // Toggle the checkbox state
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <TitleAndDescription
          titleTextStyle={styles.subHeading}
          textStyle={styles.sectionDescription}
          title={"We’re sad to see you go!"}
          desc={
            "Before you proceed, please review the impact of deleting your account."
          }
        />
      </View>
      <View style={styles.section}>
        <TitleAndDescription
          icon={true}
          titleTextStyle={styles.sectionHeading}
          textStyle={styles.sectionDescription}
          title={"Personal Information Deletion"}
          iconSource={icons.DescriptionIcon2}
          desc={
            "By deleting your account, your personal information (e.g., name,email) will be permanently removed."
          }
        />
      </View>

      <View style={styles.section}>
        <View>
          <TitleAndDescription
            icon={true}
            titleTextStyle={styles.sectionHeading}
            textStyle={styles.sectionDescription}
            title={"Content Retention"}
            iconSource={icons.DescriptionIcon1}
            desc={
              "Your posts and images will stay in the system and remain accessible to guests, but don’t worry—your name won’t appear on them once your account is deleted.\n\nBy leaving the box unchecked, you`ll only be removing your personal information while keeping the memories alive for everyone to enjoy."
            }
          />
        </View>
        <View style={styles.checkboxContainer}>
          <ConfirmDeleteOption
            checked={isChecked} // Pass the current state
            onToggle={handleToggle} // Handle toggle
            text={
              "I understand that by selecting this option, all my posts and images will also be deleted permanently."
            }
          />
        </View>
      </View>

      <Text style={styles.reasonHeading}>Reason for Leaving:</Text>
      {reasons.map((reason, index) => (
        <View key={index} style={styles.checkboxContainer}>
          <View>
            <Text style={styles.checkboxLabel}>{reason.label}</Text>
          </View>

          <View>
            <CustomCheckboxField
              handleInputChange={handleFAQToggle}
              value={IS_FAQ_checked}
              field={{ required: true }}
            />
          </View>
        </View>
      ))}

      <View style={styles.otherReasonContainer}>
         <InputField
            titleBackgroundColor={"#FFFBFF"}
            placeholder={"Type Here..."}
            backgroundColor={"#FFFFFF"}
            multiline={false}
            defaultValue={otherReason}
            noBorder={true}
            fieldTextColor="#666666"
            containerStyle={styles.inputFieldContainer}
            inputFieldShaddow={false}
            onChangeText={(text: string) => {
              console.log(text);
              setOtherReason(text);
            }}
          />

      </View>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => setDeleteModal(true)}
      >
        <Text style={styles.deleteButtonText}>Delete Account</Text>
      </TouchableOpacity>

      <PaymentProcessed
        visible={deleteModal}
        onClose={() => setDeleteModal(false)}
        title="Are you sure you want to proceed?"
        description={
          "By deleting your account, your personal information (e.g., name, email) will be permanently removed.\n\n However, your posts and images will remain on the platform and accessible to guests."
        }
        buttonTextPrimary="Yes, Delete My Account"
        buttonTextSecondary="Cancel"
        onSecondaryButtonPress={() => setDeleteModal(false)}
      />
    
    </ScrollView>
  );
};
export default DeleteAccountScreen;
