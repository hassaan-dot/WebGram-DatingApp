import React, { useState } from 'react';
import { View, Text, LayoutChangeEvent } from 'react-native';
import EventCircle from '../Circle/component';
import { styles } from './style';
import helpers from '../../utils/helpers';

interface Event {
  status: string; // Add other possible statuses
  icon: any; // You can define a more specific type for `icon` based on your icon component
  event: string;
  details?: string;
  time: string;
  lineColor?: string;
}

interface ChainDetails {
  title: string;
  events: Event[];
}

interface Props {
  chainDetails: ChainDetails;
}

const Component: React.FC<Props> = ({ chainDetails }) => {
  const [descriptionHeights, setDescriptionHeights] = useState<{ [key: number]: number }>({});

  const handleDescriptionLayout = (event: LayoutChangeEvent, index: number) => {
    const { height } = event.nativeEvent.layout;
    setDescriptionHeights((prev) => ({
      ...prev,
      [index]: height,
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.chainTitleContainer}>
        <Text style={styles.chainTitleText}>{chainDetails?.title}</Text>
      </View>
      <View style={styles.eventChainContainer}>
        {chainDetails?.events.map((event, index) => (
          <View key={index} style={styles.eventContainer}>
            <View style={styles.timelineContainer}>
              <EventCircle status={event.status} icon={event.icon} />
              {index < chainDetails.events?.length - 1 && (
                <View
                  style={[
                    styles.verticalLine,
                    {
                      height: descriptionHeights[index]
                        ? descriptionHeights[index] + helpers.normalize(20)
                        : helpers.normalize(35),
                      backgroundColor: event?.lineColor || '#C4C4C4',
                    },
                  ]}
                />
              )}
            </View>
            <View style={styles.textContainer}>
              <Text
                style={[
                  styles.eventTitle,
                  { color: event.status === 'done' ? '#F96DC1' : '#FCC3E6' },
                ]}
              >
                {event.event}
              </Text>
              {event?.details && (
                <View style={{ paddingRight: helpers.normalize(52) }}>
                  <Text
                    style={[
                      styles.description,
                      { color: event.status === 'done' ? 'black' : '#BABCC2' },
                    ]}
                    onLayout={(e) => handleDescriptionLayout(e, index)}
                  >
                    {event.details}
                  </Text>
                </View>
              )}
              <Text
                style={[
                  styles.description,
                  { fontWeight: event.status === 'done' ? 'bold' : '400' },
                ]}
              >
                {event.time}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Component;
