import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { styles } from "./Styles";
import { icons } from "../../Resources";
import { goBack, navigate } from "../../utils/NavigationService";
import { props } from "../../utils/props/menu/props";
import helpers from "../../utils/helpers";

interface MenuItem {
  id: string;
  icon: any; // You can refine this type if needed
  title: string;
  description?: string | null; // Allow null as a valid type
}


const MenuScreen: React.FC = () => {
  const functionHandle = (index: number): void => {
    if (props.length - 1 === index) {
      navigate("DeleteAccount");
    } else if (props.length - 3 === index) {
      navigate("HelpAndSupport");
    } else if (props.length - 4 === index) {
      navigate("DeleteAccount");
    }
  };

  const renderItem = ({ item, index }: { item: MenuItem; index: number }) => (
    <View style={styles.containerButton}>
      <TouchableOpacity
        onPress={() => {
          functionHandle(index);
        }}
        style={[
          styles.option,
          {
            backgroundColor: props.length - 6 === index ? "#FFEAF8" : "#FFFBFF",
            // For iOS shadow properties
            shadowColor: props.length - 6 === index ? "#000" : "transparent",
            shadowOffset:
              props.length - 6 === index
                ? { width: 0, height: 1 }
                : { width: 0, height: 0 },
            shadowOpacity: props.length - 6 === index ? 0.2 : 0,
            shadowRadius: props.length - 6 === index ? 1 : 0,

            // For Android elevation (shadow effect)
            elevation: props.length - 6 === index ? 3 : 0,
          },
        ]}
      >
        <View style={styles.iconContainer}>
          <Image
            source={item.icon}
            style={{
              width: helpers.normalize(50),
              height: helpers.normalize(45),
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          {item.description && (
            <Text style={styles.description}>{item.description}</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <FlatList
          data={props}
          contentContainerStyle={styles.flatListStyle}
          ListHeaderComponent={
            <View style={styles.headerComponentStyle}>
              <TouchableOpacity onPress={() => goBack}>
                <Image source={icons.Cross_Icon} style={styles.imageStyle} />
              </TouchableOpacity>
            </View>
          }
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.logoutView}>
        <View style={styles.logoutInnerView}>
          <TouchableOpacity
            style={styles.logoutButtonStyle}
            onPress={() => navigate("Splash")}
          >
            <Image
              source={icons.SignOut_Icon}
              style={styles.ImageStyleIcon}
            ></Image>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MenuScreen;
