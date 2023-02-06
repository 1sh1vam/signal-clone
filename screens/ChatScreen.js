import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { AntDesign, FontAwesome, Ionicons } from 'react-native-vector-icons'
import { Avatar } from '@rneui/base';
import { StyledButton } from '../StyledComponents'

const ChatScreen = ({ navigation, route }) => {
  const { chatName } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Chat',
      headerTitleAlign: 'left',
      headerTitle: () => (
        <View className="flex-row items-center flex-1">
          <Avatar rounded source={{ uri: 'https://cdn-icons-png.flaticon.com/512/847/847969.png' }} />
          <Text className="text-white font-bold ml-2.5">{chatName}</Text>
        </View>
      ),
      headerLeft: () => (
        <StyledButton onPress={navigation.goBack} buttonStyle={styles.headerButtonStyle}>
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
      )
    })
  }, []);

  return (
    <View>
      <Text>ChatScreen</Text>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  headerButtonStyle: {
    backgroundColor: 'transparent'
  }
})