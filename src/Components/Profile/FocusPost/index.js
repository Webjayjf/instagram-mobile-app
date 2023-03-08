import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import styles from "./style";
import LikesIcon from "../../Icons/LikesIcon";
import DirectIcon from "../../Icons/DirectIcon";

const FocusPost = ({ post }) => {
  return (
    <View style={styles.postCardContainer}>
      <View style={styles.postCard}>
        <View style={styles.postCardHeader}>
          <Image
            style={styles.postCardUserImage}
            source={{
              uri: post.userImage,
            }}
          />
          <View style={styles.postCardUsername}>
            <Text style={styles.postCardUsernameText}>{post.username}</Text>
          </View>
        </View>
        <View style={styles.postCardImage}>
          <Image
            style={styles.postCardImage}
            source={{
              uri: post.image,
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
            <SimpleLineIcons name="options-vertical" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FocusPost;
