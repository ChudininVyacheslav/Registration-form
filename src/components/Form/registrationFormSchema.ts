import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .typeError("Должно быть строкой")
    .required("Пожалуйста, укажите имя"),
  secondName: yup
    .string()
    .typeError("Должно быть строкой")
    .required("Пожалуйста, укажите фамилию"),
  password: yup
    .string()
    .typeError("Должно быть строкой")
    .required("Пожалуйста, укажите пароль"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Пароли не совпадают")
    .required("Пожалуйста, укажите пароль"),
  email: yup
    .string()
    .email("Введите верный Email")
    .required("Пожалуйста, укажите Email"),
  confirmEmail: yup
    .string()
    .email("Введите верный Email")
    .oneOf([yup.ref("email")], "Email не совпадают")
    .required("Пожалуйста, укажите email"),
});
