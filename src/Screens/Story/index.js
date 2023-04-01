import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";

import styles from "./style";
import DirectIcon from "../../Components/Icons/DirectIcon";

const Story = ({ route, navigation }) => {
  const { story } = route.params;
  const [time, setTime] = React.useState(0);

  setInterval(() => {
    setTime((time) => time + 5);
  }, 10);

  if (time > 100) {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Image style={styles.storyImage} source={{ uri: story.image }} />
      <View style={styles.header}>
        <View style={styles.topBar}>
          <View
            style={{
              width: `${time}%`,
              borderBottomColor: "white",
              borderBottomWidth: 1,
            }}
          ></View>
        </View>
        <View style={styles.headerRow}>
          <Image style={styles.userImage} source={{ uri: story.userImage }} />
          <TouchableOpacity
            style={styles.username}
            onPress={() =>
              navigation.navigate("UserProfile", { username: story.username })
            }
          >
            <Text style={styles.usernameText}>{story.username}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="close" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomBar}>
        <View style={styles.bottomBarInputView}>
          <AntDesign name="camera" size={24} color="white" />
          <TextInput
            style={styles.bottomBarInput}
            placeholder="Send Message"
            placeholderTextColor={"white"}
          />
        </View>
        <View style={styles.bottomBarButtonView}>
          <TouchableOpacity style={styles.bottomBarButton}>
            <DirectIcon color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomBarButton}>
            <Feather name="more-horizontal" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Story;
