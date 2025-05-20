import React, { useState } from "react";
import { View } from "react-native";
import PostField from "../../Components/PostField/component";
import styles from "./Style";
import { string } from "../../Resources/strings";
import {
  AIAssistResult,
  FilledButton,
  TitleAndDescription,
} from '../../Components'
import { StackNavigationProp } from "@react-navigation/stack";
import { navigate, RootStackParamList } from "../../utils/NavigationService";

type NavigationProp = StackNavigationProp<RootStackParamList, "PostScreen">;

interface PostScreenProps {
  navigation: NavigationProp;
}

const PostScreen: React.FC<PostScreenProps> = () => {
  const [assistResult, setAssistResult] = useState<string[]>([
    string.ai_caption,
  ]);
  const [selectedAICaption, setSelectedAICaption] = useState<{
    selectedCaption: string;
  }>({
    selectedCaption: string.ai_caption,
  });
  const updateAssistResult = (result: string[]) => {
    setAssistResult(result);
  };

  return (



    <View style={styles.container}>
      <View style={styles.textContainer}>
        <TitleAndDescription desc={string.post_screen_desc} />
      </View>
      <View style={styles.mainSection}>
         <PostField
          updatedCaption={updateAssistResult}
          currentSelectedCaption={selectedAICaption}
          // setParentStateForAi={setParentStateForAi}
        /> 
        <AIAssistResult
          // setParentStateForAi={setParentStateForAi}
          result={assistResult}
          currentCaption={setSelectedAICaption}
        />
      </View>
      <View style={styles.Buttonflex}>
        <FilledButton
          title="Publish"
          buttonBackground={'#F5169C'}
          containerStyle={styles.publishButton}
          titleStyle={styles.publishButtonText}
          onPress={() => navigate("Verification")}
        />
      </View>
    </View>
  );
};

export default PostScreen;
