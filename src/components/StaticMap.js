import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { connect } from "react-redux";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

let { width } = Dimensions.get("window");

let StaticMap = ({ region }) => (
  <View style={styles.map_container}>
    <View style={styles.map_container_image}>
      <MapView
        initialRegion={region}
        provider={PROVIDER_GOOGLE}
        style={{ width: "100%", height: "100%" }}
      >
        <MapView.Marker coordinate={region} />
      </MapView>
    </View>
  </View>
);

const mapStateToProps = (state, ownProps) => ({
  region: {
    latitude: ownProps.latitude,
    longitude: ownProps.longitude,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121
  }
});

StaticMap = connect(mapStateToProps)(StaticMap);

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
export default StaticMap;
