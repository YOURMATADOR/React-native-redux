import React, { Component } from "react";
import { StyleSheet, TextInput } from "react-native";

const Form_input = React.forwardRef((props, ref) => {
  return (
    <TextInput
      ref={ref}
      underlineColorAndroid="transparent"
      {...props}
      style={[
        props.valid ? styles.text_input : styles.text_input_error,
        props.style
      ]}
    />
  );
});

const styles = StyleSheet.create({
  text_input: {
    width: "100%",
    borderColor: "grey",
    borderBottomWidth: 2,
    borderRadius: 5,
    margin: 8,
    padding: 10,
    fontWeight: "bold",
    color:"black"
  },
  text_input_error: {
    width: "100%",
    borderColor: "grey",
    borderBottomWidth: 2,
    borderRadius: 5,
    margin: 8,
    padding: 10,
    color:"red",
    fontWeight: "bold"
  }
});

export default Form_input;
