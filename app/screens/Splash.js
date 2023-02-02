import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function Splash() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeText}>
        <Text>Welcome to</Text>
        <Text style={styles.appNameText}>Socially</Text>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
