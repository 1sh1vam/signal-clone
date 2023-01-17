import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { StyledButton, StyledImage, StyledInput } from '../StyledComponents';
import {  } from 'nativewind';

const LoginScreen = () => {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const signIn = () => {};

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={80}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 items-center justify-center bg-white p-5"
    >
      <StatusBar style="light" />
      <StyledImage
        className="w-40 h-40 rounded-lg"
        source={require('../assets/signal.png')}
      />
      <StyledInput
        autoFocus
        textContentType="emailAddress"
        className="h-10 w-[300px] mt-10 px-1 text-lg"
        placeholder="Enter your email"
        value={emailId}
        onChangeText={setEmailId}
      />
      <StyledInput
        secureTextEntry
        textContentType="password"
        className="h-10 w-[300px] mt-2 px-1 text-lg"
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
      />
      <StyledButton onPress={signIn} buttonStyle={styles.button}>
        Login
      </StyledButton>
      <StyledButton
        buttonStyle={styles.button}
        onPress={() => navigation.navigate('Register')}
        type="outline"
      >
        Register
      </StyledButton>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  button: {
    width: 200,
    marginTop: 10
  }
})
