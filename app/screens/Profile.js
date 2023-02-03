import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, Image, Text, View, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AvatarView from '../components/AvatarView';
import nFormatter from '../helpers/nFormatter';

import { profileBg, userProfile } from '../core';
import { colors, sizes } from '../utils';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Image 
        source={profileBg} 
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
            url={userProfile.avatar}
        />
        <Text style={styles.userNameText}>{userProfile.name}</Text>
        <Text style={styles.userNickNameText}>{userProfile.nickname}</Text>
      </View>

      <View style={styles.statsView}>

        <View style={styles.statItemView}>
          <Text style={styles.statItemTitleText}>Posts</Text>
          <Text style={styles.statItemValueText}>{nFormatter(userProfile.stats.posts, 2)}</Text>
        </View>

        <View style={styles.statItemView}>
          <Text style={styles.statItemTitleText}>Followers</Text>
          <Text style={styles.statItemValueText}>{nFormatter(userProfile.stats.followers, 2)}</Text>
        </View>

        <View style={styles.statItemView}>
          <Text style={styles.statItemTitleText}>Follows</Text>
          <Text style={styles.statItemValueText}>{nFormatter(userProfile.stats.follows, 2)}</Text>
        </View>

      </View>

      <View style={{ backgroundColor: 'red', height: 20 }}>

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
