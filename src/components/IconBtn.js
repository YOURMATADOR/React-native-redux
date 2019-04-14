import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const IconBtn = ({ onPress,name,color}) => (
  <TouchableOpacity style={styles.icon_btn} onPress={onPress}>
    <Icon name={name} size={30} color={color} />
  </TouchableOpacity>
);

let styles = StyleSheet.create({
  icon_btn: {
    padding:3,
    width:"20%",
    alignItems:"center",
    justifyContent:"center"
  }
});
export default IconBtn;
