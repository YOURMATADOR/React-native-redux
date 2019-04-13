import React, { Component } from "react";
import { StyleSheet, Text,View } from "react-native";

const Text_title = props => (
    <Text style={[styles.title_header, props.style]} {...props}>{props.children}</Text>
);

const styles = StyleSheet.create({
  title_header: {
    color: "#000",
    fontSize: 30,
    margin:8
  }
});

export default Text_title;
