import {
  ADD_ELEMENTO,
  DELETE_ELEMENTO,
  TOGGLE_ELEMENTO,
  MODIFY_NOMBRE,
  DELETE_NOMBRE,
  OPEN_MODAL,
  CLOSE_MODAL
} from "../actions/reducerTypes";
// * types of reducers to keep constant names

const lista = (status = [], action) => {
  switch (action.type) {
    case ADD_ELEMENTO:
      return [
        ...status,
        {
          id: action.id,
          texto: action.texto,
          estado: false,
          coordenadas: action.coordenadas
        }
      ];
    case TOGGLE_ELEMENTO:
      return [
        ...status.map((e, i) =>
          e.id == action.id ? { ...e, estado: !e.estado } : e
        )
      ];
    case DELETE_ELEMENTO:
      return [...status.filter(i => i.id !== action.id)];
    default:
      return status;
  }
};
const nombre = (status = "", action) => {
  switch (action.type) {
    case MODIFY_NOMBRE:
      return action.texto;
    case DELETE_NOMBRE:
      return "";
    default:
      return status;
  }
};
const modal_lista_item = (status = {}, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        imagen: action.imagen,
        key: action.key,
        texto: action.texto,
        estado: action.estado,
        coordenadas:action.coordenadas
      };
    case CLOSE_MODAL:
      return { imagen: "", key: "", texto: "", estado: false };
    default:
      return status;
  }
};
export { lista, nombre, modal_lista_item };
