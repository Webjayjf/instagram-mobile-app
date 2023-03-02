import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";

import styles from "./style";
import LikesIcon from "../../Icons/LikesIcon";
import CommentIcon from "../../Icons/CommentIcon";
import ShareIcon from "../../Icons/ShareIcon";
import SaveIcon from "../../Icons/SaveIcon";
import ImageSlider from "./ImageSlider";

const Post = () => {
  const [liked, setLiked] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.userImage}
          source={{
            uri: "https://images.unsplash.com/photo-1520342868574-5fa3804e551c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6ff92caffcdd63681a35134a6770ed3b&auto=format&fit=crop&w=1951&q=80",
          }}
        />
        <View style={styles.usernameCol}>
          <TouchableOpacity>
            <Text style={styles.username}>james</Text>
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
        <ImageSlider />
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
            <Text style={styles.footerUsername}>mucahitsah</Text>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Post;
