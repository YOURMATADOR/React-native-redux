import React, { Component } from "react";
import { StatusBar } from "react-native";
import { primario } from "./colores";

const Statusbar = ({ color = primario, hidden = false }) => (
  <StatusBar
    translucent={false}
    hidden={hidden}
    animated={true}
    backgroundColor={color}
    barStyle="light-content"
  />
);

export default Statusbar;
