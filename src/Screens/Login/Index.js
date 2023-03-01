import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

import styles from "./style";
import { colors } from "../../Theme/colors";
import InstagramLogo from "../../Components/Icons/InstagramLogo";

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <InstagramLogo />
      </View>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginWithFacebook}>
        <AntDesign name="facebook-square" size={24} color={colors.primary} />
        <Text style={styles.loginWithFacebookText}>Log in with Facebook</Text>
      </TouchableOpacity>

      <Text style={styles.or}>OR</Text>
      <TouchableOpacity style={styles.dontHaveAccount}>
        <Text style={styles.donthaveAccountText}>Don’t have an account?</Text>
        <Text style={styles.signUpText}>Sign up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
