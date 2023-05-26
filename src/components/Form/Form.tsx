import React from 'react';
import styles from './Form.module.scss'
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { IValues } from './interfaces';
import { ADD_DATA } from '../../store/registration/actionTypes';
import { validationSchema } from './registrationFormSchema';
import { initialValues } from './initialValues';
import Title from './Title/Title';
import ButtonSubmit from './ButtonSubmit/ButtonSubmit';
import ButtonDelete from './ButtonDelete/ButtonDelete';
import ButtonClear from './ButtonClear/ButtonClear';
import Input from './Input/Input';
import Enter from './Enter/Enter';

const Form = () => {
  const dispatch = useDispatch();

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
                  disabled={!isValid && !dirty} />
              </form>
              <Enter />
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