import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import { useSelector } from 'react-redux'

const windowWidth = Dimensions.get('window').width;

export default function Photos() {

  const authState = useSelector((state) => state.auth)

  const getImageWH = (width, height) => {
    const ratio = Math.min((width / height), 1.5);
    const w = (windowWidth / 2) - (20);
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
        data={authState.images}
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
