import { View, Text } from "react-native";
import React from "react";

import styles from "./style";
import Header from "../../Components/Home/Header";
import Stories from "../../Components/Home/Stories";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Stories />
    </View>
  );
};

export default Home;
