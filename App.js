import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  NativeAppEventEmitter,
  Button
} from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider, connect } from "react-redux";

import { lista, nombre } from "./redux/reducers/lista";
import Input_nombre from "./src/components/Agregar_nombre";
import Lista_elementos from "./src/components/Lista_elementos";

let store = createStore(combineReducers({ lista, nombre }));

export default class App extends Component {
  state = {
    nombre: ""
  };

  modificar_nombre_cambio = e => {
    this.setState({ nombre: e });
  };
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Input_nombre />
          <Lista_elementos />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "flex-start"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
