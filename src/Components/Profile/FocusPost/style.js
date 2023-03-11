import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../../Theme/colors";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  postCardContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  postCard: {
    position: "absolute",
    top: height / 6,
    left: width / 18,
    backgroundColor: colors.background,
    borderRadius: 20,
  },
  postCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
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
  icon: {
    position: "absolute",
    top: 5,
    right: 5,
    justifyContent: "center",
    alignItems: "center",
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
