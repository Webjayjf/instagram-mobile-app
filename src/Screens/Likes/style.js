import { StyleSheet } from "react-native";
import { colors } from "../../Theme/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1,
  },
  headerText: {
    color: colors.primaryTextColor,
    fontSize: 20,
    fontWeight: "bold",
  },
  followRequests: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  followRequestsImageView: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  followRequestsImage: {
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  followRequestsTexts: {
    flex: 1,
  },
  followRequestsTopText: {
    color: colors.primaryTextColor,
    fontWeight: "bold",
  },
  followRequestsBottomText: {
    color: "gray",
  },
  notificationList: {
    flex: 1,
    backgroundColor: "#fff",
  },
  timeItem: {
    flexDirection: "column",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#C6C6C8",
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

export default styles;
