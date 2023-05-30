import React from 'react';
import styles from './LoginBtn.module.scss';

function error() {
  return (
    <p className={styles.error}>Неверное имя</p>
  )
}

const LoginBtn = () => {
  return (
    <button
      className={styles.button}
      type='button'
    >
      Войти
    </button>
  );
};

export default LoginBtn;