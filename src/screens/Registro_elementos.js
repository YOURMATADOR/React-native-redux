import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Input_nombre from "../components/Agregar_nombre";


const Registro_elementos = () => (
  <View style={styles.container}>
    <Input_nombre />
  </View>
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

export default Registro_elementos;
