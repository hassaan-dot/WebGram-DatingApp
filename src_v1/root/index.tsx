import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { Image, StatusBar, TouchableOpacity } from "react-native";
import { icons } from "../../public/material/icons/icons";
import { goBack } from "../utils/NavigationService";
import helpers from "../utils/helpers";
import { navigationRef } from "../utils/NavigationService";
import Splash from "../Screens/Splash/screen";
import Welcome from "../Screens/Welcome/screen";
import HomeScreen_Iternity from "../Screens/HomeScreenIternity/screen";
import Celebrate_Together from "../Screens/CelebrateTogether/screen";
import LoginScreen from "../Screens/Login/screen";
import Signup from "../Screens/Signup/screen";
import VerificationScreen from "../Screens/Verification/verification";
import PostScreen from "../Screens/CreatePost/screen";
import MainTabs from "./BottomTabs/MainTabs";
import ViewContributions from "../Screens/ViewContributions/screen";
import YourContributions from "../Screens/YourContributions/screen";
import MenuScreen from "../Screens/MenuScreen/Screen";
import DeleteAccountScreen from "../Screens/DeleteAccont/Screen";
import CashGift from "../Screens/CashGift/screen";
import ReportProblem from "../Screens/ReportAProblem/screen";
import HelpSupportScreen from "../Screens/HelpAndSupport/Screen";
// import Trivia from '../Screens/Trivia/screen'
import { MontserratBold } from "../Resources/fonts";

type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  ReportProblem: undefined;
  ViewContributions: undefined;
  YourContributions: undefined;
  Verification: undefined;
  Feed: undefined;
  Signup: undefined;
  PostScreen: undefined;
  CashGift: undefined;
  DeleteAccount: undefined;
  Welcome: undefined;
  MenuScreen: undefined;
  CelebrateTogether: undefined;
  HomeScreen_Iternity: undefined;
  HelpAndSupport: undefined;
  CreatePost: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

type ScreenOptionsProps = {
  title: string;
  showHeader?: boolean;
  backgroundColor?: string;
  customHeaderLeft?: React.ReactElement;
  customHeaderTitle?: React.ReactElement | string;
};

const generateScreenOptions = ({
  title,
  showHeader = true,
  backgroundColor = "#FFFFFF",
  customHeaderLeft,
  customHeaderTitle,
}: ScreenOptionsProps): StackNavigationOptions => ({
  headerShown: showHeader,
  headerStyle: {
    backgroundColor,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerLeft: (): React.ReactNode =>
    customHeaderLeft || (
      <TouchableOpacity
        style={{ marginLeft: helpers.normalize(10) }}
        onPress={() => {
          goBack();
        }}
      >
        <Image
          source={icons.back}
          style={{
            width: helpers.normalize(20),
            height: helpers.normalize(20),
          }}
        />
      </TouchableOpacity>
    ),

  headerTitle:
    typeof customHeaderTitle === "string"
      ? customHeaderTitle
      : () => customHeaderTitle,
  headerTitleStyle: {
    fontSize: helpers.normalize(19),
    fontFamily: MontserratBold,
    color: "#2F2F2F",
  },
  headerTitleAlign: "center",
});

export const AppIndex: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Splash">
          {/* <Stack.Screen
            name="Trivia"
            component={Trivia}
            options={{ headerShown: false }}
            // options={generateScreenOptions({
            //   title: "Trivia",
            //   customHeaderTitle: "Trivia",
            //   backgroundColor: "#FFFBFF",
            // })}
          /> */}
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CelebrateTogether"
            component={Celebrate_Together}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HelpAndSupport"
            component={HelpSupportScreen}
            options={generateScreenOptions({
              title: "Help and Support",
              backgroundColor: "#FFFBFF",
              customHeaderTitle: "Help and Support",
            })}
          />
          <Stack.Screen
            name="ViewContributions"
            component={ViewContributions}
            options={generateScreenOptions({
              title: "Send a Gift",
              backgroundColor: "#FFFBFF",
            })}
          />
          <Stack.Screen
            name="YourContributions"
            component={YourContributions}
            options={generateScreenOptions({
              title: "YourContributions",
              backgroundColor: "#FFFBFF",
              customHeaderTitle: "Send a Gift",
            })}
          />
          <Stack.Screen
            name="Verification"
            component={VerificationScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Feed"
            component={MainTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreatePost"
            component={PostScreen}
            options={generateScreenOptions({
              //ignore title , we use customHeaderTitle
              title: "Create a Post",
              customHeaderTitle: "Create a Post",
              backgroundColor: "#FFFBFF",
            })}
          />
          <Stack.Screen
            name="CashGift"
            component={CashGift}
            options={generateScreenOptions({
              title: "Cash Gift",
              customHeaderTitle: "Cash Gift",
              backgroundColor: "#FFFBFF",
            })}
          />

          <Stack.Screen
            name="DeleteAccount"
            component={DeleteAccountScreen}
            options={generateScreenOptions({
              title: "Delete Your Account",
              customHeaderTitle: "Delete Your Account",

              backgroundColor: "#FFFBFF",
            })}
          />

          <Stack.Screen
            name="MenuScreen"
            component={MenuScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="HomeScreen_Iternity"
            component={HomeScreen_Iternity}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ReportProblem"
            component={ReportProblem}
            options={generateScreenOptions({
              title: "Report a Problem",
              customHeaderTitle: "Report a Problem",
              backgroundColor: "#FFFBFF",
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
