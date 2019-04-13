import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";

import { store } from "../../redux/config";
import Input_nombre from "../components/Agregar_nombre";

class Registro_elementos extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Input_nombre />
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

export default Registro_elementos;
