import { View, Text, Dimensions, Image } from "react-native";
import React, { useState } from "react";
import PagerView from "react-native-pager-view";

import styles from "./style";

const { width } = Dimensions.get("window");

const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(1);

  return (
    <View style={{ width, height: width }}>
      <PagerView
        style={{ width, height: width }}
        initialPage={0}
        onPageSelected={(e) => setIndex(e.nativeEvent.position + 1)}
      >
        {images.map((source, i) => (
          <Image
            key={i}
            style={{ width, height: width }}
            source={{ uri: source }}
          />
        ))}
      </PagerView>
      {/* image index */}
      <View style={styles.imageNumber}>
        <Text style={styles.imageNumberText}>
          {index + "/" + images.length}
        </Text>
      </View>
    </View>
  );
};

export default ImageSlider;
