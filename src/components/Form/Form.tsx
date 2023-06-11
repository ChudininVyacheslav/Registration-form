import React, { useState } from 'react';
import styles from './Form.module.scss'
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { IErrors, IValues } from './interfaces';
import { ADD_DATA } from '../../store/registration/actionTypes';
import { validationSchema } from './registrationFormSchema';
import { initialValues } from './initialValues';
import Title from './Title/Title';
import ButtonSubmit from './ButtonSubmit/ButtonSubmit';
import ButtonDelete from './ButtonDelete/ButtonDelete';
import ButtonClear from './ButtonClear/ButtonClear';
import Input from './Input/Input';
import ButtonEnter from './ButtonEnter/ButtonEnter';

const Form = () => {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);

  function saveData(values: IValues): void {
    dispatch({ type: ADD_DATA, payload: values });
  };

  return (
    <div className={styles.form}>
        <Title />
        <Formik
          initialValues={initialValues}
          validateOnBlur
          onSubmit={(values) => { saveData(values) }}
          validationSchema={validationSchema}
          validate={values => {
            const errors: IErrors = {};
            if (!/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values.password)) {
              errors.password = 'Пароль должен содержать 0-9';
            }
            else if (!/^(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values.password)) {
              errors.password = 'Пароль должен содержать A-Z';
            }
            else if (
              !/^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values.password)
            ) {
              errors.password = 'Введите корректный пароль';
            }
            return errors;
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
            resetForm
          }) => {
            return (
              <div>
                <form
                  onSubmit={handleSubmit}>
                  <Input
                    label='Фамилия'
                    name='secondName'
                    type='text'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.secondName}
                    errorMessage={touched.secondName && errors.secondName
                      ? errors.secondName
                      : undefined}
                  />
                  <Input
                    label='Имя'
                    name='name'
                    type='text'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    errorMessage={touched.name && errors.name
                      ? errors.name
                      : undefined}
                  />
                  <Input
                    label='Пароль'
                    name='password'
                    type='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    errorMessage={touched.password && errors.password
                      ? errors.password
                      : undefined}
                  />
                  <Input
                    label='Подтвердите пароль'
                    name='confirmPassword'
                    type='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                    errorMessage={touched.confirmPassword && errors.confirmPassword
                      ? errors.confirmPassword
                      : undefined}
                  />
                  <Input
                    label='Email'
                    name='email'
                    type='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    errorMessage={touched.email && errors.email
                      ? errors.email
                      : undefined}
                  />
                  <Input
                    label='Подтвердите email'
                    name='confirmEmail'
                    type='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmEmail}
                    errorMessage={touched.confirmEmail && errors.confirmEmail
                      ? errors.confirmEmail
                      : undefined}
                  />
                  <ButtonSubmit
                    disabled={!isValid && !dirty}
                    isOpend={modal}
                    onModalClose={() => setModal(false)}
                    onClick={() => {
                      if (isValid && dirty) {
                        setModal(true)
                      }
                    }}
                    />
                </form>
                <ButtonEnter />
                <ButtonClear
                  onClick={() => { resetForm() }}
                />
              </div>
            )
          }}
        </Formik>
        <ButtonDelete />
      </div>
  );
};

export default Form;