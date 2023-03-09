import { StyleSheet } from "react-native";
import { colors } from "../../../Theme/colors";

export default StyleSheet.create({
  timeItem: {
    flexDirection: "column",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
  },
  timeItemHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeItemHeaderText: {
    fontWeight: "bold",
    fontSize: 19,
  },
  timeItemBody: {
    flexDirection: "column",
  },
  timeItemBodyItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  timeItemBodyItemUserImageView: {
    marginRight: 10,
  },
  timeItemBodyItemUserImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  timeItemBodyItemBody: {
    flexDirection: "column",
  },
  timeItemBodyItemBodyText: {
    fontSize: 13,
  },
  timeItemBodyItemBodyDate: {
    color: "#999999",
  },
  timeItemBodyItemBodyPost: {
    marginLeft: "auto",
  },
  timeItemBodyItemBodyPostImage: {
    width: 50,
    height: 50,
  },
});
