import { useState } from 'react';
import { StyleSheet, Text, ScrollView, StatusBar, Image, KeyboardAvoidingView, TouchableOpacity, View, SafeAreaView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux'

import AvatarView from '../components/AvatarView';
import MessageItem from '../components/MessageItem';

import { sendMessage } from '../store/messageSlice'
import { colors, sizes } from '../utils';

export default function Messaging({ route, navigation }) {

  const dispatch = useDispatch()
  const messageState = useSelector((state) => state.message)
  const authState = useSelector((state) => state.auth)
  const [messageText, setMessageText] = useState('');

  const sendMessageOnHandler = () => {
    if(messageText.trim().length > 0) {
      dispatch(sendMessage({
        senderId: 1,
        message: messageText,
        time: new Date().getTime()
      }))
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
            url={route.params.user.avatar}
          />
          <View style={styles.userInfoTextView}>
            <Text style={styles.userInfoNameText}>{route.params.user.name}</Text>
            <Text>{route.params.status}</Text>
          </View>
        </View>

      </View>
      
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 120, paddingTop: 20 }}>
        {messageState.messages.map((item, index) => {
          return <MessageItem 
            key={`message-${index}`}
            isAuth={item.senderId === authState.id}
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
        <TouchableOpacity activeOpacity={0.9} style={styles.sendMessageButtonView} onPress={sendMessageOnHandler}>
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
