import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button
} from "react-native";
import { connect } from "react-redux";

import { delete_elemento, open_modal } from "../../redux/actions/index";
import StaticMap from "./StaticMap";

let Lista_elemento = ({
  imagen_src,
  children,
  activo,
  abrir_modal,
  eliminar_elemento,
}) => (
  <TouchableOpacity onPress={abrir_modal} style={styles.contenedor_lista_item}>
    <Image style={styles.imagen_item} source={imagen_src} />
    <Text style={activo ? styles.lista_item_linea : styles.lista_item}>
      {children}
    </Text>
    <Button
      onPress={eliminar_elemento}
      style={styles.boton_eliminar}
      title="X"
      color="red"
      accessibilityLabel="Click para agregar un nuevo elemento a la lista!"
    />
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  contenedor_lista_item: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "stretch",
    backgroundColor: "#eee",
    marginBottom: 5,
    padding: 5
  },
  lista_item: {
    flex: 1,
    color: "black",
    alignContent: "center",
    fontWeight: "bold",

    padding: 5
  },
  lista_item_linea: {
    textDecorationLine: "line-through",
    color: "black",
    flex: 1,
    flexDirection: "row",
    fontWeight: "bold",
    opacity: 0.5,
    padding: 5
  },
  imagen_item: {
    width: 50,
    height: 30,
    padding: 5
  },
  boton_eliminar: {
    borderRadius: 50,
    overflow: "hidden"
  }
});
const mapDispatch_lista_elemento = (dispatch, ownProps) => ({
  abrir_modal: () => {
    dispatch(
      open_modal({
        key: ownProps.numero,
        imagen: ownProps.imagen_src,
        texto: ownProps.children,
        coordenadas:ownProps.coordenadas
      })
    );
  },
  eliminar_elemento: () => dispatch(delete_elemento({ id: ownProps.numero }))
});
Lista_elemento = connect(
  null,
  mapDispatch_lista_elemento
)(Lista_elemento);
export default Lista_elemento;
