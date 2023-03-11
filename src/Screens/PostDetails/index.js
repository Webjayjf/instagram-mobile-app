import { View, Text } from "react-native";
import React from "react";

import styles from "./style";
import Post from "../../Components/Home/Post";

const PostDetails = ({ route }) => {
  const { post } = route.params;
  return (
    <View style={styles.container}>
      <Post post={post} />
    </View>
  );
};

export default PostDetails;
