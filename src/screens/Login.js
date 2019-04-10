import React, { Component } from "react";
import { StyleSheet, View, Image, Button } from "react-native";
import login_logo from "../assets/img/login_logo.png";
import { go_lista_lugares } from "./navigation/navegation";

const Login = () => (
  <View style={styles.container}>
    <Image source={login_logo} style={styles.login_logo} />
    <Button
      onPress={go_lista_lugares}
      title="ingresar!"
      color="blue"
      style={styles.button_login}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%",
    alignItems: "stretch",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "space-around"
  },
  login_logo: {
    width: "100%",
    height: "50%"
  },
  button_login: {
    width: "80%",
    flex: 1
  }
});

export default Login;
