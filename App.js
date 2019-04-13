import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import { Provider } from "react-redux";

import { store } from "./redux/config";
import Modal_elemento from "./src/components/modal_elemento";
import Input_nombre from "./src/components/Agregar_nombre";
import Lista_elementos from "./src/components/Lista_elementos";

class App extends Component {
  state = {
    nombre: ""
  };
  static navigationOptions = {
    headerTitle: "Hola",
    headerRight: (
      <Button
        title="Info"
        color="red"
      />
    )
  };
  render() {
    console.log(this.props);

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Input_nombre />
          <Lista_elementos />
          <Modal_elemento />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "flex-start"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

export default App;
