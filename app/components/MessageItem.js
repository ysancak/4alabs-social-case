import React from 'react'
import { View, StyleSheet } from 'react-native';

import CustomText from 'components/CustomText';
import { colors, sizes } from 'utils';

export default function MessageItem({ isAuth, message }) {
  return (
    <View style={{...styles.container, borderTopLeftRadius: isAuth ? 20 : 0, borderTopRightRadius: isAuth ? 0 : 20, alignSelf: isAuth ? 'flex-end' : 'flex-start' }}>
        <CustomText style={styles.messageText}>{message}</CustomText>
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