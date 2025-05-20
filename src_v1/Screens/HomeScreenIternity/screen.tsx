import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { styles } from './style';
import { props } from '../../utils/props/homescreen_itenarary/props';
import { EventChain, Header } from '../../Components';


// interface HeaderDetails {
//   title: string;
//   subtitle: string;
// }

// interface EventChainDetails {
//   eventTitle: string;
//   eventDescription: string;
//   eventTime: string;
// }

const Screen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Header headerDetails={props.screen_header} />
        <EventChain chainDetails={props.festivities} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Screen;
