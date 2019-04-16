import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Cart from "./Cart";
import { secundario } from "./colores";

const ScrollCart = ({ children, style }) => (
  <Cart>
    <ScrollView
      alwaysBounceVertical={true}
      showsVerticalScrollIndicator={false}
      style={{ flex: 1 }}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        alignContent: "center"
      }}
    >
      <View style={styles.inner_container}>{children}</View>
    </ScrollView>
  </Cart>
);

let styles = StyleSheet.create({
  inner_container: {
    width: "100%",
    justifyContent: "flex-start"
  }
});
export default ScrollCart;
