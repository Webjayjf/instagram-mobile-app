import { Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";

import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const Stories = () => {
  const navigation = useNavigation();
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
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() =>
              navigation.navigate("Story", { story: item, stories: stories })
            }
          >
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
