import React, { useState } from "react";
import { Text, View } from "react-native";
import {
  FilledButton,
  InputField,
  PaymentFailedActionSheet,
  TitleAndDescription,
} from "../../Components";
import styles from "./styles";
import { string } from "../../Resources";
import helpers from "../../utils/helpers";
import DropDownTitleView from "../../Components/DropdownWithTitle/Component";
import {icons} from '../../../public/material/icons/icons';
const Screen: React.FC = () => {
  const [showReportSubmitted, setShowReportSubmitted] =
    useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.InnerContainer}>
        <View style={{}}>
          <TitleAndDescription
            title="Let us know what went wrong with your payment"
            titleTextStyle={styles.headerText}
          />
        </View>
        <View>
          <TitleAndDescription
            desc="What can we help you with?"
            textStyle={styles.TitleStyle}
          />
          <DropDownTitleView />
        </View>

        <View style={{ marginTop: helpers.normalize(30) }}>
          <InputField
            titleBackgroundColor={"#FFFBFF"}
            placeholder={string.tell_us_more}
            backgroundColor={"#F5F5F5"}
            multiline={true}
            // multineTextFieldheight={styles.inputHeight}
            noBorder={true}
            fieldTextColor="#000000"
            containerStyle={styles.inputFieldContainer}
            inputFieldShaddow={false}
            onChangeText={(text: string) => {
              console.log(text);
            }}
          />
        </View>
        <Text style={styles.tellMoreDescText}>{string.tell_us_more_desc}</Text>
      </View>
      <View style={styles.sendGiftView}>
        <FilledButton
          title={string.submit_request}
          containerStyle={styles.sendButton}
          buttonBackground={"#F5169C"}
          titleStyle={styles.sendButtonText}
          onPress={() => setShowReportSubmitted(true)}
        />
      </View>
      {showReportSubmitted && (
           <PaymentFailedActionSheet
            modalTitle={string.report_submitted_title}
            modalImage={icons.report_sign_icon}
            imageStyle={styles.modalImageStyle}
            modalDesc={string.report_submitted_desc}
            descTextColor={styles.modalDescTextColor}
            buttonText={string.close}
            visible={showReportSubmitted}
            dragHandlePress={() => setShowReportSubmitted(false)}
            onButtonPress={() => {
              setShowReportSubmitted(false);
            }}
          />)}
    </View>
  );
};

export default Screen;
