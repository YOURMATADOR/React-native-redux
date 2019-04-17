import React from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Easing
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { secundario } from "./colores";

class Cart extends React.Component {
  state = {
    sombra: new Animated.Value(5)
  };
  oprimirCarta = () => {
    Animated.timing(this.state.sombra, {
      duration: 1000,
      toValue: 0,
      useNativeDriver: true,
      easing: Easing.bounce
    }).start();
  };
  sacarCarta = () => {
    this.state.sombra.setValue(0);
    Animated.timing(this.state.sombra, {
      duration: 1000,
      toValue:5,
      useNativeDriver: true,
      easing: Easing.bounce
    }).start();
  };
  render() {
    let { children, style } = this.props;
    return (
      <TouchableWithoutFeedback
        onBlur={this.sacarCarta}
        onPress={this.oprimirCarta}
      >
        <Animated.View
          style={[styles.container, { elevation: this.state.sombra }]}
        >
          {children}
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    width: "97%",
    height: "89%",
    elevation: 4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    backgroundColor: "white",
    borderRadius: 15,
    alignSelf: "center",
    padding: 10,
    borderColor: "blue",
    borderWidth: 1
  }
});
export default Cart;
