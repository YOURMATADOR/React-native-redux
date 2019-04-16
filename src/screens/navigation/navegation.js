import { Navigation } from "react-native-navigation";
import Icon_android from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";
import { Platform } from "react-native";

import { primario, seleccion } from "../../components/ui/colores";

const go_lista_lugares = async () => {
  try {
    let plus_square_icon = await Icon.getImageSource("ios-add", 20);
    let list_icon = await Icon.getImageSource("ios-list", 20);

    if (Platform.OS == "android") {
      plus_square_icon = await Icon_android.getImageSource(
        "map-marker-plus",
        20
      );
      list_icon = await Icon_android.getImageSource(
        "format-list-bulleted-type",
        20
      );
    }

    Navigation.setDefaultOptions({
      bottomTab: {
        selectedIconColor: "red",
        textColor: "white",
        iconColor: "white",
        selectedTextColor: "white",
      },
      bottomTabs: {
        animate: false,
        titleDisplayMode: "alwaysShow",
        backgroundColor: primario
      },
      layout: {
        orientation: ["portrait", "landscape"]
      }
    });
    await Navigation.setRoot({
      root: {
        sideMenu: {
          id: "sideMenu",
          left: {
            component: {
              id: "Drawer",
              name: "Curso.Sidebar"
            }
          },
          center: {
            bottomTabs: {
              id: "bottom_tabs_id",
              children: [
                {
                  component: {
                    name: "Curso.Listado",
                    id: "Listado",
                    passProps: {
                      mostrar: false
                    },
                    options: {
                      bottomTab: {
                        fontSize: 12,
                        text: "Lista",
                        icon: list_icon
                      }
                    }
                  }
                },
                {
                  component: {
                    name: "Curso.Registro",
                    id: "Registro",
                    passProps: {
                      mostrar: false
                    },
                    options: {
                      bottomTab: {
                        fontSize: 12,
                        text: "Agregar",
                        icon: plus_square_icon
                      }
                    }
                  }
                }
              ],
              options: {
                bottomTabs: {
                  animate: false
                }
              }
            }
          }
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
};
export { go_lista_lugares };
