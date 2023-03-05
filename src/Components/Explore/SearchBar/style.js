import { StyleSheet } from "react-native";
import { colors } from "../../../Theme/colors";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  inputRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.searchBarBackground,
    borderRadius: 20,
    padding: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.black,
  },
  icon: {
    marginHorizontal: 5,
    fontSize: 20,
    color: colors.black,
  },
});
