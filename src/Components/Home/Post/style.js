import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  userImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  usernameCol: {
    marginLeft: 10,
    flexDirection: "column",
  },
  username: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
  },
  location: {
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
  },
  options: {
    marginLeft: "auto",
  },
  body: {},
  image: {
    width: "100%",
    height: 375,
  },
  footer: {
    flexDirection: "column",
    padding: 10,
  },
  footerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  footerIcon: {
    marginRight: 20,
  },
  footerIconRight: {
    marginLeft: "auto",
  },
  footerText: {
    fontSize: 13,
    fontWeight: "400",
  },
  footerUsername: {
    fontWeight: "600",
  },
});
