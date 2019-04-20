import { SET_NEW_REGION } from "./reducerTypes";

const set_new_region = ({ map, region }) => ({
  type: SET_NEW_REGION,
  map,
  region
});

export { set_new_region };
