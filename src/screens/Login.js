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
import { connect } from "react-redux";
import { Navigation } from "react-native-navigation";

import login_logo from "../assets/img/linux.png";
import Text_title from "../components/ui/Text_title";
import Form_input from "../components/ui/Form_input";
import Form_button from "../components/ui/Form_button";
import { go_lista_lugares } from "./navigation/navegation";
import { secundario, fondo } from "../components/ui/colores";
import Statusbar from "../components/ui/Statusbar";

let width = Dimensions.get("window").width;
Dimensions.addEventListener("change", ({ window }) => {
  width = window.width;
});

class Login extends Component {
  list_inputs = [];
  render() {
    let { position } = this.props;
    if (position == "portrait") {
      return (
        <View style={styles.background}>
          <Statusbar />
          <View style={styles.container}>
            <View style={styles.logo_container}>
              <Image source={login_logo} style={styles.logo_container_image} />
            </View>
            <View style={styles.login_container}>
              <Text_title>Ingresar!</Text_title>
              <Form_input
                returnKeyType={"next"}
                placeholder="Usuario"
                ref={e => (this.list_inputs["usuario"] = e)}
                onSubmitEditing={() => this.list_inputs["contrasenia"].focus()}
              />
              <Form_input
                ref={e => (this.list_inputs["contrasenia"] = e)}
                placeholder="Contraseña"
              />
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
    return (
      <View style={styles.background_land}>
        <Statusbar />
        <View style={styles.container_land}>
          <View style={styles.login_container_land}>
            <Text_title>Ingresar!</Text_title>
            <Form_input
              placeholder="Usuario"
              returnKeyType={"next"}
              ref={e => (this.list_inputs["usuario"] = e)}
              onSubmitEditing={() => this.list_inputs["contrasenia"].focus()}
            />
            <Form_input
              placeholder="Contraseña"
              ref={e => (this.list_inputs["contrasenia"] = e)}
            />
            <Form_button
              width={"100%"}
              onPress={() => go_lista_lugares()}
              style={styles.button_login_land}
            >
              Ingresar
            </Form_button>
          </View>
        </View>
      </View>
    );
  }
}

let mapDispatchToProps = state => ({
  position: state.position
});
Login = connect(mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  container_land: {
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
  background_land: {
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
  button_login_land: {
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
    width: "90%",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: secundario
  },
  login_container_land: {
    width: "90%",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center",
    margin: 10,
    flex: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: secundario
  }
});

export default Login;
