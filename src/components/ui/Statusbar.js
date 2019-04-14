import React, { Component } from "react";
import {

  StatusBar
} from "react-native";
import {primario} from './colores';

const Statusbar = () => (
  <StatusBar
    translucent={true}
    backgroundColor={primario}
    barStyle="light-content"
  />
);

export default Statusbar