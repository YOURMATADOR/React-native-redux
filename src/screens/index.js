import Dos from "./dos";
import Uno from "./uno";
const { Navigation } = require("react-native-navigation");

const register_screens = () => {
  Navigation.registerComponent("pantalla_uno", () => Uno);
  Navigation.registerComponent("pantalla_dos", () => Dos);
};
export default register_screens;
