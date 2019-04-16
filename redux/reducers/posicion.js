import { SET_ACTUAL_POSITION } from "../actions/reducerTypes";

const position = (status = "portrait", action) => {
  switch (action.type) {
    case SET_ACTUAL_POSITION:
      return action.position;
    default:
      return status;
  }
};

export default position;
