import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import AvatarView from './AvatarView';
import { sizes } from 'utils';

export default function ConversationItem({ data, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
    <View style={styles.container}>
        <AvatarView 
            borderWidth={1}
            url={data.user.avatar}
        />
        <View style={styles.messageView}> 
            <Text style={styles.userNameText}>{data.user.name}</Text>
            <Text numberOfLines={2} style={styles.userMessageText}>{data.lastMessage}</Text>
        </View>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'flex-start',
        marginHorizontal: sizes.containerPadding, 
        marginBottom: 16, 
        backgroundColor: '#FFFFFF99', 
        padding: 16, 
        borderRadius: 22
    },
    messageView: {
        marginTop: 5,
        flex: 1,
        marginLeft: 12
    },
    userNameText: {
        marginBottom: 8, 
        fontSize: sizes.body
    },
    userMessageText: {
        opacity: 0.5,
    }
});
