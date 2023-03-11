import { StyleSheet, Dimensions } from "react-native";

import { colors } from "../../../Theme/colors";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    flex: 1,
  },
  item: {
    position: "relative",
  },
  image: {
    width: width / 3 - 2,
    height: width / 3 - 2,
    margin: 1,
  },
  icon: {
    position: "absolute",
    top: 5,
    right: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
