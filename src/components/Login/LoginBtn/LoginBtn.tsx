import styles from './LoginBtn.module.scss';

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