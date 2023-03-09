import { StyleSheet } from "react-native";
import { colors } from "../../../../Theme/colors";

export default StyleSheet.create({
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
    flex: 1,
  },
  timeItemBodyItemBodyText: {
    fontSize: 13,
  },
  timeItemBodyItemBodyDate: {
    color: "#999999",
  },
  timeItemBodyItemBodyPost: {
    marginLeft: "auto",
    flexDirection: "row",
  },
  timeItemBodyItemBodyPostImage: {
    width: 50,
    height: 50,
  },
  timeItemBodyItemBodyAccept: {
    backgroundColor: "#3797EF",
    padding: 10,
    borderRadius: 5,
  },
  timeItemBodyItemBodyReject: {
    padding: 10,
    marginLeft: 5,
    borderRadius: 5,
    borderColor: colors.borderColor,
    borderWidth: 1,
  },
  timeItemBodyItemBodyAcceptText: {
    color: "white",
  },
  timeItemBodyItemBodyRejectText: {},
});
