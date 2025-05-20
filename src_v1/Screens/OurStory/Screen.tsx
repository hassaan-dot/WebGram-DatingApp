import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { styles } from "./Styles";
import OurStoryDescription from "../../Components/OurStoryDescription/Component";
import { props } from "../../utils/props/ourStory/props";
import { icons } from "../../../public/material/icons/icons";
import { goBack } from "../../utils/NavigationService";

const Screen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <ImageBackground source={props.coupleImage} style={styles.imageView}>
        <View style={styles.imageWrapper}>
          <TouchableOpacity
        onPress={goBack}
          style={{ top: -5, zIndex: 99999 }}>
            |{" "}
            <Image
              source={icons.ourstoryheader_Icon}
              style={styles.iconStyle}
            ></Image>
          </TouchableOpacity>

          <View style={styles.overlay} />
        </View>
        <View></View>
        <View style={styles.textOverlay}>
          <Text style={styles.nameText}>{props.coupleName}</Text>
          <View style={styles.rowFlex}>
            <Text style={styles.dateText}>{props.date}</Text>
            <Text style={styles.dayText}>{props.day}</Text>
            <View style={styles.monthAndYear}>
              <Text style={styles.monthText}>{props.month}</Text>
              <Text style={styles.yearText}>{props.year}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.TextView}>
        <OurStoryDescription
          title={props.title}
          Description1={props.description}
        />
      </View>
    </ScrollView>
  );
};

export default Screen;
