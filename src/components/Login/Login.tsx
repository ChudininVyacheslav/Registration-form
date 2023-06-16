import styles from "./Login.module.scss";
import Title from "../common/Title/Title";
import {useSelector} from "react-redux";
import {Formik} from "formik";
import {initialValues} from "./initialValues";
import {IValues} from "./interfaces";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";
import {IRegistrationState} from "../../store/registration/interfaces";

function dataValidation(user: IReducerState, values: IValues) {
  if (
    user.user.name === values.name &&
    user.user.password === values.password
  ) {
    return true;
  }
}

export interface IReducerState {
  user: IRegistrationState;
  modal: Boolean;
}

const Login = () => {
  const user = useSelector<IReducerState, IReducerState>((state) => state);

  return (
    <div className={styles.container}>
      <Title text="Вход" />
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          dataValidation(user, values);
        }}
      >
        {({
          values,
          handleSubmit,
          handleBlur,
          touched,
          errors,
          handleChange,
        }) => {
          return (
            <div>
              <form className={styles.form} onSubmit={handleSubmit}>
                <Input
                  label="Имя"
                  name="name"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  errorMessage={
                    touched.name && errors.name ? errors.name : undefined
                  }
                />
                <Input
                  label="Пароль"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  errorMessage={
                    touched.password && errors.password
                      ? errors.password
                      : undefined
                  }
                />
                <div className={styles.btn}>
                  {dataValidation(user, values) ? (
                    <Button btnType="link" label="Войти" path="/greeting" />
                  ) : (
                    <Button
                      label="Войти"
                      disabled={values.name && values.password ? false : true}
                    />
                  )}
                  <Button btnType="link" label="Регистрация" path="/" />
                </div>
              </form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
