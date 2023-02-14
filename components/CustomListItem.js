import React from 'react'
import { Avatar, ListItem } from '@rneui/base'

const CustomListItem = ({ chatName, desc, photoUrl, enterChat }) => {
  return (
    <ListItem style={{ borderTopWidth: 1, borderColor: '#ECECEC' }} onPress={enterChat}>
        <Avatar
            rounded
            source={{
                uri: photoUrl
            }}
        />
        <ListItem.Content>
            <ListItem.Title style={{ fontWeight: '800' }}>{chatName}</ListItem.Title>
            <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                {desc}
            </ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>
  )
}

export default CustomListItem;