import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'

const AddChatScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
        title: 'Add a new chat',
        headerBackTitle: 'Chats'
    });
  }, [navigation]);

  return (
    <View>
      <Text>AddChatScreen</Text>
    </View>
  )
}

export default AddChatScreen

const styles = StyleSheet.create({})