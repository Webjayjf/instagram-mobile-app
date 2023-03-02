import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  rightCol: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightColItem: {
    marginRight: 10,
  },
});

export default styles;
