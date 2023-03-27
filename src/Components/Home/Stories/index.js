import { Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";

import styles from "./style";

const Stories = () => {
  const { stories } = useSelector((state) => state.home);
  return (
    <FlatList
      style={styles.container}
      data={stories}
      renderItem={({ item }) => (
        <LinearGradient
          colors={["#FBAA47", "#D91A46", "#A60F93"]}
          style={styles.item}
        >
          <TouchableOpacity style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: item.userImage }} />
          </TouchableOpacity>
          <Text style={styles.username}>{item.username}</Text>
        </LinearGradient>
      )}
      horizontal
      scrollEnabled
    />
  );
};

export default Stories;
