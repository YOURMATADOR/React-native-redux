import { Navigation } from "react-native-navigation";

import { store } from "../../../redux/config";
import { set_ruta } from "../../../redux/actions/rutas";

export const obtener_ruta = Navigation.events().registerBottomTabSelectedListener(
  ({ selectedTabIndex, unselectedTabIndex }) => {
    Navigation.events().registerComponentDidAppearListener(
      (componentId, componentName) =>
        store.dispatch(
          set_ruta({ruta:!!componentId.componentId ? componentId.componentId : "Listado"})
        )
    );
  }
);
