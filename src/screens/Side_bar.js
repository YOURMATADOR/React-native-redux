import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Text,
  ImageBackground,
  Dimensions,
  Image
} from "react-native";

import fondo_imagen from "../assets/img/bright-squares.png"

import imagen_perfil from "../assets/img/perfil.jpg";
import { fondo, secundario, primario } from "../components/ui/colores";
let { height, width } = Dimensions.get("window");

class Side_bar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.user_info}>
          <ImageBackground
            source={fondo_imagen}
            style={styles.fondo_imagen}
          >
            <View style={styles.perfil_container}>
              <View style={styles.perfil_container_imagen}>
                <Image
                  source={imagen_perfil}
                  style={styles.perfil_container_imagen_imagen}
                />
              </View>
              <Text
                numberOfLines={1}
                style={styles.perfil_container_usuario_container_item}
              >
                Eduardo Avila mancilla lolololololololololololol
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: secundario
  },
  user_info: {
    width: "100%",
    height: "30%",
    backgroundColor: fondo
  },
  perfil_container_imagen: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: 200,
    borderColor: "white",
    borderWidth: 2,
    overflow: "hidden"
  },
  perfil_container_imagen_imagen: {
    width: "100%",
    height: "100%",
    resizeMode: "center",
    borderRadius: 200
  },
  perfil_container: {
    height: "100%",
    width: "90%",
    justifyContent: "space-around"
  },
  perfil_container_usuario_container_item: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
    backgroundColor: primario,
    borderRadius: 50,
    alignSelf: "flex-start",
    padding: 5
  },
  fondo_imagen: {
    height: "100%",
    width: "100%",
    backgroundColor:secundario,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Side_bar;
