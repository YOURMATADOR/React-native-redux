import validador from "validator";

let user_validator = (val, { lenght } = {}) => {
  if ([validador.isLength(val, { min: 3, max: 15 })].every(i => !!i)) {
    return true;
  }
  return false;
};

let password_validator = (val, { lenght } = {}) => {
  if (
    [
      validador.isLength(val, { min: 8 }),
      validador.isAlphanumeric(val),
      validador.matches(val, /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    ].every(i => !!i)
  ) {
    return true;
  }
  return false;
};

export { user_validator, password_validator };
