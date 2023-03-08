import { StyleSheet, Dimensions } from "react-native";

import { colors } from "../../Theme/colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    marginRight: 5,
    fontWeight: "bold",
  },
  headerRight: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  info: {
    padding: 10,
    backgroundColor: "#fff",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  userImageView: {
    width: width / 4,
    height: width / 4,
    borderRadius: width / 8,
    overflow: "hidden",
    marginRight: 10,
  },
  userImage: {
    width: "100%",
    height: "100%",
  },
  userStatistics: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userStatistic: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },
  userStatisticText: {
    fontSize: 16,
  },
  userStatisticValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  nameAndBioCol: {
    flexDirection: "column",
  },
  displayName: {
    fontSize: 13,
    fontWeight: "bold",
  },
  bio: {
    fontSize: 13,
  },
  editProfile: {
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    borderColor: colors.borderColor,
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 10,
  },
  editProfileText: {
    fontSize: 13,
    fontWeight: "bold",
  },
});

export default styles;
