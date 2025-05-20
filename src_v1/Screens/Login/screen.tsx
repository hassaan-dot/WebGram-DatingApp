import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  InputField,
  FilledButton,
  TitleAndDescription,
} from "../../Components";
import styles from "./style";
import { string } from "../../Resources/strings";
import { icons } from "../../../public/material/icons/icons";
import { navigate } from "../../utils/NavigationService";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  return (
    <View style={styles.container}>
      <View style={styles.login_desc}>
        <TitleAndDescription
          title={string.login}
          titleTextStyle={styles.headerTitle}
          desc={string.login_description}
        />
      </View>

      <View style={{ flex: 0.6 }}>
        <InputField
          key={"email"}
          leftIconImage={icons.email_icon}
          placeholder={string.email}
          backgroundColor={"#FFFFFF"}
          inputFieldShaddow={true}
          defaultValue={email}
          value={email}
          keyboardType={"email-address"}
          autoCapitalize={"none"}
          noBorder={true}
          onChangeText={(text: string) => {
            setEmail(text);
          }}
        />

        <FilledButton
          title={string.login}
          buttonBackground={"#F5169C"}
          containerStyle={styles.loginButton}
          titleStyle={styles.loginButtonText}
          onPress={() => navigate("Verification")}
        />

        <View style={styles.divider}>
          <View style={styles.leftLine} />
          <Text style={styles.dividerText}>{string.or_login_with}</Text>
          <View style={styles.rightLine} />
        </View>
        {/* <FilledButton
          title={string.cont_with_fb}
          leftIconImage={icons.fb_icon}
          leftIconImageStyle={styles.socialIcon}
          buttonBackground={'white'}
          containerStyle={styles.socialButton}
          titleStyle={styles.socialButtonText}
        /> */}
        <FilledButton
          title={string.cont_with_fb}
          leftIconImage={icons.fb_icon}
          leftIconImageStyle={styles.socialIcon}
          buttonBackground={"white"}
          containerStyle={styles.socialButton}
          titleStyle={styles.socialButtonText}
          onPress={() => {
            console.log("Button Pressed");
          }}
        />

        <FilledButton
          title={string.cont_with_google}
          leftIconImage={icons.google_icon}
          buttonBackground={"white"}
          leftIconImageStyle={styles.socialIcon}
          containerStyle={styles.socialButton}
          titleStyle={styles.socialButtonText}
          onPress={() => {
            console.log("Button Pressed");
          }}
        />
      </View>
      <View style={styles.donthaveAccountContainer}>
        <View style={styles.flexContainer}>
          <Text style={styles.dontHaveAccountText}>
            {string.dont_have_account}
          </Text>
          <TouchableOpacity onPress={() => navigate("Signup")}>
            <Text style={styles.signupText}>{string.signup}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
