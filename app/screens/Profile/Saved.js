import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../utils';

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
