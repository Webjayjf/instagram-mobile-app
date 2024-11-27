import { StyleSheet } from "react-native";
import { colors } from "../../Theme/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    flexDirection: "column",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
  },
  headerIcon: {
    marginLeft: 20,
  },
  searchBar: {
    margin: 10,
    padding: 10,
    backgroundColor: colors.searchBarBackground,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  searchBarText: {
    color: colors.text,
    marginLeft: 10,
  },
  directMessages: {
    margin: 10,
  },
  directMessage: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  directMessageImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
  },
  directMessageText: {
    marginLeft: 10,
    flexDirection: "column",
  },
  directMessageUsername: {
    color: colors.text,
  },
  directMessagePreview: {
    color: colors.text,
  },
  directMessagesHeader: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  directMessagesHeaderText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "bold",
  },
  directMessagesHeaderRequestText: {
    color: colors.primary,
    fontSize: 16,
  },
});

export default styles;
