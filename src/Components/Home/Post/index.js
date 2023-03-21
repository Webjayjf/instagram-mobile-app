import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";

import styles from "./style";
import LikesIcon from "../../Icons/LikesIcon";
import CommentIcon from "../../Icons/CommentIcon";
import ShareIcon from "../../Icons/ShareIcon";
import SaveIcon from "../../Icons/SaveIcon";
import ImageSlider from "./ImageSlider";
import { useNavigation } from "@react-navigation/native";

const Post = ({ post }) => {
  const navigation = useNavigation();
  const [liked, setLiked] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("UserProfile", { username: post.username })
          }
        >
          <Image
            style={styles.userImage}
            source={{
              uri: post.userImage,
            }}
          />
        </TouchableOpacity>
        <View style={styles.usernameCol}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("UserProfile", { username: post.username })
            }
          >
            <Text style={styles.username}>{post.username}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            {post.location && (
              <Text style={styles.location}>{post.location}</Text>
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.options}>
          <SimpleLineIcons name="options" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <ImageSlider images={post.images} />
      </View>
      <View style={styles.footer}>
        <View style={styles.footerRow}>
          <TouchableOpacity
            style={styles.footerIcon}
            onPress={() => setLiked(!liked)}
          >
            <LikesIcon color={"black"} liked={liked} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerIcon}>
            <CommentIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerIcon}>
            <ShareIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerIconRight}>
            <SaveIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.footerRow}>
          <Text>
            <Text
              style={styles.footerUsername}
              onPress={() =>
                navigation.navigate("UserProfile", {
                  username: post.username,
                })
              }
            >
              {post.username + " "}
            </Text>
            <Text style={styles.footerText}>{post.caption}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Post;
