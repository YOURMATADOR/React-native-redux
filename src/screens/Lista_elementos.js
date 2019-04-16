import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import { store } from "../../redux/config";
import Modal_elemento from "../components/modal_elemento";
import Lista_elementos from "../components/Lista_elementos";
import Topbar from "../components/ui/Topbar";
import Statusbar from "../components/ui/Statusbar";

let Lista_lugares = ({ ruta }) => (
  <View style={styles.container}>
    <Statusbar />
    <Topbar ruta={ruta} />
    <Lista_elementos />
    <Modal_elemento />
  </View>
);

const mapStateToProps = state => ({
  ruta: state.rutas
});
Lista_lugares = connect(mapStateToProps)(Lista_lugares);

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
