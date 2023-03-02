import { View, Text, FlatList } from "react-native";
import React from "react";

import styles from "./style";
import Header from "../../Components/Home/Header";
import Stories from "../../Components/Home/Stories";
import Post from "../../Components/Home/Post";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Stories />
      <FlatList
        style={{ flexDirection: "column" }}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={() => <Post />}
        keyExtractor={(item) => item.toString()}
      />
    </View>
  );
};

export default Home;
