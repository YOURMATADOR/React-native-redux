import { Provider, connect } from "react-redux";
import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

let Icon_badge = ({ name, focused, color, elementos }) => (
  <View>
    <Icon
      name={name}
      size={focused ? 30 : 20}
      color={color ? color : "black"}
    />
    {elementos > 0 && (
      <View
        style={{
          position: "absolute",
          right: -6,
          top: -3,
          backgroundColor: "red",
          borderRadius: 6,
          width: 15,
          height: 15,
          padding:5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
          {elementos}
        </Text>
      </View>
    )}
  </View>
);

let mapStateToProps = state => {
  console.log("Estado navegacion", state);
  return {
    elementos: state.lista.length
  };
};
Icon_badge = connect(mapStateToProps)(Icon_badge);
export default Icon_badge;
