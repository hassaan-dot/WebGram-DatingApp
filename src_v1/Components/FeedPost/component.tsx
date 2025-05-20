import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  Modal,
} from "react-native";
import styles from "./style";
import { icons } from "../../../public/material/icons/icons";
import helpers from "../../utils/helpers";

// Define types for the user and item structure
interface User {
  name: string;
  image: { uri: string };
  role?: string;
}

interface PostItem {
  user: User;
  images: { uri: string }[]; // Update this line to allow objects with uri
}

// Define component props type
interface PostCardProps {
  item: PostItem;
  shareModal?: (item: PostItem) => void | null; // Function now accepts an argument
  userType?: string | null;
}

const Component: React.FC<PostCardProps> = ({ item, shareModal, userType }) => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const dotsButtonRef = useRef<TouchableOpacity | null>(null);
  const [isLiked, setIsLiked] = useState(false); // Track heart click state

  const toggleLike = () => {
    setIsLiked(!isLiked); // Toggle the liked state
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const openMenu = () => {
    if (dotsButtonRef.current) {
      dotsButtonRef.current.measure((fx, fy, width, height, px, py) => {
        const calculatedX = Math.min(px, helpers.wp(100) - 160); // Prevent menu from going off right edge
        const calculatedY = Math.min(py + height, helpers.hp(100) - 110); // Prevent menu from going off bottom edge
        setMenuPosition({ x: calculatedX, y: calculatedY });
        setMenuVisible(true);
      });
    }
  };
  const sharePost = (item) => {
    console.log("Share Post clicked");
    if (shareModal) {
      shareModal(item);
    }
  };

  const handleEditPost = () => {
    setMenuVisible(false);
    console.log("Edit Post clicked");
  };

  const handleDeletePost = () => {
    setMenuVisible(false);
    console.log("Delete Post clicked");
  };

  const renderImages = (imagesArray: { uri: string }[] | undefined) => {
    if (!imagesArray || imagesArray.length === 0) {
      return (
        <View>
          <Text>No images available</Text>
        </View>
      );
    }
    if (imagesArray.length === 1) {
      return <Image source={imagesArray[0]} style={styles.fullSizeImage} />;
    } else if (imagesArray.length === 2) {
      return (
        <View style={styles.twoImagesContainer}>
          {imagesArray.map((img, index) => (
            <Image
              key={index}
              source={imagesArray[1]}
              style={styles.halfSizeImage}
            />
          ))}
        </View>
      );
    } else if (imagesArray.length >= 3) {
      return (
        <View style={styles.multipleImagesContainer}>
          <View>
            <Image source={imagesArray[3]} style={styles.halfSizeImage} />
          </View>
          <View
            style={{ flexDirection: "column", justifyContent: "space-around" }}
          >
            {imagesArray.slice(1, 3).map((img, index) => {
              if (index === 1) {
                return (
                  <TouchableOpacity
                    key={index}
                    style={[styles.quaterSize, styles.remainingOverlay]}
                    onPress={() => console.log("More images clicked")}
                  >
                    <Image
                      source={img}
                      style={[styles.quaterSize, styles.dimmedImage]}
                    />
                    <View style={styles.overlayTextContainer}>
                      <Text style={styles.remainingCountText}>
                        +{imagesArray.length - 3}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              } else {
                return (
                  <Image key={index} source={img} style={styles.quaterSize} />
                );
              }
            })}
          </View>
        </View>
      );
    }

    return null;
  };

  return (
    <View style={styles.card}>
      <View
        style={{
          flexDirection: "row",
          flex: 0.1,
          padding: 8,
          paddingBottom: 0,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={styles.header}>
          <Image source={item.user.image} style={styles.profileImage} />
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text style={styles.userName}>{item.user.name}</Text>
            {item.user.role && (
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={icons.star_mark}
                  style={{ width: helpers.normalize(20), height:helpers.normalize(20) }}
                />

                <Text style={styles.userRole}>{item.user.role}</Text>
              </View>
            )}
          </View>
        </View>
        <TouchableOpacity
          ref={dotsButtonRef}
          style={{
            marginTop: 0,
            marginBottom: 20,
            marginLeft: 20,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
          onPress={openMenu}
        >
          <Image
            source={icons.PostFieldMeni_Icon}
            style={{
              width: helpers.normalize(20),
              height: helpers.normalize(45),
              tintColor: menuVisible ? "#F5169C" : "none",
            }}
          />
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={menuVisible}
        animationType="fade"
        onRequestClose={toggleMenu}
      >
        <Pressable style={styles.modalOverlay} onPress={toggleMenu}>
          <View
            style={[
              styles.menuContainer,
              userType === "guest" && {
                width: helpers.normalize(140),
                backgroundColor: "#FEEAF7",
                borderColor: "#F5169C",
                borderWidth: 1.5,
              },
              {
                position: "absolute",
                top: menuPosition.y,
                left: menuPosition.x - helpers.normalize(30),
                marginTop: helpers.normalize(-10),
                marginRight: helpers.normalize(15),
              },
            ]}
          >
            {userType !== "guest" ? (
              <>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={handleEditPost}
                >
                  <Image source={icons.edit_icon} style={styles.editIcon} />
                  <Text style={styles.menuText}>Edit Post</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={handleDeletePost}
                >
                  <Image source={icons.delete_icon} style={styles.deleteIcon} />
                  <Text style={[styles.menuText, { color: "#F32323" }]}>
                    Delete Post
                  </Text>
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity
                style={styles.reportMenuItem}
                onPress={() => console.log("Report a Problem clicked")}
              >
                <Image
                  source={icons.report_sign_icon}
                  style={styles.reportIcon}
                />
                <Text style={[styles.menuText, { color: "#F5169C" }]}>
                  Report Post
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </Pressable>
      </Modal>

      <View style={styles.imagesContainer}>{renderImages(item.images)}</View>

      <View style={styles.footer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity style={styles.iconButton} onPress={toggleLike}>
            <Image
              source={icons.icon_heart}
              style={[
                styles.heartIcon,
                { tintColor: isLiked ? "#F5169C" : "#333333" }, // Change color based on state
              ]}
            />
          </TouchableOpacity>
          <Text style={styles.likesText}>12</Text>
        </View>
        <View style={styles.sendingButton}>
          <TouchableOpacity onPress={() => sharePost(item)}>
            <Image
              source={icons.sending_icon}
              style={styles.SendingIcon}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Component;
