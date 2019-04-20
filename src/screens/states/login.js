import { withStateHandlers, compose, pure } from "recompose";
import { Animated } from "react-native";
import { go_lista_lugares } from "../navigation/navegation";

import {
  user_validator,
  password_validator
} from "../../../utils/validators/login";

const initialState = {
  inputs: {
    user: { value: "", valid: true, mensaje: "", touched: false },
    password: { value: "", valid: true, mensaje: "", touched: false }
  },
  logo_container_height: new Animated.Value(1)
};

const ocultar_logo = props => val => {
  props.logo_container_height.setValue(1);

  Animated.timing(props.logo_container_height, {
    duration: 100,
    toValue: 0
  }).start();
};

const mostrar_logo = props => val => {
  props.logo_container_height.setValue(0);
  Animated.timing(props.logo_container_height, {
    duration: 100,
    toValue: 1
  }).start();
};
const change_user = props => user => ({
  inputs: {
    ...props.inputs,
    user: { valid: user_validator(user), value: user, touched: true }
  }
});

const change_pass = props => password => ({
  inputs: {
    ...props.inputs,
    password: {
      valid: password_validator(password),
      value: password,
      touched: true
    }
  }
});
const ir_home = props => val => {
  let llaves = Object.keys(props.inputs);
  if (llaves.every(i => props.inputs[i].touched && props.inputs[i].valid)) {
    go_lista_lugares();
  }
};
export const login_state = withStateHandlers(initialState, {
  ocultar_logo,
  mostrar_logo,
  change_user,
  change_pass,
  ir_home
});
