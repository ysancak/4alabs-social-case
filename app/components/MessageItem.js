import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

import { colors, sizes } from 'utils';

export default function MessageItem({ isAuth, message }) {
  return (
    <View style={{...styles.container, borderTopLeftRadius: isAuth ? 20 : 0, borderTopRightRadius: isAuth ? 0 : 20, alignSelf: isAuth ? 'flex-end' : 'flex-start' }}>
        <Text style={styles.messageText}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGray2, 
        marginHorizontal: sizes.containerPadding, 
        maxWidth: '80%', 
        marginBottom: 10,
        padding: 18,
        borderRadius: 20
    },
    messageText: {
        fontSize: sizes.body, 
        opacity: 0.6
    }
});