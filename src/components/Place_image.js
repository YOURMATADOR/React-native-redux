import React, { PureComponent } from "react";
import {
  View,
  Image,
  Button,
  Text,
  StyleSheet,
  Dimensions
} from "react-native";

import Text_title from "../components/ui/Text_title";
let { width } = Dimensions.get("window");

const Place_image = ({ fondo_imagen }) => (
  <View style={styles.place_image_container}>
    <Text_title>
      Selecciona una imagen
    </Text_title>
    <Image source={fondo_imagen} style={styles.place_image_container_image} />
    <Button
      title="seleccionar"
      color="blue"
      style={styles.place_image_container_button}
    />
  </View>
);

const styles = StyleSheet.create({
  place_image_container: {
    width: "100%",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  place_image_container_header: {},
  place_image_container_image: {
    width: width * 0.8,
    height: width * 0.5
  },
  place_image_container_button: {
      margin:10
  }
});
export default Place_image;
