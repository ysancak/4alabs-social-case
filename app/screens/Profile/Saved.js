import { StyleSheet, StatusBar, Text, View } from 'react-native';

import CustomText from 'components/CustomText';

export default function Saved() {
  return (
    <View style={styles.container}>
      <CustomText font="PoppinsRegular">Kaydedilmiş fotoğraf bulunmuyor</CustomText>
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
