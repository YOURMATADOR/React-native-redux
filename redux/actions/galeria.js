import { ADD_IMAGE } from "./reducerTypes";

const agregar_imagen = ({ uri }) => ({
  type: ADD_IMAGE,
  uri
});

export { agregar_imagen };
