import { Navigation } from "react-native-navigation";

const go_screen_one = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: "bottom_tabs_id",
        children: [
          {
            component: {
              name: "pantalla_uno",
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: "Uno"
                }
              }
            }
          },
          {
            component: {
              name: "pantalla_dos",
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: "dos"
                }
              }
            }
          }
        ]
      }
    }
  });
const go_screen_two = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: "bottom_tabs_id",
        children: [
          {
            component: {
              name: "pantalla_uno",
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: "Uno"
                }
              }
            }
          },
          {
            component: {
              name: "pantalla_dos",
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: "dos"
                }
              }
            }
          }
        ]
      }
    }
  });

export { go_screen_two, go_screen_one };
