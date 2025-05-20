import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { styles } from "./style";
import { string } from "../../../Resources";
import { navigate } from "../../../utils/NavigationService";
import ProgressBar from "../../ProgressBar/component";

interface ComponentProps {
  image?: ImageSourcePropType; 
  title: string;
  description?: string; 
  goal?: number; 
  progress: number; 
  buttonText: string; 
}

const Component: React.FC<ComponentProps> = ({
  image,
  title,
  description,
  goal,
  progress,
  buttonText,
}) => {
  return (
    <View style={styles.cardContainer}>
      {image && (
        <View style={styles.imageView}>
          <Image source={image} style={styles.cardImage} />
        </View>
      )}
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        {description && (
          <Text style={styles.cardDescription}>{description}</Text>
        )}
        {goal && (
          <View style={styles.progressContainer}>
            <Text style={styles.goalText}>
              {string.goal}:
              <Text style={styles.boldGoal}> ${goal.toLocaleString()}</Text>
            </Text>
            <View style={styles.Bar}>
              <ProgressBar progress={progress} goal={goal}  height={8} color={'#F5169C'}/>
            </View>
            
            
          </View>
        )}

        <TouchableOpacity
          style={styles.contributeButton}
          onPress={() => navigate("CashGift")}
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Component;
