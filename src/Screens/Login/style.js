import { StyleSheet } from "react-native";
import { colors } from "../../Theme/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  logo: {
    alignItems: "center",
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: colors.borderColor,
    borderRadius: 5,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    backgroundColor: colors.graylight,
  },
  forgotPassword: {
    margin: 10,
    padding: 10,
    marginLeft: "auto",
  },
  forgotPasswordText: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "600",
  },
  button: {
    height: 40,
    margin: 10,
    padding: 10,
    borderColor: colors.primary,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: colors.primary,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 14,
    fontWeight: "700",
  },
  loginWithFacebook: {
    margin: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loginWithFacebookText: {
    textAlign: "center",
    color: "white",
    fontSize: 14,
    fontWeight: "700",
    color: colors.primary,
    marginLeft: 5,
  },
  or: {
    padding: 10,
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    color: "gray",
  },
  dontHaveAccount: {
    margin: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  donthaveAccountText: {
    textAlign: "center",
    color: "white",
    fontSize: 14,
    color: "gray",
  },
  signUpText: {
    textAlign: "center",
    color: colors.primary,
    fontSize: 14,
    fontWeight: "700",
    marginLeft: 5,
  },
});

export default styles;
