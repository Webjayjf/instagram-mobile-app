import { FlatList } from "react-native";
import React from "react";

import styles from "./style";
import Post from "../../Components/Home/Post";
import PagerView from "react-native-pager-view";

const PostList = ({ route }) => {
  const { posts, postIndex } = route.params;

  return (
    <PagerView
      style={styles.container}
      initialPage={postIndex}
      orientation="vertical"
    >
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </PagerView>
  );
};

export default PostList;
