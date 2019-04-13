import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

const go_lista_lugares = async () => {
  try {
    let plus_square_icon = await Icon.getImageSource("plus-square", 20);
    let list_icon = await Icon.getImageSource("list", 20);
    Navigation.setDefaultOptions({
      bottomTab: {
        selectedIconColor: "#fb8c00"
      },
      bottomTabs: {
        animate: false,
        titleDisplayMode: "alwaysShow"
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
          },
        },
      
      }
      
    });
  } catch (error) {
    console.log(error);
  }
};
export { go_lista_lugares };
