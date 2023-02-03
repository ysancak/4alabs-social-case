import React, { useState } from 'react'
import { Image, View, StyleSheet, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { colors } from '../utils';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SplashSnapCarousel({ gallery }) {

    const [active, setActive] = useState(0);

    const _renderItem = ({item, index}) => {
        return (
            <View style={styles.renderItemContainer}>
                <Image 
                    style={styles.renderItemImage}
                    source={item} 
                />
            </View>
        );
    }

    const PaginationDots = ({ length, activeSlide }) => {
        return (
            <Pagination
              dotsLength={length}
              activeDotIndex={activeSlide}
              containerStyle={{  
                bottom: 0,
              }}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: colors.black
              }}
              inactiveDotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                borderWidth: 1,
                backgroundColor: colors.white,
                borderColor: colors.black
              }}
              inactiveDotOpacity={1}
              inactiveDotScale={1}
            />
        );
    }

    return (
        <View>
        <Carousel
          data={gallery}
          renderItem={(image) => _renderItem(image)}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
          autoplay
          autoplayDelay={500}
          useScrollView={true}      
          onSnapToItem={(index) => setActive(index) }
          contentContainerCustomStyle={{
            alignItems: 'center',
            justifyContent: 'center'
          }}
        />
        <PaginationDots 
          length={gallery.length}
          activeSlide={active}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    renderItemContainer: {
        alignItems: 'center', 
        justifyContent: 'center',
    },
    renderItemImage: {
        width: windowWidth - 40,
        height: windowHeight - 40,
        resizeMode: 'contain'
    }
});
  