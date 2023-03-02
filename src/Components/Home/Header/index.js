import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./style";
import CameraIcon from "../../Icons/CameraIcon";
import IGTVIcon from "../../Icons/IGTVIcon";
import InstagramLogo from "../../Icons/InstagramLogo";
import DirectIcon from "../../Icons/DirectIcon";

const Header = () => {
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
        <TouchableOpacity>
          <DirectIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
