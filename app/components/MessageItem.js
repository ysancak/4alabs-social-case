import React from 'react'
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';

import { sizes } from '../utils';

export default function MessageItem({ data, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
    <View style={styles.container}>
        <View style={styles.avatarContainerView}>
            <Image source={{ uri: data.user.avatar }} style={styles.avatarImageView} />
        </View>
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
    avatarContainerView: {
        borderWidth: 1, 
        padding: 3, 
        borderRadius: '50%', 
        position: 'relative', 
        marginRight: 20
    },
    avatarImageView: {
        width: 60, 
        height: 60, 
        borderRadius: '50%'
    },
    messageView: {
        marginTop: 5,
        flex: 1,
    },
    userNameText: {
        marginBottom: 8, 
        fontSize: sizes.body
    },
    userMessageText: {
        opacity: 0.5,
    }
});
