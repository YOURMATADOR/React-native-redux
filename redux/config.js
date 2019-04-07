import { lista, nombre, modal_lista_item } from "./reducers/lista";
import { createStore, combineReducers } from "redux";

let estado_modal = {
  modal_lista_item: {
    imagen: "",
    key: "",
    texto: "",
    estado: false
  }
};
let store = createStore(
  combineReducers({ modal_lista_item, lista, nombre }),
  estado_modal
);

export { store };
