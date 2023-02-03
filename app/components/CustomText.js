import React from 'react'
import { Text } from 'react-native';
import { useFonts } from 'expo-font';

import { sizes } from 'utils';

export default function CustomText(props) {

    const [loaded] = useFonts({
        PoppinsBold: require('fonts/Poppins-Bold.ttf'),
        PoppinsLight: require('fonts/Poppins-Light.ttf'),
        PoppinsMedium: require('fonts/Poppins-Medium.ttf'),
        PoppinsRegular: require('fonts/Poppins-Regular.ttf'),
    });
    
  return (
    <Text style={{  ...props.style, fontFamily: props.font, fontSize: props.size }} >
        {props.children}
    </Text>
  )
}

CustomText.defaultProps = {
    font: 'PoppinsRegular',
    size: sizes.bodySmall
};