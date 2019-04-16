import React, { Component } from "react";
import { StatusBar } from "react-native";
import { primario } from "./colores";

const Statusbar = ({ color = primario, mostrar = true }) => (
  <StatusBar
    translucent={false}
    hidden={false}
    animated={true}
    backgroundColor={color}
    barStyle="light-content"
  />
);

export default Statusbar;
