import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

let Lista_elementos = ({ elementos }) => (
  <View style={styles.container}>
    {elementos.map((e, i) => (
      <Text style={styles.lista_item} key={i}>
        {i} {e.texto}
      </Text>
    ))}
  </View>
);

const get_state_lista_elementos = state => {
  return { elementos: state.lista };
};

const styles = StyleSheet.create({
    container:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        marginTop:5
    },
    lista_item:{
        width:"90%",
        backgroundColor:"#eee",
        color:"black",
        fontWeight:"bold",
        marginBottom:5,
        padding:5
    }
})
Lista_elementos = connect(get_state_lista_elementos)(Lista_elementos);

export default Lista_elementos