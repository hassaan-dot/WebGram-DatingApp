import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { string } from '../../Resources/strings';
import { TitleAndDescription } from '../../Components';
import { navigate } from '../../utils/NavigationService';

interface VerificationScreenProps {
  navigation: any; // You can refine this type using the navigation prop type if you're using a specific navigator type.
}

const VerificationScreen: React.FC<VerificationScreenProps> = () => {
  const [code, setCode] = useState<string[]>(['', '', '', '']);
  const [timer, setTimer] = useState<number>(30);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  // Use `useRef` with the correct type
  const refs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;  // Declare interval type
  
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);  // Use functional update to get the latest timer value
      }, 1000);
    }
  
    // Cleanup function to clear interval when component unmounts or timer changes
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [timer]);  // Dependency array to run the effect whenever `timer` changes
  
  const handleInputChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Focus on the next input field
    if (text && index < 3) {
      refs.current[index + 1]?.focus();
    }

    if (newCode.every(digit => digit.length === 1)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const handleConfirm = () => {
    navigate('Welcome');
  };

  const handleResendCode = () => {
    setTimer(30);
    setCode(['', '', '', '']);
    refs.current[0]?.focus(); // Focus the first input field
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TitleAndDescription
          title={string.verification}
          desc={string.verification_desc}
        />
      </View>
      <View style={styles.codeBlock}>
        <View style={styles.inputContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              style={[
                styles.input,
                digit ? styles.filledInput : styles.emptyInput,
              ]}
              keyboardType="numeric"
              maxLength={1}
              ref={el => (refs.current[index] = el)}  // Assign the ref correctly
              onChangeText={text => handleInputChange(text, index)}
              value={digit}
            />
          ))}
        </View>

        <TouchableOpacity
          style={[styles.confirmButton, isDisabled && styles.disabledButton]}
          disabled={isDisabled}
          onPress={handleConfirm}>
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </TouchableOpacity>

        <Text style={styles.timerText}>
          {timer > 0 ? `00:${timer < 10 ? '0' : ''}${timer}` : '00:00'}
        </Text>

        <TouchableOpacity onPress={handleResendCode}>
          <Text style={styles.resendCode}>Resend Code</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <View style={styles.flexContainer}>
          <Text style={styles.signupText}>Don’t have an account already? </Text>
          <TouchableOpacity onPress={() => navigate("Signup")}>
            <Text style={styles.signupLink}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default VerificationScreen;
