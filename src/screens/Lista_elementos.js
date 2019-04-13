
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";

import { store } from "../../redux/config";
import Modal_elemento from "../components/modal_elemento";
import Lista_elementos from "../components/Lista_elementos";


const Lista_lugares = () => (
  <Provider store={store}>
  <View style={styles.container}>
    <Lista_elementos />
    <Modal_elemento />
  </View>
  </Provider>
);

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

export default Lista_lugares;
