import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

const go_lista_lugares = async () => {
  try {
    let plus_square_icon = await Icon.getImageSource("plus-square", 20);
    let list_icon = await Icon.getImageSource("list", 20);

    await Navigation.setRoot({
      root: {
        bottomTabs: {
          id: "bottom_tabs_id",
          children: [
            {
              component: {
                name: "curso.lista_elementos",
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
                name: "curso.registro_elementos",
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
          options:{
            animations:{}
          }
        },
        
      }
    });
  } catch (error) {
    console.log(error);
  }
};
export { go_lista_lugares };
