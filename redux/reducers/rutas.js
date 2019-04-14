import { SET_ACTUAL_ROUTE } from "../actions/reducerTypes";

const rutas = (status = "Listado", action) => {
  switch (action.type) {
    case SET_ACTUAL_ROUTE:
      return action.ruta;
    default:
      return status;
  }
};

export default rutas;
