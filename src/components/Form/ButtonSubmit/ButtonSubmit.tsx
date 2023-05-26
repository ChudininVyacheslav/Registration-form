import React from 'react';
import styles from './ButtonSubmit.module.scss';
import { IProps } from './interfaces';

const ButtonSubmit: React.FC<IProps> = ({ disabled }) => {
    return (
        <button
            className={styles.button}
            disabled={disabled}
            type='submit'>
            Зарегистрироваться
        </button>
    );
};

export default ButtonSubmit;