import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  NativeAppEventEmitter,
  Button,
  Modal,
  TouchableHighlight
} from "react-native";
import { connect } from "react-redux";

let Modal_elemento = ({ estado, esconder_modal }) => (
  <View>
    <Modal
      animationType="slide"
      transparent={false}
      visible={estado}
      onRequestClose={esconder_modal}
    >
      <View style={{ marginTop: 22 }}>
        <View>
          <Text>Hello World!</Text>

          <TouchableHighlight onPress={() => esconder_modal}>
            <Text>Hide Modal</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  </View>
);

const mapState_modal_elemento = state => {
  return {
    estado: !!state.modal_lista_item.estado
  };
};
const mapDispatch_modal_elemento = dispatch => ({
  esconder_modal: () => dispatch({ type: "CERRAR-MODAL" })
});

Modal_elemento = connect(
  mapState_modal_elemento,
  mapDispatch_modal_elemento
)(Modal_elemento);

export default Modal_elemento;
