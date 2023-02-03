import { StyleSheet, StatusBar, View } from 'react-native';

import CustomText from 'components/CustomText';
import { strings } from 'utils';

export default function Likes() {
  return (
    <View style={styles.container}>
      <CustomText font="PoppinsRegular">{strings.likes}</CustomText>
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
