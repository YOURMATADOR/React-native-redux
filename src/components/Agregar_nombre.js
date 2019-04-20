import React, { Component } from "react";
import { Platform, StyleSheet, View, TextInput, Button } from "react-native";
import { connect } from "react-redux";

import IconBtn from "./IconBtn";
import { add_elemento, delete_nombre } from "../../redux/actions/lista";
let Input_nombre = ({ texto, coordenadas, onChangeText, onPress }) => {
  return (
    <View style={styles.contenedor}>
      <TextInput
        style={styles.nombre_input}
        value={texto}
        placeholder={"Agregar un elemento"}
        onChangeText={onChangeText}
      />
      <IconBtn
        style={styles.btn_agregar}
        name={"plus-circle"}
        onPress={() => onPress(texto, coordenadas)}
      />
    </View>
  );
};
const mapStateToProps = (state, ownProps) => ({
  texto: state.nombre,
  coordenadas: !!state.maps[ownProps.mapName]
    ? state.maps[ownProps.mapName]
    : state.maps
});
const mapDispatchToProps = dispatch => ({
  onChangeText: texto => {
    dispatch({ type: "MODIFICAR-NOMBRE", texto });
  },
  onPress: (texto, coordenadas) => {
    if (texto) {
      dispatch(delete_nombre());
      dispatch(add_elemento({ texto, coordenadas }));
    } else {
      alert("Agrega un lugar valido!");
    }
  }
});
Input_nombre = connect(
  mapStateToProps,
  mapDispatchToProps
)(Input_nombre);

const styles = StyleSheet.create({
  contenedor: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10
  },
  btn_agregar: {
    width: "10%"
  },
  nombre_input: {
    borderWidth: 1,
    width: "70%",
    padding: 0,
    textAlign: "center",
    borderColor: "black",
    borderRadius: 3
  }
});

export default Input_nombre;
