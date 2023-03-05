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
  postCardContainer: {
    position: "absolute",
    zIndex: 9999,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  postCard: {
    position: "absolute",
    top: height / 6,
    left: width / 18,
    zIndex: 9999,
    backgroundColor: colors.background,
    borderRadius: 20,
  },
  postCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  postCardUserImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  postCardUsername: {
    marginLeft: 10,
  },
  postCardUsernameText: {
    fontWeight: "bold",
  },
  postCardImage: {
    width: width - (width / 18) * 2,
    height: width - (width / 18) * 2,
  },
  postCardFooter: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  postCardFooterButton: {
    flex: 1,
    alignItems: "center",
  },
});
