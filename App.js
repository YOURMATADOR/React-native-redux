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

import { lista, nombre, modal_lista_item } from "./redux/reducers/lista";
import Modal_elemento from "./src/components/modal_elemento";
import Input_nombre from "./src/components/Agregar_nombre";
import Lista_elementos from "./src/components/Lista_elementos";
let estado_modal = {
  modal_lista_item: {
    imagen: "",
    key: "",
    texto: "",
    estado: false
  }};
let store = createStore(
  combineReducers({ modal_lista_item, lista, nombre }),
  estado_modal
);

export default class App extends Component {
  state = {
    nombre: ""
  };
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Input_nombre />
          <Lista_elementos />
          <Modal_elemento />
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
