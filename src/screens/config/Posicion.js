import { Dimensions } from "react-native";
import { store } from "../../../redux/config";
import { set_position } from "../../../redux/actions";
import { LANDSCAPE, PORTRAIT } from "../../../redux/actions/reducerTypes";

const iniciar_posicion = () => {
  let { height } = Dimensions.get("window");
  if (+height > 500) {
    store.dispatch(set_position({ position: PORTRAIT }));
  } else {
    store.dispatch(set_position({ position: LANDSCAPE }));
  }
  Dimensions.addEventListener("change", ({ window }) => {
    let { height } = window;

    if (+height > 500) {
      store.dispatch(set_position({ position: PORTRAIT }));
    } else {
      store.dispatch(set_position({ position: LANDSCAPE }));
    }
  });
};

export { iniciar_posicion };
