/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { Navigation } from "react-native-navigation";
import register_screens from "./src/screens/index";

register_screens();
Navigation.registerComponent(appName, () => App);

Navigation.events().registerAppLaunchedListener( () => {
  Navigation.setRoot({
    root:{
      stack:{
        id:"id_home",
        children:[
          {
            component:{
              name:appName
            }
          }
        ],
        options:{
          topBar:{
            title:{
              text:"Home"
            }
          }
        }
      }
    }
  });
});
