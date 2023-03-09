import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./style";
import TimeItem from "../../Components/Likes/TimeItem";

const Likes = () => {
  const data = [
    {
      title: "New",
      actions: [
        {
          type: "liked",
          username: "JohnDoe",
          userImage: "https://randomuser.me/api/portraits/men/1.jpg",
          time: "2h",
          postImage: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        {
          type: "commented",
          username: "JohnDoe",
          userImage: "https://randomuser.me/api/portraits/men/1.jpg",
          time: "4h",
          postImage: "https://randomuser.me/api/portraits/men/1.jpg",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    },
    {
      title: "This Week",
      actions: [
        {
          type: "liked",
          username: "JohnDoe",
          userImage: "https://randomuser.me/api/portraits/men/1.jpg",
          time: "1d",
          postImage: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        {
          type: "mentioned",
          username: "JohnDoe",
          userImage: "https://randomuser.me/api/portraits/men/1.jpg",
          time: "3d",
          postImage: "https://randomuser.me/api/portraits/men/1.jpg",
          comment: "@mucahitsah hello",
        },
        {
          type: "requestedToFollow",
          username: "JohnDoe",
          userImage: "https://randomuser.me/api/portraits/men/1.jpg",
          time: "2d",
        },
      ],
    },
  ];
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
        {data.map((item, index) => (
          <TimeItem title={item.title} actions={item.actions} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Likes;
