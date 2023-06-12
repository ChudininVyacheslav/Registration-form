import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

interface IProps {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  linkEnter?: Boolean;
}

//submit, clear


const Button: React.FC<IProps> = ({ label, disabled, onClick, linkEnter }) => {
  return (
    <div>
      {linkEnter ? <button className={styles.button}>
        <Link className={styles.link} to={'/login'}>
        {label}
        </Link>
      </button> : <button
          className={styles.button}
        disabled={disabled}
        onClick={onClick}
      // type='submit'
      >{label}</button>}


    </div>
  )
}

export default Button