import React, { useEffect, useState } from "react";
import { FlatList, ListRenderItemInfo, ScrollView, View } from "react-native";
import { props } from "../../utils/props/feed/props";
import Header from "../../Components/Header/component";
import {
  FeedPost,
  FeedHigh,
  SharePostActionSheet,
  TriviaQuiz,
  SpotlightModal,
  SpecialDayModal,
} from "../../Components";
import { props as props_Header } from "../../utils/props/homescreen_itenarary/props";
import styles from "./Styles";
import { icons } from "../../../public/material/icons/icons";
const shareOptions = [
  {
    icon: icons.sharelink,
    label: "Copy Link",
    onPress: () => console.log("Copy Link Pressed"),
  },
  {
    icon: icons.whatsapp,
    label: "WhatsApp",
    onPress: () => console.log("WhatsApp Pressed"),
  },
  {
    icon: icons.fb_icon,
    label: "Facebook",
    onPress: () => console.log("Facebook Pressed"),
  },
  {
    icon: icons.instagram,
    label: "Instagram Stories",
    onPress: () => console.log("Instagram Stories Pressed"),
  },
];
interface FeedItem {
  user: {
    name: string;
    role?: string;
    image: { uri: string };
  };
  images: { uri: string }[];
}

const Feed: React.FC = () => {
  const [specialDayModalVisible, setSpecialDayModalVisible] =
    useState<boolean>(true);
  const [shareModalVisible, setShareModalVisible] = useState<boolean>(false);

  console.log("Header props", props_Header);
  useEffect(() => {
    // const timer = setTimeout(() => {
    //   setSpecialDayModalVisible(false);
    // }, 1000);
    // return () => clearTimeout(timer);
  }, [specialDayModalVisible]);
  const renderItem = ({ item }: ListRenderItemInfo<FeedItem>) => {
    return (
      <View style={styles.forALL}>
        <FeedPost item={item} shareModal={sharePostModal} />
      </View>
    );
  };
  const sharePostModal = (item) => {
    console.log("Share Post Modal", item);
    setShareModalVisible(true);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
        data={props}
        renderItem={renderItem}
        ListHeaderComponent={
          <>
            <View>
              <Header
                headerDetails={props_Header?.screen_header}
                souceImage={props_Header?.screen_header?.clock_icon}
              />
              <FeedHigh />
            </View>
            
            <View style={styles.forModal}>
              {/* <SpotlightModal></SpotlightModal> */}
              <TriviaQuiz
                ModalTitle={"Trivia Challenge - Are You In?"}
                ButtonTitle={`Let's Play`}
              ></TriviaQuiz>
            </View>
          </>
        }
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.flatListContainer}
      />


      {/* <SpecialDayModal
        // data={specialDayModalProps}
        visible={specialDayModalVisible}
        onClose={() => {
          setSpecialDayModalVisible(false);
        }}
      /> */}
      {shareModalVisible && (
        <SharePostActionSheet
          title="Share Post"
          shareOptions={shareOptions}
          onCancel={() => setShareModalVisible(false)}
        />
      )}
    </ScrollView>
  );
};

export default Feed;
