import { Pressable, ScrollView, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import CustomListItem from '../components/CustomListItem'
import { Avatar } from '@rneui/base'
import useAuthListener from '../hooks/useAuthListener'
import { signOut } from 'firebase/auth'
import { auth } from '../lib/firebase'

const HomeScreen = ({ navigation }) => {
  const { user } = useAuthListener();

  const signOutUser = () => {
    signOut(auth);
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }]
    })
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Signal',
      headerStyle: { backgroundColor: '#fff' },
      headerTitleStyle: { color: '#000' },
      headerTintColor: '#000',
      headerLeft: () => (
        <Pressable onPress={signOutUser} className="ml-4 active:opacity-70">
          <Avatar rounded source={{ uri: user?.photoURL }} />
        </Pressable>
      )
    })
  }, [user]);

  return (
    <ScrollView>
      <CustomListItem />
    </ScrollView>
  )
}

export default HomeScreen