import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  FlatList,
  Animated
} from "react-native";
import { connect } from "react-redux";
import Lista_elemento from "./Elemento_lista";
import riven_imagen from "../assets/img/riven.jpg";
import IconBtn from "./IconBtn";
import StaticMap from "../components/StaticMap";

class Lista_elementos extends React.Component {
  state = {
    visible: false,
    opacity_elemento: new Animated.Value(1)
  };

  toogleLista = () => {
    if (this.props.items.length > 0) {
      this.setState(prev => ({
        visible: true
      }));
      this.state.opacity_elemento.setValue(1);
      Animated.parallel([
        Animated.timing(this.state.opacity_elemento, {
          duration: 500,
          toValue: 0
        }).start(() => this.state.opacity_elemento.setValue(0)),
        Animated.timing(this.state.opacity_elemento, {
          duration: 500,
          toValue: 1
        }).start()
      ]);
    }
  };
  render() {
    let { items } = this.props;
    return (
      <View style={styles.container}>
        {items.length > 0 && this.state.visible ? (
          <FlatList
            style={styles.lista}
            data={items}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <Animated.View style={{ opacity: this.state.opacity_elemento }}>
                <Lista_elemento
                  coordenadas={item.coordenadas}
                  activo={item.estado}
                  imagen_src={riven_imagen}
                  numero={item.id}
                >
                  {item.texto}
                </Lista_elemento>
              </Animated.View>
            )}
          />
        ) : (
          <Animated.View
            style={[
              styles.reload_btn,
              { opacity: this.state.opacity_elemento }
            ]}
          >
            <IconBtn
              onPress={this.toogleLista}
              name={"reload"}
              style={styles.reload_btn}
              color={"white"}
            >
              Recargar
            </IconBtn>
          </Animated.View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5
  },

  lista: {
    width: "90%"
  },
  reload_btn: {
    fontWeight: "bold",
    fontSize: 20,
    width: "100%",
    flexDirection: "row",
    padding: 10,
    margin: 20,
    justifyContent: "center"
  },
  lista_item: {
    width: "90%",
    backgroundColor: "#eee",
    color: "black",
    fontWeight: "bold",
    marginBottom: 5,
    padding: 5
  }
});
const get_state_lista_elementos = state => {
  return { items: state.lista };
};
Lista_elementos = connect(get_state_lista_elementos)(Lista_elementos);

export default Lista_elementos;
