import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import styles from "./style";
import ExploreIcon from "../../Components/Icons/ExploreIcon";
import AddIcon from "../../Components/Icons/AddIcon";
import CameraIcon from "../../Components/Icons/CameraIcon";

const Direct = () => {
  const navigation = useNavigation();
  const { messages } = useSelector((state) => state.direct);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerIcons}>
          <CameraIcon color="black" style={styles.headerIcon} />
          <AddIcon color="black" style={styles.headerIcon} />
        </View>
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      {/* search bar */}
      <View style={styles.searchBar}>
        <ExploreIcon color="black" />
        <Text style={styles.searchBarText}>Search bar</Text>
      </View>
      {/* direct messages */}
      <FlatList
        style={styles.directMessages}
        data={messages}
        renderItem={({ item, index }) => (
          <View style={styles.directMessage}>
            <View style={styles.directMessageImage}>
              <Image
                source={{
                  uri: item.userimage,
                }}
                style={{ width: 50, height: 50 }}
              />
            </View>
            <View style={styles.directMessageText}>
              <Text style={styles.directMessageUsername}>{item.username}</Text>
              <Text style={styles.directMessagePreview}>{item.message}</Text>
            </View>
          </View>
        )}
        ListHeaderComponent={() => (
          <View style={styles.directMessagesHeader}>
            <Text style={styles.directMessagesHeaderText}>Messages</Text>
            <Text style={styles.directMessagesHeaderRequestText}>Requests</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Direct;
