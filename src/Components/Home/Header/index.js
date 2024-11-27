import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";
import CameraIcon from "../../Icons/CameraIcon";
import IGTVIcon from "../../Icons/IGTVIcon";
import InstagramLogo from "../../Icons/InstagramLogo";
import DirectIcon from "../../Icons/DirectIcon";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <CameraIcon />
      </TouchableOpacity>
      <TouchableOpacity>
        <InstagramLogo height={25} />
      </TouchableOpacity>
      <View style={styles.rightCol}>
        <TouchableOpacity style={styles.rightColItem}>
          <IGTVIcon />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Direct")}>
          <DirectIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
