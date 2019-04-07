import {
  ADD_ELEMENTO,
  DELETE_ELEMENTO,
  MODIFY_NOMBRE,
  TOGGLE_ELEMENTO,
  DELETE_NOMBRE,
  OPEN_MODAL,
  CLOSE_MODAL
} from "./reducerTypes";

import uuid from "uuid/v4";

const add_elemento = ({ texto }) => ({
  type: ADD_ELEMENTO,
  texto,
  id: uuid()
});

const delete_elemento = ({ id }) => ({
  type: DELETE_ELEMENTO,
  id
});

const toggle_elemento = ({ id }) => ({
  type: TOGGLE_ELEMENTO,
  id
});

const modify_nombre = ({ texto }) => ({
  type: MODIFY_NOMBRE,
  texto
});

const delete_nombre = () => ({
  type: DELETE_NOMBRE
});

const open_modal = ({ imagen, key, texto }) => ({
  type: OPEN_MODAL,
  imagen,
  key,
  texto,
  estado: true
});

const close_modal = () => ({
  type: CLOSE_MODAL
});

export {
  close_modal,
  open_modal,
  delete_nombre,
  delete_elemento,
  modify_nombre,
  add_elemento,
  toggle_elemento
};
