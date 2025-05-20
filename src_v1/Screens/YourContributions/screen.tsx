import React, { useState } from "react";
import { ScrollView, StatusBar } from "react-native";
import { styles } from "./style";
import { ContributionHistoryCard } from "../../Components";
import { cardData } from "../../utils/props/contributionHistory/props";
import { FlatList } from "react-native-gesture-handler";
import { NavigationProp } from "@react-navigation/native";
import { navigate } from "../../utils/NavigationService";
import { PaymentSuccessActionSheet } from "../../Components";
import {string } from "../../Resources";
import { images } from "../../../public/material/Images/images";
// Define the PaymentOption type
interface PaymentOption {
  Text: string;  // Describes the label or title of the option
  Amount: string; // Describes the amount or value of the option
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

type ScreenProps = {
  navigation: NavigationProp<any>; // Replace 'any' with your actual navigation stack type
};

// Define a type for each item in cardData
interface ContributionHistoryItem {
  id: string;
  image: { uri: string }; // Update this to match the actual data structure
  title: string;
  amount: string | number; // Allow both string and number
  paymentStatus: string;
}

const Screen: React.FC<ScreenProps> = () => {
  const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false);

  // Render function for each card
  const renderCard = ({ item }: { item: ContributionHistoryItem }) => (
    <ContributionHistoryCard
      image={item.image}
      title={item.title}
      amount={item.amount}
      paymentStatus={item.paymentStatus}
      onViewReceipt={() => handleViewReceipt(item.id)}
      onContributeAgain={() => handleContributeAgain(item.id)}
    />
  );

  const handleViewReceipt = (id: string) => {
    // Logic for viewing receipt
    console.log(`View receipt for contribution with id: ${id}`);
    setPaymentSuccess(true);
  };

  const handleContributeAgain = (id: string) => {
    // Logic for contributing again
    console.log(`Contribute again for contribution with id: ${id}`);
    navigate("CashGift");
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <FlatList
          data={cardData}
          renderItem={renderCard}
          keyExtractor={(item: ContributionHistoryItem) => item.id}
          contentContainerStyle={{ padding: 15 }}
        />
      </ScrollView>
      {paymentSuccess ? (
        <>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="rgba(0, 0, 0, 0.5)"
          />
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
        </>
      ) : (
        <StatusBar
          barStyle="dark-content"
          translucent={true}
          backgroundColor="transparent"
        />
      )}
    </>
  );
};

export default Screen;
