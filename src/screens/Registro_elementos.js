import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { connect } from "react-redux";

import Input_nombre from "../components/Agregar_nombre";
import Topbar from "../components/ui/Topbar";
import Statusbar from "../components/ui/Statusbar";
import fondo_imagen from "../assets/img/bright-squares.png";
import { Button } from "react-native-paper";
import Place_image from "../components/Place_image";
import Place_map from "../components/Place_map";
import Cart from "../components/ui/Cart";
import { secundario, primario } from "../components/ui/colores";

class Registro_elementos extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Statusbar />
        <Topbar ruta={this.props.ruta} />
        <ScrollView
          alwaysBounceVertical={true}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          <View style={styles.inner_container}>
            <Cart>
              <Place_image fondo_imagen={fondo_imagen} />
              <Place_map />
              <Input_nombre />
            </Cart>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  ruta: state.rutas
});
Registro_elementos = connect(mapStateToProps)(Registro_elementos);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: primario
  },
  inner_container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

export default Registro_elementos;
