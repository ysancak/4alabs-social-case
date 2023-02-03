import { StyleSheet, StatusBar, Text, View } from 'react-native';

export default function Likes() {
  return (
    <View style={styles.container}>
      <Text>Likes</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
