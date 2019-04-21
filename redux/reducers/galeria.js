import { DEFAULT_BACKGROUND, ADD_IMAGE } from "../actions/reducerTypes";

const galery = (state = DEFAULT_BACKGROUND, action) => {
  switch (action.type) {
    case ADD_IMAGE:
      return action.uri;
    default:
      return state;
  }
};

export default galery;
