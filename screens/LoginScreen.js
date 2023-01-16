import { Button } from '@rneui/base';
import React from 'react';
import { KeyboardAvoidingView, Platform, TextInput } from 'react-native';

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 items-center justify-center bg-white p-5"
    >
      <StyledImage className="w-40 h-40" source={require('../assets/signal.png')} />
      <TextInput
        textContentType="emailAddress"
        className="border-b h-10 border-blue-500 w-[300px] mt-10 px-2 text-lg"
        placeholder="Enter your email"
      />
      <TextInput
        secureTextEntry
        textContentType="password"
        className="border-b h-10 border-blue-500 w-[300px] mt-3 px-2 text-lg"
        placeholder="Enter your password"
      />
      <Button className="mt-2.5 w-40">Login</Button>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
