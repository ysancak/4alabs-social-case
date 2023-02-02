import React from 'react'
import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../utils';

export default function StoryViewButton({ image }) {
  return (
    <TouchableOpacity activeOpacity={0.9}>
      <ImageBackground source={{ uri: image }} style={{ width: 56, height: 56, marginRight: 16 }} imageStyle={styles.container} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 56, 
        height: 56, 
        backgroundColor: 'white', 
        borderRadius: '50%', 
        alignItems: 'center', 
        justifyContent: 'center',
        borderWidth: 2, 
        borderColor: colors.accentStroke,
    },
  });
  