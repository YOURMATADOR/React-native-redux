import React, { Component } from "react";
import { Platform, StyleSheet, Text,Button, View, FlatList } from "react-native";
import { connect } from "react-redux";
import Lista_elemento from "./Elemento_lista";
import riven_imagen from "../assets/img/riven.jpg";

let Lista_elementos = ({ items }) => (
  <View style={styles.container}>
    {items.length > 0 && (
      <FlatList
        style={styles.lista}
        data={items}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <Lista_elemento
            activo={item.estado}
            imagen_src={riven_imagen}
            numero={item.id}
          >
            {item.texto}
          </Lista_elemento>
        )}
      />
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5
  },

  lista: {
    width: "90%"
  },
  lista_item: {
    width: "90%",
    backgroundColor: "#eee",
    color: "black",
    fontWeight: "bold",
    marginBottom: 5,
    padding: 5
  }
});
const get_state_lista_elementos = state => {
  return { items: state.lista };
};
Lista_elementos = connect(get_state_lista_elementos)(Lista_elementos);

export default Lista_elementos;
