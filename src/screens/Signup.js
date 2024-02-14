import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <TextInput
        placeholder="Enter Name"
        style={[styles.input, { marginTop: 50 }]}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Enter Email"
        style={[styles.input, { marginTop: 20 }]}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Enter Mobile"
        keyboardType="number-pad"
        style={[styles.input, { marginTop: 20 }]}
        value={mobile}
        onChangeText={(text) => setMobile(text)}
      />
      <TextInput
        placeholder="Enter Password"
        style={[styles.input, { marginTop: 20 }]}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        placeholder="Confirm Password"
        style={[styles.input, { marginTop: 20 }]}
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
      <Text
        style={styles.orLogin}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        or Login
      </Text>
    </View>
  );
};

export default Signup;

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
  orLogin: {
    alignSelf: "center",
    marginTop: 40,
    fontSize: 20,
    fontWeight: 600,
    textDecorationLine: "underline",
  },
});
