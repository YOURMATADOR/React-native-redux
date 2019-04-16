import {
    SET_ACTUAL_POSITION
    } from "./reducerTypes";
  
  
  export const set_position = ({ position }) => ({
      type: SET_ACTUAL_POSITION,
      position
    });
    