import { StyleSheet, StatusBar, Text, View } from 'react-native';

import CustomText from 'components/CustomText';
import { strings } from 'utils';

export default function Saved() {
  return (
    <View style={styles.container}>
      <CustomText font="PoppinsRegular">{strings.hasNotPhoto}</CustomText>
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
