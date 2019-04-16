import { Dimensions } from "react-native";

export let width = Dimensions.get("window").width;
Dimensions.addEventListener("change", ({ window }) => {
  width = window.width;
});

export let height = Dimensions.get("window").height;
Dimensions.addEventListener("change", ({ window }) => {
  height = window.height;
});
