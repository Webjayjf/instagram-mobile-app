import { View } from "react-native";
import React from "react";

import styles from "./style";
import SearchBar from "../../Components/Explore/SearchBar";
import Body from "../../Components/Explore/Body";

const Explore = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Body />
    </View>
  );
};

export default Explore;
