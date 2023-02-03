import React from 'react'
import { Image, View, StyleSheet } from 'react-native';

export default function AvatarView({ url, size, borderWidth }) {
  return (
    <View style={{...styles.container, borderWidth, padding: borderWidth > 0 ? 3 : 0 }}>
        <Image source={{ uri: url }} style={{...styles.avatarImageView, width: size ? size : 60, height: size ? size : 60 }} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: '50%', 
        position: 'relative', 
    },
    avatarImageView: {
        borderRadius: '50%'
    },
});
