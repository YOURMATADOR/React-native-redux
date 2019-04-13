import React, { Component } from "react";
import { StyleSheet, View, Image, Button, TextInput, Text,StatusBar } from "react-native";
import { Navigation } from "react-native-navigation";

import login_logo from "../assets/img/login_logo.png";
import Text_title from "../components/ui/Text_title";
import Form_input from "../components/ui/Form_input";
import Form_button from "../components/ui/Form_button";
import { go_lista_lugares } from "./navigation/navegation";
import {secundario} from '../components/ui/colores';
import Statusbar from '../components/ui/Statusbar';

class Login extends Component {
  render() {
    return (
      <View style={styles.background}>
      <Statusbar/>
      <View style={styles.container}>
          <Text_title>Ingresar</Text_title>
          <Form_input placeholder="Usuario" />
          <Form_input placeholder="Contraseña" />
          <Form_button
            width={"100%"}
            onPress={() => go_lista_lugares()}
            style={styles.button_login}
          >
            Ingresar
          </Form_button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center"
  },
  background: {
    backgroundColor: secundario,
    flex: 1,
    width: "100%"
  },
  button_login: {
    width: "100%"
  }
});

export default Login;
