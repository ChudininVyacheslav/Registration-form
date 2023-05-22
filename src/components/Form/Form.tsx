import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch} from 'react-redux';

const ADD_DATA = 'ADD_DATA';

interface Values {
  name: string,
  secondName: string,
  password: string,
  confirmPassword: string,
  email: string,
  confirmEmail: string,
};

const Form = () => {
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
    name: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    secondName: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    password: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательно'),
    email: yup.string().email('Введите верный email').required('Обязательно'),
    confirmEmail: yup.string().email('Введите верный email').oneOf([yup.ref('email')], 'Email не совпадают').required('Обязательно')
  });

  function saveData(values: Values): void {
    dispatch({ type: ADD_DATA, payload: values })
  };

  return (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues={{
          name: '',
          secondName: '',
          password: '',
          confirmPassword: '',
          email: '',
          confirmEmail: '',
        }}
        validateOnBlur
        onSubmit={(values) => { console.log(values) }}
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
          dirty
        }) => {
          return (
            <div>
              <p>
                <label htmlFor='secondName'>Фамилия</label><br />
                <input
                  type='text'
                  name='secondName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.secondName} />
              </p>
              {touched.secondName && errors.secondName && <p>{errors.secondName}</p>}

              <p>
                <label htmlFor='name'>Имя</label><br />
                <input type='text' name='name' onChange={handleChange} onBlur={handleBlur} value={values.name} />
              </p>
              {touched.name && errors.name && <p>{errors.name}</p>}


              <p>
                <label htmlFor='password'>Пароль</label><br />
                <input type='password' name='password' onChange={handleChange} onBlur={handleBlur} value={values.password} />
              </p>
              {touched.password && errors.password && <p>{errors.password}</p>}

              <p>
                <label htmlFor='confirmPassword'>Подтвердите пароль</label><br />
                <input type='password' name='confirmPassword' onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword} />
              </p>
              {touched.confirmPassword && errors.confirmPassword && <p>{errors.confirmPassword}</p>}

              <p>
                <label htmlFor='email'>Email</label><br />
                <input type='email' name='email' onChange={handleChange} onBlur={handleBlur} value={values.email} />
              </p>
              {touched.email && errors.email && <p>{errors.email}</p>}

              <p>
                <label htmlFor='confirmEmail'>Подтвердите email</label><br />
                <input type='email' name='confirmEmail' onChange={handleChange} onBlur={handleBlur} value={values.confirmEmail} />
              </p>
              {touched.confirmEmail && errors.confirmEmail && <p>{errors.confirmEmail}</p>}
              <button
                disabled={!isValid && !dirty}
                onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                  handleSubmit(); saveData(values)
                }}
                type='submit' >Отправить</button>
            </div>
          )
        }}
      </Formik>
    </div>
  );
};

export default Form