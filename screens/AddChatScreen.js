import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { AntDesign } from 'react-native-vector-icons';
import { StyledButton, StyledInput } from '../StyledComponents';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../lib/firebase';

const AddChatScreen = ({ navigation }) => {
  const [chatName, setChatName] = useState('');
  useLayoutEffect(() => {
    navigation.setOptions({
        title: 'Add a new chat',
        headerBackTitle: 'Chats'
    });
  }, [navigation]);

  const onCreateChat = async () => {
    try {
      await addDoc(collection(db, 'chats'), { chatName: chatName });
      navigation.goBack();
    } catch(err) {
      alert('Failed to create the chat ' + err.message);
    }
  }

  return (
    <View className="p-7 h-full">
      <StyledInput
        autoFocus
        placeholder="Enter the chat name"
        value={chatName}
        leftIcon={<AntDesign name="wechat" color="#000" size={24} />}
        onChangeText={setChatName}
        onSubmitEditing={onCreateChat}
      />
      <StyledButton disabled={!chatName} onPress={onCreateChat}>Create a new chat</StyledButton>
    </View>
  )
}

export default AddChatScreen

const styles = StyleSheet.create({})