import { Button } from '@rneui/base';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, TextInput, View } from 'react-native';
import { StyledButton, StyledImage, StyledInput } from '../StyledComponents';

const LoginScreen = () => {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {

  }

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={80}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 items-center justify-center bg-white p-5"
    >
      <StyledImage className="w-40 h-40 rounded-lg" source={require('../assets/signal.png')} />
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
      <StyledButton onPress={signIn} className="mt-2.5 w-52">Login</StyledButton>
      <StyledButton type="outline" className="mt-2.5 w-52">Register</StyledButton>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
