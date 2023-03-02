import { View, Text, TextInput } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import styles from "./style";
const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <AntDesign
          name="search1"
          size={20}
          color={"gray"}
          style={styles.icon}
        />
        <TextInput style={styles.input} placeholder="Search" />
      </View>
    </View>
  );
};

export default SearchBar;
