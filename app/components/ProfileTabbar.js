import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '../utils';

export default function MyTabBar({ state, descriptors, navigation }) {
    return (
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const ButtonView = ({children}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={onPress}
                style={styles.buttonView}
              >
                {children}
              </TouchableOpacity>
            );
          }
  
          switch (label) {
            case "Photos":
              return (
                <ButtonView key={`tabbar-${index}`}>
                  <Icon name={isFocused ? 'home' : 'home-outline'} size={30} color={isFocused ? colors.black : colors.lightGray} />
                </ButtonView>
              );
            case "Saved":
              return (
                <ButtonView key={`tabbar-${index}`}>
                  <Icon name={isFocused ? 'bookmark' : 'bookmark-outline'} size={30} color={isFocused ? colors.black : colors.lightGray} />
                </ButtonView>
              );
          }
          
        })}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-evenly', 
    paddingTop: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: colors.lightGray,
    backgroundColor: colors.white
  },
  buttonView: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
});
