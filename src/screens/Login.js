import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Enter Email"
        style={[styles.input, { marginTop: 100 }]}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Enter Password"
        style={[styles.input, { marginTop: 20 }]}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <Text
        style={styles.orSignup}
        onPress={() => {
          navigation.navigate("Signup");
        }}
      >
        or Sign Up
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 30,
    color: "black",
    alignSelf: "center",
    marginTop: 100,
    fontWeight: 600,
  },
  input: {
    width: "90%",
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 50,
    alignSelf: "center",
    paddingLeft: 20,
  },
  btn: {
    width: "90%",
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    backgroundColor: "purple",
  },
  btnText: {
    color: "white",
    fontSize: 20,
  },
  orSignup: {
    alignSelf: "center",
    marginTop: 40,
    fontSize: 20,
    fontWeight: 600,
    textDecorationLine: "underline",
  },
});
