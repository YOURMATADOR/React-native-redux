import React, { Component } from "react";
import { Platform, StyleSheet, Button, View, FlatList } from "react-native";

let Navegacion = ({ navigation }) => (
  <View>
    <Button onPress={() => navigation.navigate("Login")} title="Uno" />
  </View>
);

export default Navegacion;
