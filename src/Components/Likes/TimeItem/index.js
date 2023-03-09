import { View, Text, Image } from "react-native";
import React from "react";

import styles from "./style";
import ActionItem from "./ActionItem";

const TimeItem = ({ title, actions }) => {
  return (
    <View style={styles.timeItem}>
      <View style={styles.timeItemHeader}>
        <Text style={styles.timeItemHeaderText}>{title}</Text>
      </View>
      <View style={styles.timeItemBody}>
        {actions.map((action, index) => (
          <ActionItem key={index} data={action} />
        ))}
      </View>
    </View>
  );
};

export default TimeItem;
