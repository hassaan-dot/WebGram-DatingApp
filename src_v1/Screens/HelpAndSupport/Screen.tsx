import React from "react";
import { View, ScrollView } from "react-native";
import styles from "./Styles";
import FAQ from "../../Components/FAQ'S/component";
import { props } from "../../utils/props/FAQ'S/props";
import {
  FilledButton,
  InputField,
  TitleAndDescription,
} from "../../Components";
import { icons } from "../../../public/material/icons/icons";

import { navigate } from "../../utils/NavigationService";
import helpers from "../../utils/helpers";

interface HelpSupportScreenProps {}

const HelpSupportScreen: React.FC<HelpSupportScreenProps> = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <TitleAndDescription
          icon={true}
          imageStyle={styles.image}
          iconSource={icons.exclamatoryFORhelpandsupport_Icon}
          title="Report A Problem"
          titleTextStyle={styles.sectionTitle}
          textStyle={styles.sectionDescription}
          desc={
            "Facing troubles? Provide details about the issue, and our team will assist you"
          }
        />
        <View
          style={{
            marginTop: helpers.normalize(10),
            marginBottom: 20,
            zIndex: 10,
          }}
        >
          <InputField
            titleBackgroundColor={"#FFFBFF"}
            placeholder={"Tell us what went wrong.."}
            backgroundColor={"#FFFFFF"}
            multiline={false}
            noBorder={true}
            fieldTextColor="#000000"
            containerStyle={styles.inputFieldContainer}
            inputFieldShaddow={false}
            onChangeText={(text: string) => {
              console.log(text);
            }}
          />
        </View>

        <View style={styles.ButtonView}>
          <FilledButton
            title="Send Report"
            buttonBackground={"#F5169C"}
            containerStyle={styles.button}
            titleStyle={styles.buttonText}
            onPress={() => navigate("ReportProblem")}
          />
        </View>
      </View>
      <View>
        <FAQ Data={props.Data} title="FAQ`s" />
      </View>
      <View>
        <TitleAndDescription
          title="Didn't find What you're Looking for?"
          titleTextStyle={styles.contactText}
          textStyle={styles.sectionDescription}
          desc={
            "We`re here to help if you couldn`t find the answer you need, feel free to reach out to us.\n\nOur support team will get back to you as soon as possible"
          }
        />
        <FilledButton
          title="Contact Us"
          buttonBackground={"#F5169C"}
          rightIconImage={icons.open_link_icon}
          rightIconImageStyle={{ width: helpers.normalize(20), height: helpers.normalize(20) }} // Set width and height for the icon
          containerStyle={styles.button}
          titleStyle={styles.buttonText}
          onPress={() => navigate("ReportProblem")}
        />
      </View>
    </ScrollView>
  );
};

export default HelpSupportScreen;
