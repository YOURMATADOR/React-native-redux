import React, { PureComponent } from "react";
import {
  View,
  Image,
  Button,
  Text,
  StyleSheet,
  Dimensions
} from "react-native";

import Text_title from '../components/ui/Text_title';
let { width } = Dimensions.get("window");

const Place_map = ({ fondo_imagen }) => (
  <View style={styles.map_container}>
    <Text_title>Selecciona un lugar</Text_title>
    <View style={styles.map_container_image}>
      <Text style={styles.map_container_header}>Selecciona la ubicacion</Text>
    </View>
    <Button title="Tu ubicacion" color="blue" />
  </View>
);

const styles = StyleSheet.create({
  map_container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  map_container_header: {},
  map_container_image: {
    width: width * 0.8,
    height: width * 0.5,
    backgroundColor: "red",
    margin:5
  },
  map_container_button: {}
});
export default Place_map;
