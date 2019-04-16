import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { secundario } from "./colores";

const Cart = ({ children, style }) => (
  <View style={[styles.container, style]}>{children}</View>
);

let styles = StyleSheet.create({
  container: {
    width: "95%",
    backgroundColor: "white",
    borderRadius: 15,
    alignSelf:"center",
    padding: 10,
  }
});
export default Cart;
