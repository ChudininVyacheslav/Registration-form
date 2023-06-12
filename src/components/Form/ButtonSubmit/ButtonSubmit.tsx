import React from 'react';
import styles from './ButtonSubmit.module.scss';

interface IProps {
    disabled: boolean;
    onClick: () => void;
};

const ButtonSubmit: React.FC<IProps> = ({ disabled, onClick }) => {
    return (
        <div>
            <button
                className={styles.button}
                disabled={disabled}
                onClick={onClick}
                type='submit'>
                Зарегистрироваться
            </button>
        </div>
    );
};

export default ButtonSubmit;