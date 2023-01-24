import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { AntDesign } from 'react-native-vector-icons';
import { StyledButton, StyledInput } from '../StyledComponents';

const AddChatScreen = ({ navigation }) => {
  const [chatName, setChatName] = useState('');
  useLayoutEffect(() => {
    navigation.setOptions({
        title: 'Add a new chat',
        headerBackTitle: 'Chats'
    });
  }, [navigation]);

  return (
    <View className="p-7 h-full">
      <StyledInput
        autoFocus
        placeholder="Enter the chat name"
        value={chatName}
        leftIcon={<AntDesign name="wechat" color="#000" size={24} />}
        onChangeText={setChatName}
      />
      <StyledButton>Create a new chat</StyledButton>
    </View>
  )
}

export default AddChatScreen

const styles = StyleSheet.create({})