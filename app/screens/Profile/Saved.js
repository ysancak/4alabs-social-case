import { StyleSheet, StatusBar, Text, View } from 'react-native';

export default function Saved() {
  return (
    <View style={styles.container}>
      <Text>Kaydedilmiş fotoğraf bulunmuyor</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000002',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
