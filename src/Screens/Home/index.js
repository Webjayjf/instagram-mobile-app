import { View, Text } from "react-native";
import React from "react";

import styles from "./style";
import Header from "../../Components/Home/Header";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Home</Text>
    </View>
  );
};

export default Home;
