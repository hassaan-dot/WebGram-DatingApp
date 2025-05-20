import React, { useState } from "react";
import { View } from "react-native";
import {
  FilledButton,
  InputField,
  PaymentFailedActionSheet,
  PaytmentConfirmationActionSheet,
  PaymentProcessed,
  PaymentSuccessActionSheet,
} from "../../Components";
import styles from "./styles";
import { string } from "../../Resources";
import { images } from "../../../public/material/Images/images";
import { navigate } from "../../utils/NavigationService";
import helpers from "../../utils/helpers";

interface PaymentOption {
  Text: string;
  Amount: string;
}

const confirmAmountOptions: PaymentOption[] = [
  {
    Text: "Cash Amount",
    Amount: "80.00",
  },
  {
    Text: "Transaction Fees",
    Amount: "2.00",
  },
  {
    Text: "Total",
    Amount: "82.00",
  },
];

const paymentSuccessDetails: PaymentOption[] = [
  {
    Text: "Refrence Number",
    Amount: "123456789",
  },
  {
    Text: "Date",
    Amount: "12-12-2021",
  },
  {
    Text: "Credit Card",
    Amount: "**** **** **** 1234",
  },
];

const Screen = () => {
  const [showStripeModal, setShowStripeModal] = useState<boolean>(false);
  const [showPaymentProcessed, setShowPaymentProcessed] =
    useState<boolean>(false);
  const [showPaymentFailedActionSheet, setShowPaymentFailedActionSheet] =
    useState<boolean>(false);
  const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false);

  const updatePaymentProcessing = () => {
    setShowStripeModal(false);
    setShowPaymentProcessed(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.InnerContainer}>
        <View style={styles.inputContainer}>
          <InputField
            containerStyle={styles.giftInput}
            placeholder={string.gift_amount_place_holder}
            keyboardType="numeric"
            title={string.gift_amount_title}
            inputFieldShaddow={true}
            backgroundColor={"#FFFFFF"}
            titleBackgroundColor={"#FFFBFF"}
            noBorder={true}
          />
        </View>

        <InputField
          title={string.personal_message}
          titleBackgroundColor={"#FFFBFF"}
          placeholder={string.personal_message_place_holder}
          backgroundColor={"white"}
          multiline={true}
          multilineTextFieldHeight={helpers.normalize(70)}
          noBorder={true}
          fieldTextColor="#4E5D78"
          containerStyle={styles.inputContainerStyle} 
          inputFieldShaddow={true}
          onChangeText={(text: string) => {
            console.log(text);
          }}
        />
      </View>
      <View style={styles.sendGiftView}>
        <FilledButton
          title={string.send_gift}
          buttonBackground={"#F5169C"}
          containerStyle={styles.sendButton}
          titleStyle={styles.sendButtonText}
          onPress={() => setShowStripeModal(true)}
        />
      </View>
      {showStripeModal && (
        <PaytmentConfirmationActionSheet
          options={confirmAmountOptions}
          buttonText={"Continue on Stripe"}
          dragHandlePress={() => {
            setShowStripeModal(false);
            setShowPaymentFailedActionSheet(true);
          }}
          onButtonPress={() => updatePaymentProcessing()}
        />
      )}
      {showPaymentProcessed && (
        <PaymentProcessed
        visible={true}
          image={images.payment_processed}
          title={string.your_payment_is_being_processed} // Default title
          description={string.processed_payment_desc} // Default description
          buttonTextPrimary={string.close} // Default primary button text
          buttonTextSecondary={string.view_contributions} // Default secondary button text
          onSecondaryButtonPress={() => navigate("YourContributions")} // Default secondary button press
          onClose={() => setShowPaymentProcessed(false)}
        />
      )}
      {showPaymentFailedActionSheet && (
        <PaymentFailedActionSheet
          modalTitle={string.payment_failed}
          modalImage={images.payment_failure}
          modalDesc={string.payment_failed_description}
          buttonText={string.try_again}
          visible={showPaymentFailedActionSheet}
          dragHandlePress={() => setShowPaymentFailedActionSheet(false)}
          onButtonPress={() => {
            console.log("close");
            setShowPaymentFailedActionSheet(false);
            setPaymentSuccess(true);
          }}
        />
      )}

      {paymentSuccess && (
        <PaymentSuccessActionSheet
          title={string.payment_successful}
          image={images.payment_success}
          options={confirmAmountOptions}
          option2={paymentSuccessDetails}
          buttonText={string.downloadReceipt}
          onCancel={() => setPaymentSuccess(false)}
          dragHandlePress={() => {
            setPaymentSuccess(false);
          }}
          onButtonPress={() => setPaymentSuccess(false)}
        />
      )}
    </View>
  );
};

export default Screen;
