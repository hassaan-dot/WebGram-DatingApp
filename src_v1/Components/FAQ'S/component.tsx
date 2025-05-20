
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './Styles';
import {icons} from'../../../public/material/icons/icons'
import { TitleAndDescription } from '..';
// Define the FAQItem type
interface FAQItem {
  question: string; // Changed from `title` to `question`
  answer: string;   // Changed from `description` to `answer`
}

// Define FAQProps for the FAQ component
interface FAQProps {
  Data: FAQItem[];  // Updated to match `Data` structure in props
  title: string;    // Title for the FAQ section
}

const FAQ: React.FC<FAQProps> = ({ Data, title }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleExpand = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        {/* Title section */}
        <TitleAndDescription
          icon={true}
          iconSource={icons.helpaandSupport_Icon_QuestionMark}
          imageStyle={styles.imageStyle}
          title={title}
          titleTextStyle={styles.sectionTitle}
        />

        {/* FAQ Items */}
        {Data?.map((faq, index) => (
          <View key={index} style={styles.ViewfaqHeader}>
            <TouchableOpacity
              onPress={() => handleExpand(index)}
              style={styles.faqHeader}
            >
              <View style={{}}>
                <Text style={styles.faqText}>{faq.question}</Text>
              </View>
              <View>
                <Image
                source={icons.FAQS_Icon}
                style={styles.imageIcon}/>
                
              </View>
            </TouchableOpacity>
            {expandedIndex === index && (
              <Text style={styles.faqContent}>{faq.answer}</Text>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

export default FAQ;
