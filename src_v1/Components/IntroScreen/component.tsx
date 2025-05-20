import React from 'react';
import { Image, Text, View, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { styles } from './style';

// Define the types for the component props
interface ComponentProps {
  img: ImageSourcePropType; // Image source type (can be a static image or URI)
  cardTitle: string; // Title of the card
  cardDescription: string; // Description of the card
  totalSteps: number; // Total number of steps (for pagination)
  activeStep: number; // The current active step (for pagination)
  onNext: () => void; // Callback function when "Next" is pressed
  onSkip: () => void; // Callback function when "Skip" is pressed
}

const Component: React.FC<ComponentProps> = ({
  img,
  cardTitle,
  cardDescription,
  totalSteps,
  activeStep,
  onNext,
  onSkip
}) => {
  return (
    <View style={styles.container}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={img} 
          resizeMode="contain"
        />
      </View>

      {/* Card Section */}
      <View style={styles.Card}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>{cardTitle}</Text>
          <View style={styles.divider} />
          <Text style={styles.subHeading}>{cardDescription}</Text>
        </View>

        {/* Footer Section */}
        <View style={styles.footer}>
          <TouchableOpacity onPress={onSkip}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <View style={styles.pagination}>
            {Array.from({ length: totalSteps }).map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  index === activeStep && styles.activeDot,
                ]}
              />
            ))}
          </View>
          <TouchableOpacity onPress={onNext}>
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Component;
