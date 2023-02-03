import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from 'utils';

export default function NewStoryButton() {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.container} >
        <LinearGradient
          colors={colors.gradientAccent}
          style={styles.linearGradientView}
        >
            <Icon name='add' size={25} color={colors.black} />
        </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 16,
        shadowColor: colors.pink,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 6,
        elevation: 0,
    },
    linearGradientView: {
        width: 56, 
        height: 56, 
        flex: 1,
        borderRadius: '50%',
        alignItems: 'center', 
        justifyContent: 'center',
    }
  });
  