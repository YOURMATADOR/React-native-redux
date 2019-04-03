const lista = (status = [], action) => {
  switch (action.type) {
    case "ADD-ELEMENTO":
      return [...status, { texto: action.texto, estado: false }];
    case "TOGGLE-ELEMENTO":
      return [
        ...status.map((e, i) => (i == action.id ? (e.estado = !e.estado) : e))
      ];
    default:
      return status;
  }
};
const nombre = (status = "", action) => {
  switch (action.type) {
    case "MODIFICAR-NOMBRE":
      return action.texto;
    case "ELIMINAR-NOMBRE":
      return "";
    default:
      return status;
  }
};
export { lista, nombre };
