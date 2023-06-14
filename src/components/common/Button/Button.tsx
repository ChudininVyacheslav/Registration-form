import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

interface IProps {
  btnType: string;
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  linkEnter?: Boolean;
  linkPath?: string | any;
};

const Button: React.FC<IProps> = ({ btnType, label, disabled, onClick, linkEnter, linkPath }) => {

  switch (btnType) {
    case 'link':
      return (
        <div>
          {linkEnter ? <button className={styles.button}>
            <Link className={styles.link} to={linkPath}>
              {label}
            </Link>
          </button> : <button
            className={styles.button}
            disabled={disabled}
            onClick={onClick}
          >{label}</button>}
        </div>
      )
      default:
        return (
          <div>
            <button
              className={styles.button}
              disabled={disabled}
              onClick={onClick}
            >{label}</button>
          </div>
        )
  };
};

export default Button;