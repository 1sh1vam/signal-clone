import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { AntDesign, FontAwesome, Ionicons } from 'react-native-vector-icons';
import { Avatar } from '@rneui/base';
import { StyledButton } from '../StyledComponents';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView } from 'react-native';
import { addDoc, collection, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

const ChatScreen = ({ navigation, route }) => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);

  const { chatName, id } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Chat',
      headerTitleAlign: 'left',
      headerBackVisible: false,
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

  useEffect(
    () =>
      onSnapshot(collection(db, 'chats', id, 'messages'), (doc) => {
        setMessages(
          doc.docs.map((document) => ({ ...document.data(), id: document.id }))
        );
      }),
    []
  );

  const sendMessage = async () => {
    const messagesRef = collection(db, 'chats', id, 'messages');
    addDoc(messagesRef, {
      timeStamp: serverTimestamp(),
      message: inputText,
      displayName: auth.currentUser.displayName,
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
        <ScrollView>
          {messages.map(({ id, message, email, photoUrl, displayName }, index) =>
            email === auth.currentUser.email ? (
              <View
                key={id}
                className={`p-4 bg-[#ECECEC] mr-4 self-end rounded-xl mb-5 max-w-[80%] relative ${index === 0 ? 'mt-4' : ''}`}
              >
                <Avatar
                  rounded
                  size={30}
                  bottom={-15}
                  right={-5}
                  position="absolute"
                  source={{ uri: photoUrl }}
                />
                <Text className="text-black font-medium">{message}</Text>
              </View>
            ) : (
              <View key={id} className={`p-4 bg-[#2B68E6] self-start rounded-lg ml-4 mb-5 max-w-[80%] ${index === 0 ? 'mt-4' : ''} relative`}>
                <Avatar
                  rounded
                  size={30}
                  position="absolute"
                  bottom={-15}
                  left={-5}
                  source={{ uri: photoUrl }}
                />
                <Text className="text-white font-medium">{message}</Text>
                <Text className="text-xs text-white mt-3">{displayName}</Text>
              </View>
            )
          )}
        </ScrollView>
        <View className="flex-row p-4 items-center">
          <TextInput
            className="flex-1 bottom-0 mr-6 h-10 p-2.5 rounded-[30px] bg-[#ECECEC] text-gray-500"
            placeholder="Signal message"
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={sendMessage}
          />
          <StyledButton
            onPress={sendMessage}
            buttonStyle={{ backgroundColor: 'transparent' }}
          >
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
