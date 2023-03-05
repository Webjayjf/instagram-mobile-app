import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import styles from "./style";
import GalleryIcon from "../../Icons/GalleryIcon";
import LikesIcon from "../../Icons/LikesIcon";
import DirectIcon from "../../Icons/DirectIcon";
import { useNavigation } from "@react-navigation/native";

const Posts = () => {
  const navigation = useNavigation();
  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  ];
  const [isLongPress, setIsLongPress] = useState(false);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("PostDetails")}
            onLongPress={() => setIsLongPress(true)}
            onPressOut={() => setIsLongPress(false)}
          >
            <Image
              style={styles.image}
              source={{
                uri: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
              }}
            />
            <GalleryIcon style={styles.icon} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        numColumns={3}
        scrollEnabled
      />
      {isLongPress && (
        <View style={styles.postCardContainer}>
          <View style={styles.postCard}>
            <View style={styles.postCardHeader}>
              <Image
                style={styles.postCardUserImage}
                source={{
                  uri: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                }}
              />
              <View style={styles.postCardUsername}>
                <Text style={styles.postCardUsernameText}>@username</Text>
              </View>
            </View>
            <View style={styles.postCardImage}>
              <Image
                style={styles.postCardImage}
                source={{
                  uri: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                }}
              />
            </View>
            <View style={styles.postCardFooter}>
              <TouchableOpacity style={styles.postCardFooterButton}>
                <LikesIcon color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.postCardFooterButton}>
                <FontAwesome name="user-circle-o" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.postCardFooterButton}>
                <DirectIcon />
              </TouchableOpacity>
              <TouchableOpacity style={styles.postCardFooterButton}>
                <SimpleLineIcons
                  name="options-vertical"
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Posts;
