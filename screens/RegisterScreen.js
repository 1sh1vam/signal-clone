import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { StyledButton, StyledInput, StyledText } from '../StyledComponents';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('')

  const navigation = useNavigation();

  const signIn = () => {};

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={80}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 items-center bg-white p-5"
    >
      <StyledText h3>Create a Signal account</StyledText>
      <StyledInput
        autoFocus
        className="h-10 w-[300px] mt-10 px-1 text-lg"
        placeholder="Enter your full name"
        value={name}
        onChangeText={setName}
      />
      <StyledInput
        textContentType="emailAddress"
        className="h-10 w-[300px] px-1 text-lg"
        placeholder="Enter your email"
        value={emailId}
        onChangeText={setEmailId}
      />
      <StyledInput
        secureTextEntry
        textContentType="password"
        className="h-10 w-[300px] px-1 text-lg"
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
      />
      <StyledInput
        secureTextEntry
        className="h-10 w-[300px] px-1 text-lg"
        placeholder="Enter image url"
        value={imageUrl}
        onChangeText={setImageUrl}
      />
      <StyledButton onPress={signIn} buttonStyle={styles.button}>
        Login
      </StyledButton>
      <StyledButton
        onPress={() => navigation.navigate('Register')}
        type="outline"
        buttonStyle={styles.button}
      >
        Register
      </StyledButton>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  button: {
    width: 200,
    marginTop: 10
  }
});