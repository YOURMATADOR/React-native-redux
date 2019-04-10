import Registro_elementos from "../Registro_elementos";
import Lista_elementos from "../Lista_elementos";
import Login from "../Login";
import { store } from "../../../redux/config";
import { name as appName } from "../../../app.json";
import App from "../../../App";

const { Navigation } = require("react-native-navigation");
import Grapper from "./redux_grapper";

const register_screens = () => {
  Navigation.registerComponent("curso.lista_elementos", () =>
    Grapper(Lista_elementos, store)
  );
  Navigation.registerComponent("curso.registro_elementos", () =>
    Grapper(Registro_elementos, store)
  );
  Navigation.registerComponent("curso.login", () => Grapper(Login, store));
  Navigation.registerComponent(appName, () => Grapper(App, store));
};
export default register_screens;
