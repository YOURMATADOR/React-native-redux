import React, { PureComponent } from "react";
import {
  View,
  Image,
  Button,
  Text,
  StyleSheet,
  Dimensions,
  Platform
} from "react-native";
import { connect } from "react-redux";

import MapView, {
  Marker,
  AnimatedRegion,
  Animated,
  PROVIDER_GOOGLE
} from "react-native-maps";

import Text_title from "../components/ui/Text_title";
import { set_new_region } from "../../redux/actions/maps";

let { width } = Dimensions.get("window");

let Place_map = ({
  region,
  onPress,
  mapName,
  marker,
  a_region,
  onPressBtn
}) => (
  <View style={styles.map_container}>
    <Text_title>Selecciona un lugar </Text_title>
    <View style={styles.map_container_image}>
      <MapView
        initialRegion={region}
        ref={e => {
          marker = e;
        }}
        onPress={e => {
          console.log(marker);
          onPress(e, mapName);
          marker.animateToRegion(
            { ...region, ...e.nativeEvent.coordinate },
            500
          );
        }}
        provider={PROVIDER_GOOGLE}
        style={{ width: "100%", height: "100%" }}
      >
        <MapView.Marker coordinate={region} />
      </MapView>
    </View>
    <Button
      title="Tu ubicacion"
      color="blue"
      onPress={() => {
        onPressBtn(mapName);
        marker.animateToRegion({ ...region, ...region }, 500);
      }}
    />
  </View>
);

const mapStateToProps = (state, ownProps) => ({
  region: !!state.maps[ownProps.mapName]
    ? {
        latitude: state.maps[ownProps.mapName].latitude,
        longitude: state.maps[ownProps.mapName].longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121
      }
    : state.maps,
  marker: null,
  a_region: !!state.maps[ownProps.mapName]
    ? new AnimatedRegion({
        latitude: state.maps[ownProps.mapName].latitude,
        longitude: state.maps[ownProps.mapName].longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121
      })
    : new AnimatedRegion({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121
      })
});

const mapDispatchToProps = dispatch => ({
  onPress: (e, nombre) =>
    dispatch(set_new_region({ map: nombre, region: e.nativeEvent.coordinate })),
  onPressBtn: nombre =>
    navigator.geolocation.getCurrentPosition(
      val => {
        let { coords } = val;
        dispatch(set_new_region({ map: nombre, region: coords }));
      },
      err => {
        alert("Por favor enciende el GPS para poder ingresar a tu ubicacion");
      }
    )
});
Place_map = connect(
  mapStateToProps,
  mapDispatchToProps
)(Place_map);

const styles = StyleSheet.create({
  map_container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  map_container_image: {
    width: width * 0.8,
    height: width * 0.5,
    backgroundColor: "red",
    margin: 5
  },
  map_container_button: {}
});
export default Place_map;
