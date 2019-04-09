import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/config";
import { Navigation } from "react-native-navigation";

import Modal_elemento from "./src/components/modal_elemento";
import Input_nombre from "./src/components/Agregar_nombre";
import Lista_elementos from "./src/components/Lista_elementos";
import register_screens from "./src/screens/index";
import Navegacion from "./src/components/Navegacion";


export default class App extends Component {
  state = {
    nombre: ""
  };
  render() {
    console.log(this.props);
    
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Input_nombre />
          <Lista_elementos />
          <Modal_elemento />
          <Navegacion {...this.props} />
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
