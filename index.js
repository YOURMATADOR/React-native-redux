/**
 * @format
 */
import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/config";

import { Navigation } from "react-native-navigation";

import App_rutas from "./src/screens/config/index";
import iniciar_rutas from "./src/screens/config/index";
import { iniciar_posicion } from './src/screens/config/Posicion'

iniciar_rutas();
iniciar_posicion();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: "Stack.id",

        children: [
          {
            component: {
              name: "Curso.Login",
              passProps:{mostrar:true},
              options: { topBar: { height: 0, visible: false } }
            }
          }
        ]
      }
    }
  });
});
