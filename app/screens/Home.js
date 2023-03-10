import { SafeAreaView, StatusBar, ScrollView, StyleSheet, Text, Image, Dimensions, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux'

import CustomText from 'components/CustomText';
import NewStoryButton from 'components/NewStoryButton';
import StoryViewButton from 'components/StoryViewCircle';
import FeedItem from 'components/FeedItem';

import { sizes, strings } from 'utils';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BG = require('assets/bg/bg-home.png')

export default function Home() {

  const feedState = useSelector((state) => state.feed)
  const storyState = useSelector((state) => state.story)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Image 
        source={BG} 
        style={styles.bgEffectView} 
      />

      <View style={styles.headerView}>
        <CustomText size={sizes.body} font="PoppinsBold" style={styles.headerTitleText}>{strings.appName}</CustomText>
        <TouchableOpacity>
          <Icon name='notifications' size={25} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.feedContentView}>
        
        <CustomText size={sizes.h1} font="PoppinsBold" style={styles.feedTitleText}>{strings.feed}</CustomText>
        
        <ScrollView horizontal style={styles.storiesView}>
          <NewStoryButton />
          {
            storyState.stories.map((item, index) => {
              return <StoryViewButton 
                key={`story-${index}`}
                data={item}
              />
            })
          }
        </ScrollView>
        
        {
          feedState.feeds.map((item, index) => {
            return <FeedItem 
              key={`feed-${index}`}
              data={item}
            />
          })
        }
        
      </ScrollView>

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
    left: -(windowWidth)
  }, 
  headerView: {
    padding: sizes.containerPadding,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerTitleText: {
    fontWeight: 'bold',
    fontSize: sizes.h3
  },
  feedTitleText: {
    padding: sizes.containerPadding,
    fontWeight: 'bold',
    fontSize: sizes.h1
  },
  storiesView: {
    paddingHorizontal: sizes.containerPadding,
    paddingVertical: 16,
  },
  feedContentView: {
    paddingBottom: 25
  }
});
