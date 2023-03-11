import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

import styles from "./style";
import TimeItem from "../../Components/Likes/TimeItem";

const Likes = () => {
  const { notifications } = useSelector((state) => state.notifications);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Notifications</Text>
      </View>
      <TouchableOpacity style={styles.followRequests}>
        <View style={styles.followRequestsImageView}>
          <Image
            style={styles.followRequestsImage}
            source={{
              uri: "https://randomuser.me/api/portraits/men/1.jpg",
            }}
          />
        </View>
        <View style={styles.followRequestsTexts}>
          <Text style={styles.followRequestsTopText}>Follow Requests</Text>
          <Text style={styles.followRequestsBottomText}>
            Approve or ignore requests
          </Text>
        </View>
      </TouchableOpacity>
      <ScrollView style={styles.notificationList}>
        {notifications.map((item, index) => (
          <TimeItem title={item.title} actions={item.actions} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Likes;
