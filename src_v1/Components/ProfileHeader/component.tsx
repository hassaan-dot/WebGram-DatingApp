import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { icons } from "../../../public/material/icons/icons";
import helpers from "../../utils/helpers";

interface ProfileHeaderProps {
  profileImage: any; // Can be a local image source or a URI string
  name: string;
  userType: string;
  desc: string;
  onMenuPress: () => void; // Function for the menu button press
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  profileImage,
  userType,
  name,
  desc,
  onMenuPress,
}) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: helpers.wp(95),
          position: "relative", // Important for absolute positioning of child elements
        }}
      >
        {/* Profile Title */}
        <Text style={styles.profileTitle}>
          {userType === "current" ? "Profile" : "Guest Profile"}
        </Text>

        {/* Menu Icon */}
        <TouchableOpacity
          style={{
            position: "absolute",
            top: helpers.normalize(-4),
            right: helpers.normalize(10),
          }}
          onPress={onMenuPress}
        >
          <Image
            source={userType === "current" ? icons.menu_Icon : icons.vertical_three_dots}
            style={[
              styles.image_menu,
              userType === "current" ?
              {
                width: helpers.normalize(30),
                height: helpers.normalize(30),
              }: null
            ]}
          />
        </TouchableOpacity>
      </View>

      {/* Profile Image Section */}
      <View style={styles.profileImageContainer}>
        <Image
          source={profileImage}
          style={styles.profileImage}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.profileName}>{name}</Text>
      <Text style={styles.profileDesc}>{desc}</Text>
    </View>
  );
};

export default ProfileHeader;
