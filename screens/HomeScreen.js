import { Pressable, ScrollView, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import CustomListItem from '../components/CustomListItem'
import { Avatar } from '@rneui/base'
import { AntDesign, SimpleLineIcons } from 'react-native-vector-icons';
import useAuthListener from '../hooks/useAuthListener';
import { signOut } from 'firebase/auth'
import { auth, db } from '../lib/firebase'
import { collection, onSnapshot } from 'firebase/firestore';

const HomeScreen = ({ navigation }) => {
  const { user } = useAuthListener();
  const [chats, setChats] = useState([]);

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
        <Pressable onPress={signOutUser} className="active:opacity-70">
          <Avatar rounded source={{ uri: user?.photoURL }} />
        </Pressable>
      ),
      headerRight: () => (
        <View className="w-20 flex-row justify-between">
          <Pressable className="active:opacity-60">
            <AntDesign name="camerao" size={24} color="black" />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('AddChat')} className="active:opacity-60">
            <SimpleLineIcons name="pencil" size={24} color="black" />
          </Pressable>
        </View>
      )
    })
  }, [user]);

  useEffect(() => onSnapshot(collection(db, 'chats'), (fChats) => {
    setChats(fChats.docs.map((document) => ({ ...document.data(), id: document.id })));
  }), [])

  console.log('chats', chats);
  return (
    <ScrollView>
      {chats.map((chat) => <CustomListItem key={chat.id} {...chat} />)}
    </ScrollView>
  )
}

export default HomeScreen