import {IErrors, IValues} from "./interfaces";

export function validationPassword(values: IValues) {
  const errors: IErrors = {};
  switch (true) {
    case !/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{1,10}$/.test(values.password):
      errors.password = "Пароль должен содержать не менее одной цифры";
      return errors;
    case !/^(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{1,10}$/.test(values.password):
      errors.password = "Пароль должен содержать заглавную букву";
      return errors;
    case !/^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,10}$/.test(
      values.password
    ):
      errors.password = "Длина пароля не менее 6 символов";
      return errors;
    default:
      return errors;
  }
}
