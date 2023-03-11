import { StyleSheet, Dimensions } from "react-native";

import { colors } from "../../Theme/colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
  },
  backButton: {},
  backButtonText: {
    color: colors.primaryTextColor,
    fontSize: 20,
  },
  title: {
    color: colors.primaryTextColor,
    fontSize: 20,
    fontWeight: "bold",
  },
  nextButton: {},
  nextButtonText: {
    color: colors.primaryTextColor,
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
  },
  bigImage: {
    width: width,
    height: width,
  },
  mediaList: {
    flex: 1,
  },
  image: {
    width: width / 3,
    height: width / 3,
  },
});

export default styles;
