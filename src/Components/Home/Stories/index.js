import { Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./style";

const Stories = () => {
  const stories = [
    {
      id: "1",
      username: "james",
      image:
        "https://images.unsplash.com/photo-1520342868574-5fa3804e551c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6ff92caffcdd63681a35134a6770ed3b&auto=format&fit=crop&w=1951&q=80",
    },
    {
      id: "2",
      username: "daniel",
      image:
        "https://images.unsplash.com/photo-1522205408450-add114ad53fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=368f45b0888aeb0b7b08e3a1084d3ede&auto=format&fit=crop&w=1950&q=80",
    },
    {
      id: "3",
      username: "alex",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=94a1e718d89ca60a6337a6008341ca50&auto=format&fit=crop&w=1950&q=80",
    },
    {
      id: "4",
      username: "steve",
      image:
        "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=89719a0d55dd05e2deae4120227e2b55&auto=format&fit=crop&w=1953&q=80",
    },
    {
      id: "5",
      username: "ryan",
      image:
        "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=89719a0d55dd05e2deae4120227e2b55&auto=format&fit=crop&w=1953&q=80",
    },
    {
      id: "6",
      username: "felix",
      image:
        "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=89719a0d55dd05e2deae4120227e2b55&auto=format&fit=crop&w=1953&q=80",
    },
  ];
  return (
    <FlatList
      style={styles.container}
      data={stories}
      renderItem={({ item }) => (
        <LinearGradient
          colors={["#FBAA47", "#D91A46", "#A60F93"]}
          style={styles.item}
        >
          <TouchableOpacity style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: item.image }} />
          </TouchableOpacity>
          <Text style={styles.username}>{item.username}</Text>
        </LinearGradient>
      )}
      horizontal
      scrollEnabled
    />
  );
};

export default Stories;
