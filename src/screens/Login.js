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
import { Navigation } from "react-native-navigation";

import login_logo from "../assets/img/linux.png";
import Text_title from "../components/ui/Text_title";
import Form_input from "../components/ui/Form_input";
import Form_button from "../components/ui/Form_button";
import { go_lista_lugares } from "./navigation/navegation";
import { secundario, fondo } from "../components/ui/colores";
import Statusbar from "../components/ui/Statusbar";
import {
  user_validator,
  password_validator
} from "../../utils/validators/login";

let width = Dimensions.get("window").width;
Dimensions.addEventListener("change", ({ window }) => {
  width = window.width;
});

class Login extends Component {
  list_inputs = [];

  state = {
    inputs: {
      user: { value: "", valid: true, mensaje: "", touched: false },
      password: { value: "", valid: true, mensaje: "", touched: false }
    },
    logo_container_height: new Animated.Value(1)
  };

  ocultar_logo = () => {
    this.state.logo_container_height.setValue(1);

    Animated.timing(this.state.logo_container_height, {
      duration: 100,
      toValue: 0
    }).start();
  };
  mostrar_logo = () => {
    this.state.logo_container_height.setValue(0);
    Animated.timing(this.state.logo_container_height, {
      duration: 100,
      toValue: 1
    }).start();
  };

  componentDidMount() {
    Keyboard.addListener("keyboardDidShow", this.ocultar_logo);
    Keyboard.addListener("keyboardDidHide", this.mostrar_logo);
  }
  componentWillUnmount() {
    Keyboard.removeListener("keyboardDidShow", this.ocultar_logo);
    Keyboard.removeListener("keyboardDidHide", this.mostrar_logo);
  }

  change_user = user => {
    this.setState(prev => ({
      inputs: {
        ...prev.inputs,
        user: { valid: user_validator(user), value: user, touched: true }
      }
    }));
  };
  change_pass = password => {
    this.setState(prev => ({
      inputs: {
        ...prev.inputs,
        password: {
          valid: password_validator(password),
          value: password,
          touched: true
        }
      }
    }));
  };
  ir_home = () => {
    let llaves = Object.keys(this.state.inputs);
    if (
      llaves.every(
        i => this.state.inputs[i].touched && this.state.inputs[i].valid
      )
    ) {
      go_lista_lugares();
    }
  };
  render() {
    let { position } = this.props;
    if (position == "portrait") {
      return (
        <KeyboardAvoidingView behavior="height" style={styles.background}>
          <Statusbar />
          <View style={styles.container}>
            <Animated.View
              style={[
                styles.logo_container,
                {
                  height: this.state.logo_container_height.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0%", "30%"]
                  }),
                  opacity: this.state.logo_container_height
                }
              ]}
            >
              <Image source={login_logo} style={styles.logo_container_image} />
            </Animated.View>
            <View style={styles.login_container}>
              <Text_title>Ingresar!</Text_title>
              <Form_input
                value={this.state.inputs["user"].value}
                onChangeText={this.change_user}
                returnKeyType={"next"}
                valid={this.state.inputs.user.valid}
                placeholder="Usuario"
                autoComplete="off"
                autoCapitalize="none"
                mensaje={this.state.inputs.user.mensaje}
                ref={e => (this.list_inputs["usuario"] = e)}
                onSubmitEditing={() => this.list_inputs["contrasenia"].focus()}
              />
              <Form_input
                secureTextEntry={true}
                valid={this.state.inputs.password.valid}
                onChangeText={this.change_pass}
                mensaje={this.state.inputs.password.mensaje}
                value={this.state.inputs["password"].value}
                ref={e => (this.list_inputs["contrasenia"] = e)}
                placeholder="Contraseña"
              />
              <Form_button
                width={"100%"}
                onPress={this.ir_home}
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
              value={this.state.inputs["user"].value}
              onChangeText={this.change_user}
              returnKeyType={"next"}
              autoComplete="off"
              autoCapitalize="none"
              valid={this.state.inputs.user.valid}
              placeholder="Usuario"
              mensaje={this.state.inputs.user.mensaje}
              ref={e => (this.list_inputs["usuario"] = e)}
              onSubmitEditing={() => this.list_inputs["contrasenia"].focus()}
            />
            <Form_input
              secureTextEntry={true}
              valid={this.state.inputs.password.valid}
              onChangeText={this.change_pass}
              mensaje={this.state.inputs.password.mensaje}
              value={this.state.inputs["password"].value}
              ref={e => (this.list_inputs["contrasenia"] = e)}
              placeholder="Contraseña"
            />
            <Form_button
              width={"100%"}
              onPress={this.ir_home}
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

export default Login;
