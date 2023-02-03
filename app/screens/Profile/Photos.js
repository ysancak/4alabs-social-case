import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, FlatList, Image, Dimensions, Text, View } from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';

import { userPhotos } from '../../core';
import { sizes } from '../../utils';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Photos() {

  const getImageWH = (width, height) => {
    const ratio = Math.min((width / height), 1.5);
    const w = (windowWidth / 2) - (20);
    console.log({ ratio, w, width, height })
    if(ratio == 1) {
      return w
    } else {
      return w / ratio
    }
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />

      <MasonryList
        data={userPhotos}
        keyExtractor={(item, index) => `image-${index}`}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 5, paddingVertical: 10, paddingBottom: 20 }}
        renderItem={({item}) => {
          return <Image source={{ uri: item.url }} style={{ margin: 10, borderRadius: 20, height: getImageWH(item.width, item.height),  }} />
        }}
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
