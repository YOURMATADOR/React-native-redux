import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Navigation } from "react-native-navigation";

import { primario } from "./colores";
import IconBtn from "../IconBtn";
import { obtener_ruta } from "../../screens/config/obtener_ruta";

const Topbar = ({ ruta }) => {
  return (
    <View style={styles.container}>
      <IconBtn
        name={"ios-menu"}
        color={"white"}
        onPress={() => alert("menu")}
      />
      <Text style={styles.titulo}>{ruta}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "10%",
    backgroundColor: primario,
    flexDirection: "row",
    alignItems: "center"
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white"
  }
});

export default Topbar;
