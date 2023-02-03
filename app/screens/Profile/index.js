import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSelector } from 'react-redux'

import CustomText from 'components/CustomText';
import AvatarView from 'components/AvatarView';
import nFormatter from 'helpers/nFormatter';

import { sizes } from 'utils';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BG = require('assets/bg/bg-profile.png')

import ProfileTabbar from 'components/ProfileTabbar';
import PhotosScreen from '../Profile/Photos';
import SavedScreen from '../Profile/Saved';

const Tab = createMaterialTopTabNavigator();

export default function Profile() {

  const authState = useSelector((state) => state.auth)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Image 
        source={BG} 
        style={styles.bgEffectView} 
      />

      <View style={styles.headerView}>
        <TouchableOpacity>
          <Icon name='arrow-back-outline' size={25} />
        </TouchableOpacity>
      </View>

      <View style={styles.profileView}>
        <AvatarView 
            borderWidth={1}
            size={100}
            url={authState.avatar}
        />
        <CustomText size={sizes.h1} font="PoppinsBold" style={styles.userNameText}>{authState.name}</CustomText>
        <CustomText size={sizes.body} style={styles.userNickNameText}>{authState.nickname}</CustomText>
      </View>

      <View style={styles.statsView}>
        <View style={styles.statItemView}>
          <CustomText size={sizes.body} style={styles.statItemTitleText}>Posts</CustomText>
          <CustomText size={sizes.h2} font="PoppinsBold" style={styles.statItemValueText}>{nFormatter(authState.stats.posts, 2)}</CustomText>
        </View>
        <View style={styles.statItemView}>
          <CustomText size={sizes.body} style={styles.statItemTitleText}>Followers</CustomText>
          <CustomText size={sizes.h2} font="PoppinsBold" style={styles.statItemValueText}>{nFormatter(authState.stats.followers, 2)}</CustomText>
        </View>
        <View style={styles.statItemView}>
          <CustomText size={sizes.body} style={styles.statItemTitleText}>Follows</CustomText>
          <CustomText size={sizes.h2} font="PoppinsBold" style={styles.statItemValueText}>{nFormatter(authState.stats.follows, 2)}</CustomText>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <Tab.Navigator tabBar={props => <ProfileTabbar {...props} />}>
          <Tab.Screen name="Photos" component={PhotosScreen} />
          <Tab.Screen name="Saved" component={SavedScreen} />
        </Tab.Navigator>
      </View>

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
    bottom: 120
  }, 
  headerView: {
    padding: sizes.containerPadding,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  profileView: {
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  userNameText: {
    fontSize: sizes.h2, 
    fontWeight: 'bold', 
    marginTop: 20
  },
  userNickNameText: {
    opacity: 0.5, 
    marginTop: 5
  },
  statsView: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-evenly', 
    marginTop: 35
  },
  statItemView: {
    justifyContent: 'center', 
    alignItems: 'center'
  },
  statItemTitleText: {
    fontSize: sizes.body, 
    opacity: 0.5
  },
  statItemValueText: {
    fontSize: sizes.h3, 
    fontWeight: 'bold', 
    marginTop: 5
  }
});
