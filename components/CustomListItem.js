import React, { useEffect, useState } from 'react'
import { Avatar, ListItem } from '@rneui/base'
import { collection, limit, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { db } from '../lib/firebase';

const CustomListItem = ({ id, chatName, desc, photoUrl, enterChat }) => {
  const [message, setMessage] = useState(null);
  useEffect(
    () =>
      onSnapshot(query(collection(db, 'chats', id, 'messages'), orderBy('timeStamp', 'desc'), limit(1)), (doc) => {
        if (!doc.empty) {
            setMessage({ ...doc.docs[0].data(), id: doc.docs[0].id });
        }
      }),
    []
  );

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