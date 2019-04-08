import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const IconBtn = ({ onPress }) => (
  <TouchableOpacity style={styles.icon_btn} onPress={onPress}>
    <Icon name="plus" size={20} color="#4F8EF7" />
  </TouchableOpacity>
);

let styles = StyleSheet.create({
  icon_btn: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius:5,
    padding:3,
    width:"20%",
    alignItems:"center",
    justifyContent:"center"
  }
});
export default IconBtn;
