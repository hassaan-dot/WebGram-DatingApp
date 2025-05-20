import React, { useState } from "react";
import { View,LayoutChangeEvent, Text } from "react-native";
import helpers from "../../utils/helpers";
import {styles} from './Styles'
interface ProgressBarProps {
  progress: number;
  goal: number;
  color: string;
  height: number;
  backgroundColor?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress = 3500,
  goal = 5000,
  height = 8,
  color = "#F5169C",
}) => {
  const [containerWidth, setContainerWidth] = useState<number | null>(null);

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setContainerWidth(width);
  };

  const progressWidth =
    containerWidth && containerWidth > 0
      ? (progress / goal) * containerWidth
      : helpers.wp(80);

  const dotPosition = progressWidth - helpers.normalize(6); 
  return (
    <>
      <View
        style={[styles.container, { width: containerWidth || "100%", height }]}
        onLayout={handleLayout}
      >
        <View
          style={[styles.progress, { width: progressWidth, height, backgroundColor: color }]}
        />
      </View>
      {containerWidth && progressWidth > 0 && (
        <>
          <View
            style={[
              styles.dot,
              {
                left: dotPosition, 
              },
            ]}
          />
          <View
            style={[
              styles.textContainer,
              {
                left: dotPosition, 
              },
            ]}
          >
            <Text
              style={[styles.textStyle,{left:helpers.normalize(-9)}]}
            >
              ${progress.toLocaleString()}
            </Text>
          </View>
        </>
      )}
    </>
  );
};

export default ProgressBar;
