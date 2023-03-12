import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

import styles from "./style";
import ProfileTopTabNavigator from "../../Navigations/ProfileTopTabNavigator";
import FocusPost from "../../Components/Profile/FocusPost";

const Profile = () => {
  const { user, focusPost } = useSelector((state) => state.profile);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerLeft}>
          <Text style={styles.headerText}>{user.username}</Text>
          <Feather name="chevron-down" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerRight}>
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.info}>
        <View style={styles.infoRow}>
          <View style={styles.userImageView}>
            <Image
              style={styles.userImage}
              source={{
                uri: user.userImage,
              }}
            />
          </View>
          <View style={styles.userStatistics}>
            <View style={styles.userStatistic}>
              <Text style={styles.userStatisticValue}>{user.posts.length}</Text>
              <Text style={styles.userStatisticText}>Posts</Text>
            </View>
            <View style={styles.userStatistic}>
              <Text style={styles.userStatisticValue}>
                {user.followers.length}
              </Text>
              <Text style={styles.userStatisticText}>Followers</Text>
            </View>
            <View style={styles.userStatistic}>
              <Text style={styles.userStatisticValue}>
                {user.following.length}
              </Text>
              <Text style={styles.userStatisticText}>Following</Text>
            </View>
          </View>
        </View>
        <View style={styles.nameAndBioCol}>
          <Text style={styles.displayName}>{user.displayName}</Text>
          <Text style={styles.bio}>{user.bio}</Text>
        </View>

        <TouchableOpacity style={styles.editProfile}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <ProfileTopTabNavigator
        posts={user.posts}
        taggedPosts={user.taggedPosts}
      />
      {focusPost && <FocusPost post={focusPost} />}
    </View>
  );
};

export default Profile;
