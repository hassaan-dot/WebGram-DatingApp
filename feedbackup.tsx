import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import React, { useEffect, useRef, useState } from "react";
import { whiteColor } from "../../util/Constants";
import { profileImage } from "../../util/image";
import TimeIcon from "../../components/svg/TimeIcon";
import ArrowDownIcon from "../../components/svg/ArrowDownIcon";
import CommentIcon from "../../components/svg/CommentIcon";
import HeartIcon from "../../components/svg/HeartIcon";
import {
  MontserratBold,
  MontserratMedium,
  MontserratRegular,
  MontserratSemiBold,
  PoppinsRegular,
} from "../../util/fonts";
import { heightPercentageToDP } from "react-native-responsive-screen";
import MyCard from "../../components/card/MyCard";
import SpecialMessageCard from "../../components/card/SpecialMessageCard";
import ProfileAvatar from "../../components/ProfileAvatar";
import PostCard from "../../components/card/PostCard";
import { PostCardText } from "../../components/card/PostCardText";
import TextButton from "../../components/buttons/TextButton";
import { useNavigation } from "@react-navigation/native";
import { HomeTabScreenProps } from "../../navigation/types";
import ItenaryModal from "../../components/modals/ItenaryModal";
import TriviaQuestions from "../../components/trivia/TriviaQuestions";
import RequestModal from "../../components/modals/RequestModal";
import ReportModal from "../../components/modals/ReportModal";
import ShareModal from "../../components/modals/ShareModal";
import TextIconButton from "../../components/buttons/TextIconButton";
import EyeSlashIcon from "../../components/svg/EyeSlashIcon";
import ExclamationTriangleIcon from "../../components/svg/ExclamationTriangleIcon";
import { AddPostModal } from "../../components/modals/AddPostModal.web";
import IconButton from "../../components/buttons/IconButton";
import ActionToast from "../../components/ActionToast";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ContributeGiftType } from "./Gifts/ContributeGiftCard";
import { AnimatedCashGiftCard } from "../../components/card/AnimatedCashGiftCard";
import { AnimatedContributedGiftCard } from "../../components/card/AnimatedContributedGiftCard";
import ProgressToast from "../../components/ProgressToast";
import { getPosts } from "../../redux/api/feed/postApi";
import { fetchPosts, PostModel } from "../../redux/features/posts/postSlice";
import { AppLoader } from "../../components/AppLoader";

const animationMap: { [key: number]: { web: string; mobile: string } } = {
  1: {
    web: "/assets/animations/animation-new1.json",
    mobile: require("../../../public/assets/animations/animation-new1.json"),
  },
  2: {
    web: "/assets/animations/animation-new2.json",
    mobile: require("../../../public/assets/animations/animation-new2.json"),
  },
  3: {
    web: "/assets/animations/animation-new3.json",
    mobile: require("../../../public/assets/animations/animation-new3.json"),
  },
  4: {
    web: "/assets/animations/animation-new4.json",
    mobile: require("../../../public/assets/animations/animation-new4.json"),
  },
  5: {
    web: "/assets/animations/animation-new5.json",
    mobile: require("../../../public/assets/animations/animation-new5.json"),
  },
  6: {
    web: "/assets/animations/animation1.json",
    mobile: require("../../../public/assets/animations/animation1.json"),
  },
  7: {
    web: "/assets/animations/animation2.json",
    mobile: require("../../../public/assets/animations/animation2.json"),
  },
  8: {
    web: "/assets/animations/animation3.json",
    mobile: require("../../../public/assets/animations/animation3.json"),
  },
  9: {
    web: "/assets/animations/congratulations.json",
    mobile: require("../../../public/assets/animations/congratulations.json"),
  },
};

const renderAnimationBasedOnPlatform = (id: number) => {
  const animation = animationMap[id];

  if (!animation) {
    return undefined;
  }

  return Platform.OS === "web" ? animation.web : animation.mobile;
};

