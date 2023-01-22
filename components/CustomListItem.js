import React from 'react'
import { Avatar, ListItem } from '@rneui/base'

const CustomListItem = () => {
  return (
    <ListItem>
        <Avatar
            rounded
            source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/847/847969.png'
            }}
        />
        <ListItem.Content>
            <ListItem.Title style={{ fontWeight: '800' }}>First Channel</ListItem.Title>
            <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                This is a test subtitle.
                This is a test subtitle.
                This is a test subtitle.
                This is a test subtitle.
            </ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>
  )
}

export default CustomListItem;