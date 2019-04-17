import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";
import { Navigation } from "react-native-navigation";

import { primario } from "./colores";
import IconBtn from "../IconBtn";
import { obtener_ruta } from "../../screens/config/obtener_ruta";
import { connect } from "react-redux";
import Statusbar from "../ui/Statusbar";

let {width,height} = Dimensions.get('window')

let Topbar = ({ ruta, position ,style}) => {
  if (position == "portrait") {
    return (
      <View style={[styles.container,style]}>
        <IconBtn
          name={"menu"}
          color={"white"}
          onPress={() => alert("menu")}
        />
        <Text style={styles.titulo}>{ruta}</Text>
      </View>
    );
  }
  return (
    <View style={[styles.container_land,style]}>
      <Statusbar hidden={true} />
      <IconBtn
        name={"menu"}
        color={"white"}
        onPress={() => alert("menu")}
        style={{width:"5%"}}
      />
      <Text style={styles.titulo}>{ruta}</Text>
    </View>
  );
};

let mapDispatchToProps = state => ({
  position: state.position
});
Topbar = connect(mapDispatchToProps)(Topbar);
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "10%",
    backgroundColor: primario,
    flexDirection: "row",
    alignItems: "center"
  },
  container_land: {
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
