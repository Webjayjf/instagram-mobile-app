import { View, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import styles from "./style";
import Header from "../../Components/Home/Header";
import Stories from "../../Components/Home/Stories";
import Post from "../../Components/Home/Post";

const Home = () => {
  const listRef = useRef(null);

  const { posts } = useSelector((state) => state.home);
  const [loadingHeight, setLoadingHeight] = useState(0);

  // 1. Create a new state isRefreshing
  const [isRefreshing, setIsRefreshing] = useState(false);

  function onScrollEndDrag(event) {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY <= loadingHeight && !isRefreshing) {
      // For this example, we will set refreshing to true
      // and then set it to false after 3 seconds.
      // In your app this is where the actual refreshing happens
      setIsRefreshing(true);
      setTimeout(() => {
        setIsRefreshing(false);
        listRef.current.scrollToOffset({
          offset: loadingHeight,
          animated: true,
        });
      }, 1000);
    }
  }

  useEffect(() => {
    listRef.current.scrollToOffset({
      offset: loadingHeight,
      animated: true,
    });
  });

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        ref={listRef}
        style={{ flexDirection: "column" }}
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <>
            <ActivityIndicator
              onLayout={(e) => setLoadingHeight(e.nativeEvent.layout.height)}
              size="large"
              color="black"
            />
            <Stories />
          </>
        )}
        onScrollEndDrag={onScrollEndDrag}
      />
    </View>
  );
};

export default Home;
