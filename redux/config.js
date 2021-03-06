import { lista, nombre, modal_lista_item } from "./reducers/lista";
import rutas from "./reducers/rutas";
import position from "./reducers/posicion";
import maps from "./reducers/maps";
import galery from './reducers/galeria'

import { createStore, combineReducers, compose } from "redux";

let estado_modal = {
  modal_lista_item: {
    imagen: "",
    key: "",
    texto: "",
    estado: false
  }
};
let composeEnharcer = compose;
if (__DEV__) {
  composeEnharcer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
let store = createStore(
  combineReducers({ modal_lista_item, lista, nombre, rutas, position, maps,galery}),
  estado_modal,
  composeEnharcer()
);

export { store };
