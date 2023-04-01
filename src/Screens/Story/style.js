import { StyleSheet, Dimensions } from "react-native";

import { colors } from "../../Theme/colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
  storyImage: {
    position: "absolute",
    width: width,
    height: height,
    resizeMode: "contain",
    backgroundColor: "gray",
  },

  header: {
    position: "absolute",
    top: 0,
    width: "100%",
    flexDirection: "column",
  },
  topBar: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  username: {
    marginLeft: 10,
  },
  usernameText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
  closeButton: {
    marginLeft: "auto",
    marginRight: 0,
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  bottomBarInputView: {
    flexDirection: "row",
    flex: 1,
    padding: 5,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
  },
  bottomBarInput: {
    marginLeft: 10,
  },
  bottomBarButtonView: {
    flexDirection: "row",
    marginLeft: "auto",
  },
  bottomBarButton: {
    padding: 5,
  },
});

export default styles;
