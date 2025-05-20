import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { styles } from "./styles";
interface AvatarProps {
  name: string;
  imageUrl?: string;
  size?: number;
  totalScore?: number;
  myscore?: number;
}

const CustomAvatar: React.FC<AvatarProps> = ({
  name,
  imageUrl,
  totalScore,
  myscore,
  size = 80,
}) => {
  return (
    <View style={[styles.container]}>
      <View
        style={[
          styles.initialsContainer,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
          },
        ]}
      >
        <Text style={styles.yougot}>You got</Text>
        <Text style={[styles.initialsText]}>
          <Text style={styles.myscore}>{myscore}</Text> / {totalScore}
        </Text>
        <Text style={styles.Questions}>Questions</Text>
      </View>
    </View>
  );
};

export default CustomAvatar;
