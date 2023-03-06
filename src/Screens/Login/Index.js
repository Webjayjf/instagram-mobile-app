import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import styles from "./style";
import { colors } from "../../Theme/colors";
import InstagramLogo from "../../Components/Icons/InstagramLogo";
import { signIn } from "../../Redux/Slices/authSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <InstagramLogo />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(signIn({ email, password }))}
      >
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
