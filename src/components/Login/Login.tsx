import React from 'react';
import styles from './Login.module.scss';
import Title from './Title/Title';
import LoginBtn from './LoginBtn/LoginBtn';
import { useSelector } from 'react-redux';
import { Formik } from 'formik';
import { initialValues } from './initialValues';
import { IValues } from './interfaces';
import { Link } from 'react-router-dom';

type TDataUSer = Record<string, string>;

function checkData(user: TDataUSer, values: IValues) {
  if (user.name === values.name && user.password === values.password) {
    console.log('сработало')
    if (user.name === '' && user.password === '') {
      return false;
    };
    return true;
  };
  return false;
};

const Login = () => {
  const user = useSelector(value => value) as TDataUSer;

  return (
    <div className={styles.container}>
      <Title />
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => { checkData(user, values) }}
      >
        {({
          values,
          handleSubmit,
          handleChange
        }
        ) => {
          return (
            <div>
              <form
                className={styles.form}
                onSubmit={handleSubmit}
              >
                <input
                  className={styles.input}
                  placeholder='Имя'
                  type='text'
                  name='name'
                  onChange={handleChange}
                  value={values.name}
                />
                {values.name !== '' &&  checkData(user, values) ? true : <p className={styles['error-name']}>Неверное имя или пароль</p>}
                <input
                  className={styles.input}
                  placeholder='Пароль'
                  type='password'
                  name='password'
                  onChange={handleChange}
                  value={values.password}
                />
                {/* {values.password !== '' && checkData(user, values) ? true : <p className={styles['error-password']}>Неверный пароль</p>} */}
                {checkData(user, values) ? <button
                  className={styles.button}
                  type='submit'>
                  <Link className={styles.link} to={'/greeting'}>Войти</Link></button> :
                  <LoginBtn
                  />
                }
                <button
                  className={styles.button}
                ><Link className={styles.link} to={'/'}>Регистрация</Link></button>
              </form>
            </div>
          )
        }}
      </Formik>      
    </div>
  );
};

export default Login;