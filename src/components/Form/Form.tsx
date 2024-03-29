import styles from "./Form.module.scss";
import {Formik} from "formik";
import {useDispatch} from "react-redux";
import {IValues} from "./interfaces";
import {ADD_DATA, DELETE_DATA} from "../../store/registration/actionTypes";
import {validationSchema} from "./registrationFormSchema";
import {initialValues} from "./consts";
import Input from "../common/Input/Input";
import {validationPassword} from "./validationPassword";
import Button from "../common/Button/Button";
import Title from "../common/Title/Title";
import {OPEN_MODAL} from "../../store/modal/actionTypes";

const Form = () => {
  const dispatch = useDispatch();

  function saveUser(values: IValues): void {
    dispatch({type: ADD_DATA, payload: values});
  }

  function deleteUser() {
    dispatch({type: DELETE_DATA});
  }

  function openModal() {
    dispatch({type: OPEN_MODAL});
  }

  return (
    <div className={styles.form}>
      <Title text="Регистрация" />
      <Formik
        initialValues={initialValues}
        validateOnBlur
        onSubmit={(values) => {
          saveUser(values);
        }}
        validationSchema={validationSchema}
        validate={(values) => {
          return validationPassword(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
          resetForm,
        }) => {
          return (
            <div>
              <form onSubmit={handleSubmit}>
                <div className={styles.input}>
                  <Input
                    label="Фамилия"
                    name="secondName"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.secondName}
                    errorMessage={
                      touched.secondName && errors.secondName
                        ? errors.secondName
                        : undefined
                    }
                  />
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
                  <Input
                    label="Подтвердите пароль"
                    name="confirmPassword"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                    errorMessage={
                      touched.confirmPassword && errors.confirmPassword
                        ? errors.confirmPassword
                        : undefined
                    }
                  />
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    errorMessage={
                      touched.email && errors.email ? errors.email : undefined
                    }
                  />
                  <Input
                    label="Подтвердите email"
                    name="confirmEmail"
                    type="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmEmail}
                    errorMessage={
                      touched.confirmEmail && errors.confirmEmail
                        ? errors.confirmEmail
                        : undefined
                    }
                  />
                </div>
                <div className={styles.btn}>
                  <Button
                    label="Зарегистрироваться"
                    disabled={!isValid && !dirty}
                    onClick={() => {
                      if (isValid && dirty) {
                        openModal();
                      }
                    }}
                  />
                  <Button btnType="link" label="Войти" path="/Registration-form/login" />
                </div>
                <div className={styles.btn}>
                  <Button
                    label="Очистить"
                    onClick={() => {
                      resetForm();
                    }}
                  />
                  <Button
                    label="Удалить аккаунт"
                    onClick={() => {
                      deleteUser();
                    }}
                  />
                </div>
              </form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default Form;
