import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions, Image, KeyboardAvoidingView, SafeAreaView, View, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MessageItem from '../components/MessageItem';

import { conversationBg, conversations } from '../core';
import { colors, sizes } from '../utils';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Conversations() {

  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView behavior="padding">
      <StatusBar style="auto" />

      <Image 
        source={conversationBg} 
        style={styles.bgEffectView} 
      />

      <View style={styles.headerView}>
        <TouchableOpacity>
          <Icon name='arrow-back-outline' size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name='menu-outline' size={25} />
        </TouchableOpacity>
      </View>

      <Text style={styles.headerTitleText}>Messages</Text>

      <View style={styles.searchView}>
        <Icon name='search-outline' size={25} style={styles.searchIconView} />
        <TextInput 
          style={styles.searchInputTextView} 
          placeholder="Search for contacts"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          clearButtonMode='while-editing'
          clearTextOnFocus
        />
      </View>

      <ScrollView keyboardDismissMode='on-drag'>
        {conversations.map((item, index) => {
          return <MessageItem 
            key={`conversation-${index}`}
            data={item}
          />
        })}
      </ScrollView>

    </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bgEffectView: {
    position: 'absolute',
    width: windowWidth,
    height: windowHeight,
    top: 100
  }, 
  headerView: {
    padding: sizes.containerPadding,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerTitleText: {
    fontWeight: 'bold',
    fontSize: sizes.h1,
    padding: sizes.containerPadding
  },
  searchView: {
    shadowColor: colors.black,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 0,
    marginBottom: 20
  },
  searchIconView: {
    position: 'absolute', 
    top: 24,
    left: 46, 
    zIndex: 2
  },
  searchInputTextView: {
    backgroundColor: colors.white, 
    paddingHorizontal: 48, 
    height: 56, 
    marginHorizontal: 30,
    marginVertical: 10,
    borderRadius: 16
  }
});
