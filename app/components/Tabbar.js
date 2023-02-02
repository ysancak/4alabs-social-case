import React from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { colors } from '../utils';

export default function Tabbar({ state, descriptors, navigation }) {
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
            case "Home":
              return (
                <ButtonView key={`tabbar-${index}`}>
                  <Icon name='home-outline' size={30} color={isFocused ? colors.navigationActiveColor : colors.black} />
                </ButtonView>
              );
            case "Conversations":
              return (
                <ButtonView key={`tabbar-${index}`}>
                  <Icon name='chatbox-outline' size={30} color={isFocused ? colors.navigationActiveColor : colors.black} />
                </ButtonView>
              );
            case "Likes":
              return (
                <ButtonView key={`tabbar-${index}`}>
                  <Icon name='heart-outline' size={30} color={isFocused ? colors.navigationActiveColor : colors.black} />
                </ButtonView>
              );
            case "Profile":
              return (
                <ButtonView key={`tabbar-${index}`}>
                  <Icon name='person-circle-outline' size={30} color={isFocused ? colors.navigationActiveColor : colors.black} />
                </ButtonView>
              );
            case "Add":
              return (
                <ButtonView key={`tabbar-${index}`}>
                  <View style={styles.centerButtonView}>
                    <Icon 
                        name='add-circle-outline'
                        size={30} 
                        color={colors.white} 
                        style={styles.centerButtonIcon}
                    />
                  </View>
                </ButtonView>
              )
          }
        })}
      </View>
    );
  }
  

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row', 
      height: 65, 
      backgroundColor: colors.white, 
      borderTopRightRadius: 20, 
      borderTopLeftRadius: 20,
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.1,
      shadowRadius: 12,
      elevation: 4,
    },
    buttonView: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
    },
    centerButtonView: {
      width: 65, 
      height: 65, 
      backgroundColor: colors.black, 
      justifyContent: 'center', 
      alignItems: 'center', 
      borderRadius: 25,
      transform: [{rotate: '-45deg'}],
      top: -25,
      shadowColor: colors.black,
      shadowOffset: {
        width: -5,
        height: 6,
      },
      shadowOpacity: 0.35,
      shadowRadius: 12,
      elevation: 4,
    },
    centerButtonIcon: {
      transform: [{rotate: '-45deg'}],
    }
  });
  