import { View, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import styles from "./style";
import GalleryIcon from "../../Icons/GalleryIcon";
import { setFocusPost } from "../../../Redux/Slices/profileSlice";

const Posts = ({ posts }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={posts}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("PostDetails", { post: item })}
            onLongPress={() => dispatch(setFocusPost(item))}
            onPressOut={() => dispatch(setFocusPost(null))}
          >
            <Image
              style={styles.image}
              source={{
                uri: item.images[0],
              }}
            />
            {item.images.length > 1 && <GalleryIcon style={styles.icon} />}
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        numColumns={3}
        scrollEnabled
      />
    </View>
  );
};

export default Posts;
