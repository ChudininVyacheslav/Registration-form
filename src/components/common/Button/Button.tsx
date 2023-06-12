import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import { useDispatch } from 'react-redux';
import { DELETE_DATA } from '../../../store/registration/actionTypes';

interface IProps {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  linkEnter?: Boolean;
  linkPath?: string | any;
};

const Button: React.FC<IProps> = ({ label, disabled, onClick, linkEnter, linkPath }) => {
  
  const dispatch = useDispatch();

    function deleteUser(event: React.MouseEvent<HTMLButtonElement>) {
        dispatch({ type: DELETE_DATA });
    };
  
  return (
    <div>
      {linkEnter ? <button className={styles.button}>
        <Link className={styles.link} to={linkPath}>
          {label}
        </Link>
      </button> : <button
        className={styles.button}
        disabled={disabled}
        onClick={onClick || deleteUser}
      >{label}</button>}
    </div>
  );
};

export default Button;