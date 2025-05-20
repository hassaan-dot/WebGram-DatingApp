import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomCheckboxField from '../CheckBox/checkbox';
import helpers from '../../utils/helpers';

interface ConfirmDeleteOptionProps {
  checked: boolean;
  onToggle: () => void; // Function to toggle the checkbox state
  text: string;
}

const ConfirmDeleteOption: React.FC<ConfirmDeleteOptionProps> = ({ checked, onToggle, text }) => {
  return (
    <View style={[styles.container,{backgroundColor:checked? "#FFFFFF":'#EEEEEE'}]}>
      <View style={{ flex: 0.1, flexDirection: 'column', top: helpers.normalize(10) }}>
        <CustomCheckboxField   field={{ required: false }} value={checked} handleInputChange={onToggle} bgColor={'#EEEEEE'}/>
      </View>
      <View style={{ flex: 0.9 }}>
        <Text style={styles.text}>
          {text}{' '}
          <Text style={styles.boldText}>This action cannot be undone.</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    padding: helpers.normalize(10),
    borderRadius: helpers.normalize(10),

    marginVertical: helpers.normalize(5),
    elevation: 3, // For shadow on Android
  },
  text: {
    fontSize: helpers.normalize(11),
    color: '#333',
    lineHeight: helpers.normalize(23),
    textAlignVertical: 'top',
    padding: helpers.normalize(5),
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: helpers.normalize(14),
    color: '#000',
  },
});

export default ConfirmDeleteOption;
