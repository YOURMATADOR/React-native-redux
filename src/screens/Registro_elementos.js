import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import Input_nombre from "../components/Agregar_nombre";
import Topbar from "../components/ui/Topbar";

class Registro_elementos extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Topbar
            ruta ={this.props.ruta}
          />
          <Input_nombre />
        </View>
    );
  }
}

const mapStateToProps = (state) => ({
  ruta: state.rutas
})
Registro_elementos = connect(mapStateToProps)(Registro_elementos)

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
