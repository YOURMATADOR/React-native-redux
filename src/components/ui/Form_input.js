import React, { Component } from "react";
import { StyleSheet, TextInput } from "react-native";

const Form_input = React.forwardRef((props, ref) => (
  <TextInput
    ref={ref}
    underlineColorAndroid="transparent"
    {...props}
    style={[styles.text_input, props.style]}
  />
));

const styles = StyleSheet.create({
  text_input: {
    width: "100%",
    borderColor: "grey",
    borderBottomWidth: 2,
    borderRadius: 5,
    margin: 8,
    padding: 10,
    fontWeight: "bold"
  }
});

export default Form_input;
