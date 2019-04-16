import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import { connect } from "react-redux";

import Input_nombre from "../components/Agregar_nombre";
import Topbar from "../components/ui/Topbar";
import Statusbar from "../components/ui/Statusbar";
import fondo_imagen from "../assets/img/bright-squares.png";
import { Button } from "react-native-paper";
import Place_image from "../components/Place_image";
import Place_map from "../components/Place_map";
import ScrollCart from "../components/ui/ScrollCart";
import { secundario, primario } from "../components/ui/colores";


class Registro_elementos extends Component {
  render() {
    let { position } = this.props;
    if (position == "portrait") {
      return (
        <View style={styles.container}>
          <Topbar ruta={this.props.ruta} />
          <ScrollCart>
            <Place_image fondo_imagen={fondo_imagen} />
            <Place_map />
            <Input_nombre />
          </ScrollCart>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Topbar ruta={this.props.ruta} />
        <ScrollCart style={styles.scrollCart_land}>
          <Place_image fondo_imagen={fondo_imagen} />
          <Place_map />
          <Input_nombre />
        </ScrollCart>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  ruta: state.rutas,
  position: state.position
});
Registro_elementos = connect(mapStateToProps)(Registro_elementos);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: primario
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  scrollCart_land: {
    width: "100%",
    padding: 0,
    borderRadius: 0
  }
});

export default Registro_elementos;
