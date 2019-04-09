import React, { Component } from "react";
import { Platform, StyleSheet, Button, View, FlatList } from "react-native";
import { connect } from "react-redux";
import { Navigation } from "react-native-navigation";

import { go_screen_two, go_screen_one } from "../screens/navigation/navegation";
let Navegacion = ({ componentId }) => (
  <View>
    <Button
      onPress={ async () => {
        try {
          console.log("propiedades",componentId)
          
         await Navigation.push(componentId, {
          component: {
            name: "pantalla_uno"
          }
        });
        } catch (error) {
          console.log(error);
          
        }
        
      }}
      title="Uno"
    />
    <Button onPress={go_screen_two} title="dos" />
  </View>
);

export default Navegacion;
