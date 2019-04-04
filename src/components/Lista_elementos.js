import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, FlatList } from "react-native";
import { connect } from "react-redux";
import Lista_elemento from "./Elemento_lista";
import riven_imagen from "../assets/img/riven.jpg";

let Lista_elementos = ({ elementos }) => (
  <View style={styles.container}>
    <FlatList
      style={styles.lista}
      data={elementos}
      keyExtractor={i => i.id}
      renderItem={i => (
        <Lista_elemento
          activo={i.item.estado}
          imagen_src={riven_imagen}
          numero={i.item.id}
        >
          {i.item.texto}
        </Lista_elemento>
      )}
    />
  </View>
);

const get_state_lista_elementos = state => {
  return { elementos: state.lista };
};

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
Lista_elementos = connect(get_state_lista_elementos)(Lista_elementos);

export default Lista_elementos;
