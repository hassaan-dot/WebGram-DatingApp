import React, { useState } from 'react';
import {FlatList, Image, ListRenderItemInfo, Modal, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { props } from '../../utils/props/feed/props';
import { FeedCategory, FeedPost, ProfileHeader } from '../../Components';
import { images } from '../../../public/material/Images/images'
import {icons} from '../../../public/material/icons/icons'
import styles from './styles';
import { navigate } from '../../utils/NavigationService';
import helpers from '../../utils/helpers';
interface User {
  profileImage?: {uri:string};
  name: string;
  desc: string;
}

const currentUser: User = {
  profileImage: images.profile_image,
  name: 'Farhan Ali',
  desc: 'farhanfarhanali@gmail.com',
};

const otherUser: User = {
  profileImage: images.profile_image,
  name: 'Jane Brown',
  desc: 'If you see me all over the place, it\'s because I’m on bridesmaids’ duties!',
};

interface FeedItem {
  user: { name: string; role?: string; image: { uri: string } };
  images: { uri: string }[]; // Update this line to allow objects with uri
}


interface ScreenProps {
  userType?: 'current' | 'other'; // Default 'current' can be overwritten with 'other'
}

const renderItem = ({ item }: ListRenderItemInfo<FeedItem>) => {
  return <FeedPost item={item} userType='guest'/>;
};

const Screen: React.FC<ScreenProps> = ({ userType = 'guest' }) => {
  // Define categories for the current user and other user
  const categories =
    userType === 'current'
      ? ['Your Posts', 'Liked', 'Tagged']
      : ['Posts', 'Tags'];
    const [isModalVisible, setIsModalVisible] = useState(false);
    const closeModal = () => {
      setIsModalVisible(false);
    };
    const handleButtonPress = () => {
      closeModal();
      navigate("ReportProblem");
    };
  

  return (

    <>
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <FlatList
          data={props}
          renderItem={renderItem}
          ListHeaderComponent={
            <>
              <ProfileHeader
                profileImage={
                  userType === 'current'
                    ? currentUser.profileImage
                    : otherUser.profileImage
                }
                userType={userType}
                name={userType === 'current' ? currentUser.name : otherUser.name}
                desc={userType === 'current' ? currentUser.desc : otherUser.desc}
                onMenuPress={() => setIsModalVisible(true)}
              />
              <FeedCategory categories={categories} />
            </>
          }
          style={styles.flatListContainer}
        />
      </ScrollView>
       <Modal
       transparent
       visible={isModalVisible}
       animationType="fade"
       onRequestClose={closeModal}
     >
       <Pressable style={styles.modalOverlay} onPress={closeModal}>
         <TouchableOpacity
           style={[
             styles.modalContent,
             {
               position: "absolute",
               top:  helpers.normalize(50),
               right:  helpers.normalize(20), // Adjust horizontal alignment
             },
           ]}
           onPress={handleButtonPress}
         >
           <View style={styles.modalHeader}>
             <View>
               <Image
                 source={icons.report_sign_icon}
                 style={styles.reportSignIcon}
               />
             </View>
             <View>
               <Text style={styles.modalText}>Report user</Text>
             </View>
           </View>
         </TouchableOpacity>
       </Pressable>
     </Modal>
     </>

  );
};

export default Screen;
