import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Image, StyleSheet, Text, View, Dimensions } from 'react-native';

import SnapCarousel from 'components/SnapCarousel';
import SplashButton from 'components/SplashButton';

import { sizes, strings } from 'utils';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BG = require('assets/bg/bg-splash.png')
const GALLERY = [
  require('assets/splash/hero.png'),
  require('assets/splash/hero-2.png')
]

export default function Splash({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Image 
        source={BG} 
        style={styles.bgEffectView} 
      />

      <View style={styles.welcomeTextView}>
        <Text style={styles.welcomeText}>{strings.welcomeTo}</Text>
        <Text style={styles.appNameText}>{strings.appName}</Text>
      </View>

      <View style={styles.galleryView}>
        <SnapCarousel 
          gallery={GALLERY}
        />
      </View>

      <View style={styles.buttonView}>
          <SplashButton 
            text={strings.next}
            onPress={() => navigation.navigate("TabNavigation")}
          />
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
    width: windowHeight,
    height: windowHeight,
    top: -200,
    left: -(windowWidth/1.6)
  },  
  welcomeTextView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcomeText: {
    fontSize: sizes.body
  },
  appNameText: {
    fontSize: sizes.title,
    fontWeight: 'bold'
  }, 
  galleryView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },

});
