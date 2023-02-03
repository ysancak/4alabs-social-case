import React from 'react'
import { StyleSheet, Text, Image, ImageBackground, View, TouchableOpacity } from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

import CustomText from 'components/CustomText';
import nFormatter from 'helpers/nFormatter';
import { colors, sizes } from 'utils';

export default function FeedItem({ data }) {
  return (
    <TouchableOpacity activeOpacity={0.9}>
    <ImageBackground source={{ uri: data.image }} resizeMode="cover" style={styles.container} imageStyle={{ borderRadius: 20 }}>
        <View style={styles.userBarView}>
            <View style={styles.userInfoView}>
                <Image source={{ uri: data.user.avatar }} style={styles.userAvatarView} />
                <View>
                    <CustomText style={styles.userNameText}>{data.user.name}</CustomText>
                    <CustomText style={styles.feedTimeText}>{moment(new Date(data.time) * 1000).fromNow()}</CustomText>
                </View>
            </View>
            <View>
                <Icon name='ellipsis-vertical' size={25} color={colors.white} />
            </View>
        </View>
        <View style={styles.statsBarView}>
            <View style={styles.statItemView}>
                <Icon name='heart-outline' size={25} color={colors.white} />
                <CustomText style={styles.statItemText}>{nFormatter(data.stats.like, 1)}</CustomText>
            </View>
            <View style={styles.statItemView}>
                <Icon name='chatbox-outline' size={25} color={colors.white} />
                <CustomText style={styles.statItemText}>{nFormatter(data.stats.like, 1)}</CustomText>
            </View>
            <View style={styles.statItemView}>
                <Icon name='bookmark-outline' size={25} color={colors.white} />
                <CustomText style={styles.statItemText}>{nFormatter(data.stats.like, 1)}</CustomText>
            </View>
        </View>
    </ImageBackground>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between', 
        height: 288, 
        margin: sizes.containerPadding, 
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 0,
    },
    userBarView: {
        padding: sizes.containerPadding, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    userInfoView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    userAvatarView: {
        width: 40, 
        height: 40,
        backgroundColor: 'gray',
        marginRight: 8,
        borderRadius: '50%'
    },
    userNameText: {
        color: colors.white
    },
    feedTimeText: {
        opacity: 0.5, 
        color: colors.white
    },
    statsBarView: {
        flexDirection: 'row', 
        justifyContent: 'space-evenly', 
        padding: sizes.containerPadding
    },
    statItemView: {
        backgroundColor: '#FFFFFF80', 
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingHorizontal: 10, 
        paddingVertical: 5, 
        borderRadius: '50%'
    },
    statItemText: {
        fontSize: sizes.body,
        color: colors.white, 
        marginLeft: 4
    }
  });
  