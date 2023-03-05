import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import styles from "./style";
import ProfileTopTabNavigator from "../../Navigations/ProfileTopTabNavigator";

const Tab = createMaterialTopTabNavigator();

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerLeft}>
          <Text style={styles.headerText}>mucahitsah</Text>
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
                uri: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
              }}
            />
          </View>
          <View style={styles.userStatistics}>
            <View style={styles.userStatistic}>
              <Text style={styles.userStatisticValue}>100</Text>
              <Text style={styles.userStatisticText}>Posts</Text>
            </View>
            <View style={styles.userStatistic}>
              <Text style={styles.userStatisticValue}>100</Text>
              <Text style={styles.userStatisticText}>Followers</Text>
            </View>
            <View style={styles.userStatistic}>
              <Text style={styles.userStatisticValue}>100</Text>
              <Text style={styles.userStatisticText}>Following</Text>
            </View>
          </View>
        </View>
        <View style={styles.nameAndBioCol}>
          <Text style={styles.displayName}>Mücahit Şahin</Text>
          <Text style={styles.bio}>Software Developer</Text>
        </View>

        <TouchableOpacity style={styles.editProfile}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <ProfileTopTabNavigator />
    </View>
  );
};

export default Profile;
