import { store } from "../../../redux/config";
import Icon_badge from "../../components/Icon_badge";
import Login from "../Login";
import App from "../../../App";
import Lista_elementos from "../Lista_elementos";
import Registro_elementos from "../Registro_elementos";
import Side_bar from "../Side_bar";
import Grapper from "./redux_grapper";

import { Navigation } from "react-native-navigation";

const regiter_routes = () => {
  Navigation.registerComponent("Curso.Sidebar", Grapper(Side_bar, store));
  Navigation.registerComponent("Curso.Login", Grapper(Login, store));
  Navigation.registerComponent(
    "Curso.Registro",
    Grapper(Registro_elementos, store)
  );
  Navigation.registerComponent(
    "Curso.Listado",
    Grapper(Lista_elementos, store)
  );
};

export default regiter_routes;
