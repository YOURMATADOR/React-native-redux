const lista = (status = [], action) => {
  switch (action.type) {
    case "ADD-ELEMENTO":
      return [...status, { id: action.id, texto: action.texto, estado: false }];
    case "TOGGLE-ELEMENTO":
      return [
        ...status.map((e, i) =>
          e.id == action.id ? { ...e, estado: !e.estado } : e
        )
      ];
    case "DELETE-ELEMENTO":
      return [...status.filter(i => i.id !== action.id)];
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
const modal_lista_item = (status = {}, action) => {
  switch (action.type) {
    case "ABRIR-MODAL":
      return {
        imagen: action.imagen,
        key: action.id,
        texto: action.texto,
        estado: action.estado
      };
    case "CERRAR-MODAL":
      return { imagen: "", key: "", texto: "", estado: false };
    default:
      return status;
  }
};
export { lista, nombre, modal_lista_item };
