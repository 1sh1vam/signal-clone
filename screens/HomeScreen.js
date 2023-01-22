import { ScrollView, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import CustomListItem from '../components/CustomListItem'
import { Avatar } from '@rneui/base'
import useAuthListener from '../hooks/useAuthListener'

const HomeScreen = ({ navigation }) => {
  const { user } = useAuthListener();
  console.log('user', user);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Signal',
      headerStyle: { backgroundColor: '#fff' },
      headerTitleStyle: { color: '#000' },
      headerTintColor: '#000',
      headerLeft: () => (
        <View className="ml-4">
          <Avatar rounded source={{ uri: user?.photoURL }} />
        </View>
      )
    })
  }, []);

  return (
    <ScrollView>
      <CustomListItem />
    </ScrollView>
  )
}

export default HomeScreen