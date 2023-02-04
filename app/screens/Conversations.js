import { useEffect, useRef, useState } from 'react';
import { StyleSheet, StatusBar, TouchableOpacity, Dimensions, Image, KeyboardAvoidingView, SafeAreaView, Animated, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux'

import ConversationItem from 'components/ConversationItem';
import CustomText from 'components/CustomText';

import { colors, sizes, strings } from 'utils';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BG = require('assets/bg/bg-conversation.png')

export default function Conversations({ navigation }) {

  const scrollRef = useRef();
  const scrolling = useRef(new Animated.Value(0)).current;
  const opacityTitle = scrolling.interpolate({
    inputRange: [0, 30],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const conversationState = useSelector((state) => state.conversation)
  const [queryConversationList, setQueryConversationList] = useState(conversationState.conversations)
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    let list = searchText.trim().length > 0 ? filteredConversations() : conversationState.conversations;
    setQueryConversationList(list)
  }, [searchText])

  const onInputFocus = () => {
    scrollRef.current?.scrollTo({
      y: 85,
      animated: true,
    });
  }

  const filteredConversations = () => {
    return queryConversationList.filter(conv => conv.user.name.toLowerCase().includes(searchText.trim().toLowerCase()))
  }

  const navigateConversationDetail = (data) => {
    navigation.navigate("Messaging", { user: data.user, status: data.status })
  }

  return (
    <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
      <StatusBar style="auto" />

      <Image 
        source={BG} 
        style={styles.bgEffectView} 
      />

      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name='arrow-back-outline' size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name='menu-outline' size={25} />
        </TouchableOpacity>
      </View>


      <Animated.ScrollView 
        ref={scrollRef}
        keyboardDismissMode='on-drag' 
        stickyHeaderIndices={[1]}
        contentContainerStyle={styles.conversationView}
        onScroll={Animated.event(
          [{
            nativeEvent: {
              contentOffset: {
                y: scrolling,
              },
            },
          }],
          { useNativeDriver: true },
        )}
        scrollEventThrottle={16}
        >

            <Animated.Text 
              style={{...styles.headerTitleText, opacity: opacityTitle }}
            >
                <CustomText size={sizes.h1} font="PoppinsBold" >{strings.messages}</CustomText>
            </Animated.Text>
 
            <View style={{ backgroundColor: colors.white }}>
            <Animated.View style={styles.searchView}>
              <Icon name='search-outline' size={25} style={styles.searchIconView} />
              <TextInput 
                style={styles.searchInputTextView} 
                placeholder="Search for contacts"
                value={searchText}
                onFocus={onInputFocus}
                onChangeText={(text) => setSearchText(text)}
                clearButtonMode='always'
              />
            </Animated.View>
            </View>

            {
              queryConversationList.map((item, index) => {
                return <ConversationItem 
                  key={`conversation-${index}`}
                  data={item}
                  onPress={() => navigateConversationDetail(item)}
                />
              })
            }

      </Animated.ScrollView>

      <TouchableOpacity activeOpacity={0.9} style={styles.createNewButtonView} onPress={() => navigateConversationDetail(item)}>
        <Icon name='send-outline' size={25} color={colors.white} />
      </TouchableOpacity>

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
    justifyContent: 'space-between',
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
  },
  conversationView: {
    paddingBottom: 25,
  },
  createNewButtonView: {
    position: 'absolute', 
    bottom: 0, 
    alignSelf: 'center', 
    margin: 35, 
    backgroundColor: colors.black, 
    padding: 20, 
    borderRadius: 24,
    transform: [{rotate: '-45deg'}],
  }
});
