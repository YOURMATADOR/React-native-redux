import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Button,
  TextInput,
  Text,
  StatusBar,
  Dimensions
} from "react-native";
import { Navigation } from "react-native-navigation";

import login_logo from "../assets/img/linux.png";
import Text_title from "../components/ui/Text_title";
import Form_input from "../components/ui/Form_input";
import Form_button from "../components/ui/Form_button";
import { go_lista_lugares } from "./navigation/navegation";
import { secundario, fondo } from "../components/ui/colores";
import Statusbar from "../components/ui/Statusbar";
let { width } = Dimensions.get("window");

class Login extends Component {
  render() {
    return (
      <View style={styles.background}>
        <Statusbar />
        <View style={styles.container}>
          <View style={styles.logo_container}>
            <Image source={login_logo} style={styles.logo_container_image} />
          </View>
          <View style={styles.login_container}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  background: {
    backgroundColor: fondo,
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  button_login: {
    width: "100%",
    padding: 15
  },
  logo_container_image: {
    width: width * 0.3,
    height: width * 0.3
  },
  logo_container: {
    height: "30%",
    width: "100%",
    backgroundColor: secundario,
    justifyContent: "center",
    alignItems: "center"
  },
  login_container: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: secundario
  }
});

export default Login;
