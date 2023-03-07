import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";

import styles from "./style";
import LikesIcon from "../../Icons/LikesIcon";
import CommentIcon from "../../Icons/CommentIcon";
import ShareIcon from "../../Icons/ShareIcon";
import SaveIcon from "../../Icons/SaveIcon";
import ImageSlider from "./ImageSlider";

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.userImage}
          source={{
            uri: post.userImage,
          }}
        />
        <View style={styles.usernameCol}>
          <TouchableOpacity>
            <Text style={styles.username}>{post.username}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.location}>Sivas</Text>
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
          <Text style={styles.footerText}>
            <Text style={styles.footerUsername}>{post.username}</Text>
            {post.caption}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Post;
