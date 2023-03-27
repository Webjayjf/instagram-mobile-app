import { View, Text, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

import styles from "./style";
import ProfileTopTabNavigator from "../../Navigations/ProfileTopTabNavigator";
import FocusPost from "../../Components/Profile/FocusPost";
import profiles from "../../Redux/Data/profiles";

const UserProfile = ({ route, navigation }) => {
  const { username } = route.params;
  const { focusPost } = useSelector((state) => state.profile);
  navigation.setOptions({ title: username });
  const [user] = React.useState(profiles.find((x) => x.username === username));
  return (
    <View style={styles.container}>
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
      </View>
      <ProfileTopTabNavigator
        posts={user.posts}
        taggedPosts={user.taggedPosts}
      />
      {focusPost && <FocusPost post={focusPost} />}
    </View>
  );
};

export default UserProfile;
