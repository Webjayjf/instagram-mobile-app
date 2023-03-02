import {
  View,
  Text,
  Dimensions,
  Animated,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";

import styles from "./style";

const { width } = Dimensions.get("window");

const ImageSlider = () => {
  const photos = [
    {
      uri: "https://cdn.pixabay.com/photo/2017/05/19/07/34/teacup-2325722__340.jpg",
    },
    {
      uri: "https://cdn.pixabay.com/photo/2017/05/02/22/43/mushroom-2279558__340.jpg",
    },
    {
      uri: "https://cdn.pixabay.com/photo/2017/05/18/21/54/tower-bridge-2324875__340.jpg",
    },
    {
      uri: "https://cdn.pixabay.com/photo/2017/05/16/21/24/gorilla-2318998__340.jpg",
    },
    // { uri: 'https://cdn.skillflow.io/resources/img/skillflowninja.png' }
  ];
  const [index, setIndex] = useState(1);
  const scrollX = new Animated.Value(0); // this will be the scroll location of our ScrollView

  // position will be a value between 0 and photos.length - 1 assuming you don't scroll pass the ends of the ScrollView
  let position = Animated.divide(scrollX, width);

  return (
    <View
      // this will bound the size of the ScrollView to be a square because
      // by default, it will expand regardless if it has a flex value or not
      style={{ width, height: width }}
    >
      <ScrollView
        horizontal={true}
        pagingEnabled={true} // animates ScrollView to nearest multiple of it's own width
        showsHorizontalScrollIndicator={false}
        // the onScroll prop will pass a nativeEvent object to a function
        onScroll={(e) => {
          Animated.event(
            // Animated.event returns a function that takes an array where the first element...
            [{ nativeEvent: { contentOffset: { x: scrollX } } }] // ... is an object that maps any nativeEvent prop to a variable
          );
          setIndex(Math.floor(e.nativeEvent.contentOffset.x / width) + 1);
        }} // in this case we are mapping the value of nativeEvent.contentOffset.x to this.scrollX
        scrollEventThrottle={16} // this will ensure that this ScrollView's onScroll prop is called no faster than 16ms between each function call
      >
        {photos.map((source, i) => {
          // for every object in the photos array...
          return (
            // ... we will return a square Image with the corresponding object as the source
            <Image
              key={i} // we will use i for the key because no two (or more) elements in an array will have the same index
              style={{ width, height: width }}
              source={source}
            />
          );
        })}
      </ScrollView>
      {/* image index */}
      <View style={styles.imageNumber}>
        <Text style={styles.imageNumberText}>
          {index + "/" + photos.length}
        </Text>
      </View>
    </View>
  );
};

export default ImageSlider;
