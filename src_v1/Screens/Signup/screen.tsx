import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  InputField,
  FilledButton,
  TitleAndDescription,
  ProfileImage,
} from '../../Components';
import styles from './style';
import { string } from '../../Resources/strings';
import { icons } from '../../Resources';
import helpers from '../../utils/helpers';
import { navigate } from '../../utils/NavigationService';

interface LoginScreenProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');

  const NextScreen = () => {
    if (navigation) {
      return navigation.navigate('Create a post');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.login_desc}>
        <TitleAndDescription
          title={string.signup_title}
          titleTextStyle={styles.headerTitle}
          desc={string.signup_desc}
        />
      </View>
      <View style={{ flex: 0.7 }}>
        <View
          style={{
            justifyContent: 'flex-start',
            marginTop: helpers.normalize(0),
          }}
        >
          <View style={{marginBottom:helpers.normalize(20)}}>
          <ProfileImage />
          </View>


          <View style={{ marginTop: 0 }}>
            <InputField
              key={'fullName'}
              placeholder={string.full_name}
              leftIconImage={icons.full_name_person}
              leftIconImageStyle={styles.leftIcon}
              backgroundColor={'#FFFFFF'}
              inputFieldShaddow={true}
              defaultValue={fullName}
              value={fullName}
              autoCapitalize={'words'}
              noBorder={true}
              onChangeText={(text: string) => setFullName(text)}
            />
          </View>

          <InputField
            key={'email'}
            leftIconImage={icons.email_icon}
            placeholder={string.email}
            backgroundColor={'#FFFFFF'}
            inputFieldShaddow={true}
            defaultValue={email}
            containerStyle={{ marginTop: 20 }}
            value={email}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
            noBorder={true}
            onChangeText={(text: string) => setEmail(text)}
          />

          <FilledButton
            title={string.sign_up}
            buttonBackground={"#F5169C"}
            containerStyle={styles.signUpButton}
            titleStyle={styles.signUpButtonText}
            onPress={() => navigation.navigate('Splash')}
          />

          <View style={styles.divider}>
            <View style={styles.leftLine} />
            <Text style={styles.dividerText}>{string.or_login_with} </Text>
            <View style={styles.rightLine} />
          </View>
          <FilledButton
            title={string.cont_with_fb}
            buttonBackground={'white'}
            leftIconImage={icons.fb_icon}
            leftIconImageStyle={styles.socialIcon}
            containerStyle={styles.socialButton}
            titleStyle={styles.socialButtonText}
            onPress={NextScreen}
          />
          <FilledButton
            title={string.cont_with_google}
            buttonBackground={'white'}
            leftIconImage={icons.google_icon}
            leftIconImageStyle={styles.socialIcon}
            containerStyle={styles.socialButton}
            titleStyle={styles.socialButtonText}
            onPress={NextScreen}
          />
        </View>
      </View>
      <View style={styles.alreadyHaveAccountContainer}>
        <View style={styles.flexContainer}>
          <Text style={styles.alreadyHaveAccountText}>
            {string.already_have_account}{' '}
          </Text>
          <TouchableOpacity onPress={() => navigate('Welcome')}>
            <Text style={styles.signupText}>{string.login}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
