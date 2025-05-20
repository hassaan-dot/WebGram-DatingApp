import React from 'react';
import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Image,Text, TouchableOpacity} from 'react-native';
import styles from './Styles';
import {icons} from '../../../public/material/icons/icons';
import Feed from '../../Screens/Feed/screen';
import Profile from '../../Screens/Profile/screen';
import Guests from '../../Screens/Guests/screen';
import ViewContributions from '../../Screens/ViewContributions/screen';
import OurStoryScreen from '../../Screens/OurStory/Screen';
import helpers from '../../utils/helpers';
import {goBack} from '../../utils/NavigationService';
import { MontserratBold } from '../../Resources/fonts';

type MainTabsParamList = {
  Feed: undefined;
  OurStory: undefined;
  Gift: undefined;
  Guests: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<MainTabsParamList>();

const MainTabs = () => {
  return (
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={({route}) => ({
          tabBarStyle: styles.BottomTab,
          tabBarLabel: ({focused}) => {
            const labelColor = focused ? '#F624A1' : '#4E5D78';
            return (
              <Text style={{...styles.BottomTabText, color: labelColor}}>
                {route.name == 'OurStory' ? 'Our Story' : route.name}
              </Text>
            );
          },
          tabBarIcon: ({focused}) => {
            let source;

            if (route.name === 'Feed') {
              source = icons.feed_bottom_bar_icon;
            } else if (route.name === 'OurStory') {
              source = icons.ourStory_bottom_bar_icon;
            } else if (route.name === 'Gift') {
              source = icons.gift_bottom_bar_icon;
            } else if (route.name === 'Guests') {
              source = icons.users_icon;
            } else if (route.name === 'Profile') {
              source = icons.user_icon;
            }

            return (
              <Image
                source={source}
                style={[
                  styles.image,
                  {tintColor: focused ? '#F624A1' : '#4E5D78'},
                ]}
              />
            );
          },
        })}>
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{headerShown: false}}

        />

        <Tab.Screen
          name="OurStory"
          component={OurStoryScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Gift"
          component={ViewContributions}
          options={{
            headerLeft: () => (
              <TouchableOpacity
                style={{marginLeft: helpers.normalize(10)}}
                onPress={() => {
                  goBack();
                }}>
                <Image
                  source={icons.back}
                  style={{
                    width: helpers.normalize(20),
                    height: helpers.normalize(20),
                  }}
                />
              </TouchableOpacity>
            ),
            headerTitle: 'Send a Gift',
            headerTitleStyle: {
              fontSize: helpers.normalize(19),
              fontFamily: MontserratBold,
            },
            headerStyle: {
              backgroundColor: '#FFFBFF',
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth:0,
              justifyContent:'center',
              alignItems:'center'
            },
            headerTitleAlign: 'center',
          }}
        />

        <Tab.Screen
          name="Guests"
          component={Guests}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
  );
};

export default MainTabs;
