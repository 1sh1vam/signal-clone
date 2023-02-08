import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { AntDesign, FontAwesome, Ionicons } from 'react-native-vector-icons';
import { Avatar } from '@rneui/base';
import { StyledButton } from '../StyledComponents';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView } from 'react-native';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

const ChatScreen = ({ navigation, route }) => {
  const [inputText, setInputText] = useState('');

  const { chatName, id } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Chat',
      headerTitleAlign: 'left',
      headerTitle: () => (
        <View className="flex-row items-center flex-1">
          <Avatar
            rounded
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/847/847969.png',
            }}
          />
          <Text className="text-white font-bold ml-2.5">{chatName}</Text>
        </View>
      ),
      headerLeft: () => (
        <StyledButton
          onPress={navigation.goBack}
          buttonStyle={styles.headerButtonStyle}
        >
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </StyledButton>
      ),
      headerRight: () => (
        <View className="flex-row gap-2">
          <StyledButton buttonStyle={styles.headerButtonStyle}>
            <FontAwesome name="video-camera" size={24} color="#fff" />
          </StyledButton>
          <StyledButton buttonStyle={styles.headerButtonStyle}>
            <Ionicons name="call" size={24} color="#fff" />
          </StyledButton>
        </View>
      ),
    });
  }, []);

  const sendMessage = async () => {
    const messagesRef = collection(db, 'chats', id, 'messages');
    addDoc(messagesRef, {
      timeStampe: serverTimestamp(),
      message: inputText,
      email: auth.currentUser.email,
      photoUrl: auth.currentUser.photoURL,
    });
    setInputText('');
  }

  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={90}
        className="flex-1"
      >
        <ScrollView></ScrollView>
        <View className="flex-row p-4 items-center gap-6">
          <TextInput
            className="flex-1 bottom-0 h-10 p-2.5 rounded-[30px] bg-[#ECECEC] text-gray-500"
            placeholder="Signal message"
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={sendMessage}
          />
          <StyledButton onPress={sendMessage} buttonStyle={{ backgroundColor: 'transparent' }}>
            <Ionicons name="send" size={24} color="#2B68E6" />
          </StyledButton>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  headerButtonStyle: {
    backgroundColor: 'transparent',
  },
});
