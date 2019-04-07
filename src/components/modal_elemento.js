import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  Modal,
  TouchableHighlight
} from "react-native";
import { connect } from "react-redux";

import { delete_elemento, close_modal } from "../../redux/actions/index";

let Modal_elemento = ({
  eliminar_elemento,
  imagen_src,
  llave,
  texto,
  estado,
  esconder_modal
}) => (
  <View>
    <Modal
      animationType="slide"
      transparent={false}
      visible={estado}
      onRequestClose={esconder_modal}
    >
      {!!estado && (
        <View style={styles.container_modal}>
          <Text style={styles.titulo}>{texto}</Text>
          <Image style={styles.imagen} source={imagen_src} />

          <Button
            style={styles.btn_borrar}
            title="Borrar"
            onPress={() => {
              eliminar_elemento(llave);
            }}
            color="red"
            accessibilityLabel="Click para eliminar el elemento"
          />
          <Button
            style={styles.btn_volver}
            title="volver"
            color="blue"
            onPress={esconder_modal}
            accessibilityLabel="Click para volver a la lista de elementos"
          />
        </View>
      )}
    </Modal>
  </View>
);

const mapState_modal_elemento = state => {
  return {
    estado: !!state.modal_lista_item.estado,
    imagen_src: state.modal_lista_item.imagen,
    llave: state.modal_lista_item.key,
    texto: state.modal_lista_item.texto,
    estado: state.modal_lista_item.estado
  };
};
const mapDispatch_modal_elemento = (dispatch, ownProps) => {
  return {
    esconder_modal: () => dispatch({ type: "CERRAR-MODAL" }),
    eliminar_elemento: id => {
      dispatch(delete_elemento({ id }));
      dispatch(close_modal());
    }
  };
};

Modal_elemento = connect(
  mapState_modal_elemento,
  mapDispatch_modal_elemento
)(Modal_elemento);

const styles = StyleSheet.create({
  container_modal: {
    alignItems: "stretch",
    width: "80%",
    justifyContent: "center",
    alignSelf: "center"
  },
  btn_borrar: {
    color: "red"
  },
  btn_volver: {
    color: "blue"
  },
  imagen: {
    width: "100%",
    height: 100,
    margin: 5,
    borderRadius: 10
  },
  titulo: {
    textAlign: "center",
    fontSize: 50,
    color: "black",
    padding: 10
  }
});
export default Modal_elemento;
