import React from 'react';
import { FlatList, ListRenderItemInfo, ScrollView } from 'react-native';
import { props } from '../../utils/props/feed/props';
import { FeedCategory, FeedPost, ProfileHeader } from '../../Components';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../../public/material/Images/images'
import { navigate } from '../../utils/NavigationService';

interface User {
  profileImage: {uri:string};
  name: string;
  desc: string;
}

interface ScreenProps {
  userType?: 'current' | 'other';
}

const currentUser: User = {
  profileImage: images.profile_image,
  name: 'Farhan Ali',
  desc: 'farhanfarhanali@gmail.com',
};

const otherUser: User = {
  profileImage: images.profile_image,
  name: 'Jane Brown',
  desc: 'If you see me all over the place, it’s because I’m on bridesmaids’ duties!',
};

const renderItem = ({ item }: ListRenderItemInfo<any>) => {
  return <FeedPost item={item} shareModal={()=>{console.log("pressesd")}} userType={null}/>;
};

const Screen: React.FC<ScreenProps> = ({ userType = 'current' }) => {
  const categories = userType === 'current' ? ['Your Posts', 'Liked', 'Tagged'] : ['Posts', 'Tagged'];

  return (
    // <SafeAreaView>
      <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
        <FlatList
          data={props}
          renderItem={renderItem}
          ListHeaderComponent={
            <>
              <ProfileHeader
                profileImage={userType === 'current' ? currentUser.profileImage : otherUser.profileImage}
                onMenuPress={() => navigate('MenuScreen')}
                userType={userType}
                name={userType === 'current' ? currentUser.name : otherUser.name}
                desc={userType === 'current' ? currentUser.desc : otherUser.desc}
              />
              <FeedCategory categories={categories} />
            </>
          }
          contentContainerStyle={{ padding: 10, paddingHorizontal: 10, marginBottom: 10,flex:1 }}
        />
      </ScrollView>
    // </SafeAreaView>
  );
};

export default Screen;
