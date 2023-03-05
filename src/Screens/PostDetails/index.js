import { View, Text } from "react-native";
import React from "react";

import styles from "./style";
import Post from "../../Components/Home/Post";

const PostDetails = () => {
  return (
    <View style={styles.container}>
      <Post />
    </View>
  );
};

export default PostDetails;
