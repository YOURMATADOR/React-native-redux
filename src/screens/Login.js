import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Button,
  TextInput,
  Text,
  StatusBar,
  Dimensions,
  KeyboardAvoidingView,
  Animated,
  Keyboard
} from "react-native";
import { connect } from "react-redux";
import { compose, withHandlers, pure } from "recompose";

import login_logo from "../assets/img/linux.png";
import Text_title from "../components/ui/Text_title";
import Form_input from "../components/ui/Form_input";
import Form_button from "../components/ui/Form_button";
import { secundario, fondo } from "../components/ui/colores";
import Statusbar from "../components/ui/Statusbar";
import { login_state } from "./states/login";

let width = Dimensions.get("window").width;
Dimensions.addEventListener("change", ({ window }) => {
  width = window.width;
});

class Login extends Component {
  list_inputs = [];

  componentDidMount() {
    Keyboard.addListener("keyboardDidShow", this.props.ocultar_logo);
    Keyboard.addListener("keyboardDidHide", this.props.mostrar_logo);
  }
  componentWillUnmount() {
    Keyboard.removeListener("keyboardDidShow", this.props.ocultar_logo);
    Keyboard.removeListener("keyboardDidHide", this.props.mostrar_logo);
  }

  render() {
    let {
      position,
      login_container,
      logo_container_height,
      inputs,
      change_pass,
      change_user,
      ir_home
    } = this.props;
    console.log(this.props);
    if (position == "portrait") {
      return (
        <KeyboardAvoidingView behavior="height" style={styles.background}>
          <Statusbar />
          <View style={styles.container}>
            <Animated.View
              style={[
                styles.logo_container,
                {
                  height: logo_container_height.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0%", "30%"]
                  }),
                  opacity: logo_container_height
                }
              ]}
            >
              <Image source={login_logo} style={styles.logo_container_image} />
            </Animated.View>
            <View style={styles.login_container}>
              <Text_title>Ingresar!</Text_title>
              <Form_input
                value={inputs["user"].value}
                onChangeText={change_user}
                returnKeyType={"next"}
                valid={inputs.user.valid}
                placeholder="Usuario"
                autoComplete="off"
                autoCapitalize="none"
                mensaje={inputs.user.mensaje}
                ref={e => (this.list_inputs["usuario"] = e)}
                onSubmitEditing={() => this.list_inputs["contrasenia"].focus()}
              />
              <Form_input
                secureTextEntry={true}
                valid={inputs.password.valid}
                onChangeText={change_pass}
                mensaje={inputs.password.mensaje}
                value={inputs["password"].value}
                ref={e => (this.list_inputs["contrasenia"] = e)}
                placeholder="Contraseña"
              />
              <Form_button
                width={"100%"}
                onPress={ir_home}
                style={styles.button_login}
              >
                Ingresar
              </Form_button>
            </View>
          </View>
        </KeyboardAvoidingView>
      );
    }
    return (
      <View style={styles.background_land}>
        <Statusbar />
        <View style={styles.container_land}>
          <View style={styles.login_container_land}>
            <Text_title>Ingresar!</Text_title>
            <Form_input
              value={inputs["user"].value}
              onChangeText={change_user}
              returnKeyType={"next"}
              autoComplete="off"
              autoCapitalize="none"
              valid={inputs.user.valid}
              placeholder="Usuario"
              mensaje={inputs.user.mensaje}
              ref={e => (this.list_inputs["usuario"] = e)}
              onSubmitEditing={() => this.list_inputs["contrasenia"].focus()}
            />
            <Form_input
              secureTextEntry={true}
              valid={inputs.password.valid}
              onChangeText={change_pass}
              mensaje={inputs.password.mensaje}
              value={inputs["password"].value}
              ref={e => (this.list_inputs["contrasenia"] = e)}
              placeholder="Contraseña"
            />
            <Form_button
              width={"100%"}
              onPress={ir_home}
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
    elevation: 5,
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

let mapDispatchToProps = state => ({
  position: state.position,
  amazing: "Hola que ace!"
});

export default compose(
  pure,
  login_state,
  connect(mapDispatchToProps)
)(Login);
