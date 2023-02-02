import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '../utils';

export default function SplashButton({ text }) {
  return (
    <View style={styles.buttonBorderEffectView}>
        <View style={styles.buttonBgEffectView}>
            <TouchableOpacity activeOpacity={0.9} style={styles.buttonTouchableOpacity}>
                <Text>{text}</Text>
                <Icon name='arrow-forward-outline' size={20} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonTouchableOpacity: {
        transform: [{rotate: '-45deg'}],
        paddingHorizontal: 40,
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonBorderEffectView: {
        transform: [{rotate: '45deg'}],
        marginRight: -30,
        marginBottom: -30,
        padding: 8,
        borderRadius: '50%',
        borderWidth: 2,
        borderColor: colors.black,
    },
    buttonBgEffectView: {
        width: 180,
        height: 180,
        backgroundColor: colors.mainThemeColor,
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});