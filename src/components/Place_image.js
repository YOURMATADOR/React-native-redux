import React, { PureComponent } from "react";
import {
  View,
  Image,
  Button,
  Text,
  StyleSheet,
  Dimensions
} from "react-native";
import ImagePicker from "react-native-image-picker";
import { connect } from "react-redux";

import Text_title from "../components/ui/Text_title";
import { agregar_imagen } from "../../redux/actions/galeria";

let { width } = Dimensions.get("window");

let Place_image = ({ fondo_imagen, onPress }) => (
  <View style={styles.place_image_container}>
    <Text_title>Selecciona una imagen</Text_title>
    <Image source={fondo_imagen} style={styles.place_image_container_image} />
    <Button
      title="seleccionar"
      color="blue"
      onPress={onPress}
      style={styles.place_image_container_button}
    />
  </View>
);
const mapStateToProps = (state, ownProps) => ({
  fondo_imagen: state.galery
});
const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  return {
    onPress: () => {
      ImagePicker.showImagePicker({ title: "Imagen del lugar!" }, res => {
        console.log(res);
        
        if (res.didCancel) {
          console.log("El usuario no acepto!");
        } else if (res.error) {
          console.log("Error al seleccionar la imagen", res);
        } else {
          dispatch(agregar_imagen({ uri: res }));
        }
      });
    }
  };
};

Place_image = connect(
  mapStateToProps,
  mapDispatchToProps
)(Place_image);

const styles = StyleSheet.create({
  place_image_container: {
    width: "100%",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  place_image_container_header: {},
  place_image_container_image: {
    width: width * 0.8,
    height: width * 0.5
  },
  place_image_container_button: {
    margin: 10
  }
});
export default Place_image;
