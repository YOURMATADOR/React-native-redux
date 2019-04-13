import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import {primario} from './colores'
const Form_button = props => (
  <TouchableHighlight style={{ width: props.width }} onPress={props.onPress}>
    <View style={[styles.button_form, props.style]}>
      <Text style={[styles.text_form, props.text_style]}>{props.children}</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  button_form: {
    backgroundColor: primario,
    padding: 7,
    borderRadius: 3,
    width: "100%",
  },
  text_form: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default Form_button;
