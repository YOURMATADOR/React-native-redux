import React, { Component } from "react";
import { Platform, StyleSheet, View, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import { delete_nombre, add_elemento } from "../../redux/actions/index";

let Input_nombre = ({ agrear_elemento, dispatch, nombre_estado }) => {
  let nombre;
  return (
    <View style={styles.contenedor}>
      <TextInput
        style={styles.nombre_input}
        value={nombre_estado}
        onChangeText={val => {
          dispatch({ type: "MODIFICAR-NOMBRE", texto: val });
        }}
      />
      <Button
        onPress={() =>
          !!nombre_estado
            ? agrear_elemento(nombre_estado)
            : alert("Agrege un elemento valido!")
        }
        title="Agregar"
        color="#841584"
        accessibilityLabel="Click para agregar un nuevo elemento a la lista!"
      />
    </View>
  );
};
const get_state_input_nombre = state => ({
  nombre_estado: state.nombre
});
const mapDispatchToProps = dispatch => ({
  dispatch,
  agrear_elemento: texto => {
    dispatch(delete_nombre());
    dispatch(add_elemento({ texto }));
  }
});
Input_nombre = connect(
  get_state_input_nombre,
  mapDispatchToProps
)(Input_nombre);

const styles = StyleSheet.create({
  contenedor: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10
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
