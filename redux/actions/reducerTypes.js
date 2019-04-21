import fondo from "../../src/assets/img/bright-squares.png"; //? imagen de fondo por defecto

//* list types
const ADD_ELEMENTO = "ADD-ELEMENTO";
const TOGGLE_ELEMENTO = "TOGGLE-ELEMENTO";
const DELETE_ELEMENTO = "DELETE-ELEMENTO";

//* nombre types
const MODIFY_NOMBRE = "MODIFICAR-NOMBRE";
const DELETE_NOMBRE = "ELIMINAR-NOMBRE";

// * modal lista item types
const OPEN_MODAL = "ABRIR-MODAL";
const CLOSE_MODAL = "CERRAR-MODAL";

//* Rutas types
const SET_ACTUAL_ROUTE = "SET-ACTUAL-ROUTE";

//* posicion types
const SET_ACTUAL_POSITION = "SET-ACTUAL-POSITION";
const PORTRAIT = "portrait";
const LANDSCAPE = "landscape";

//* maps types
const MAP_ADD_PLACE_INITIAL_STATE = {
  map_addPlace: {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121
  }
};

//* galeria types
const DEFAULT_BACKGROUND = fondo;
const ADD_IMAGE = "ADD-IMAGE";

const SET_NEW_REGION = "SET-NEW-REGION";
export {
  DEFAULT_BACKGROUND,
  ADD_IMAGE,
  DELETE_NOMBRE,
  SET_NEW_REGION,
  MAP_ADD_PLACE_INITIAL_STATE,
  ADD_ELEMENTO,
  TOGGLE_ELEMENTO,
  DELETE_ELEMENTO,
  MODIFY_NOMBRE,
  OPEN_MODAL,
  CLOSE_MODAL,
  SET_ACTUAL_ROUTE,
  SET_ACTUAL_POSITION,
  PORTRAIT,
  LANDSCAPE
};
