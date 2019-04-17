import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  Text,
  View
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import Icon_android from "react-native-vector-icons/MaterialCommunityIcons";
import { primario } from "./ui/colores";

class IconBtn extends React.Component {
  render() {
    let { onPress, style_text, name, color, children, style } = this.props;
    if (Platform.OS == "android") {
      return (
        <TouchableNativeFeedback style={[styles.icon_btn]} onPress={onPress}>
          <View style={[styles.text_label, style]}>
            <Icon_android name={name} size={30} color={color} />
            {children && <Text style={styles.text}>{children}</Text>}
          </View>
        </TouchableNativeFeedback>
      );
    } else {
      return (
        <TouchableOpacity style={styles.icon_btn} onPress={onPress}>
          <Icon name={name} size={30} color={color} />
        </TouchableOpacity>
      );
    }
  }
}

let styles = StyleSheet.create({
  icon_btn: {
    padding: 3,
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  text_label: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: primario,
    borderRadius: 10,
    width: "20%",
    color: "white"
  },
  text: {
    color: "white",
    fontWeight: "bold"
  }
});
export default IconBtn;
