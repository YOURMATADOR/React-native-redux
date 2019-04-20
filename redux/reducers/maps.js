import {
  MAP_ADD_PLACE_INITIAL_STATE,
  SET_NEW_REGION
} from "../actions/reducerTypes";

const maps = (
  state = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121
  },
  action
) => {
  switch (action.type) {
    case SET_NEW_REGION:
      return { ...state, [action.map]: { ...action.region } };
    default:
      return state;
  }
};

export default maps;
