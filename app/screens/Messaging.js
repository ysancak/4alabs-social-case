import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Image, KeyboardAvoidingView, TouchableOpacity, View, SafeAreaView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import AvatarView from '../components/AvatarView';
import MessageItem from '../components/MessageItem';

import { colors, sizes } from '../utils';
import {messageDetail, userProfile} from '../core';

export default function Messaging({ navigation }) {
  
  const [messageText, setMessageText] = useState('');
  const [messageList, setMessageList] = useState(messageDetail.messages)

  const sendMessage = () => {
    if(messageText.trim().length > 0) {
      messageList.push({
        senderId: 1,
        message: messageText,
        time: new Date().getTime()
      })
      setMessageText('');
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>

      <StatusBar style="auto" />

      <View style={styles.headerView}>
        
        <Image source={require('../../assets/message-band.png')} style={styles.headerImageView} />
        
        <View style={styles.innerHeaderView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name='arrow-back-outline' size={25} />
          </TouchableOpacity>
        </View>

        <View style={styles.userInfoView}>
          <AvatarView 
            borderWidth={1}
            size={70}
            url={messageDetail.user.avatar}
          />
          <View style={styles.userInfoTextView}>
            <Text style={styles.userInfoNameText}>{messageDetail.user.name}</Text>
            <Text>{messageDetail.user.status}</Text>
          </View>
        </View>

      </View>
      
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 120, paddingTop: 20 }}>
        {messageDetail.messages.sort((a, b) => a.time > b.time).map((item, index) => {
          return <MessageItem 
            key={`message-${index}`}
            isAuth={item.senderId === userProfile.id}
            message={item.message}
          />
        })}
      </ScrollView>

      <View style={styles.messageSendView}>
        <TextInput 
          style={styles.messageInputView}
          placeholder="Write a message..."
          value={messageText}
          onChangeText={(text) => setMessageText(text)}
        />
        <TouchableOpacity activeOpacity={0.9} style={styles.sendMessageButtonView} onPress={sendMessage}>
          <Icon name='send-outline' size={25} color={colors.white} />
        </TouchableOpacity>
      </View> 

    </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerView: {
    backgroundColor: colors.mainThemeColor, 
    position: 'relative', 
    borderRadius: 20, 
    marginHorizontal: sizes.containerPadding, 
    marginTop: sizes.containerPadding, 
    padding: 8
  },
  headerImageView: {
    position: 'absolute', 
    top: -120, 
    left: 0
  },
  innerHeaderView: {
    padding: sizes.containerPadding,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  userInfoView: {
    alignItems: 'center', 
    flexDirection: 'row', 
    margin: 20
  },
  userInfoTextView: {
    marginLeft: 20
  },
  userInfoNameText: {
    fontSize: sizes.h3, 
    fontWeight: 'bold', 
    marginBottom: 5
  },
  messageSendView: {
    flexDirection: 'row', 
    position: 'absolute', 
    bottom: 0, 
    backgroundColor: colors.white, 
    margin: 20, 
    borderRadius: '50%', 
    alignItems: 'center', 
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: colors.black,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 0,
  },
  messageInputView: {
    flex: 1, 
    height: '100%'
  },
  sendMessageButtonView: {
    backgroundColor: colors.black, 
    padding: 18, 
    borderRadius: 24,
    shadowColor: colors.black,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 0,
    transform: [{rotate: '-45deg'}],
  }
});
