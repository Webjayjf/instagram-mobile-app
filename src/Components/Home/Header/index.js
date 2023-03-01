import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./style";
import CameraIcon from "../../Icons/CameraIcon";
import IGTVIcon from "../../Icons/IGTVIcon";
import InstagramLogo from "../../Icons/InstagramLogo";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <CameraIcon />
      </TouchableOpacity>
      <TouchableOpacity>
        <InstagramLogo height={25} />
      </TouchableOpacity>
      <TouchableOpacity>
        <IGTVIcon />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