const FeedScreen = () => {
  const [progressValue, setProgressValue] = useState(0);

  const giftPost = useAppSelector((state) => state.giftPost.giftPosts);

  const navigation = useNavigation<HomeTabScreenProps<"Feed">["navigation"]>();
  const [itenaryModal, setItenaryModal] = useState(false);
  const [requestModal, setRequestModal] = useState(false);
  const [reportModal, setReportModal] = useState(false);

  const [shareModal, setShareModal] = useState(false);

  const [addPostModal, setAddPostModal] = useState(false);

  const [isToast, setIsToast] = useState(false);

  const pagerViewRef = useRef(null); // Reference for PagerView

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts() as any);
  }, [dispatch]);

  const { error, loading, posts } = useAppSelector((state) => state.post);

  if (loading) {
    return <AppLoader />;
  }

  if (error) {
    return (
      <ActionToast
        title="Something went Wrong!"
        subTitle={error}
        type="Error"
      />
    );
  }
  const handleAddPostButton = () => {
    //close the opened modal
    setItenaryModal(false);
    setReportModal(false);
    setShareModal(false);
    setRequestModal(false);
    setIsToast(false);
    //
    setAddPostModal(true);
  };

  const handleItenaryButton = () => {
    //close the opened modal
    setRequestModal(false);
    setReportModal(false);
    //end
    setItenaryModal(true);
  };

  const handleThreeDotsButton = () => {
    //close the opened modal
    setItenaryModal(false);
    setReportModal(false);
    //end

    setRequestModal(true);
  };

  const handleReportButton = () => {
    //close the opened modal
    setItenaryModal(false);
    setRequestModal(false);
    //end

    setReportModal(true);
  };

  const handleShareButton = () => {
    //close the opened modal
    setItenaryModal(false);
    setRequestModal(false);
    setReportModal(false);
    //end
    setShareModal(true);
  };

  const ItenaryContainer = () => {
    return (
      <TouchableOpacity
        onPress={handleItenaryButton}
        style={styles.itenaryContainer}
      >
        <Text style={styles.itenaryTitleText}>Emma & John</Text>
        <View style={styles.itenaryBottomContainer}>
          <TimeIcon />
          <Text style={styles.itenarySubTileText}>
            Dinner Service at
            <Text style={styles.itenarySubTileText2}> 6:30pm</Text>
          </Text>
          <ArrowDownIcon />
        </View>
      </TouchableOpacity>
    );
  };

  const handleLikesButton = () => {
    navigation.navigate("Likes");
  };

  const handleSignUp = () => {
    navigation.navigate("Auth", {
      screen: "Signup",
    });
  };

  const handleChatButton = () => {
    navigation.navigate("Chat");
  };
  const handleNotificationButton = () => {
    navigation.navigate("Notifications");
  };

  const handlePostButton = () => {
    setAddPostModal(false);
    setIsToast(true);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        {isToast ? (
          <>
            {/* <ActionToast
                title="Uploading Fail!"
                subTitle="Due to some reasons we are unable to upload your post. Please try again later."
                type="Error"
              /> */}
            <ActionToast
              title="Post Uploaded!"
              subTitle="Your Post has been uploaded successfully."
              type="Success"
            />
            {/* <ProgressToast /> */}
          </>
        ) : null}
        {itenaryModal ? (
          <ItenaryModal closeModal={() => setItenaryModal(false)} />
        ) : null}

        {requestModal ? (
          <RequestModal closeModal={() => setRequestModal(false)}>
            <TextIconButton
              icon={<EyeSlashIcon />}
              onPress={() => ""}
              text="Hide Post"
            />
            <TextIconButton
              icon={<ExclamationTriangleIcon />}
              onPress={handleReportButton}
              text="Report Post"
              textStyle={{ color: "red" }}
            />
          </RequestModal>
        ) : null}

        {reportModal ? (
          <ReportModal type="Post" closeModal={() => setReportModal(false)} />
        ) : null}

        {shareModal ? (
          <ShareModal closeModal={() => setShareModal(false)} />
        ) : null}
        {addPostModal ? (
          <AddPostModal
            getProgressValue={(percentageProgress) => {
              setProgressValue(percentageProgress);
            }}
            closeModal={() => setAddPostModal(false)}
          />
        ) : null}

        {progressValue > 0 ? (
          <ProgressToast key={progressValue} percentage={progressValue} />
        ) : null}

        <View style={styles.container}>
          {/* Header */}
          <View style={styles.homeHeader}>
            <View style={styles.leftPartContainer}>
              <ProfileAvatar imageSrc={profileImage} />
              <ItenaryContainer />
            </View>
            <View style={styles.rightPartContainer}>
              <IconButton
                onPress={handleChatButton}
                icon={<CommentIcon redCircle />}
              />
              <IconButton
                onPress={handleNotificationButton}
                icon={<HeartIcon redCircle />}
              />
            </View>
          </View>
          {/* Create Post */}
          <TouchableOpacity onPress={handleAddPostButton}>
            <View style={styles.createPostContainer}>
              <View style={styles.leftPartPostContainer}>
                <ProfileAvatar imageSrc={profileImage} />
              </View>

              <View style={styles.rightPartPostContainer}>
                <View style={styles.postInputContainer}>
                  <Text style={styles.postText}>
                    Write a congratulatory message to Emma & John…
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Special Message */}
          <SpecialMessageCard
            likes={4}
            likesPressed={handleLikesButton}
            sharePressed={handleShareButton}
            threeDotsPress={handleThreeDotsButton}
          />
          {/* Contetns cards */}

          {posts.map((item, index) => {
            if (item.mediaUrls.length > 0 && item.likes) {
              return (
                <MyCard key={item.id} style={{ marginTop: 20 }}>
                  <PostCard
                    likes={item.likes}
                    title={item.content}
                    likesPressed={handleLikesButton}
                    sharePressed={handleShareButton}
                    threeDotsPress={handleThreeDotsButton}
                    isBadge
                    images={item.mediaUrls}
                  />
                </MyCard>
              );
            } else {
              if (item.likes) {
                return (
                  <MyCard key={item.id} style={{ marginTop: 20 }}>
                    <PostCardText
                      likes={item.likes}
                      title={item.content}
                      likesPressed={handleLikesButton}
                      sharePressed={handleShareButton}
                      threeDotsPress={handleThreeDotsButton}
                      isBadge
                    />
                  </MyCard>
                );
              }
              return null;
            }
          })}

          {/* Trivia Questions  */}

          <MyCard style={{ padding: 0, marginTop: 20 }}>
            <TriviaQuestions pagerViewRefs={pagerViewRef} />
          </MyCard>

          {/* gifts cards */}

          {giftPost.map((item) => {
            if (item.type == "cash") {
              return (
                <AnimatedCashGiftCard
                  onPress={() => {
                    navigation.navigate("CashGiftPayment");
                  }}
                  animation={renderAnimationBasedOnPlatform(item.animation)}
                />
              );
            } else {
              return (
                <AnimatedContributedGiftCard
                  value={item.amount}
                  type={item.type}
                  onPress={() => {
                    navigation.navigate("ContributeGiftPayment", {
                      type: item.type as ContributeGiftType,
                    });
                  }}
                  animation={renderAnimationBasedOnPlatform(item.animation)}
                />
              );
            }
          })}

          {/*Guest mode */}
          <View style={styles.needLoginContainer}>
            <Text style={styles.needLoginText}>
              Signup{" "}
              <Text style={styles.needLoginText2}>
                to view more and participate in the celebration
              </Text>
            </Text>
            <TextButton onPress={handleSignUp} text="Signup" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 100, ///because of bottom bar
    paddingHorizontal: 10,
    backgroundColor: whiteColor,
  },
  homeHeader: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  leftPartContainer: {
    flex: 1.7,
    flexDirection: "row",
    alignItems: "center",
  },
  rightPartContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
  },
  itenaryContainer: {
    flex: 1,
    marginLeft: 10,
    gap: 2,
  },
  itenaryTitleText: {
    fontFamily: MontserratSemiBold,
    fontSize: heightPercentageToDP(2.06),
    color: "black",
  },
  itenarySubTileText: {
    fontFamily: MontserratRegular,
    fontSize: heightPercentageToDP(1.4),
    color: "black",
  },
  itenarySubTileText2: {
    fontFamily: MontserratSemiBold,
    fontSize: heightPercentageToDP(1.4),
    color: "black",
  },
  itenaryBottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  createPostContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    marginBottom: 10,
  },
  leftPartPostContainer: {
    flex: 1,
    justifyContent: "center",
  },
  rightPartPostContainer: {
    flex: 6,
  },
  postInputContainer: {
    borderColor: "rgba(78, 93, 120, 0.40)",
    borderWidth: 1,
    flex: 1,
    borderRadius: 6,
    padding: 5,
    justifyContent: "center",
  },
  postText: {
    fontFamily: PoppinsRegular,
    fontSize: heightPercentageToDP(1.2),
    color: "rgba(78, 93, 120, 0.8)",
  },
  needLoginContainer: {
    marginTop: 20,
    gap: 20,
  },
  needLoginText: {
    fontSize: heightPercentageToDP(2),
    fontFamily: MontserratBold,
    textAlign: "center",
    color: "black",
  },
  needLoginText2: {
    fontSize: heightPercentageToDP(2),
    fontFamily: MontserratMedium,
    marginLeft: 4,
    color: "black",
  },
});
